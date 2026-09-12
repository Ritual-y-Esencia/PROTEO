import Link from "next/link"
import config from "@/config"

export default function Audiences() {
  const { eyebrow, title, subtitle, featured, secondary } = config.landing.audiences

  return (
    <section id="audiencias" className="border-t border-base-200 bg-base-100 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-base-content/70">{subtitle}</p>}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((block) => (
            <article
              key={block.id}
              id={block.id}
              className="scroll-mt-24 rounded-2xl border-2 border-primary/30 bg-base-100 p-8 shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {block.kicker}
              </p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">{block.title}</h3>
              <p className="mt-3 text-sm leading-6 text-base-content/70">{block.body}</p>
              <ul className="mt-5 space-y-2 text-sm text-base-content/80">
                {block.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={block.cta.href} className="btn btn-accent mt-6">
                {block.cta.label}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {secondary.map((block) => (
            <article
              key={block.id}
              id={block.id}
              className="scroll-mt-24 rounded-xl border border-base-200 bg-base-200/50 px-5 py-5"
            >
              <h3 className="text-base font-semibold text-base-content/80">{block.title}</h3>
              <p className="mt-2 text-sm leading-6 text-base-content/60">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
