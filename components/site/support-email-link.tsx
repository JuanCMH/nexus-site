import { SUPPORT_EMAIL } from "@/lib/site";

/** El correo de soporte, como enlace. El asunto ayuda a soporte a ubicar el pedido. */
export function SupportEmailLink({ subject }: { subject?: string }) {
  const href = subject
    ? `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
    : `mailto:${SUPPORT_EMAIL}`;
  return (
    <a
      href={href}
      className="rounded-sm break-words text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50"
    >
      {SUPPORT_EMAIL}
    </a>
  );
}
