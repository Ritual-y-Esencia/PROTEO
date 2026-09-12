import { Suspense } from "react"
import config from "@/config"
import QuoteForm from "@/components/landing/QuoteForm"

export const metadata = {
  title: "Cotización",
  description: config.landing.quote.subtitle,
}

export default function CotizacionPage() {
  const { eyebrow, title, subtitle, whatsappAfter } = config.landing.quote

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>
        <p className="mt-4 text-base-content/70">{subtitle}</p>
        <p className="mt-2 text-sm text-base-content/50">{whatsappAfter}</p>
        <div className="mt-10 rounded-2xl border border-base-200 bg-base-100 p-6 md:p-8">
          <Suspense fallback={<p className="text-sm text-base-content/50">Cargando formulario…</p>}>
            <QuoteForm source="cotizacion" />
          </Suspense>
        </div>
      </div>
    </section>
  )
}
