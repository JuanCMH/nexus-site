import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/600-italic.css";
import "./globals.css";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · El sistema de registro de tu agencia de seguros`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d1f3c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-dvh font-sans antialiased">{children}</body>
    </html>
  );
}
