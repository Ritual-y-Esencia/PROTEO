import { Suspense } from "react"
import config from "@/config"
import QuoteForm from "@/components/landing/QuoteForm"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export default function Contact() {
  const { eyebrow, title, subtitle } = config.landing.contact
  const waHref = buildWhatsAppUrl({ solicitud: "contacto" })

  return (
    <section id="contacto" className="scroll-mt-24 border-t border-base-200 bg-base-200/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
            <p className="mt-4 text-base-content/70">{subtitle}</p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-8"
            >
              {config.contact.buttonLabel}
            </a>
          </div>
          <div className="rounded-2xl border border-base-200 bg-base-100 p-6 md:p-8">
            <Suspense fallback={<p className="text-sm text-base-content/50">Cargando formulario…</p>}>
              <QuoteForm compact source="contacto" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
