import { describe, expect, test } from "bun:test";
import {
  formatCopEstimate,
  formatTrmDate,
  formatTrmValue,
  pickCurrentTrm,
  todayInColombia,
} from "@/lib/trm";

// La respuesta de datos.gov.co del 2026-10-14: la de mañana ya publicada.
const rows = [
  {
    valor: "3197.65",
    unidad: "COP",
    vigenciadesde: "2026-10-15T00:00:00.000",
    vigenciahasta: "2026-10-15T00:00:00.000",
  },
  {
    valor: "3181.74",
    unidad: "COP",
    vigenciadesde: "2026-10-14T00:00:00.000",
    vigenciahasta: "2026-10-14T00:00:00.000",
  },
];

describe("pickCurrentTrm", () => {
  test("toma la que rige hoy, no la de mañana", () => {
    expect(pickCurrentTrm(rows, "2026-10-14")).toEqual({
      value: 3181.74,
      since: "2026-10-14",
    });
    expect(pickCurrentTrm(rows, "2026-10-15")?.value).toBe(3197.65);
  });

  test("la de un sábado rige hasta el lunes", () => {
    const weekend = [
      {
        valor: "3200",
        vigenciadesde: "2026-10-17T00:00:00.000",
        vigenciahasta: "2026-10-19T00:00:00.000",
      },
    ];
    expect(pickCurrentTrm(weekend, "2026-10-19")?.value).toBe(3200);
  });

  test("sin una que rija hoy, no hay pesos que enseñar", () => {
    expect(pickCurrentTrm(rows, "2026-10-20")).toBeNull();
  });

  test("una respuesta con otra forma no rompe la página", () => {
    expect(pickCurrentTrm(null, "2026-10-14")).toBeNull();
    expect(pickCurrentTrm({ error: true }, "2026-10-14")).toBeNull();
    expect(
      pickCurrentTrm(
        [
          {
            valor: "abc",
            vigenciadesde: "2026-10-14",
            vigenciahasta: "2026-10-14",
          },
          {
            valor: "3",
            vigenciadesde: "2026-10-14",
            vigenciahasta: "2026-10-14",
          },
        ],
        "2026-10-14",
      ),
    ).toBeNull();
  });
});

describe("formatos", () => {
  const trm = { value: 3181.74, since: "2026-10-14" };

  test("los pesos van redondeados a miles", () => {
    expect(formatCopEstimate(129, trm)).toBe("≈ COP 410.000");
    expect(formatCopEstimate(39, trm)).toBe("≈ COP 124.000");
  });

  test("la TRM y su fecha", () => {
    expect(formatTrmValue(trm)).toBe("COP 3.181,74");
    expect(formatTrmDate(trm)).toBe("14/10/2026");
  });

  test("hoy, en hora de Colombia", () => {
    // 2026-10-15 a las 2:00 UTC son las 21:00 del 14 en Bogotá.
    expect(todayInColombia(new Date("2026-10-15T02:00:00Z"))).toBe(
      "2026-10-14",
    );
  });
});
