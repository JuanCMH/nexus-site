import { describe, expect, test } from "bun:test";
import { formatLegalDate } from "@/lib/legal";

describe("formatLegalDate", () => {
  test("escribe la fecha de negocio sin correrla por la zona horaria", () => {
    expect(formatLegalDate("2026-10-21", "es-CO")).toBe(
      "21 de octubre de 2026",
    );
    expect(formatLegalDate("2026-10-21", "en-US")).toBe("October 21, 2026");
  });
});
