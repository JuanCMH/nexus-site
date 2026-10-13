"use client";

import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// Los dos iconos van siempre en el HTML y los alterna la clase `.dark`: así
// el servidor y el navegador pintan lo mismo sin esperar a la hidratación.
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="max-md:size-11"
      aria-label="Cambiar entre tema claro y oscuro"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <RiSunLine className="hidden dark:block" />
      <RiMoonLine className="dark:hidden" />
    </Button>
  );
}
