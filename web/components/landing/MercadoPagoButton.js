"use client"

import { useState } from "react"
import config from "@/config"

/**
 * Botón de pago Mercado Pago Checkout Pro.
 * Nunca captura datos de tarjeta: solo redirige a Mercado Pago.
 *
 * Props futuras (backend): amount, concept, orderId.
 * Hoy: si hay checkoutUrl estático, abre ese link. Si hay API de
 * preferencias y responde init_point, usa esa URL.
 */
export default function MercadoPagoButton({
  amount,
  concept,
  orderId,
  checkoutUrl,
  className = "",
}) {
  const mp = config.payment.mercadoPago
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  if (!config.features.mercadoPago) return null

  const staticUrl = checkoutUrl || mp.checkoutUrl
  const canPay = Boolean(staticUrl) || Boolean(mp.createPreferencePath)

  async function onPay() {
    setError(null)
    setStatus("loading")
    try {
      if (mp.createPreferencePath && (amount || concept || orderId)) {
        const res = await fetch(mp.createPreferencePath, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amount ? Number(amount) : undefined,
            concept: concept || undefined,
            orderId: orderId || undefined,
          }),
        })
        const body = await res.json().catch(() => ({}))
        if (body.init_point) {
          window.location.assign(body.init_point)
          return
        }
        if (!res.ok && !staticUrl) {
          throw new Error(body.error || "No pudimos crear el pago.")
        }
      }
      if (staticUrl) {
        window.location.assign(staticUrl)
        return
      }
      throw new Error(config.landing.pago.missingLink)
    } catch (err) {
      setError(err.message)
      setStatus("error")
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={onPay}
        disabled={!canPay || status === "loading"}
        className={`btn btn-primary gap-2 ${className}`}
      >
        {status === "loading" && <span className="loading loading-spinner loading-sm" />}
        <MercadoPagoMark />
        {mp.buttonText}
      </button>
      {status === "error" && (
        <p role="alert" className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  )
}

function MercadoPagoMark() {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1.2 14.4H8.8v-1.6h4.4c.9 0 1.4-.4 1.4-1.2 0-.7-.5-1.1-1.4-1.1H8.8V11h4.2c.8 0 1.3-.4 1.3-1.1 0-.6-.5-1-1.3-1H8.8V7.2h4.5c2.1 0 3.3 1 3.3 2.5 0 1-.5 1.7-1.4 2.1.9.4 1.5 1.2 1.5 2.3 0 1.7-1.3 2.9-3.5 2.9z" />
    </svg>
  )
}
