"use client";

import { useRef, useState } from "react";
import {
  MANUAL_VIDEOS,
  type ManualVideo,
  type ManualVideoId,
} from "@/content/manual/videos";
import { cn } from "@/lib/utils";

const MONTHS = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const mmss = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

/** «noviembre de 2026», sin depender de la configuración regional del navegador. */
function monthOf(date: string) {
  const [year, month] = date.split("-");
  return `${MONTHS[Number(month) - 1]} de ${year}`;
}

/**
 * Un vídeo del manual con sus pasos como capítulos (03 §3.2). Se grabó en la
 * app real, sin audio: cada paso va rotulado en pantalla y el artículo lo
 * repite en texto.
 *
 * Ningún navegador dibuja los capítulos de un MP4, así que son dato del
 * registro (`content/manual/videos.ts`) y la lista la pinta este componente.
 * Los controles son los nativos, que ya funcionan con teclado.
 *
 * `preload="none"` con cartel: abrir el artículo no descarga el vídeo; la
 * descarga empieza al reproducir.
 */
export function Video({ id }: { id: ManualVideoId }) {
  const video: ManualVideo = MANUAL_VIDEOS[id];
  const ref = useRef<HTMLVideoElement>(null);
  const [second, setSecond] = useState(0);
  const base = `/manual/videos/${id}-${video.version}`;

  const current = [...video.chapters]
    .reverse()
    .find((chapter) => second + 0.25 >= chapter.start);

  const seek = (start: number) => {
    const element = ref.current;
    if (!element) return;
    setSecond(start);
    // Sin precarga, el primer salto llega antes que los metadatos: se aplica
    // en cuanto el navegador sabe cuánto dura.
    if (element.readyState === 0) {
      element.addEventListener(
        "loadedmetadata",
        () => {
          element.currentTime = start;
        },
        { once: true },
      );
    } else {
      element.currentTime = start;
    }
    void element.play().catch(() => {
      // Si el navegador no deja reproducir, el salto ya ocurrió.
    });
  };

  return (
    <figure className="space-y-3">
      <div className="overflow-hidden rounded-xl border bg-card">
        <video
          ref={ref}
          src={`${base}.mp4`}
          poster={`${base}.jpg`}
          controls
          playsInline
          preload="none"
          aria-label={`Vídeo: ${video.title}`}
          width={video.width}
          height={video.height}
          className="block h-auto w-full border-b bg-nexus-midnight"
          onTimeUpdate={(event) => setSecond(event.currentTarget.currentTime)}
        >
          {/* Los mismos rótulos que se ven en pantalla. No van activados por
              defecto: repetirían el rótulo debajo de sí mismo. */}
          <track
            kind="captions"
            src={`${base}.vtt`}
            srcLang="es"
            label="Español"
          />
        </video>
        <ol aria-label="Pasos del vídeo" className="divide-y divide-border/60">
          {video.chapters.map((chapter) => {
            const active = chapter === current;
            return (
              <li key={chapter.start}>
                <button
                  type="button"
                  onClick={() => seek(chapter.start)}
                  aria-current={active ? "step" : undefined}
                  className={cn(
                    "flex w-full items-baseline gap-3 px-4 py-2.5 text-left outline-none transition-colors hover:bg-muted/60 focus-visible:bg-muted/60 focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-inset",
                    active && "bg-muted/60",
                  )}
                >
                  <span
                    className={cn(
                      "w-10 shrink-0 font-mono text-xs tabular-nums",
                      active
                        ? "text-nexus-sapphire-text"
                        : "text-muted-foreground",
                    )}
                  >
                    {mmss(chapter.start)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">
                      {chapter.title}
                    </span>
                    {"detail" in chapter && chapter.detail ? (
                      <span className="block text-xs text-muted-foreground">
                        {chapter.detail}
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption className="text-sm text-muted-foreground">
        Vídeo «{video.title}» · {mmss(video.duration)} · sin audio: los pasos
        van rotulados en pantalla · grabado en {monthOf(video.recorded)} con
        Nexus {video.appVersion}
      </figcaption>
    </figure>
  );
}
