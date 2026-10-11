import type { ComponentPropsWithoutRef } from "react";

/**
 * La marca de Nexus. Los trazos son los mismos de la app
 * (`nexus-app`, `components/nexus/nexus-logo.tsx`) y no se redibujan.
 * Reglas de uso en docs/directives/01-marca.md §3.
 *
 * Los dos heredan el color del texto (`fill="currentColor"`): el color se
 * elige con una clase (`text-nexus-midnight`, `text-white`), nunca editando
 * el trazo. Son decorativos por defecto; donde la marca es el único nombre
 * del enlace, quien la usa pone el `aria-label`.
 */

/** El símbolo: la N dentro de su cuadro. */
export function NexusIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22,0H2C.9,0,0,.9,0,2v20c0,1.1.9,2,2,2h20c1.1,0,2-.9,2-2V2c0-1.1-.9-2-2-2ZM19.97,19.97h-4c0-5.23-3.34-9.69-8-11.33v11.33h-3.94V3.94c1.38,0,2.72.18,4,.5,3.15.81,5.92,2.56,8,4.93V3.94h3.94v16.03Z"
      />
    </svg>
  );
}

/** El logotipo: la palabra NEXUS. */
export function NexusWordmark(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 110.5 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M24,0v24h-6c0-7.84-5-14.5-12-16.97v16.97H0V0c2.07,0,4.09.26,6,.76,4.72,1.22,8.88,3.83,12,7.38V0h6Z" />
      <path d="M32.85,4.68v4.86h7.83v4.51h-7.83v5.27h8.85v4.68h-14.7V0h14.7v4.68h-8.85Z" />
      <path d="M60.1,24l-4.89-7.35-4.31,7.35h-6.63l7.69-12.21L44.1,0h6.8l4.82,7.25,4.24-7.25h6.63l-7.62,12.1,7.93,11.9h-6.8Z" />
      <path d="M75.69,0v14.22c0,1.42.35,2.52,1.05,3.28.7.77,1.73,1.15,3.08,1.15s2.4-.39,3.12-1.15c.72-.77,1.08-1.86,1.08-3.28V0h5.79v14.18c0,2.12-.45,3.92-1.36,5.38-.9,1.47-2.12,2.57-3.64,3.32-1.53.74-3.22,1.12-5.1,1.12s-3.55-.37-5.02-1.1c-1.48-.73-2.65-1.84-3.51-3.32-.86-1.48-1.29-3.28-1.29-5.4V0h5.79Z" />
      <path d="M97.34,23.17c-1.36-.56-2.44-1.38-3.25-2.47-.81-1.09-1.24-2.4-1.28-3.94h6.08c.09.87.39,1.53.9,1.99.51.46,1.18.68,2,.68s1.51-.2,2-.58c.49-.39.73-.93.73-1.62,0-.58-.2-1.06-.58-1.44-.39-.38-.87-.69-1.43-.93s-1.37-.52-2.42-.83c-1.51-.47-2.75-.93-3.71-1.4s-1.78-1.16-2.47-2.07c-.69-.91-1.03-2.1-1.03-3.57,0-2.18.79-3.89,2.37-5.12,1.58-1.24,3.64-1.85,6.17-1.85s4.66.62,6.24,1.85c1.58,1.24,2.43,2.95,2.54,5.16h-6.17c-.05-.76-.32-1.35-.83-1.78-.51-.43-1.17-.65-1.97-.65-.69,0-1.25.18-1.67.55-.42.37-.63.9-.63,1.59,0,.76.36,1.35,1.07,1.77.71.42,1.83.88,3.34,1.37,1.51.51,2.74,1,3.69,1.47.95.47,1.76,1.15,2.45,2.03.69.89,1.03,2.04,1.03,3.44s-.34,2.55-1.02,3.64c-.68,1.09-1.67,1.96-2.96,2.61-1.29.64-2.81.97-4.57.97s-3.25-.28-4.61-.83Z" />
    </svg>
  );
}
