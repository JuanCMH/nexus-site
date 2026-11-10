import Image from "next/image";
import {
  MANUAL_SCREENSHOTS,
  type ManualScreenshotId,
} from "@/content/manual/screenshots";

/**
 * Una captura real de la app (01 §7), en el tema del lector: el par claro y
 * oscuro del mismo encuadre. El `id` está tipado contra el registro de
 * capturas: si una desaparece, el artículo deja de compilar.
 */
export function Screenshot({
  id,
  caption,
}: {
  id: ManualScreenshotId;
  /** Pie de la figura. Es también el texto alternativo. */
  caption: string;
}) {
  const { width, height, version } = MANUAL_SCREENSHOTS[id];
  const light = `/manual/${id}-${version}.png`;
  const dark = `/manual/${id}-${version}-dark.png`;
  // Las capturas son a doble densidad: a su mitad se ven a tamaño real, y
  // un formulario estrecho no se estira hasta el ancho de la columna.
  const style = { maxWidth: width / 2 };

  return (
    <figure className="space-y-3">
      <div
        style={style}
        className="overflow-hidden rounded-xl border bg-muted/30"
      >
        <Image
          src={light}
          alt={caption}
          width={width}
          height={height}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="w-full dark:hidden"
        />
        <Image
          src={dark}
          alt={caption}
          width={width}
          height={height}
          sizes="(min-width: 768px) 42rem, 100vw"
          className="hidden w-full dark:block"
        />
      </div>
      <figcaption className="text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
