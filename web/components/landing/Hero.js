import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import config from "@/config"
import Logo from "@/components/Logo"

export default function Hero() {
  const {
    eyebrow,
    title,
    subtitle,
    cta,
    ctaSecondary,
    audiencePrompt,
    audienceChooser,
    process = [],
  } = config.landing.hero

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(75%_60%_at_50%_0%,#000,transparent)]"
        aria-hidden
      >
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute left-1/2 top-[-8rem] size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute right-[8%] top-[3rem] size-[360px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-20 pb-10 text-center md:pt-28">
        {config.brand.logoSrc && (
          <Logo className="mx-auto mb-8 h-36 w-auto max-w-md md:h-48" />
        )}
        {eyebrow && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/70 px-3 py-1 text-xs font-medium text-base-content/70 backdrop-blur">
            <Sparkles className="size-3.5 text-primary" />
            {eyebrow}
          </div>
        )}

        <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-base-content/70 md:text-xl">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href={cta.href} className="btn btn-accent btn-lg">
            {cta.label}
            <ArrowRight className="size-4" />
          </Link>
          {ctaSecondary && (
            <Link href={ctaSecondary.href} className="btn btn-ghost btn-lg">
              {ctaSecondary.label}
            </Link>
          )}
        </div>

        {audienceChooser?.length > 0 && (
          <div className="mx-auto mt-14 max-w-3xl">
            {audiencePrompt && (
              <p className="mb-4 text-sm font-medium text-base-content/60">{audiencePrompt}</p>
            )}
            <div className="grid gap-3 sm:grid-cols-2">
              {audienceChooser.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="rounded-2xl border-2 border-base-300 bg-base-100/80 px-5 py-5 text-left transition hover:border-primary hover:shadow-md"
                >
                  <span className="block text-base font-semibold">{item.label}</span>
                  {item.hint && (
                    <span className="mt-1 block text-sm text-base-content/60">{item.hint}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-20 md:pb-28">
        <ol className="grid gap-3 sm:grid-cols-3">
          {process.map((item) => (
            <li
              key={item.step}
              className="rounded-2xl border border-base-200 bg-base-100/90 px-5 py-6 text-center shadow-sm"
            >
              <p className="text-xs font-semibold tracking-widest text-primary">{item.step}</p>
              <p className="mt-2 font-medium">{item.label}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
