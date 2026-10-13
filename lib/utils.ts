import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * `text-ui` es un tamaño propio (`03 §4`). Sin declararlo, tailwind-merge lo
 * toma por un color y lo borra en cuanto la misma llamada lleva
 * `text-foreground` o `text-muted-foreground`.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["ui"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
