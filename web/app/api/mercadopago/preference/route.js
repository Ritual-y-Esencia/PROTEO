import { NextResponse } from "next/server"
import config from "@/config"

/**
 * Crea (o resuelve) una preferencia de Mercado Pago Checkout Pro.
 * Nunca recibe ni guarda datos de tarjeta: solo amount / concept / orderId.
 *
 * Hoy: si no hay MP_ACCESS_TOKEN, devuelve el checkoutUrl estático de config.
 * Mañana: con token de servidor, aquí se llama a la API de preferencias.
 */
export async function POST(request) {
  if (!config.features.mercadoPago) {
    return NextResponse.json({ error: "Pagos no disponibles." }, { status: 404 })
  }

  let amount
  let concept
  let orderId
  try {
    const body = await request.json()
    amount = body.amount
    concept = typeof body.concept === "string" ? body.concept.slice(0, 200) : ""
    orderId = typeof body.orderId === "string" ? body.orderId.slice(0, 80) : ""
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 })
  }

  const token = process.env.MP_ACCESS_TOKEN
  if (!token) {
    const init_point = config.payment.mercadoPago.checkoutUrl
    if (!init_point) {
      return NextResponse.json(
        { error: "Falta configurar el link de Checkout Pro." },
        { status: 503 }
      )
    }
    return NextResponse.json({
      init_point,
      mode: "static",
      amount: amount || null,
      concept: concept || null,
      orderId: orderId || null,
    })
  }

  // Placeholder: cuando conectes el access token, crea la preferencia aquí
  // con amount + concept y responde { init_point } de Mercado Pago.
  // No implementamos el llamado hasta que exista el token, para no romper
  // el modo sin env vars.
  return NextResponse.json(
    { error: "La creación dinámica de preferencias aún no está conectada." },
    { status: 501 }
  )
}
