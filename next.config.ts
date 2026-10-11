import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// El sitio es estático y sirve todo desde su propio origen: sin backend, sin
// analítica de terceros y sin fuentes por CDN. La política empieza cerrada y
// cada origen externo que se añada se justifica aquí, en el mismo cambio
// (docs/directives/03-reglas-sitio.md §6).
//
// `script-src` conserva `'unsafe-inline'` porque Next inyecta su arranque en
// línea; `'unsafe-eval'` solo existe en desarrollo, donde lo pide la recarga
// en caliente.
const cspDirectives = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  `connect-src 'self'${isProd ? "" : " ws:"}`,
  "manifest-src 'self'",
  // Solo en producción: en http://localhost rompería el arranque.
  ...(isProd ? ["upgrade-insecure-requests"] : []),
];

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspDirectives.join("; ") },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  // HSTS solo en producción. Sin `preload`: entrar en la lista de los
  // navegadores compromete a todo el dominio y cuesta meses deshacerlo; se
  // añade cuando la app y el conector lleven tiempo en sus subdominios.
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains",
        },
      ]
    : []),
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
