"use client";

import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { NAV_LINKS } from "@/components/site/nav-links";
import { Button } from "@/components/ui/button";

export function MobileMenu({ appUrl }: { appUrl: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <Button
        type="button"
        variant="ghost"
        size="icon-lg"
        className="size-11"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <RiCloseLine /> : <RiMenuLine />}
      </Button>
      {open ? (
        <nav
          id={panelId}
          aria-label="Principal"
          className="absolute inset-x-0 top-14 border-b bg-background px-6 pb-6 pt-2"
        >
          <ul className="divide-y divide-border/60">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center text-base"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {appUrl ? (
              <li>
                <a
                  href={appUrl}
                  className="flex min-h-12 items-center text-base"
                >
                  Iniciar sesión
                </a>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
