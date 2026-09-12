"use client"

import { useState } from "react"
import config from "@/config"
import MercadoPagoButton from "@/components/landing/MercadoPagoButton"

export default function PagoForm() {
  const copy = config.landing.pago
  const mp = config.payment.mercadoPago
  const [concept, setConcept] = useState(copy.conceptPlaceholder)
  const [amount, setAmount] = useState("")
  const [orderId, setOrderId] = useState("")

  const resolvedConcept = orderId
    ? `${concept.replace(/#\d+\s*$/, "").replace(/#\s*$/, "").trim()} #${orderId}`
    : concept

  return (
    <form
      className="mt-10 space-y-4 rounded-2xl border border-base-200 bg-base-100 p-6 md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="form-control w-full">
        <span className="mb-1 text-sm font-medium">{copy.orderLabel}</span>
        <input
          className="input input-bordered w-full"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder={copy.orderPlaceholder}
          autoComplete="off"
        />
      </label>

      <label className="form-control w-full">
        <span className="mb-1 text-sm font-medium">{copy.conceptLabel}</span>
        <input
          className="input input-bordered w-full"
          value={concept}
          onChange={(e) => setConcept(e.target.value)}
          placeholder={copy.conceptPlaceholder}
        />
      </label>

      <label className="form-control w-full">
        <span className="mb-1 text-sm font-medium">{copy.amountLabel}</span>
        <input
          className="input input-bordered w-full"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={copy.amountPlaceholder}
        />
      </label>

      <p className="text-sm text-base-content/60">{copy.helper}</p>

      {!mp.checkoutUrl && (
        <p className="rounded-lg border border-base-300 bg-base-200 px-3 py-2 text-sm text-base-content/70">
          {copy.missingLink}
        </p>
      )}

      <MercadoPagoButton
        amount={amount}
        concept={resolvedConcept}
        orderId={orderId}
        className="w-full"
      />
    </form>
  )
}
