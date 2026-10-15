type PlanFactsProps = {
  facts: readonly { label: string; value: string }[];
};

/** Lo que trae un plan, fila por fila. */
export function PlanFacts({ facts }: PlanFactsProps) {
  return (
    <dl className="mt-6 mb-8 divide-y divide-border/60 border-y border-border/60 text-sm">
      {facts.map((fact) => (
        <div key={fact.label} className="py-3">
          <dt className="text-muted-foreground">{fact.label}</dt>
          <dd className="mt-0.5 tabular-nums">{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
