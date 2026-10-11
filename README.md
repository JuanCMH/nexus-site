# nexus-site

El sitio público de **Nexus**, el sistema de registro para agencias de
seguros: landing, manual y descarga.

La aplicación (escritorio, web y backend) vive en otro repositorio,
`nexus-app`. Este sitio no tiene sesión ni datos.

## Empezar

```bash
bun install
bun run dev      # http://localhost:3000
```

No hace falta ninguna variable de entorno en local. Las de producción están
descritas en `.env.example`.

## Comandos

| Comando | Qué hace |
|---|---|
| `bun run dev` | Servidor de desarrollo. |
| `bun run check` | El gate: tipos, Biome y build. En verde antes de cada commit. |
| `bun run format` | Aplica formato y arreglos seguros. |
| `bun run build` / `bun run start` | Compila y sirve la versión de producción. |

## Reglas

Todo está en [`docs/directives/`](docs/directives/):

| Documento | Gobierna |
|---|---|
| `00-reglas-generales.md` | Qué es este repo, los tres repos de Nexus, stack, decisiones abiertas. |
| `01-marca.md` | Manual de marca: nombre, logo, color, tipografía, voz. |
| `02-producto.md` | Qué es Nexus hoy y qué se puede afirmar de él. |
| `03-reglas-sitio.md` | Arquitectura, páginas, SEO, descarga, seguridad, despliegue. |
| `04-reglas-interfaz.md` | Todo lo visible. |
| `05-reglas-calidad.md` | Diseño previo, gate, verificación, git. |
