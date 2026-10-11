# Monetización de Nexus Seguros — investigación y plan de implementación

> **Fecha:** 2026-07-23 · **Estado:** referencia aprobada para implementación futura — no hay
> código implementado. Este documento es autosuficiente: contiene toda la investigación, las
> decisiones (ADRs) y el plan de implementación por fases con criterios de aceptación.
> Toda afirmación está marcada [VERIFICADO: fuente] o [SUPUESTO]. Los precios de terceros
> fueron consultados en la web el 2026-07-23 (bibliografía al final, §9) — **revalidar tarifas
> y disponibilidad antes de contratar si pasaron >3 meses**.

**Índice:** §1 ADRs · §2 hallazgos del código · §3 pasarelas y fiscal · §4 benchmark ·
§5 planes y márgenes · §6 arquitectura · §7 plan de implementación · §8 riesgos y preguntas ·
§9 bibliografía.

---

## 1. Resumen ejecutivo y decisiones (formato ADR)

### ADR-1 — Pasarela de pagos: Wompi (plan A), con puerto propio anti lock-in

- **Contexto.** Empresa colombiana constituida; clientes = agencias de seguros colombianas;
  precio fijado en USD pero cobrado en COP a TRM (decisión del negocio). Stripe no soporta
  Colombia [VERIFICADO: stripe.com/global]; Stripe Atlas (LLC Delaware) cuesta $500 + ~$700–1.600/año,
  cobra ~5,4 % a tarjetas colombianas, no da PSE y crea exposición fiscal (PES, IVA digital,
  facturación DIAN duplicada) — descartado. Los MoR (Polar, Paddle, …) no ofrecen PSE ni COP y
  solo Paddle/FastSpring remiten IVA colombiano; Polar no lo remite [VERIFICADO: polar.apidocumentation.com/tax].
  **PSE no permite cobro recurrente en ninguna pasarela**: la recurrencia real en Colombia es
  tokenización (tarjeta, y en Wompi también Nequi/Daviplata/cuenta Bancolombia).
- **Opciones.** Wompi · Mercado Pago · ePayco · PayU · dLocal · Bold · MoR (Paddle/Polar) · Treli sobre Wompi.
- **Decisión.** **Wompi** (agregador, 2,65 % + $700 COP + IVA ≈ **5,2 % efectivo** en un cobro de
  40.000 COP; depósito t+1; webhooks firmados SHA-256 con 3 reintentos/24 h). El comercio dispara
  cada cobro por API → la indexación a TRM es trivial (cron calcula `asientos × precio_USD × TRM`).
  El motor de suscripciones (estado, dunning, entitlements) vive en **nuestro Convex**, detrás de un
  puerto `PaymentProvider` (tokenizar / cobrar / conciliar webhook); Wompi es un adaptador.
- **Plan B.** Mercado Pago (suscripciones gestionadas con card-updater; monto actualizable vía
  `PUT /preapproval` para la TRM) si no queremos operar dunning. **Internacional futuro:** Polar
  (metered IA nativo, acepta sellers colombianos) restringido a clientes fuera de Colombia, o
  Paddle si el MoR debe cubrir también compradores colombianos (remite IVA 19 % B2C).
- **Consecuencias.** Construimos dunning y ledger propios (≈ el 30 % del esfuerzo del MVP);
  dependemos de infraestructura Bancolombia (caídas oct-2025 y feb-2026 documentadas); el alta
  exige cuenta Bancolombia/Nequi para el desembolso (verificar con nuestra cuenta empresarial).
  Cambiar de pasarela después = escribir otro adaptador + re-tokenizar medios de pago; el billing
  no se toca. Vigilar **Bre-B débitos recurrentes** (habilitados 2026-07-22) como futura vía sin tarjeta.

### ADR-2 — A quién se factura: a la compañía; el precio es por asiento

- **Contexto.** El tenant es `companies` (`convex/schema.ts:123-155`); membresía N:N (`members`);
  el owner (`companies.userId`) concentra la jerarquía [VERIFICADO: Fase 0]. Las agencias son
  equipos pequeños (1–10 personas); el valor crece con las personas que usan pólizas/tareas.
- **Decisión.** Suscripción **por compañía**, precio **por asiento activo** (miembro no expulsado).
  El owner (o admin con permiso nuevo `billing_manage`) gestiona el plan. Las cuotas de IA y
  storage son **agrupadas por compañía** (pool = asientos × cuota unitaria) — evita micro-gestión
  por usuario y refleja que el costo variable es del tenant.
- **Consecuencias.** Un usuario puede estar en una compañía Free y otra de pago sin conflicto
  (el entitlement es de la compañía, no del usuario). Hay que definir el prorrateo al añadir/quitar
  asientos a mitad de ciclo (§5.6).

### ADR-3 — Unidad de límite de IA: la "extracción" exitosa, no tokens ni créditos

- **Contexto.** Único consumo de IA: extracción de documentos (6 actions → embudo único
  `generateExtraction()`, `convex/lib/aiShared.ts:585-696`). 1 acción de usuario = 1–3 llamadas a
  Gemini (reintentos internos). Costo real: ~$0.005–0.006 camino feliz, ~$0.017 peor caso
  [VERIFICADO: precios Gemini 2.5 Flash $0.30/M in, $2.50/M out, ai.google.dev 2026-07-23;
  tokens estimados — SUPUESTO hasta instrumentar `usage`].
- **Opciones.** Tokens (precisos, ilegibles) · créditos abstractos (flexibles, requieren tabla de
  equivalencias) · **extracciones** (legibles, alineadas con valor).
- **Decisión.** **1 extracción = 1 acción de IA con `outcome: ok`** (≥1 campo devuelto), sin
  importar reintentos internos ni cuántos archivos (máx. 3) incluyó. Extracciones fallidas o
  vacías **no descuentan** (patrón MRU de Clerk: nuestros errores caen de nuestro lado).
  Número de planeación de costo: **$0.01 USD/extracción** (colchón sobre el promedio).
- **Consecuencias.** Si mañana se añaden features de IA heterogéneas (chat, resúmenes), se migra
  a créditos con tabla pública de equivalencias; la tabla `usageEvents` (§6) ya lo soporta
  (campo `units`). La deprecación de Gemini 2.5 Flash (2026-10-16) obliga a re-medir el costo
  con el modelo sucesor antes del lanzamiento.

### ADR-4 — Política de desbordamiento: cap por defecto, recarga opt-in, degradación quirúrgica

- **Decisión.** Al 50/80/100 % de la cuota: aviso in-app (y email al admin al 80/100 %).
  Al 100 %: se bloquea **solo** la extracción IA (todo lo demás sigue); el admin puede comprar
  **paquetes de recarga** prepagados (opt-in explícito, nunca cargo automático). Storage excedido:
  se bloquean subidas nuevas, **jamás se borra ni se impide leer/exportar**. Garantía publicada:
  *"nunca borramos un dato escrito con éxito"* (copiada de Convex — oro en el sector seguros).
- **Anti-patrón evitado.** Overage automático por defecto (caso Cursor jun-2025, facturas
  sorpresa de Vercel) y degradar a un modelo peor (nuestro benchmark 14/14 vs 2/14 muestra que
  la calidad de extracción es binaria; si hay que degradar, se degrada latencia, no modelo).

### ADR-5 — Precios: Free / Pro $6 / Agencia $12 por asiento/mes (anual = $5/$10)

- **Contexto.** Hipótesis inicial 5–10 USD. La aritmética (§5.2) muestra que son sostenibles
  **solo con cuota de IA**; sin cuota, un power user (rate limit actual permite 40 extr./h) puede
  costar >$10/mes él solo. El mensual necesita colchón para la comisión de pasarela (~5,2 %) +
  IVA/impuestos + soporte.
- **Decisión.** Mensual **$6 / $12** por asiento; anual **$60 / $120** (≈ 2 meses gratis → el
  equivalente mensual queda exactamente en la hipótesis: $5/$10). Precio único en USD, cobrado
  en COP a TRM del día de facturación (cláusula art. 874 C.Co). Sin PPP: el precio ya está
  posicionado para Colombia; añadir PPP con un solo mercado es complejidad sin beneficio (§5.8).

---

## 2. Hallazgos de la Fase 0 (el proyecto, verificado en código)

| Área | Hallazgo | Referencia |
|---|---|---|
| Stack | Next.js 16.2.10 + Convex; deploy conjunto en Vercel | `package.json:8`, `vercel.json:2` |
| Tenant | `companies`; owner = `companies.userId`; miembros N:N; máx. 2 compañías propias (hardcode) | `convex/schema.ts:123-172`, `convex/companies.ts:175-178` |
| Permisos | 49 granulares + jerarquía owner/admin; **no existe `billing_*`** | `convex/lib/permissions.ts:10-89` |
| IA | 6 actions → embudo único `generateExtraction()` → `generateObject` (Gemini 2.5 Flash; fallbacks 3.1-flash-lite / 2.0-flash); sin streaming, sin RAG | `convex/lib/aiShared.ts:585-696`, `convex/ai.ts:23-33` |
| Telemetría IA | Solo JSON a logs; **descarta `usage` (tokens)**; tabla `aiInteractions` deprecada | `convex/lib/aiShared.ts:546-549,628` |
| Rate limit | `aiExtraction`: 40/h burst 8 por usuario (componente rate-limiter) | `convex/lib/rateLimits.ts:16` |
| Storage | Convex file storage. Solo `taskAttachments` tiene `fileSize` + índice `companyId`; archivos EAV de plantillas **sin tamaño denormalizado** | `convex/schema.ts:844-856`, `convex/lib/templateValidators.ts:273-316` |
| Contadores | Patrón O(1) ya establecido (`policyCounters`, `quoteCounters`) — reutilizable para uso | `convex/schema.ts:359-365,597-608` |
| Billing hoy | Nada. Landing con plan "Agencia $149.000 COP/mes" decorativo | `packages/landing/components/pricing.tsx:10-51` |
| Webhooks | No hay `app/api/*`; el host natural es `convex/http.ts` (ya sirve auth) | `convex/http.ts:6` |

**Costos unitarios (2026-07-23):** extracción típica ≈ $0.005–0.017 USD (planeación: $0.01);
storage Convex $0.03/GB-mes overage (plan Pro $25/dev/mes con 100 GB incluidos) — el storage es
palanca de valor percibido, no de costo. ⚠️ Gemini 2.5 Flash se depreca el 2026-10-16.

---

## 3. Comparativa de pasarelas y recomendación

### 3.1 Locales (costo efectivo sobre 40.000 COP ≈ 10 USD, IVA de la comisión incluido)

| | Recurrencia real | Quién programa | Costo efectivo | Depósito | Veredicto |
|---|---|---|---|---|---|
| **Wompi** | Tokens tarjeta/Nequi/Daviplata/cta. Bancolombia | **Nosotros** (cron) | **~5,2 %** | t+1 | **Plan A** |
| Mercado Pago | Preapproval gestionado + card updater | MP | ~6,3 % (5,7 % a 14 d) | 0–14 d | Plan B local |
| ePayco | Planes nativos o token+cargo | ePayco o nosotros | ~6,2 % | 24–72 h | Alternativa |
| PayU | Solo tokenización (recurrente **descontinuado**) | Nosotros | ~4,8 % | 3 d háb. | Solo por precio |
| dLocal | Tokens + Nequi enrollment; FX nativo | Nosotros | ~4,7 % [no verif. 2026] | contrato | Overkill |
| Bold | **No tiene** (roadmap) | — | ~6,2 % | t+1 | Descartada |

Opcional: **Treli** sobre Wompi ($329.000 COP/mes + 1 %) da suscripciones + dunning + factura
Siigo/Alegra + cobro "en USD a TRM" llave en mano — se justifica solo si no queremos construir
el motor (desde ~100 suscripciones el fijo se diluye).

#### 3.1.1 Detalle operativo de los finalistas

**Wompi (plan A).** Flujo técnico: tokenizar (`POST /v1/tokens/cards` o `/tokens/nequi` con
llave pública) → crear fuente de pago (`POST /v1/payment_sources` con token + acceptance
tokens) → cobrar cuando queramos (`POST /v1/transactions`, "sin presencia ni intervención del
cliente"; COF con parámetro `recurrent`). Wompi **no programa cobros**: nosotros disparamos
cada uno (por eso la TRM es trivial). Webhooks: `transaction.updated` con checksum SHA-256 en
header `X-Event-Checksum`; **3 reintentos en 24 h (30 min, 3 h, 24 h)** — de ahí el cron de
reconciliación (§6.2). Tarifas plan Avanzado (agregador): **2,65 % + $700 COP + IVA, única para
todos los medios** (tarjetas, PSE, Nequi, Botón Bancolombia, QR); depósito t+1 hábil. Alta:
RUT + Cámara de Comercio + cédula del representante; **el desembolso va a cuenta Bancolombia
(ahorros/corriente) o Nequi** — verificar nuestra cuenta antes del alta. Sin SDK TS oficial;
API REST simple (fetch desde una action de Convex). Plan Gateway (>2.000 tx/mes): tarifas
negociadas con Bancolombia — renegociar al crecer.

**Mercado Pago (plan B local).** Producto Suscripciones (`preapproval`): MP programa y ejecuta
los cobros, con **reintentos automáticos y card updater** (actualiza tarjetas vencidas con las
franquicias — reduce churn involuntario). Para la TRM: `PUT /preapproval/{id}` permite
actualizar `auto_recurring.transaction_amount` cada mes. Limitación: el pagador usa tarjeta o
saldo MP (sin PSE en suscripciones) y puede requerir cuenta MP (fricción B2B). Tarifas CO:
3,29 % + $800 + IVA al instante (2,79 % a 14 días). SDK Node/TS oficial, webhooks `x-signature`.

**Treli (opcional, capa de billing colombiana).** Suscripciones sobre Wompi/PayU/ePayco:
planes, dunning con reintentos + WhatsApp, portal de cliente, **integración contable
Siigo/Alegra (factura DIAN automática)** y cobros "presentados en USD y convertidos a COP con
TRM del día" sobre Wompi. Starter $329.000 COP/mes + 1 % por cobro (tope $2.000/cobro), cuota
consumible contra comisiones. Decisión: no usarlo en el MVP (construimos el motor, es nuestro
core de entitlements de todos modos), reevaluar si el dunning propio se vuelve carga operativa.

**Descartes con causa:** Bold no tiene recurrencia (en roadmap, confirmado en sus docs de
developers). PayU descontinuó oficialmente su producto de pagos recurrentes (queda solo
tokenización; docs marcadas deprecated). dLocal es enterprise/overkill para tickets de 40.000
COP (pricing negociado; dLocal Go sin tarifas 2026 verificables). ePayco funciona (planes
nativos o token+cargo) pero con tarifa mayor que Wompi, docs desiguales y T&C que permiten
bloquear retiros ante >3 disputas.

**Dato de futuro:** el 2026-07-22 Bre-B (pagos inmediatos del BanRep) habilitó **débitos
recurrentes sin tarjeta** (DRUO fue la primera fintech; tope 1.000 UVB ≈ $12,1 M COP). Cuando
las pasarelas lo expongan, será la mejor vía de recurrencia sin tarjeta en Colombia — encaja
como método adicional detrás del puerto `PaymentProvider` (F4).

### 3.2 MoR (para expansión internacional; fee efectivo sobre $10 con tarjeta colombiana)

| | Seller CO | Efectivo | Metered IA | Remite IVA CO | Riesgo |
|---|---|---|---|---|---|
| Polar | Sí | ~12,5–13,5 % | **Nativo** | **No** (solo US/EU/UK) | Joven (2022) |
| Paddle | Sí | ~11–13 % | No nativo | **Sí** (19 % B2C) | Multa FTC 2025 → KYC duro |
| FastSpring | Probable | ~10–12 % | No | **Sí** (NIT 901448273-6) | DX anticuada |
| Lemon Squeezy | Sí | ~13 % | Nativo | No verif. | **Fin de ciclo** (→ Stripe Managed Payments, sin Colombia) |
| Creem | Con restricciones | ~9–10 % | Anunciado | No verif. | 2024, €1.8M — prematuro |
| Gumroad | Aparentemente no | >21 % | No | No verif. | Descartado |

### 3.3 Fiscal (resumen; NO es asesoría — validar con contador)

- IVA 19 % por defecto; **posible exclusión art. 476-21 ET** (cloud computing, 5 características
  NIST + autodiagnóstico; Conceptos DIAN 017056/2017, 1444/2017, Oficio 190/2024, Concepto
  13328/2025). Somos proveedor directo → posición defendible, decisión de riesgo con contador.
- **Una factura electrónica DIAN por cada cobro mensual** (tracto sucesivo). Automatizar por API:
  Alegra (~$18–180k COP/mes), Siigo o Factus (API-first).
- RST vs ordinario: depende del grupo CIIU (1,6–4,5 % vs 5,9–14,5 % sobre brutos) — decisiva.
- Retenciones: tarjetas → retiene el emisor 1,5 % (decreto de eliminación desde mar-2026 por
  confirmar); base mínima 4 UVT (~$209.500) deja la mayoría de nuestras facturas sin retención.
- Precio en USD liquidado en COP a TRM: legal entre residentes (art. 874 C.Co).
- Las **12 preguntas exactas para el contador** están en §8.3.

---

## 4. Benchmark de referentes

Estudiados 10 modelos (fuentes en §9). Por empresa, lo que importa para nuestro diseño:

- **Anthropic (Claude).** Free $0 · Pro $17 anual/$20 · Max $100/$200 (multiplicadores "5x/20x",
  nunca "ilimitado"). Cuota en dos ventanas (sesión 5 h + semanal, esta última añadida ago-2025
  contra el uso 24/7 y la reventa de cuentas). Al agotar: bloqueo transparente con reset visible,
  y desde fin de 2025 **usage credits opt-in** a tarifas API con tope configurable. Barras de
  consumo siempre visibles. Anti-abuso: verificación telefónica + prepago-como-KYC en API.
  Downgrade: conserva historial/proyectos; pierde capacidad.
- **OpenAI (ChatGPT).** Escalera $0 → Go $8 → Plus $20 → Pro $100/$200; anuncios en el free
  desde feb-2026. Mecanismo distintivo: **degradación silenciosa a modelo mini** (la conversación
  sigue). Anti-lección clave: **Pro $200 "unlimited" perdió dinero** (Altman, ene-2025) —
  selección adversa con costo marginal alto. Downgrade: custom GPTs quedan en modo lectura
  ("rehén suave").
- **Convex.** Híbrido $25/dev + 8 recursos medidos por equipo; Starter pay-as-you-go (jun-2025).
  Spend limits con umbral soft (email) y hard (deshabilita). Garantía copiable: *"nunca
  borraremos un registro escrito con éxito"* — datos sagrados, la disponibilidad es la palanca.
- **Vercel.** Pro $20/usuario con $20 de crédito + ~30 métricas on-demand. Bill shock documentado
  ($23k por DDoS) → hoy presupuesto default $200 y avisos 50/75/100 % + webhook. Lección: overage
  sin techo por defecto destruye confianza; documentar la latencia del enforcement asíncrono.
- **Supabase.** Pro $25/org con **Spend Cap ON por defecto**. Free: aviso al 80 % → gracia única →
  restricción quirúrgica por servicio (DB → solo lectura; storage → uploads bloqueados). Su
  mayor controversia fue el borrado tras pausas — hoy: 90 días de ventana con descarga de backup.
- **Clerk.** Unidad **MRU** (feb-2026): un usuario cuenta solo si vuelve ≥24 h tras registrarse —
  bots y signups fantasma valen $0. **La definición de la unidad es el filtro anti-abuso.** Free
  50k MRU; gracia de 1 mes al exceder (jamás bloquear logins). El revenue real vive en features
  del comprador (SSO $75/conexión, organizaciones).
- **Sentry.** Volumen por tipo de evento + PAYG con techo fijado por el cliente. **Spike
  protection**: umbral dinámico por proyecto/hora — un deploy roto no quema la cuota del mes ni
  genera factura. No monetizan el error del cliente (sacrifican ingreso por confianza).
- **Cursor.** El caso de estudio de QUÉ NO HACER (jun-2025): cambió unidad de cobro y el
  significado de "unlimited" a la vez, efectivo de inmediato, con on-demand activo por defecto →
  facturas sorpresa, éxodo, disculpa del CEO y reembolsos. La corrección (ago-sept 2025): aviso
  con semanas, efectivo en la siguiente renovación, grandfathering, aritmética de ejemplo.
  (Lovable: créditos con goteo diario 5/día sin rollover; v0: migró a dólares-de-cómputo.)
- **Linear.** Asiento puro. Free con **usuarios ilimitados** pero 250 issues activas (generoso en
  personas, estricto en acumulación). Política publicada: *"Nothing will be deleted"*. Gatea por
  comprador (SSO, Insights, audit), nunca por usuario diario.
- **Notion.** Free ilimitado individual; ~1.000 bloques con 2+ miembros (trial disfrazado) con
  gracia de 3 días y contador acumulativo (borrar no libera — anti-exploit). La IA pasó de
  add-on $8-10 a incluida solo en Business ($20): presentado como *más valor arriba*, no *menos
  rendimiento abajo* — por eso no ardió como Cursor.

**Los 8 patrones adoptados** (ya integrados en §5–6): (1) doble eje asiento+medición de IA;
(2) unidad = resultado exitoso, no intento (MRU de Clerk); (3) free = producto completo con
cantidad corta; (4) degradación quirúrgica por servicio, datos jamás rehenes (garantía Convex);
(5) cap por defecto, recarga opt-in (Supabase Spend Cap; usage credits de Claude);
(6) avisos 50/80/100 % a quien paga, con barra siempre visible (Claude, no ChatGPT);
(7) anti-abuso estructural (límites por compañía, contadores no reseteables creando cuentas);
(8) gatear por comprador — roles, auditoría, export — no por usuario diario (Linear).

**Los 4 errores evitados:** (1) "ilimitado" con costo marginal real (Pro $200 de OpenAI perdió
dinero); (2) cambios de pricing estilo Cursor jun-2025 (inmediatos, ambiguos, overage por
defecto) — regla: siguiente renovación + grandfathering + aritmética de ejemplo; (3) degradar
calidad del modelo para ahorrar (nuestra calidad es binaria: 14/14 vs 2/14); (4) borrado
silencioso de datos (controversia Supabase) — política de retención publicada, 90 días de
ventana de exportación.

---

## 5. Modelo de planes

### 5.1 Estructura

| | **Gratis** | **Pro** — $6 asiento/mes ($60/año) | **Agencia** — $12 asiento/mes ($120/año) |
|---|---|---|---|
| Asientos | Hasta **3** | Ilimitados (pagan) | Ilimitados (pagan) |
| Extracciones IA/mes (pool por compañía) | **15** | **50 × asiento** | **150 × asiento** |
| Storage por compañía | 1 GB | 10 GB + 2 GB × asiento | 50 GB + 5 GB × asiento |
| Roles personalizados | 0 (solo admin/member) | 10 | 25 |
| Logs de auditoría | 30 días | 6 meses | Completo + export |
| Dashboard financiero + export | — | ✓ | ✓ |
| Import/export Excel | Import ✓ / Export — | ✓ | ✓ |
| Compañías propias/usuario | 2 (status quo) | 2 | 5 |
| Recarga IA (paquetes) | — | ✓ | ✓ |
| Soporte | Comunidad | Email | Prioritario |

Notas de diseño: el Free conserva **todas** las features core (extracción con confianza por
campo incluida — es el "wow" vendedor); lo que separa planes es cantidad + features del
comprador (roles, auditoría, financiero). Los umbrales hardcodeados actuales
(`maxCompanies = 2`, `MAX_ROLES_PER_COMPANY = 25`) pasan a ser entitlements por plan.

### 5.2 Aritmética de márgenes (por asiento Pro, $6/mes)

Costos variables [números de §2]:

| Escenario | Extracciones/mes | Costo IA | Pasarela (5,2 %) | Infra [SUPUESTO ~$0.15] | COGS | Margen |
|---|---|---|---|---|---|---|
| Ligero | 10 | $0.10 | $0.31 | $0.15 | $0.56 | **91 %** |
| Medio | 30 | $0.30 | $0.31 | $0.15 | $0.76 | **87 %** |
| Tope de cuota | 50 | $0.50 | $0.31 | $0.15 | $0.96 | **84 %** |
| Peor caso (3 reintentos siempre) | 50 × $0.017 | $0.85 | $0.31 | $0.15 | $1.31 | **78 %** |

- **Punto de pérdida sin cuota:** ~$5.50 de IA ≈ 550 extracciones/mes por asiento. El rate limit
  actual (40/h) lo permitiría en ~14 horas de uso → **la cuota no es opcional**.
- Agencia $12 con 150/asiento: tope de cuota = $1.50 IA → margen ~82 %. Sano.
- Free: máx. 15 × $0.017 = $0.26/compañía/mes — costo de adquisición aceptable.
- Storage: 100 % de la cuota Agencia (50 GB) cuesta $1.50/mes — cubierto por un solo asiento.
- Sensibilidad: si el sucesor de Gemini 2.5 Flash duplica el costo/extracción, el margen del
  tope de cuota Pro baja de 84 % → 76 % — sigue sano. **Los precios 5–10 (anual) son sostenibles.**
- Paquete de recarga propuesto: **100 extracciones por $3** (~3× costo peor caso; expiran a 90
  días; prepago, jamás automático).

### 5.3 Desbordamiento (política exacta)

- 50 % → indicador visual. 80 % → aviso in-app + email al owner/admins. 100 % → email + se
  bloquea **solo** `*_useAI` (extract actions devuelven `PLAN_AI_QUOTA_EXCEEDED`); CTA: recarga
  o upgrade. Storage 100 % → se bloquean subidas nuevas (`PLAN_STORAGE_QUOTA_EXCEEDED`); leer,
  editar y **exportar siempre funciona**.
- Ráfaga: el rate limit existente (40/h por usuario) se mantiene como protección de picos
  (patrón spike-protection de Sentry: el error de un cliente no debe quemar su mes).

### 5.4 Ciclo y políticas

- **Reset:** por ciclo de facturación (aniversario de la suscripción), no calendario. Sin
  rollover (los no usados no se acumulan; las recargas sí persisten 90 días).
- **Trial:** 14 días de Agencia al crear compañía, sin tarjeta. Al expirar → Free (nada se borra).
- **Anual:** 2 meses gratis (≈17 %), pago único por adelantado.
- **Cupones:** códigos propios (% o meses gratis) aplicados en nuestro ledger, no en la pasarela.
- **Downgrade con datos por encima del límite:** modo **solo-creación-bloqueada** (todo legible,
  editable lo existente, exportable); 90 días de ventana para reducir/exportar antes de que el
  bloqueo de subidas sea permanente. **Nunca borrado.** Asientos sobrantes al bajar a Free (>3):
  los miembros quedan en solo lectura hasta que el admin elija los 3 activos.
- **Impago:** ver dunning en §6.6.

### 5.5 Prevención de abuso del free

Ya existente: OTP de email en registro, rate limit 40/h, máx. 2 compañías propias. Nuevo:
(a) la cuota IA es **por compañía** y además el pool free computa por **usuario creador**
(crear compañías nuevas no resetea al abusador); (b) tarjeta obligatoria para cualquier recarga
(prepago-como-KYC, patrón API de Anthropic/OpenAI); (c) límite de tamaño de PDF ya existente
(8/15 MB); (d) si aparece abuso real, goteo diario (p. ej. máx. 5 extracciones free/día) antes
que verificación telefónica (fricción cara en B2B).

### 5.6 Prorrateo de asientos

Asiento añadido a mitad de ciclo: se cobra prorrateado en el siguiente cobro (días restantes /
días del ciclo) — un cargo, no dos. Asiento eliminado: crédito prorrateado al siguiente ciclo.
La cuota IA del pool se ajusta inmediatamente en ambos casos.

### 5.7 Downgrade/upgrade

Upgrade: inmediato, cargo prorrateado de la diferencia. Downgrade: efectivo al final del ciclo
pagado (sin reembolso, patrón estándar). Cambio mensual↔anual: al final del ciclo.

### 5.8 PPP (paridad de poder adquisitivo)

**No por ahora.** El precio ya está fijado para el mercado colombiano (un `Pro` de $6 ≈ 24.000
COP/asiento es <¼ del ancla original de la landing). PPP tiene sentido cuando hay un precio
global alto y mercados secundarios; aquí sería complejidad y riesgo de arbitraje sin upside.
Reevaluar si se abre venta internacional vía Polar/Paddle (allí sí: precio US ≥ $15/asiento).

### 5.9 Tabla para la landing

La tabla §5.1 reducida a 6 filas (asientos, extracciones IA, storage, roles+auditoría, soporte,
precio), con el anual como precio destacado ("$5/usuario/mes facturado anualmente") y la
garantía de datos como cierre. Reemplaza el pricing decorativo actual
(`packages/landing/components/pricing.tsx`) — coherente con [[landing-coherencia]]: honestidad,
solo prometer lo implementado.

---

## 6. Arquitectura técnica (sin código; adaptada al stack real)

### 6.1 Modelo de datos (tablas Convex nuevas)

- **`subscriptions`** — 1 por compañía: `companyId` (único), `planKey` (`"free" | "pro" | "agency"`),
  `status` (`trialing | active | past_due | suspended | canceled`), `billingCycle` (`monthly | annual`),
  `currentPeriodStart/End`, `seatsBilled`, `priceUsdPerSeat`, `trmSnapshot`, `graceUntil?`,
  `canceledAt?`. Índices: `companyId`, `status_periodEnd` (para el cron de cobro).
- **`paymentMethods`** — `companyId`, `provider` (`"wompi"`), `providerSourceId` (payment source),
  `kind` (`card | nequi | bancolombia`), `brand/last4`, `status`. Índice `companyId`.
- **`charges`** — intento de cobro: `companyId`, `subscriptionId`, `amountCop`, `amountUsd`, `trm`,
  `concept` (`subscription | seat_proration | topup`), `providerTxId?`, `status`
  (`pending | approved | declined | error`), `attempt`, `dianInvoiceRef?`. Índices `companyId`,
  `providerTxId`, `status`.
- **`webhookEvents`** — idempotencia: `provider`, `eventId/txId`, `checksumOk`, `payloadHash`,
  `processedAt`. Índice único lógico por `provider_eventId` (consultar antes de procesar).
- **`usageEvents`** — crudo, 1 por extracción: `companyId`, `userId`, `domain`, `mode`, `outcome`,
  `units` (1), `model`, `attempts`, `inputTokens/outputTokens` (¡capturar `usage` que hoy se
  descarta!), `estCostUsd`, `periodKey` (`"2026-07"` del ciclo). Índice `companyId_periodKey`.
- **`usageCounters`** — agregado O(1) (patrón `quoteCounters`): `companyId`, `periodKey`,
  `aiUsed`, `aiQuota`, `aiTopupRemaining`, `storageBytesUsed`. Índice `companyId_periodKey`.
- **`fileAssets`** — denormalización de storage: `companyId`, `storageId`, `bytes`, `kind`
  (`taskAttachment | templateFile | logo | avatar`), `refTable/refId`. Índices `companyId`,
  `storageId`. Backfill por migración (EAV `clientFieldValues`/`policyFieldValues` → resolver
  `_storage` una vez); a futuro, toda subida escribe aquí.
- **`aiTopups`** — recargas: `companyId`, `units`, `remaining`, `purchasedAt`, `expiresAt`, `chargeId`.

**Planes = configuración en código** (`convex/lib/planCatalog.ts` como const tipado: precios,
cuotas por asiento, features), versionada en git — nunca en el panel de la pasarela (Wompi ni
siquiera tiene concepto de plan; refuerza ADR-1). `entitlements(companyId)` = query interna que
combina `subscriptions` + `planCatalog` y es **la única autoridad**.

### 6.2 Fuente de verdad y reconciliación

Convex es fuente de verdad de: plan, estado, cuotas, uso, asientos. Wompi solo de: transacciones
y tokens. Reconciliación: cada `charge` guarda `providerTxId`; un cron diario consulta por API
las transacciones `pending` de >1 h (cinturón por si el webhook nunca llega — Wompi solo
reintenta 3 veces en 24 h).

### 6.3 Metering (ineludible por construcción)

Punto único: dentro de `generateExtraction()` / sus 6 actions llamadoras. Las actions no
escriben DB → el flujo es: **(1)** action llama `internal.billing.reserveAiUnit` (mutation:
lee `usageCounters` del período, si `aiUsed + reservas ≥ quota + topups` lanza
`PLAN_AI_QUOTA_EXCEEDED`; si no, incrementa `aiUsed` — la reserva); **(2)** corre la extracción;
**(3)** llama `internal.billing.settleAiUnit` (mutation: si `outcome ≠ ok`, decrementa la
reserva — no se cobra el fallo; registra `usageEvent` con tokens reales de `usage`).
La **condición de carrera** la resuelve la reserva previa + OCC serializable de Convex (dos
reservas concurrentes se serializan; la segunda ve el contador ya incrementado). No hay
streaming en el producto → no existe el problema de "cuota a mitad de stream"; el costo real
(tokens) se conoce al final y alimenta telemetría/márgenes, no el enforcement (la unidad es la
extracción, ADR-3). Storage: `fileAssets` se escribe en el mismo mutation que persiste el campo
file/image (ya server-side en `assertFileValuesWithinLimits` y `taskAttachments`), sumando a
`usageCounters.storageBytesUsed` — imposible de saltar porque la subida sin registro no queda
referenciada y el GC existente la limpia.

### 6.4 Enforcement

En la capa Convex (mutations/actions), jamás en el cliente (la app es client-first: el
frontend solo pinta estados). Códigos de error nuevos del sistema de 5 fases:
`PLAN_AI_QUOTA_EXCEEDED`, `PLAN_STORAGE_QUOTA_EXCEEDED`, `PLAN_SEAT_LIMIT_REACHED`,
`PLAN_FEATURE_NOT_INCLUDED`, `BILLING_PAYMENT_FAILED`, `BILLING_SUBSCRIPTION_SUSPENDED` (+UI).
Los checks de features (roles custom, export, logs) se añaden a los guards de permisos
existentes: permiso ∧ entitlement.

### 6.5 Webhooks (Wompi → `convex/http.ts`)

- Endpoint `POST /wompi/events` como `httpAction`. Verificar `X-Event-Checksum` (SHA-256 con el
  secreto de eventos) **antes** de tocar nada; rechazar sin filtrar detalles.
- Idempotencia: buscar `webhookEvents` por `provider_eventId`; si existe, 200 y salir. Procesar =
  transición de `charges.status` (máquina de estados: solo `pending → approved/declined`);
  eventos fuera de orden se ignoran por la máquina de estados, no por timestamps.
- Si nunca llega: cron de reconciliación (§6.2). Respuesta siempre 200 rápida; el trabajo pesado
  va a `ctx.scheduler`.

### 6.6 Ciclo de vida de la suscripción

- **Alta:** widget Wompi de tokenización (acceptance token + payment source) → primer cobro →
  `active`. **Cobro mensual:** cron diario (`convex/crons.ts`) busca `status_periodEnd` vencidos →
  action calcula `seats × priceUsd × TRM` (TRM de la API oficial de datos.gov.co, con caché y
  fallback al último valor) → cobra el token → webhook confirma → extiende período + dispara
  factura DIAN (§6.10).
- **Dunning:** reintentos a las 24 h, 72 h y día 5; emails en cada fallo (Resend, ya integrado).
  Día 7 sin pago → `past_due` (banner + solo el owner puede pagar); día 14 → `suspended`
  (compañía en solo lectura — patrón degradación, jamás borrado); día 45 → `canceled` (queda en
  Free con sus datos). Reactivación: pagar → `active` inmediato.
- **Cancelación voluntaria:** efectiva al fin del período pagado; sin reembolso; export siempre.

### 6.7 UI de facturación (`companies/[companyId]/billing`)

Visible con permisos nuevos `billing_view` / gestionable con `billing_manage` (49 → 51 permisos;
actualizar matriz, guard de compilación y `validate-*` correspondientes; owner/admin implícitos).
Contenido: plan actual y asientos · medidores IA/storage vs cuota con proyección de fin de ciclo ·
desglose de uso por miembro y por dominio (clients/policies/quotes) · historial de cobros con
estado y referencia de factura DIAN descargable · botones upgrade/downgrade/anual · método de
pago (re-tokenizar) · compra de recargas. Paquete nuevo `packages/billing/` siguiendo la
estructura canónica (`api.ts`, `components/`, `store/`, `lib/`).

### 6.8 Seguridad

Cliente nunca autoridad (todo en Convex); llaves privadas Wompi y secreto de eventos en env de
Convex (`npx convex env set`, jamás `NEXT_PUBLIC_*`); llave pública sí va al cliente (widget).
Manipular el frontend solo cambia píxeles: las actions re-validan entitlements. Montos siempre
calculados server-side (jamás aceptar `amount` del cliente). Auditoría: cambios de plan/método
de pago se registran en `logs` (tabla existente).

### 6.9 Observabilidad

Con `usageEvents` + `charges` se derivan: MRR/ARR, churn (voluntario vs involuntario), conversión
free→pago, costo IA por compañía (tokens reales × precio modelo), **compañías con margen
negativo** (alerta), tasa de fallo de cobros, edad de `past_due`. Emitir eventos JSON por
`lib/logging.ts` (sink Sentry/PostHog pendiente de credenciales, ya previsto) + un dashboard
interno simple sobre queries Convex.

### 6.10 Facturación DIAN

Cada cobro aprobado → factura electrónica vía API (Alegra o Factus; decidir con el contador
junto con IVA/RST, §8.3). El `charges.dianInvoiceRef` enlaza la factura. Mientras el volumen sea
bajo (<30 facturas/mes) puede ser manual — pero automatizar antes de 100 clientes.

### 6.11 Pruebas

Sandbox Wompi (llaves de prueba, montos mágicos de aprobación/rechazo); simulador de webhooks =
`curl` firmado contra el endpoint local (`npx convex dev`); seed de suscripciones en cada estado;
tests Vitest + convex-test para: reserva/settle de cuota (incluida concurrencia), máquina de
estados de charges, idempotencia de webhooks, prorrateo, dunning (relojes simulados); QA E2E con
el procedimiento MCP Playwright existente (`docs/qa/procedimientos/`) para el flujo de alta.

### 6.12 Migración de usuarios existentes

Al lanzar: toda compañía existente recibe **90 días de Agencia gratis** ("plan Fundadores",
grandfathering comunicado por email + banner in-app con la fecha exacta), luego elige plan; si
no elige → Free sin pérdida de datos (solo bloqueo de creación si excede límites). Cumple el
decálogo anti-Cursor: aviso largo, aritmética de ejemplo, nada retroactivo.

---

## 7. Plan de implementación por fases

> Esfuerzo relativo: S (<1 día) · M (1–3 días) · L (3–7 días). Riesgo: 🟢🟡🔴.
> Convenciones del repo que aplican a todo el trabajo: leer `docs/directives/` y
> `convex/_generated/ai/guidelines.md` antes de tocar Convex; errores nuevos siguen el sistema
> de 5 fases (`convex/errors/`); todo módulo nuevo respeta la estructura de `packages/*`
> (`api.ts` + `components/` + `store/` + `lib/`); validadores en `scripts/` deben seguir en
> verde (`bun run check` 18/18 + los nuevos).

### F0 — Instrumentación silenciosa (sin UI, sin cobros) — *prerequisito de todo*

| # | Tarea | Archivos objetivo | Dep. | Esf. | Riesgo |
|---|---|---|---|---|---|
| 0.1 | Capturar `usage` (tokens in/out) de `generateObject` — hoy se descarta — y añadirlo a la telemetría `ai_extraction` | `convex/lib/aiShared.ts` (destructurar `usage` en :628 y ampliar `ExtractionTelemetry`) | — | S | 🟢 |
| 0.2 | Tablas `usageEvents` + `usageCounters` (§6.1) + mutations internas `reserveAiUnit`/`settleAiUnit` en **modo solo-conteo** (nunca rechazan) llamadas desde las 6 actions de IA | `convex/schema.ts`, `convex/billing.ts` (nuevo), `convex/clientActions.ts`, `convex/policyActions.ts`, `convex/quoteActions.ts` | 0.1 | M | 🟡 concurrencia |
| 0.3 | Tabla `fileAssets` + escritura en cada punto de subida + migración backfill de EAV (widen→migrate→narrow, patrón `convex/migrations.ts`) | `convex/schema.ts`, `convex/taskAttachments.ts`, `convex/lib/templateValidators.ts`, `convex/migrations.ts` | — | L | 🟡 migración |
| 0.4 | Medir 2–4 semanas de uso real → validar $0.01/extracción y percentiles de consumo por compañía (¿50/asiento cubre el p90?) | consulta sobre `usageEvents` | 0.2 | S | 🟢 |
| 0.5 | Re-benchmark del sucesor de Gemini 2.5 Flash (deprecación 2026-10-16) con el harness de fixtures existente; actualizar `NEXUS_AI_*_MODEL` | `convex/ai.ts` (solo envs) | — | M | 🔴 calidad |

**Criterio de salida F0:** dashboard interno (aunque sea una query) muestra extracciones y bytes
por compañía/mes con tokens reales; números de §5.2 confirmados o corregidos.

### F1 — MVP "cobrar el primer peso"

| # | Tarea | Archivos objetivo | Dep. | Esf. | Riesgo |
|---|---|---|---|---|---|
| 1.1 | Alta comercial Wompi (RUT, Cámara, cuenta Bancolombia/Nequi para desembolso) + llaves sandbox/prod en env de Convex | `npx convex env set WOMPI_*` | — | S (calendario: días) | 🟡 externo |
| 1.2 | `planCatalog` (const tipado: precios, cuotas, features) + query interna `entitlements(companyId)`; reemplazar `maxCompanies=2` y `MAX_ROLES_PER_COMPANY=25` por entitlements | `convex/lib/planCatalog.ts` (nuevo), `convex/lib/entitlements.ts` (nuevo), `convex/companies.ts:175`, `convex/roles.ts:22` | — | M | 🟢 |
| 1.3 | Permisos `billing_view`/`billing_manage` (49→51): schema, defaults, grupos de UI, guard de compilación y validadores | `convex/lib/permissions.ts`, `packages/roles/lib/permission-groups.ts`, `scripts/validate-*` | — | M | 🟢 |
| 1.4 | Tablas `subscriptions/paymentMethods/charges/webhookEvents/aiTopups` + máquina de estados de `charges` (solo `pending→approved/declined`) | `convex/schema.ts`, `convex/billing.ts` | 1.2 | M | 🟢 |
| 1.5 | Puerto `PaymentProvider` + adaptador Wompi (tokenizar/cobrar/consultar) como action "use node" | `convex/lib/paymentProvider.ts` (nuevo), `convex/billingActions.ts` (nuevo) | 1.1, 1.4 | M | 🟡 |
| 1.6 | Webhook `POST /wompi/events` (verificar `X-Event-Checksum` antes de todo, idempotencia por `webhookEvents`, trabajo pesado a `ctx.scheduler`) + cron diario de reconciliación de `charges` pendientes >1 h | `convex/http.ts`, `convex/crons.ts`, `convex/billing.ts` | 1.5 | M | 🟡 |
| 1.7 | Cron de facturación: suscripciones con período vencido → TRM (API datos.gov.co con caché y fallback) → cobro `seats × priceUsd × TRM` → extender período; dunning 24 h/72 h/día 5 + emails Resend; `past_due` día 7, `suspended` día 14, `canceled` día 45 | `convex/crons.ts`, `convex/billingActions.ts`, `convex/resend.ts` | 1.6 | L | 🔴 dinero real |
| 1.8 | Enforcement: `reserveAiUnit` pasa a rechazar con `PLAN_AI_QUOTA_EXCEEDED`; cuota de storage en `assertFileValuesWithinLimits` y `taskAttachments`; 6 códigos de error nuevos (fases 1–5 completas: catálogo + UI) | `convex/billing.ts`, `convex/lib/templateValidators.ts`, `convex/taskAttachments.ts`, `convex/errors/billing.ts` (nuevo) | F0, 1.2 | M | 🟢 |
| 1.9 | Paquete `packages/billing/` + ruta `companies/[companyId]/billing`: plan y asientos, medidores IA/storage, historial de cobros, alta/cambio de método de pago (widget Wompi), upgrade/downgrade | `packages/billing/{api.ts,components/,store/,lib/}`, `app/(app)/companies/[companyId]/billing/page.tsx` | 1.4–1.8 | L | 🟢 |
| 1.10 | Trial 14 días de Agencia al crear compañía + migración "Fundadores" (90 días de Agencia a compañías existentes) + emails y banner de comunicación | `convex/companies.ts`, `convex/billing.ts`, `packages/billing/components/` | 1.9 | M | 🟢 |
| 1.11 | Tests Vitest + convex-test: reserva concurrente (dos extracciones simultáneas al borde de la cuota), idempotencia de webhook (mismo evento 2×), máquina de estados, dunning con relojes simulados; validador `scripts/validate-billing-module.ts`; QA E2E sandbox (procedimiento nuevo en `docs/qa/procedimientos/`) | `tests/`, `scripts/`, `docs/qa/` | todo | L | 🟡 |

**Criterio de salida F1 (MVP):** una compañía real se suscribe a Pro, se le cobra en COP el
equivalente de $6 × asientos a TRM del día, el webhook concilia el cobro, la cuota de IA
rechaza la extracción 51×asiento, el downgrade no destruye nada, y `bun run check` sigue en verde.

### F2 — Experiencia completa

Avisos 50/80/100 % (in-app + email al owner/admins) · recargas de IA ($3/100, prepago) · plan
anual con descuento · cupones propios · prorrateo de asientos (§5.6) · desglose de uso por
miembro y dominio · proyección de fin de ciclo · reemplazo del pricing de la landing
(`packages/landing/components/pricing.tsx`, tabla §5.9, coherente con la directiva de honestidad).

### F3 — Fiscal y operación

Factura electrónica DIAN automatizada por API (Alegra o Factus, según decisión del contador —
§8.3) enlazada en `charges.dianInvoiceRef` · conciliación de retenciones (certificados vs abonos
de pasarela) · dashboard interno MRR/churn/costo IA por compañía/margen negativo · alertas
(cobros fallidos, `past_due` envejecidos) vía sink de `lib/logging.ts` cuando haya credenciales.

### F4 — Expansión

Polar para clientes internacionales (checkout USD, metered nativo; solo fuera de Colombia — no
remite IVA CO) como segundo adaptador del puerto · Bre-B débitos recurrentes cuando las
pasarelas lo expongan · PPP solo si se abre mercado internacional con precio US más alto.

---

## 8. Riesgos, supuestos y preguntas abiertas

### 8.1 Riesgos

| Riesgo | Mitigación |
|---|---|
| Deprecación Gemini 2.5 Flash (2026-10-16) cambia costo/calidad | F0: re-benchmark antes de fijar cuotas definitivas |
| Dependencia infra Bancolombia (caídas 2025-2026) | Reintentos de cobro; plan B Mercado Pago tras el puerto |
| Wompi exige cuenta Bancolombia/Nequi para desembolso | Verificar en el alta; abrir cuenta si hace falta |
| Recalificación DIAN de la exclusión de IVA | Decisión con contador; precio soporta IVA 19 % si toca |
| Construimos dunning propio (bugs = dinero) | Máquina de estados testeada; reconciliación diaria; sandbox |
| Adopción de pago débil a $6 | El trial de Agencia + Fundadores mide willingness-to-pay antes de optimizar precio |

### 8.2 Supuestos marcados

[SUPUESTO] tokens por extracción (~10k in / 1k out) hasta que F0 capture `usage` real ·
[SUPUESTO] infra ~$0.15/asiento/mes · [SUPUESTO] TRM de planeación 4.000 · [SUPUESTO] tarifas
dLocal Go 2026 y detalles de conversión de ePayco/PayU (marcados "no verificado" en §9).

### 8.3 Preguntas que debe responder el usuario/negocio

**Para el contador (llevar esta lista tal cual a la reunión):**

1. Nuestro SaaS (multi-tenant, autoservicio, cobro por usuario/mes) — con el autodiagnóstico del
   Concepto DIAN 1444/2017 en mano, ¿recomienda facturar **excluido de IVA por el art. 476-21**
   o gravado al 19 %? ¿Qué probabilidad de recalificación como "licenciamiento" ve tras el
   Oficio 190/2024 y el Concepto 13328/2025, y qué soporte documental exige?
2. Si facturamos excluido, ¿cómo afecta el **IVA descontable** de nuestros costos (Vercel,
   Convex, herramientas)? ¿Nos conviene económicamente la exclusión o preferir gravado?
3. Para el RST: ¿nuestra actividad (CIIU de desarrollo/edición de software) clasifica en el
   **grupo 2 (1,6–4,5 %) o grupo 3 (5,9–14,5 %)** del art. 908 ET revivido por la C-540/2023?
   Correr la comparación RST vs ordinario con nuestras proyecciones.
4. ¿Todos los accionistas cumplen los requisitos del RST (personas naturales residentes) y hasta
   qué fecha podemos inscribirnos para el año gravable en curso?
5. ¿Confirmamos que cada cobro mensual exige **una factura electrónica individual por período**,
   y en qué momento se causa (mes anticipado vs vencido) para IVA y renta? ¿Resolución de
   numeración adecuada para alto volumen automatizado?
6. ¿Qué concepto de retefuente deben aplicarnos los clientes: **licenciamiento 3,5 %, servicios
   4 %/6 % u honorarios 11 %**? ¿Qué texto poner en la factura para inducir el concepto correcto
   y cuál es la base mínima aplicable?
7. ¿Ya está expedido y vigente el decreto que **elimina la retención del 1,5 % en pagos con
   tarjeta** (aplicación prevista 1-mar-2026)? ¿Cómo cambia la conciliación de pagos por Wompi?
8. ¿En qué municipio(s) declaramos **ICA** por ventas a clientes en todo el país, con qué tarifa
   por mil para nuestro CIIU, y cómo manejamos el reteICA de clientes de otros municipios?
9. Proceso operativo: ¿cómo recolectamos y cruzamos los **certificados de retención** (renta e
   ICA) de decenas de clientes pequeños contra los abonos netos de la pasarela?
10. Escenario MoR (Polar/Paddle) para clientes internacionales: ¿la venta al MoR califica como
    **exportación de servicios exenta (art. 481-c)** cumpliendo "utilización exclusiva en el
    exterior"? ¿Qué dejar en el contrato y qué pasa si un usuario final resulta colombiano?
11. Para esos ingresos del exterior: ¿basta la **canalización voluntaria (Formulario 5, numeral
    cambiario de servicios)** o recomienda cuenta de compensación? ¿Nos inscribimos en el RUT
    como exportadores de servicios ya?
12. ¿Valida la cláusula de "precio en USD liquidado en COP a TRM de la fecha de factura" frente
    al art. 874 C.Co y régimen cambiario, y cómo se maneja contablemente la **diferencia en
    cambio** entre factura y pago?

**Para el negocio:**

13. ¿La cuenta empresarial actual es Bancolombia (desembolso Wompi directo) o hay que abrir
    cuenta Bancolombia/Nequi antes del alta (tarea 1.1)?
14. ¿Quién opera soporte de facturación (reembolsos, disputas, cambios de método de pago) — y
    con qué SLA para el "soporte prioritario" del plan Agencia?
15. Validar con 3–5 agencias reales la disposición a pagar $6/asiento y si la cuota de 50
    extracciones/asiento cubre su volumen real de pólizas/mes (cruzar con los datos de F0.4)
    antes de fijar los números en piedra.

---

## 9. Bibliografía (todas las URLs accedidas el 2026-07-23)

**Costos unitarios:** ai.google.dev/gemini-api/docs/pricing · convex.dev/pricing.
**Stripe/Atlas:** stripe.com/global · stripe.com/atlas · docs.stripe.com/connect/cross-border-payouts ·
docs.stripe.com/changelog/dahlia/2026-03-25/cross-border-payouts-new-countries · irs.gov/instructions/i5472 ·
fincen.gov/boi · morganlewis.com (BOI, mar-2025) · statebusinesscompliance.com · shaycpa.com ·
checkoutpage.com/blog/stripe-international-fees · auxadi.es (PES, 2026-07-13) · hklaw.com (PES, ene-2026) ·
normograma.dian.gov.co (Oficio 9/2026) · support.mercury.com · ecommerceparadise.com (doola) · sparklaun.ch (Firstbase).
**MoR:** polar.sh/docs/merchant-of-record/supported-countries · polar.sh/resources/pricing ·
polar.apidocumentation.com (tax) · paddle.com/help (países soportados · payouts · "Colombia 19 % VAT B2C") ·
developer.paddle.com (monedas · COP changelog 2023) · ftc.gov (Paddle $5M, jun-2025) · phare.io (metered Paddle) ·
docs.lemonsqueezy.com (países · tax · usage) · lemonsqueezy.com/blog/2026-update · docs.creem.io · creem.io/pricing ·
vestbee.com (Creem €1.8M) · developer.fastspring.com (payouts · VAT Colombia NIT 901448273-6 · métodos) ·
fonoa.com (IVA digital CO) · dian.gov.co (prestadores del exterior).
**Pasarelas locales:** wompi.com/es/co/planes-tarifas · docs.wompi.co (fuentes-de-pago · eventos) ·
soporte.wompi.co (vinculación · cuenta bancaria) · wompi.statuspage.io · bold.co/tarifas · developers.bold.co ·
epayco.com/tarifas · docs.epayco.com (suscripciones · tokenización · cobrar-con-token) · github.com/epayco/epayco-node ·
corporate.payu.com/tarifas-de-payu-en-latinoamerica · developers.payulatam.com (recurring deprecated · services) ·
mercadopago.com.co (suscripciones · docs subscriptions) · mercadopago.com.ar (update-preapproval) ·
docs.dlocal.com/docs/colombia · dlocalgo.com (pricing 2024, no verif.) · helpcenter.dlocalgo.com ·
vanguardia.com 2026-07-22 (Bre-B débitos recurrentes) · pse.com.co · bancolombia.com/pagos/recaudo-pse ·
elcolombiano.com / larepublica.co / infobae.com (caídas Bancolombia) · treli.co (planes · Wompi en USD) ·
suscripciones.co · chargebee.com (dLocal).
**Fiscal:** micrositios.dian.gov.co/sistema-de-facturacion-electronica · normograma.dian.gov.co (Conceptos
13328/2025 · 5846/2024 · 28570/2019 · 4854/2019 · 0106/2022 · 900930/2022) · minhacienda.gov.co (proyecto
decreto retefuente tarjetas) · banrep.gov.co (Res. Ext. 1/2018) · haciendabogota.gov.co (ICA) · estatuto.co/481 ·
leyes.co/codigo_de_comercio/874 · bdo.com.co · pwc CO · incp.org.co (2024-04 · 2026-02) · phylo.co (2025-04-15) ·
dernegocios.uexternado.edu.co · gerencie.com · actualicese.com · regimensimple.com/tarifas · larepublica.co ·
siemprealdia.co · alegra.com · developers.siigo.com · developers.factus.com.co.
**Benchmark:** claude.com/pricing · support.claude.com (9797557 · 12429409 · 11049741 · 8287232) ·
platform.claude.com/docs/en/api/rate-limits · help.openai.com (11909943 · 9280126) · techcrunch.com
(2025-07-28 · 2025-04-09 · 2025-01-05) · deeplearning.ai (Go global) · convex.dev/pricing(+faq) ·
docs.convex.dev (teams · limits) · news.convex.dev (2025-03-12 · 2025-06-18) · vercel.com/pricing ·
vercel.com/docs (limits 2026-07-01 · spend-management 2026-06-26 · hobby) · vercel.com/blog (Active CPU) ·
supabase.com/pricing · supabase.com/docs (billing-faq · free-project-pausing · restore-90-days · database-size) ·
supabase.com/changelog/27497 · clerk.com/pricing · clerk.com/articles/clerk-pricing-explained · sentry.io/pricing ·
docs.sentry.io (quotas · spike-protection) · sentry.zendesk.com (spend notifications · PAYG) · cursor.com/pricing ·
cursor.com/blog (june-2025-pricing · aug-2025-pricing) · techcrunch.com/2025/07/07 (disculpa Cursor) ·
linear.app/pricing · linear.app/docs/billing-and-plans · notion.com/pricing · notion.com/help/understanding-block-usage ·
notion.com/releases/2025-05-13 · eesel.ai (Lovable) · uibakery.io / costbench.com (v0).

*(Nota: OpenAI bloquea fetch directo; sus cifras 2026 están trianguladas de ≥2 fuentes secundarias.
Los ítems marcados "no verificado" a lo largo del documento requieren confirmación directa con el
proveedor antes de contratar.)*
