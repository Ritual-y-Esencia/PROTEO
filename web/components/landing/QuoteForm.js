"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import config from "@/config"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { getCatalogProduct } from "@/lib/catalog"

export default function QuoteForm({ compact = false, source = "cotizacion" }) {
  const searchParams = useSearchParams()
  const presetProduct = searchParams.get("producto") || ""
  const presetSolicitud = searchParams.get("solicitud") || ""
  const { quote } = config.landing

  const defaultAudience =
    presetSolicitud === "esg" ? "esg" : presetSolicitud === "contacto" ? "otro" : "productor"

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    audience: defaultAudience,
    productId: getCatalogProduct(presetProduct)?.id || "",
    volume: "",
    message: "",
  })
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const waHref = buildWhatsAppUrl({
    product: form.productId || presetProduct || undefined,
    solicitud: presetSolicitud || source,
  })

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    try {
      const res = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source,
          solicitud: presetSolicitud || source,
        }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || "No pudimos enviar la solicitud.")
      setStatus("success")
    } catch (err) {
      setError(err.message)
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="space-y-4">
        <div
          role="status"
          className="rounded-xl border border-success/40 bg-success/10 px-4 py-6 text-success"
        >
          {quote.successMessage}
        </div>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          {config.contact.buttonLabel}
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 text-left">
      <div className={compact ? "grid gap-4" : "grid gap-4 sm:grid-cols-2"}>
        <Field label="Nombre" htmlFor={`${source}-name`}>
          <input
            id={`${source}-name`}
            required
            className="input input-bordered w-full"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            autoComplete="name"
          />
        </Field>
        <Field label="Correo" htmlFor={`${source}-email`}>
          <input
            id={`${source}-email`}
            type="email"
            required
            className="input input-bordered w-full"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            autoComplete="email"
          />
        </Field>
      </div>

      <Field label="Organización" htmlFor={`${source}-company`}>
        <input
          id={`${source}-company`}
          className="input input-bordered w-full"
          value={form.company}
          onChange={(e) => setField("company", e.target.value)}
          autoComplete="organization"
        />
      </Field>

      <Field label="Tu perfil" htmlFor={`${source}-audience`}>
        <select
          id={`${source}-audience`}
          className="select select-bordered w-full"
          value={form.audience}
          onChange={(e) => setField("audience", e.target.value)}
        >
          {quote.audienceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Producto" htmlFor={`${source}-product`}>
        <select
          id={`${source}-product`}
          className="select select-bordered w-full"
          value={form.productId}
          onChange={(e) => setField("productId", e.target.value)}
        >
          <option value="">Proyecto / aún no lo sé</option>
          {config.catalog.products.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Volumen o alcance (aproximado)" htmlFor={`${source}-volume`}>
        <input
          id={`${source}-volume`}
          className="input input-bordered w-full"
          placeholder="Ej. 2 t/mes, o toneladas de orgánico/semana"
          value={form.volume}
          onChange={(e) => setField("volume", e.target.value)}
        />
      </Field>

      <Field label="Mensaje" htmlFor={`${source}-message`}>
        <textarea
          id={`${source}-message`}
          className="textarea textarea-bordered w-full min-h-28"
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
          placeholder="Dieta, especie, o tipo de residuo / reporte ESG que necesitas."
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-accent" disabled={status === "loading"}>
          {status === "loading" && <span className="loading loading-spinner loading-sm" />}
          {status === "loading" ? "Enviando…" : quote.buttonLabel}
        </button>
        <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          {config.contact.buttonLabel}
        </a>
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-error">
          {error} También puedes escribirnos por WhatsApp.
        </p>
      )}
    </form>
  )
}

function Field({ label, htmlFor, children }) {
  return (
    <label className="form-control w-full" htmlFor={htmlFor}>
      <span className="mb-1 text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
