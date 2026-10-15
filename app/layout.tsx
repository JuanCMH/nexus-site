import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ThemeProvider } from "@/components/site/theme-provider";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { siteGraph } from "@/lib/structured-data";

// Outfit, el mismo archivo de @fontsource, cargado con next/font: se
// precarga y trae un respaldo con métricas ajustadas, así el cambio de
// fuente no mueve el texto (docs/directives/00-reglas-generales.md §4).
const outfit = localFont({
  src: "../node_modules/@fontsource-variable/outfit/files/outfit-latin-wght-normal.woff2",
  variable: "--font-outfit",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Sistema para agencias de seguros en Colombia`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  // La canónica y el og:url los pone cada página (lib/metadata.ts): aquí los
  // heredaría cualquier ruta, la 404 incluida.
  openGraph: { type: "website", locale: "es_CO", siteName: SITE_NAME },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1f3c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // next-themes pone la clase del tema en <html> antes de hidratar.
    <html lang="es" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-dvh font-sans antialiased">
        <JsonLd data={siteGraph} />
        <ThemeProvider>
          <a
            href="#contenido"
            className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-primary focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:text-primary-foreground"
          >
            Saltar al contenido
          </a>
          <SiteHeader />
          <main id="contenido">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
