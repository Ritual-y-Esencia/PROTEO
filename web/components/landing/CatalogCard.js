import Link from "next/link"
import config from "@/config"

export default function CatalogCard({ product }) {
  const quoteHref = `/cotizacion?producto=${encodeURIComponent(product.id)}`

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
      <div className="aspect-[16/10] bg-base-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm font-medium text-primary">{product.protein}</p>
        <p className="mt-3 text-sm leading-6 text-base-content/70">{product.use}</p>
        <ul className="mt-4 space-y-1 text-sm text-base-content/60">
          {product.specs.map((spec) => (
            <li key={spec}>• {spec}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Link href={quoteHref} className="btn btn-accent w-full">
            {config.catalog.quoteCta}
          </Link>
        </div>
      </div>
    </article>
  )
}
