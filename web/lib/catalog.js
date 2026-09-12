import config from "@/config"

export function getCatalogProduct(id) {
  if (!id) return null
  return config.catalog.products.find((p) => p.id === id) || null
}

export function isCatalogProductId(id) {
  return Boolean(getCatalogProduct(id))
}
