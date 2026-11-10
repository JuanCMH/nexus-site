import type { ReactNode } from "react";

/**
 * Una tabla de un artículo: qué significa cada estado, cada permiso o cada
 * mensaje. La primera columna es lo que la persona ve en la app.
 */
export function ManualTable({
  head,
  rows,
}: {
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/50 text-muted-foreground">
          <tr>
            {head.map((cell) => (
              <th key={cell} scope="col" className="px-4 py-2.5 font-medium">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row, index) => (
            // Las filas son fijas: el índice basta como clave.
            // biome-ignore lint/suspicious/noArrayIndexKey: filas estáticas
            <tr key={index}>
              {row.map((cell, column) => (
                <td
                  // biome-ignore lint/suspicious/noArrayIndexKey: celdas estáticas
                  key={column}
                  className={
                    column === 0
                      ? "px-4 py-3 align-top font-medium"
                      : "px-4 py-3 align-top leading-relaxed text-muted-foreground"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
