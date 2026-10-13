import { describe, expect, test } from "bun:test";
import {
  formatInstallerSize,
  formatReleaseDate,
  parseLatestRelease,
} from "@/lib/releases";
import { RELEASES_URL } from "@/lib/site";

// El `latest.yml` de la 0.22.1, tal como lo publica electron-builder.
const manifest = `version: 0.22.1
files:
  - url: nexus-app-0.22.1-setup.exe
    sha512: t58lQITK6zrE0eUZ2plNjLr1wEIReMAjd8Jy+k4vA0Al+FM+JMcWv4U23I7/lYnSrWH74yLxCnPztptzO9pnQw==
    size: 140021669
path: nexus-app-0.22.1-setup.exe
sha512: t58lQITK6zrE0eUZ2plNjLr1wEIReMAjd8Jy+k4vA0Al+FM+JMcWv4U23I7/lYnSrWH74yLxCnPztptzO9pnQw==
releaseDate: '2026-10-13T02:36:49.172Z'
`;

describe("parseLatestRelease", () => {
  test("arma el enlace directo al instalador de la última versión", () => {
    expect(parseLatestRelease(manifest)).toEqual({
      version: "0.22.1",
      publishedAt: "2026-10-13T02:36:49.172Z",
      installerUrl: `${RELEASES_URL}/download/v0.22.1/nexus-app-0.22.1-setup.exe`,
      installerBytes: 140021669,
    });
  });

  test("lee el archivo con saltos de línea de Windows", () => {
    expect(parseLatestRelease(manifest.replaceAll("\n", "\r\n"))?.version).toBe(
      "0.22.1",
    );
  });

  test("sin instalador no hay versión que enseñar", () => {
    expect(parseLatestRelease(manifest.replace(/^path:.*$/m, ""))).toBeNull();
  });

  test("un archivo que no es el instalador, o trae una ruta, no vale", () => {
    expect(
      parseLatestRelease(manifest.replace(/^path:.*$/m, "path: otro.zip")),
    ).toBeNull();
    expect(
      parseLatestRelease(
        manifest.replace(/^path:.*$/m, "path: ../../x/nexus-setup.exe"),
      ),
    ).toBeNull();
    expect(
      parseLatestRelease(
        manifest.replace(/^path:.*$/m, "path: https://example.com/a-setup.exe"),
      ),
    ).toBeNull();
  });

  test("una respuesta con otra forma no rompe la página", () => {
    expect(parseLatestRelease(null)).toBeNull();
    expect(parseLatestRelease("Not Found")).toBeNull();
    expect(parseLatestRelease("<html><body>error</body></html>")).toBeNull();
    expect(
      parseLatestRelease(
        manifest.replace("version: 0.22.1", "version: latest"),
      ),
    ).toBeNull();
    expect(
      parseLatestRelease(
        manifest.replace(/^releaseDate:.*$/m, "releaseDate: ayer"),
      ),
    ).toBeNull();
  });
});

describe("formato", () => {
  test("la fecha es la de Colombia, no la UTC", () => {
    expect(formatReleaseDate("2026-10-13T02:36:49.172Z")).toBe("12/10/2026");
  });

  test("el tamaño va en MB enteros", () => {
    expect(formatInstallerSize(140021669)).toBe("134 MB");
  });
});
