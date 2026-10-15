import { RiDownload2Line } from "@remixicon/react";
import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";
import {
  formatInstallerSize,
  formatReleaseDate,
  getLatestRelease,
} from "@/lib/releases";
import { APP_URL, RELEASES_URL } from "@/lib/site";
import { softwareApplication } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Descargar para Windows",
  description:
    "Descarga el instalador de la última versión de Nexus para Windows. Una vez instalado, se actualiza automáticamente.",
  ...pageMetadata("/descargar"),
};

const linkClassName =
  "rounded-sm text-nexus-sapphire-text underline-offset-4 outline-none hover:underline focus-visible:ring-[3px] focus-visible:ring-ring/50";

// El diseño y los textos: docs/plans/2026-10-13-descargar-design.md.
export default async function DownloadPage() {
  const release = await getLatestRelease();

  return (
    <div className="relative overflow-hidden">
      <JsonLd data={softwareApplication(release)} />
      <div
        aria-hidden="true"
        className="stage-glow pointer-events-none absolute inset-x-0 top-0 h-96"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div>
          <h1 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
            Descargar Nexus para Windows
          </h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
            El instalador de la última versión. Una vez instalado, Nexus se
            actualiza automáticamente.
          </p>

          {release ? (
            <div className="mt-10">
              <Button asChild size="lg" className="h-11">
                <a href={release.installerUrl}>
                  <RiDownload2Line aria-hidden="true" />
                  Descargar para Windows
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground tabular-nums">
                Versión {release.version} · publicada el{" "}
                {formatReleaseDate(release.publishedAt)} ·{" "}
                {formatInstallerSize(release.installerBytes)}
              </p>
            </div>
          ) : (
            <div className="mt-10">
              <Button asChild size="lg" className="h-11">
                <a href={RELEASES_URL}>Ver las versiones publicadas</a>
              </Button>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                No pudimos consultar la última versión. En esa página está el
                instalador más reciente: el archivo que termina en «setup.exe».
              </p>
            </div>
          )}

          {APP_URL ? (
            <p className="mt-6 text-sm text-muted-foreground">
              ¿Prefieres no instalar nada?{" "}
              <a href={APP_URL} className={linkClassName}>
                Entra desde el navegador
              </a>
            </p>
          ) : null}
        </div>

        <dl className="divide-y divide-border/60 border-y border-border/60 self-start">
          <div className="py-5">
            <dt className="font-medium">Al abrir el instalador</dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">
              El instalador aún no está firmado, y por eso Windows muestra un
              aviso antes de abrirlo. Haz clic en «Más información» y luego en
              «Ejecutar de todas formas».
            </dd>
          </div>
          <div className="py-5">
            <dt className="font-medium">Para entrar</dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">
              Nexus está en beta cerrada. Para crear una agencia necesitas un
              código de activación, que puedes{" "}
              <Link href="/solicitar-acceso" className={linkClassName}>
                solicitar aquí
              </Link>
              . Para entrar a una que ya existe, pide a tu agencia su código de
              invitación.
            </dd>
          </div>
          <div className="py-5">
            <dt className="font-medium">
              Lo que añade la aplicación instalada
            </dt>
            <dd className="mt-2 leading-relaxed text-muted-foreground">
              Una copia de tus documentos en una carpeta del computador, las
              notificaciones de Windows y el arranque con el equipo. Los datos
              son los mismos que ves en el navegador.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
