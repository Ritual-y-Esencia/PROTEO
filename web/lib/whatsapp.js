import config from "@/config"
import { getCatalogProduct } from "@/lib/catalog"

const SOLICITUD_LABELS = {
  cotizacion: "cotización",
  catalogo: "catálogo de productos",
  esg: "proyecto institucional / ESG",
  pago: "pago de pedido o anticipo",
  contacto: "información general",
}

export function productLabel(productId) {
  if (!productId) return null
  return getCatalogProduct(productId)?.name || productId
}

export function buildWhatsAppMessage({ product, solicitud } = {}) {
  const base = config.contact.defaultMessage
  const bits = []
  const producto = productLabel(product)
  if (producto) bits.push(`producto: ${producto}`)
  if (solicitud && SOLICITUD_LABELS[solicitud]) {
    bits.push(`solicitud: ${SOLICITUD_LABELS[solicitud]}`)
  } else if (solicitud) {
    bits.push(`solicitud: ${solicitud}`)
  }
  if (!bits.length) return base
  return `${base}. Contexto: ${bits.join("; ")}.`
}

export function buildWhatsAppUrl(params = {}) {
  const digits = config.contact.whatsappDigits.replace(/\D/g, "")
  const text = buildWhatsAppMessage(params)
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`
}
