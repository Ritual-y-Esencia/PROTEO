import { NextResponse, after } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendEmail } from "@/lib/resend/send"
import config from "@/config"
import { getCatalogProduct } from "@/lib/catalog"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const body = await request.json()
    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.toLowerCase().trim() : ""
    const company = typeof body.company === "string" ? body.company.trim() : ""
    const audience = typeof body.audience === "string" ? body.audience.trim() : ""
    const productId = typeof body.productId === "string" ? body.productId.trim() : ""
    const volume = typeof body.volume === "string" ? body.volume.trim() : ""
    const message = typeof body.message === "string" ? body.message.trim() : ""
    const source = typeof body.source === "string" ? body.source.trim() : "cotizacion"

    if (!name || name.length > 200) {
      return NextResponse.json({ error: "Nombre inválido." }, { status: 400 })
    }
    if (!email || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email inválido." }, { status: 400 })
    }

    const product = getCatalogProduct(productId)
    const row = {
      name,
      email,
      company: company || null,
      audience: audience || null,
      product_id: product?.id || productId || null,
      volume: volume || null,
      message: message || null,
      source,
    }

    let stored = false
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabase = await createClient()
      const { error } = await supabase.from("quote_requests").insert(row)
      if (error) {
        console.error("[cotizacion] insert error:", error.message)
      } else {
        stored = true
      }
    }

    after(() =>
      sendEmail({
        to: config.email.supportEmail,
        subject: `Cotización PROTEO — ${name}`,
        body: [
          `Nombre: ${name}`,
          `Email: ${email}`,
          `Organización: ${company || "—"}`,
          `Perfil: ${audience || "—"}`,
          `Producto: ${product?.name || productId || "—"}`,
          `Volumen: ${volume || "—"}`,
          `Fuente: ${source}`,
          "",
          message || "(sin mensaje)",
        ].join("\n"),
      })
    )

    return NextResponse.json({ ok: true, stored })
  } catch {
    return NextResponse.json(
      { error: "Error procesando la solicitud." },
      { status: 500 }
    )
  }
}
