import config from "@/config"
import CatalogCard from "@/components/landing/CatalogCard"

export const metadata = {
  title: "Catálogo",
  description: config.catalog.subtitle,
}

export default function CatalogoPage() {
  const { eyebrow, title, subtitle, emptyPricesNote, products } = config.catalog

  return (
    <section className="border-b border-base-200 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">{eyebrow}</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-base-content/70">{subtitle}</p>
          <p className="mt-2 text-sm text-base-content/50">{emptyPricesNote}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
