"use client";

import { RiCheckLine } from "@remixicon/react";
import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Status = "idle" | "sending" | "received" | "error" | "too-many";

const MESSAGES: Record<"error" | "too-many", string> = {
  error:
    "No se pudo enviar la solicitud. Revisa tu conexión e inténtalo de nuevo.",
  "too-many":
    "Recibimos demasiadas solicitudes desde tu red. Inténtalo de nuevo en unos minutos.",
};

/**
 * El formulario de «Solicitar acceso». Envía al backend de `nexus-app`
 * (`POST <apiUrl>/access-requests`); el contrato está en
 * docs/directives/03-reglas-sitio.md §8. Sin `apiUrl` no finge: avisa que
 * las solicitudes aún no están abiertas.
 */
export function AccessRequestForm({ apiUrl }: { apiUrl: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const agencyName = String(data.get("agencyName") ?? "").trim();
    // Campo trampa: una persona no lo ve; quien lo completa no es una persona.
    const website = String(data.get("website") ?? "");

    setStatus("sending");
    try {
      const response = await fetch(`${apiUrl}/access-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, agencyName, website }),
      });
      if (response.status === 429) return setStatus("too-many");
      if (!response.ok) return setStatus("error");
      setSentTo(email);
      setStatus("received");
    } catch {
      setStatus("error");
    }
  }

  if (status === "received") {
    return (
      <output className="block self-start rounded-lg border bg-card p-6">
        <span className="flex size-9 items-center justify-center rounded-xl border border-nexus-emerald/10 bg-nexus-emerald/10 text-nexus-emerald-text">
          <RiCheckLine className="size-5" aria-hidden="true" />
        </span>
        <h2 className="mt-4 text-lg font-medium tracking-tight">
          Recibimos tu solicitud
        </h2>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          La revisamos y, si hay cupo en la beta, te escribimos a{" "}
          <span className="text-foreground">{sentTo}</span> con un código de
          activación.
        </p>
      </output>
    );
  }

  const unavailable = apiUrl === "";
  const sending = status === "sending";

  return (
    <form
      onSubmit={onSubmit}
      className="self-start rounded-lg border bg-card p-6"
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="access-email">Correo</Label>
          <Input
            id="access-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            className="h-11"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="access-agency">Nombre de la agencia</Label>
          <Input
            id="access-agency"
            name="agencyName"
            type="text"
            autoComplete="organization"
            required
            maxLength={120}
            className="h-11"
          />
        </div>
        <div aria-hidden="true" className="hidden">
          <label htmlFor="access-website">No completes este campo</label>
          <input
            id="access-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      {status === "error" || status === "too-many" ? (
        <p role="alert" className="mt-5 text-sm text-destructive-text">
          {MESSAGES[status]}
        </p>
      ) : null}

      {unavailable ? (
        <p className="mt-5 rounded-md border border-nexus-amber/10 bg-nexus-amber/10 px-3 py-2 text-sm text-nexus-amber-text">
          Las solicitudes aún no están abiertas
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        disabled={unavailable || sending}
        className="mt-6 h-11 w-full"
      >
        {sending ? "Enviando la solicitud" : "Solicitar acceso"}
      </Button>
    </form>
  );
}
