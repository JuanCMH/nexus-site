/**
 * Datos estructurados en JSON-LD. Es un bloque de datos que el navegador no
 * ejecuta, así que la CSP no lo afecta. Se escapa `<` para que el texto no
 * pueda cerrar la etiqueta.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON escapado, no HTML
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
