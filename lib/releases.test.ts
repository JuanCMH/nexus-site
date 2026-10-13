import { describe, expect, test } from "bun:test";
import {
  formatInstallerSize,
  formatReleaseDate,
  parseLatestRelease,
} from "@/lib/releases";
import { RELEASES_URL } from "@/lib/site";

const installer = {
  name: "nexus-app-0.22.0-setup.exe",
  size: 140017090,
  browser_download_url: `${RELEASES_URL}/download/v0.22.0/nexus-app-0.22.0-setup.exe`,
};

const release = {
  tag_name: "v0.22.0",
  published_at: "2026-10-13T01:49:11Z",
  assets: [
    { name: "latest.yml", size: 350, browser_download_url: "x" },
    installer,
    {
      name: "nexus-app-0.22.0-setup.exe.blockmap",
      size: 147851,
      browser_download_url: `${RELEASES_URL}/download/v0.22.0/nexus-app-0.22.0-setup.exe.blockmap`,
    },
  ],
};

describe("parseLatestRelease", () => {
  test("elige el instalador entre los archivos de la publicación", () => {
    expect(parseLatestRelease(release)).toEqual({
      version: "0.22.0",
      publishedAt: "2026-10-13T01:49:11Z",
      installerUrl: installer.browser_download_url,
      installerBytes: 140017090,
    });
  });

  test("sin instalador no hay versión que enseñar", () => {
    expect(
      parseLatestRelease({ ...release, assets: [release.assets[0]] }),
    ).toBeNull();
  });

  test("un instalador que no sale del repositorio de publicaciones no vale", () => {
    const foreign = {
      ...installer,
      browser_download_url: "https://example.com/nexus-app-0.22.0-setup.exe",
    };
    expect(parseLatestRelease({ ...release, assets: [foreign] })).toBeNull();
  });

  test("un borrador o una versión previa no se enseñan", () => {
    expect(parseLatestRelease({ ...release, draft: true })).toBeNull();
    expect(parseLatestRelease({ ...release, prerelease: true })).toBeNull();
  });

  test("una respuesta con otra forma no rompe la página", () => {
    expect(parseLatestRelease(null)).toBeNull();
    expect(parseLatestRelease({ message: "Not Found" })).toBeNull();
    expect(parseLatestRelease({ ...release, tag_name: "latest" })).toBeNull();
    expect(parseLatestRelease({ ...release, published_at: "ayer" })).toBeNull();
  });
});

describe("formato", () => {
  test("la fecha es la de Colombia, no la UTC", () => {
    expect(formatReleaseDate("2026-10-13T01:49:11Z")).toBe("12/10/2026");
  });

  test("el tamaño va en MB enteros", () => {
    expect(formatInstallerSize(140017090)).toBe("134 MB");
  });
});
