import { describe, expect, test } from "bun:test";
import { annualTotals, formatUsd, PRICED_PLANS } from "@/lib/pricing";

describe("las cifras aprobadas", () => {
  test("total del año y ahorro", () => {
    expect(PRICED_PLANS.map(annualTotals)).toEqual([
      { total: 384, savings: 84 },
      { total: 1284, savings: 264 },
      { total: 2784, savings: 564 },
    ]);
  });

  test("correos vinculados: Independiente 2; los demás, uno por usuario incluido más 2", () => {
    expect(PRICED_PLANS.map((plan) => plan.mailboxes)).toEqual([2, 7, 17]);
  });
});

describe("formatUsd", () => {
  test("punto de miles también con cuatro dígitos, y coma decimal", () => {
    expect(formatUsd(1284)).toBe("USD 1.284");
    expect(formatUsd(39)).toBe("USD 39");
    expect(formatUsd(25.8)).toBe("USD 25,80");
  });
});

describe("lo que la página destaca", () => {
  test("un solo plan recomendado: Agencia", () => {
    expect(
      PRICED_PLANS.filter((plan) => plan.recommended).map((plan) => plan.id),
    ).toEqual(["agencia"]);
  });

  test("el plan de Claude recomendado para cada plan", () => {
    expect(PRICED_PLANS.map((plan) => plan.claudePlan)).toEqual([
      "Pro",
      "Max 5x",
      "Max 20x",
    ]);
  });
});
