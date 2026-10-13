"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// El sitio sigue al sistema y deja elegir (docs/directives/04 §11). La clase
// `.dark` va en <html>, igual que en la app.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
