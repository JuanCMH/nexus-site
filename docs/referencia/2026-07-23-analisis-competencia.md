# Análisis de competencia — Nexus Seguros

> **Fecha:** 2026-07-23 · **Estado:** investigación de mercado, sin decisiones ejecutadas.
> Toda afirmación de terceros está marcada **[VERIFICADO: fuente]** (leída en la web primaria en
> la fecha indicada) o **[NO VERIFICADO]** (procede de agregadores, metadatos SEO o resúmenes
> indexados y debe reconfirmarse antes de usarse comercialmente). Las capacidades de Nexus están
> marcadas **[CÓDIGO: ruta]** porque se verificaron en el repositorio, no en material de marketing.
> Bibliografía completa en §10. **Revalidar precios de terceros si pasaron >3 meses.**

**Índice:** §1 veredicto · §2 método y límites · §3 mapa del mercado · §4 perfiles de competidores ·
§5 qué es Nexus hoy (verificado en código) · §6 matriz comparativa · §7 precios · §8 brechas y
ventajas · §9 posicionamiento recomendado · §10 bibliografía.

---

## 1. Veredicto ejecutivo

**Cinco conclusiones, en orden de importancia para las decisiones de producto:**

1. **El mercado colombiano de software para intermediarios de seguros está ocupado, no vacío.**
   Hay al menos ocho productos vivos dirigidos al mismo comprador. El líder aparente por tracción
   es **Softseguros** (declara **+900 agencias en Latinoamérica**) [VERIFICADO: softseguros.com,
   2026-07-23].

2. **El diferenciador que Nexus considera su "wow" —extracción de documentos con IA— ya no es
   exclusivo.** Softseguros anuncia un **"Lector de pólizas con IA"** como novedad y lo raciona
   como cuota (**100 lecturas de PDF** en el plan publicado), y Guro se posiciona íntegramente
   como *"software con IA"* [VERIFICADO: softseguros.com/precios-softseguros, guro.co metadatos].
   La ventana de "somos los únicos con IA" está cerrada. Lo que sigue defendible es la
   **profundidad** de la implementación de Nexus (confianza por campo, revisión humana, campos
   configurables por plantilla, PDFs híbridos), no el hecho de tener IA.

3. **El verdadero foso de los incumbentes no es la IA: son las integraciones con aseguradoras.**
   Softseguros ofrece **descargas automatizadas desde las compañías** y conciliación de
   comisiones contra los estados de cuenta del asegurador; Agentemotor conecta cotización real
   multi-aseguradora con las claves del intermediario; Cider está construido sobre Zoho con RPA
   [VERIFICADO: sitios respectivos]. **Nexus no tiene ninguna integración con aseguradoras**
   [CÓDIGO: no existe módulo de integración en `convex/`]. Ésta es la brecha estructural, no la
   estética ni la de IA.

4. **Nexus está drásticamente por debajo del mercado en precio, y eso es tanto una oportunidad
   como un riesgo de señalización.** Softseguros publica **$380 USD por usuario/año (~$32/mes)**;
   los referentes de EE.UU. van de **$99 (NowCerts)** a **~$250 (EZLynx)** por usuario/mes
   [VERIFICADO / NO VERIFICADO respectivamente, ver §7]. La hipótesis de Nexus es **$6–$12
   USD/asiento/mes** ([[plan-monetizacion]] §5.1): entre **5× y 40× más barato**. Con ese
   diferencial, el precio deja de ser un argumento y pasa a ser una **señal de que el producto
   hace menos** — que, hoy, es cierto (§8.1).

5. **Nexus compite en una categoría distinta a la que cree.** No es un AMS integral (le faltan
   cartera/cobranza, comisiones liquidables y siniestros, §8.1) ni un cotizador comparativo
   (decisión explícita de producto, [[landing-coherencia]]). Es un **sistema de registro
   estructurado y gobernado** — plantillas configurables, permisos granulares, auditoría,
   tareas — con captura asistida por IA. Ese es un nicho real y defendible, pero hay que
   nombrarlo así en vez de prometer "toda tu operación" (§9).

---

## 2. Método y límites de esta investigación

- **Qué se hizo:** búsqueda web + lectura directa de sitios de producto y páginas de precios de
  los proveedores, cruzada con agregadores (ComparaSoftware, Capterra, GetApp, SelectHub) y
  prensa sectorial. Las capacidades de Nexus se verificaron **leyendo el repositorio**, no la
  landing, para evitar comparar marketing contra marketing.
- **Límite 1 — Guro está tras Cloudflare.** Sus páginas de producto y precios no fueron
  extraíbles ni por `fetch` ni por navegador automatizado en esta sesión. Todo lo que se afirma
  de Guro procede de metadatos estructurados de su sitio (JSON-LD) y de resúmenes indexados, y
  está marcado **[NO VERIFICADO]**. **Pendiente: revisarlo manualmente o pedir demo.**
- **Límite 2 — precios ocultos.** Guro y Cider no publican tarifas (venden por demo). Agentemotor
  publica un modelo (por volumen de cotizaciones) pero no los valores. La comparación de precios
  de §7 es por tanto **parcial y sesgada hacia quien sí publica**.
- **Límite 3 — discrepancia de fuentes en Softseguros.** Su página oficial arroja **$380
  USD/usuario/año**; un agregador reporta paquetes ("Soft A $205 / Soft AAA $656") con unidad
  ambigua. Se toma la cifra oficial como buena y se marca la del agregador como no fiable.
- **No se hizo:** entrevistas con agencias, pruebas de producto de la competencia, ni análisis de
  cuota de mercado real (no hay cifras públicas de instalaciones). Las declaraciones de tracción
  ("+900 agencias", "+500 clientes") son **auto-reportadas por el vendedor**, no auditadas.

---

## 3. Mapa del mercado: cuatro categorías, no una

El error de análisis más frecuente es meter todo en "competencia". Estos productos resuelven
problemas distintos y varios son **complementarios** a Nexus, no rivales.

| Categoría | Qué resuelve | Quién está ahí | ¿Compite con Nexus? |
|---|---|---|---|
| **A. AMS integral** (agency management system) | Todo el ciclo: cliente → póliza → cartera → comisión → siniestro → reportes | **Softseguros**, **Guro**, **Cider**, Mediator, Corredora Online | **Sí, frontal.** Es donde el comprador pone su presupuesto de "el sistema de la agencia" |
| **B. Cotizador / comparador** | Tarificar en varias aseguradoras y emitir propuesta | **Agentemotor**, cotizadores de aseguradoras | **No hoy.** Nexus decidió no ser comparador ([[landing-coherencia]]) |
| **C. Pre-venta / captación** | Formularios, prospectos, seguimiento de referidos | **Figuro** | **No.** Se declara complementario a los AMS |
| **D. Back-office con IA** (frontera) | Conciliación de comisiones, *policy checking*, suscripción automatizada | **Comulate**, **Sixfold** (EE.UU.) | **No aún**, pero marca hacia dónde va el valor |

**Implicación:** el presupuesto que Nexus persigue es el de la categoría A. Ahí el comprador ya
tiene una solución (o Excel) y comparará función por función — incluidas las que Nexus no tiene.

---

## 4. Perfiles de los competidores

### 4.1 Softseguros — el líder a batir 🔴

*Colombia · softseguros.com*

| | |
|---|---|
| **Tracción** | **+900 agencias en Latinoamérica** (auto-reportado) [VERIFICADO: softseguros.com] |
| **Precio** | **$380 USD / usuario / año** (~$31,7/mes). Mínimo 2 usuarios. Facturación anual (licencia de 12 meses). Precio en COP disponible solo para empresas colombianas [VERIFICADO: /precios-softseguros] |
| **Valoración** | 4,6–4,7 / 5 en agregadores (muestra pequeña, 4 reseñas) [NO VERIFICADO] |

**Módulos** [VERIFICADO: softseguros.com y /crm-para-agencias-de-seguros]:
pólizas individuales, colectivas y agrupadas · perfiles de cliente 360° con historial de pagos y
siniestros · **cartera y cobranza** (recibos con numeración consecutiva, alertas de pago, reporte
de pagos a aseguradoras) · **comisiones** (cálculo por asesor/técnico/punto de venta, **validación
del estado de cuenta de la aseguradora contra la producción real y detección de diferencias**) ·
renovaciones con alertas por email y WhatsApp · siniestros · venta cruzada · reportes de
producción y siniestralidad · **portal de cliente** con usuarios ilimitados · exportación a Excel ·
**app móvil Android e iOS** · asistente virtual de WhatsApp.

**Diferenciadores duros:**
- **Descargas automatizadas desde las aseguradoras** — el mayor ahorro operativo real de una
  agencia, y lo que ningún producto nuevo puede replicar sin acuerdos o *scraping* sostenido.
- **Conciliación de comisiones contra el estado de cuenta del asegurador.** Es dinero directo:
  detecta lo que la aseguradora dejó de pagar.
- **Marca blanca + módulo de marketing digital + entrenamientos ilimitados** desde 3 usuarios.

**IA:** anuncia **"Lector de pólizas con IA"** como novedad, racionado a **100 lecturas de PDF**
en el plan publicado; 10 GB de almacenamiento; 1 línea de WhatsApp; 600 correos [VERIFICADO:
/precios-softseguros]. Su implementación no pudo evaluarse en profundidad (no hay documentación
técnica pública) — **[PENDIENTE: probar su calidad de extracción contra las fixtures de Nexus].**

**Debilidades observables:** precio alto y **anual por adelantado** (barrera para agencias de 1–3
personas); reseñas piden "más opciones de configuración de pagos" y "cargue de datos más simple"
[NO VERIFICADO]; su IA es un añadido reciente sobre una plataforma madura, no el núcleo.

**Marcas declaradas:** recupera 34 % de renovaciones automáticamente; ahorra hasta 10 h/semana
[VERIFICADO como *claim* de marketing; no auditado].

---

### 4.2 Guro — el rival de posicionamiento más peligroso 🔴

*LATAM (Colombia, México, España, Argentina, Chile, Perú) · guro.co*

⚠️ **Toda esta ficha es [NO VERIFICADO]** — el sitio bloquea extracción automatizada. Procede de
sus propios metadatos estructurados y de resúmenes indexados.

| | |
|---|---|
| **Posicionamiento** | *"Software con IA, WhatsApp y cotizadores para agencias y corredores de seguros en LATAM"* — literalmente el discurso que Nexus quiere ocupar |
| **Alcance declarado** | Pólizas, siniestros, clientes, comisiones, renovaciones, **facturación electrónica**, CRM y **análisis predictivo** |
| **Precio** | No publicado. JSON-LD declara moneda **COP** y `lowPrice: 0`; **prueba gratuita de 7 días**; planes "desde básico hasta enterprise" |
| **Modelo** | Cobro **por agencia, no por usuario** ("haz crecer tu equipo sin que el costo escale") |
| **Integraciones** | Declara integraciones con aseguradoras LATAM y WhatsApp |

**Por qué es el más peligroso para Nexus:** ocupa exactamente el mismo relato (moderno, IA-nativo,
LATAM, reemplaza Excel + WhatsApp) **y además** promete facturación electrónica e integraciones
con aseguradoras. Su cobro **por agencia** ataca de frente el modelo por asiento de Nexus: para
una agencia de 8 personas, "precio plano" gana la conversación contra "$12 × 8".

**Acción recomendada:** pedir una demo y documentar planes, límites y calidad real de la IA.
Es la única ficha de este documento con un hueco de información crítico.

---

### 4.3 Cider — el incumbente enterprise con RPA 🟡

*Colombia · cider.com.co*

Suite construida **sobre la plataforma Zoho** (partner autorizado), con RPA y capacidades de IA
[VERIFICADO: cider.com.co]. Módulos: CRM con analítica de venta cruzada · cartera con facturación
proactiva de comisiones · vista 360° de cliente y pólizas a través de aseguradoras ·
**plataforma especializada para agencias de ARL** (riesgos laborales) · **AutoMotor** (cotización
automatizada de autos, hogar y vida) · app móvil · gestión unificada de WhatsApp · flujos
automatizados de siniestros. Reconocido por MinCiencias en 2024 por innovación en transformación
digital. **Precio no publicado** (venta consultiva).

**Lectura:** compite por implantación y servicio, no por producto autoservicio. Su
especialización en **ARL** es un nicho que Nexus no cubre y que en Colombia es grande. Al estar
sobre Zoho, hereda potencia de plataforma pero también rigidez y costo de licencias de terceros.

---

### 4.4 Agentemotor — complementario hoy, amenaza si se expande 🟡

*Colombia · agentemotor.com*

"Acelerador de venta de seguros": **cotización instantánea multi-aseguradora** (autos, hogar,
vida) usando **las propias claves del intermediario ante cada aseguradora**, cotizador masivo,
cotizador web de autogestión para el cliente final, CRM especializado y **API para integrarse con
el CRM/ERP existente**. Declara **+500 clientes** [VERIFICADO: agentemotor.com].

**Modelo de precio distinto y notable:** se paga **por volumen de cotizaciones al mes** — *"no
requiere pagos anuales ni pagos por usuario"* [VERIFICADO: /precios]. Es el mismo esqueleto de
cobro por consumo que Nexus planea para la IA.

**Lectura:** hoy no compite (Nexus no tarifica). Pero es el candidato natural a añadir gestión de
cartera y volverse AMS — y ya tiene lo más difícil: las conexiones con aseguradoras. Su API
también lo hace un **socio potencial**: Nexus podría ser el sistema de registro y Agentemotor el
motor de tarificación.

---

### 4.5 Figuro — complementario, y la referencia de precio bajo 🟢

*Colombia, con presencia declarada en +15 territorios · figuro.la*

Se define explícitamente como **complemento, no reemplazo**, de CRMs y sistemas de gestión de
pólizas [VERIFICADO: figuro.la]. Digitaliza la **venta nueva**: formularios inteligentes de
captura en 2 minutos, tablero de prospectos con notificaciones, envío de cotizaciones como
páginas web móviles, tracking de referidores, exportación a Excel, "análisis de cartera con IA"
en el plan Pro.

**Precios (los más transparentes del mercado local):** **Básico $5 USD/mes · Pro $19 USD/mes ·
Equipo $49 USD/mes** (Q1 2026), con **50 cotizaciones gratis sin tarjeta** [VERIFICADO].

**Por qué importa aunque no compita:** valida que **el precio de entrada de $5–6 USD/mes es
comercialmente viable en este mercado** — el rango que propone [[plan-monetizacion]] ADR-5.
También muestra que el precio por *cuenta* (no por asiento) es la convención local en el segmento
bajo. Además hace marketing de contenidos agresivo (guías, rankings de IA) y posiciona el término
"software para agentes de seguros" en buscadores — un frente donde Nexus está ausente.

---

### 4.6 Menores y adyacentes 🟢

- **Mediator** — CRM de clientes, pólizas, recibos, siniestros y agenda [NO VERIFICADO].
- **Corredora Online** — SaaS que combina ERP y CRM para corredoras [NO VERIFICADO].
- **PowerCRM / Efficy / Apptivo / Zoho** — CRMs genéricos adaptados. Compiten por precio y
  familiaridad, pierden por falta de modelo de datos asegurador.
- **Winsef** (España) — CRM para agentes; relevante solo si Nexus mira a España.

---

### 4.7 Referentes internacionales — dónde está el techo y hacia dónde va el valor

| Producto | País | Precio | Relevancia para Nexus |
|---|---|---|---|
| **NowCerts** | EE.UU. | ~**$99 / usuario / mes** (tier Essentials) [NO VERIFICADO: agregadores] | **Extracción con IA de formularios ACORD**, seguimiento de certificados, contabilidad integrada, portal de cliente. El equivalente maduro de la propuesta de Nexus, a 8× el precio |
| **EZLynx** | EE.UU. | **$100/usuario/mes** el motor de tarificación + **$150/usuario/mes** el AMS (~$250 combinado); desde **$350/mes** de entrada [NO VERIFICADO: agregadores] | Tarificación comparativa en tiempo real + AMS + portal + marketing. El "todo en uno" que define la categoría |
| **Comulate** | EE.UU. (2022) | Enterprise | **Automatiza conciliación de comisiones, aplicación de caja y recuperación de ingresos**; declara reducir hasta 90 % del trabajo manual. Prueba de que **el back-office financiero es donde la IA genera dinero medible**, no la captura de datos |
| **Sixfold** | EE.UU. (2023, $51,5 M levantados, Salesforce Ventures) | Enterprise | **Agente de IA que lleva una solicitud hasta *quote-ready* y *bind-ready***. La frontera: la IA no asiste, **ejecuta** |

**Las dos lecciones que importan:**

1. **El precio del mercado maduro es 10–40× el de Nexus.** Hay techo enorme si el producto
   crece en alcance; no hay que anclarse mentalmente en $6.
2. **La IA que se paga cara no es la que lee documentos: es la que toca el dinero.** Comulate
   automatiza comisiones; Sixfold ejecuta suscripción. Extraer campos de un PDF es, en 2026, la
   parte fácil y la que todos están copiando (Softseguros ya lo hizo). **Si Nexus quiere que su
   IA sea un foso, tiene que moverla hacia la conciliación de comisiones y el control de
   cartera** — y ahí, además, coincide con la brecha funcional que ya tiene (§8.1).

---

## 5. Qué es Nexus hoy (verificado en el repositorio)

Para que la comparación sea honesta, esto es lo que existe en código — no lo que promete la
landing.

**Módulos implementados** [CÓDIGO: `packages/`, `convex/`, `app/(app)/`]:

- **Clientes** con plantillas configurables e importación desde Excel.
- **Pólizas** con modelo **EAV** (`policyFieldValues`): la agencia define sus propios campos por
  plantilla — texto, número, fecha, moneda, selección, booleano, catálogo, archivo (14 tipos).
  Filtros avanzados e importación Excel.
- **Cotizaciones / garantías (`quotes` + `bonds`)** — motor de cálculo propio con fixtures
  doradas, pólizas de cumplimiento y garantías, exportación a Excel. **No es un comparador de
  aseguradoras** (decisión explícita de producto).
- **Tareas** — módulo de primera clase: vistas temporales, recurrencias, recordatorios por email,
  carpetas, notas, adjuntos, cascadas.
- **Roles y permisos** — **49 permisos granulares**, jerarquía owner/admin, matriz verificada en
  compilación, protección anti-escalada.
- **Miembros e invitaciones** — reconciliación por email, cascadas de limpieza.
- **Catálogos Colombia** — **49 aseguradoras (SFC)**, **38 ramos (CBJ)**, **10 amparos (Decreto
  1082)** precargados y conectados a pólizas.
- **Dashboard** — KPIs, distribución, series de clientes/pólizas/cotizaciones/tareas.
- **Logs de auditoría**, **centro de ayuda** con 58 artículos y búsqueda, **multi-compañía**,
  **modo claro/oscuro**, i18n.
- **Extracción con IA** — `AiDocsExtractor`: rutas texto / AcroForm-XFA / **PDF híbrido**,
  **confianza por campo con badge "Revisar"**, validación determinista, mapeo a catálogos
  (aseguradora, ramo) y a opciones de selección, telemetría de campos aplicados.

**Lo que NO existe** [CÓDIGO: verificado por ausencia]:
comisiones liquidables (solo hay un *porcentaje* como campo de ramo/póliza y un KPI de
dashboard) · cartera / recibos / cobranza · **siniestros** (cero implementación) · integración
con WhatsApp (solo un campo de contacto de la agencia) · portal de cliente · app móvil ·
integraciones con aseguradoras · facturación electrónica · marketing.

---

## 6. Matriz comparativa

Leyenda: **●** completo · **◐** parcial · **○** ausente · **?** no verificable.

| Capacidad | **Nexus** | Softseguros | Guro | Cider | Agentemotor | Figuro |
|---|:--:|:--:|:--:|:--:|:--:|:--:|
| Gestión de clientes | ● | ● | ● | ● | ◐ | ◐ |
| Gestión de pólizas | ● | ● | ● | ● | ○ | ○ |
| **Campos configurables por la agencia (EAV)** | **●** | ? | ? | ◐ | ○ | ◐ |
| Renovaciones y alertas | ◐ (tareas) | ● | ● | ● | ○ | ○ |
| **Cartera / cobranza / recibos** | **○** | ● | ● | ● | ○ | ○ |
| **Comisiones liquidables y conciliación** | **○** | ● | ● | ● | ○ | ○ |
| **Siniestros** | **○** | ● | ● | ● | ○ | ○ |
| Cotización multi-aseguradora | ○ (por diseño) | ◐ | ● | ● | ● | ◐ |
| Garantías / pólizas de cumplimiento | **●** | ? | ? | ? | ○ | ○ |
| **Integración con aseguradoras (descargas)** | **○** | ● | ● | ● | ● | ○ |
| WhatsApp | ○ | ● | ● | ● | ? | ○ |
| Portal de cliente | ○ | ● | ? | ? | ● | ◐ |
| App móvil nativa | ○ | ● | ? | ● | ○ | ○ |
| **Extracción de documentos con IA** | **●** (profunda) | ◐ (100 PDF) | ? | ◐ | ○ | ◐ |
| **Permisos granulares (49)** | **●** | ◐ | ? | ◐ | ○ | ○ |
| **Auditoría / logs** | **●** | ? | ? | ? | ? | ○ |
| Gestión de tareas | **●** | ◐ | ◐ | ● | ○ | ○ |
| Import/export Excel | ● | ● | ? | ● | ● | ● |
| Facturación electrónica DIAN | ○ | ? | ● | ? | ? | ○ |
| Marca blanca | ○ | ● | ? | ? | ? | ○ |
| Marketing digital | ○ | ● | ? | ● | ○ | ○ |
| **Precio publicado** | pendiente | ● | ○ | ○ | ◐ | ● |

**Lectura de la matriz:** Nexus gana claramente en **cuatro casillas** (campos configurables,
profundidad de la IA, permisos/auditoría, tareas) y pierde en **seis** que el comprador considera
básicas de un AMS (cartera, comisiones, siniestros, aseguradoras, WhatsApp, portal). Ninguna de
las cuatro victorias aparece en la lista de compra típica de una agencia pequeña; tres de las
seis derrotas sí.

---

## 7. Análisis de precios

| Producto | Precio publicado | Unidad | Ciclo |
|---|---|---|---|
| **Figuro** | $5 / $19 / $49 USD/mes | por **cuenta** | mensual |
| **Nexus (propuesto)** | **$6 / $12 USD** (anual $5/$10) | por **asiento** | mensual o anual |
| **Softseguros** | **$380 USD/año** (~$31,7/mes) | por **usuario**, mín. 2 | **anual adelantado** |
| **NowCerts** (EE.UU.) | ~$99 USD/mes | por usuario | mensual |
| **EZLynx** (EE.UU.) | ~$250 USD/mes | por usuario | mensual |
| Guro / Cider | no publicado | Guro: por **agencia** | ? |
| Agentemotor | no publicado | por **cotizaciones/mes** | mensual |

**Cinco observaciones accionables:**

1. **Nexus Pro ($6) es ~5× más barato que Softseguros ($31,7) y Nexus Agencia ($12) sigue siendo
   ~2,6× más barato.** Hay espacio de precio sin quedar caro. Si el producto cierra las brechas
   de §8.1, **$15–20 por asiento sigue siendo la mitad del líder.**
2. **Cuidado con la señal.** Un precio 5× por debajo del líder en un producto con menos módulos
   confirma la sospecha del comprador ("es más barato porque hace menos") en vez de comunicar
   "es más moderno". El anclaje debe ser **contra Excel y contra el costo del error**, no contra
   Softseguros.
3. **El cobro por agencia de Guro es la objeción comercial más fuerte que va a recibir Nexus.**
   Conviene tener una respuesta preparada (p. ej. tope de precio por compañía a partir de N
   asientos) o asumir conscientemente la desventaja.
4. **El pago anual adelantado de Softseguros es su punto débil de conversión.** Una agencia de 2
   personas paga **$760 USD de golpe**. La opción mensual sin permanencia de Nexus es un
   argumento comercial real para el segmento de 1–3 personas — el más desatendido del mercado.
5. **El pricing actual de la landing ($149.000 COP/mes, "REFERENCIA") no corresponde a ninguna
   estructura considerada** [CÓDIGO: `packages/landing/components/pricing.tsx`]. Equivale a
   ~$37 USD/mes por agencia y quedó por encima de la banda decidida. Reemplazarlo por la tabla de
   [[plan-monetizacion]] §5.9 es coherente con la directiva de honestidad de
   [[landing-coherencia]].

---

## 8. Brechas y ventajas

### 8.1 Brechas de Nexus, ordenadas por impacto en la venta

| # | Brecha | Impacto | Por qué duele |
|---|---|---|---|
| 1 | **Sin integración con aseguradoras** | 🔴 estructural | Es el ahorro de tiempo #1 que vende Softseguros. No se cierra con código: exige acuerdos o *scraping* mantenido |
| 2 | **Sin comisiones liquidables ni conciliación** | 🔴 alto | Es **el dinero del intermediario**. Softseguros detecta lo que la aseguradora dejó de pagar; Comulate construyó una empresa entera sobre esto |
| 3 | **Sin cartera / cobranza / recibos** | 🔴 alto | Segunda pregunta de cualquier demo. Sin esto, la agencia mantiene su Excel paralelo — y si mantiene el Excel, no paga |
| 4 | **Sin siniestros** | 🟡 medio | Menos frecuente que cartera, pero se pide en el *checklist* de compra |
| 5 | **Sin WhatsApp** | 🟡 medio | En Colombia, el canal con el cliente **es** WhatsApp. Todos los rivales lo tienen |
| 6 | **Sin portal de cliente ni app móvil** | 🟡 medio | Softseguros y Cider los usan como argumento de modernidad |
| 7 | **Sin tracción ni prueba social** | 🟡 medio | Softseguros dice +900 agencias, Agentemotor +500. Nexus tiene 0 casos publicables |
| 8 | **Sin presencia en buscadores ni contenido** | 🟢 bajo (acumulativo) | Figuro y Agentemotor capturan la demanda con blogs y rankings. Nexus no aparece en ninguna comparativa del sector |

### 8.2 Ventajas reales de Nexus

1. **Profundidad de la extracción con IA.** Ningún competidor documenta confianza por campo,
   revisión humana asistida, mapeo a catálogos oficiales ni manejo de PDFs híbridos. Softseguros
   vende "lector de pólizas"; Nexus tiene un sistema de captura con control de calidad. **Es una
   ventaja de ejecución, no de categoría** — hay que demostrarla, no anunciarla.
2. **Plantillas EAV configurables por la agencia.** Cada agencia define sus campos por ramo sin
   pedirle nada al proveedor. Los AMS tradicionales imponen su modelo de datos. Esto es
   arquitectura difícil de copiar y encaja con la realidad colombiana (38 ramos, prácticas
   heterogéneas).
3. **Gobernanza seria: 49 permisos + auditoría + jerarquía anti-escalada.** Ningún rival del
   segmento pyme presume de esto. Es el argumento para la agencia de 8–20 personas que ya sufrió
   que "un asesor vio las comisiones de otro".
4. **Catálogos oficiales de Colombia precargados** (49 aseguradoras SFC, 38 ramos, amparos del
   Decreto 1082) — arranque sin configuración y datos normalizados desde el día 1.
5. **Módulo de garantías / pólizas de cumplimiento con motor de cálculo propio.** Nicho real de
   licitación pública colombiana que los rivales no destacan. **Posible cuña de entrada** (§9).
6. **Producto propio, moderno y sin dependencia de plataforma de terceros** — al contrario de
   Cider (Zoho): velocidad de iteración y sin costo de licencias ajenas.
7. **Mensual sin permanencia frente al anual adelantado del líder.**

---

## 9. Posicionamiento recomendado

**Tres opciones, con recomendación explícita.**

### Opción A — "AMS completo, más barato" (competir de frente) ❌ no recomendada
Cerrar cartera + comisiones + siniestros y pelear con Softseguros. Son **meses de trabajo** en
el camino del dinero, sin integraciones con aseguradoras que igualen su ahorro operativo, contra
un incumbente con 900 clientes. Se llega tarde y sin foso.

### Opción B — "El sistema de registro gobernado con captura por IA" ✅ **recomendada**
Nombrar la categoría real de Nexus y ganarla:

> *Para agencias que hoy viven en Excel y necesitan que sus datos de pólizas sean correctos,
> completos y gobernados — con la captura hecha por IA en vez de a mano.*

Prioridades derivadas, en orden:
1. **Comisiones (brecha #2)** — es la única brecha que además es una **ventaja de IA**: pasar del
   *"leo tu póliza"* al *"leo el estado de cuenta de la aseguradora y te digo qué te dejaron de
   pagar"*. Es el movimiento de Comulate, adaptado a Colombia, y aterriza sobre el modelo EAV que
   ya existe. **Máximo retorno por unidad de esfuerzo.**
2. **Cartera básica (brecha #3)** — recibos y estado de pago. Sin esto no se elimina el Excel
   paralelo, y si no se elimina, no hay pago.
3. **WhatsApp para avisos de renovación (brecha #5)** — costo bajo, valor percibido alto,
   paridad inmediata con el rival.
4. **Siniestros y portal de cliente** — después, no antes.

### Opción C — "Cuña por garantías / cumplimiento" 🟡 complementaria a B
Usar el módulo de `quotes`/`bonds` como puerta de entrada a un nicho (contratación estatal) donde
ningún rival compite, y expandir desde ahí a la gestión completa. Bajo costo (ya está construido),
valida disposición a pagar en un segmento concreto. **Es una táctica de entrada al mercado, no una
estrategia de producto** — combinable con B.

**Tres reglas de comunicación** (coherentes con [[landing-coherencia]]):
- **No decir "toda tu operación"** mientras falten cartera, comisiones y siniestros. Es
  exactamente el tipo de promesa que la directiva de honestidad prohíbe.
- **No vender "IA" en abstracto** — el rival ya la anuncia. Vender el **resultado medible**: *"14
  de 14 campos correctos, y te marcamos los que debes revisar"*.
- **Anclar contra Excel y contra el error costoso**, nunca contra el precio del líder.

**Cuatro acciones inmediatas y baratas:**
1. **Pedir demo de Guro** y cerrar el hueco de información de §4.2 (es el rival de
   posicionamiento, y no sabemos ni sus precios).
2. **Probar el lector de pólizas de Softseguros** contra las fixtures doradas de Nexus. Si Nexus
   gana con datos, ése es el material de venta; si pierde, es una alerta roja de producto.
3. **Validar con 3–5 agencias reales** qué pesa más en su decisión: cartera, comisiones o
   captura — antes de construir. Cruza con la pregunta 15 de [[plan-monetizacion]] §8.3.
4. **Reemplazar el pricing decorativo de la landing** (§7, punto 5).

---

## 10. Bibliografía

Todas las URLs consultadas el **2026-07-23**.

**Colombia / LATAM:** softseguros.com · softseguros.com/precios-softseguros ·
softseguros.com/crm-para-agencias-de-seguros · guro.co · guro.co/precios (bloqueado por
Cloudflare; solo JSON-LD) · guro.co/software-corredores-seguros · guro.co/blog ·
cider.com.co · figuro.la · figuro.la/blog-post/software-para-agentes-de-seguros-guia-completa ·
agentemotor.com · agentemotor.com/precios · agentemotor.com/blog ·
comparasoftware.co/software-para-seguros · comparasoftware.co/agentemotor ·
comparasoftware.gt/softseguros-software-seguros · comparasoftware.es/softseguros-software-seguros ·
capterra.mx/alternatives/1023940/softseguros · getapp.com (softseguros) ·
togrowagencia.com/4-crm-para-seguros-en-colombia · sasaconsultoria.com · winsef.com ·
neoservix.com/software-erp/aseguradoras · foliume.com/es/post/software-seguros ·
foliume.com/es/post/insurance-crm · apps.apple.com (Softseguros iOS).

**Internacional:** selecthub.com/p/insurance-agency-management-systems/ezlynx ·
selecthub.com/insurance-agency-management-systems/ezlynx-vs-agencyzoom ·
softwareadvice.com/insurance/ezlynx-profile · capterra.com/p/102928/EZLynx ·
insuraitools.com/compare/ezlynx-vs-nowcerts · insurtechtools.com/ezlynx-review-2026 ·
comulate.com · programbusiness.com (Comulate revenue automation) · tracxn.com (Sixfold) ·
startupintros.com (Sixfold, Comulate) · fintech.global 2026-06-17 (Sixfold AI Underwriter) ·
theinsurer.com 2026-06-12 · forbes.com 2026-06-28 y 2026-01-30 ·
jenesissoftware.com · genasystech.com.

**Sector / regulación Colombia:** fasecolda.com/directorio-categorias ·
publicaciones.fasecolda.com/regimen-de-seguros · superfinanciera.gov.co (SUCIS, Circular Externa
006 de 2025).

**Internas:** `docs/monetizacion/plan-monetizacion.md` · `docs/directives/` ·
`packages/landing/components/pricing.tsx` · `convex/schema.ts` · `convex/lib/permissions.ts` ·
`convex/lib/aiShared.ts`.

---

## Anexo — huecos de información pendientes

| # | Hueco | Cómo cerrarlo |
|---|---|---|
| 1 | Precios y límites reales de **Guro** | Demo comercial (bloqueado por Cloudflare) |
| 2 | Precios de **Cider** y **Agentemotor** | Contacto comercial |
| 3 | Calidad real del lector de pólizas de **Softseguros** | Prueba con fixtures doradas de Nexus |
| 4 | Nº de intermediarios de seguros en Colombia (TAM) | SUCIS de la SFC / directorio Fasecolda |
| 5 | Cuota de mercado real | No hay fuente pública; solo *claims* auto-reportados |
| 6 | Precio de Softseguros para 1 usuario | Página oficial solo muestra desde 2 usuarios |
