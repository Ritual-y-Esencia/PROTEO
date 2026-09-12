import config from "@/config"
import PagoForm from "@/components/landing/PagoForm"

export const metadata = {
  title: "Pago",
  description: config.landing.pago.subtitle,
}

export default function PagoPage() {
  const copy = config.landing.pago

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-sm font-medium uppercase tracking-wider text-primary">{copy.eyebrow}</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{copy.title}</h1>
        <p className="mt-4 text-base-content/70">{copy.subtitle}</p>
        <PagoForm />
      </div>
    </section>
  )
}
