// ============================================================
// Vibecoding · config.js
// ------------------------------------------------------------
// ESTE ES EL ARCHIVO MÁS IMPORTANTE DEL BOILERPLATE.
// Todo el branding, copy, features y configuración del producto vive aquí.
// Cambiar este archivo cambia el producto entero — sin abrir JSX.
// ============================================================

const config = {
  // -----------------------------------------------------------
  // Identidad del producto
  // -----------------------------------------------------------
  app: {
    name: "PROTEO",
    description:
      "Biotecnología de Mosca Soldado Negra (BSF): convertimos residuo orgánico en proteína, aceite y fertilizante (frass) de alto valor mediante bioconversión controlada.",
    domain: "proteo-bsf.lovable.app", // sin https://, sin www
    locale: "es", // "es" | "en"
    defaultUrl: "http://localhost:3000",
  },

  // -----------------------------------------------------------
  // Identidad visual
  // -----------------------------------------------------------
  brand: {
    primary: "#1D6B4A",
    logoText: "PROTEO",
    logoSrc: null,
    radius: "1rem",
  },

  // -----------------------------------------------------------
  // Toggles de features
  // -----------------------------------------------------------
  features: {
    waitlist: false,
    googleAuth: true,
    emailLogin: false,
    aiChat: true,
    toolUse: true,
    agents: true,
    resend: true,
    pricing: false,
    paypal: false,
    adminPanel: true,
    catalog: true,
    mercadoPago: true,
    whatsapp: true,
  },

  // -----------------------------------------------------------
  // PayPal.me (legado de la plantilla; el cobro de PROTEO es Mercado Pago)
  // -----------------------------------------------------------
  payment: {
    paypalMeUsername: "",
    defaultAmount: 0,
    currency: "MXN",
    buttonText: "Pagar con PayPal",
    mercadoPago: {
      // Link de Checkout Pro (init_point) o checkoutUrl que tú configures.
      // También puedes inyectarlo en build con NEXT_PUBLIC_MP_CHECKOUT_URL.
      checkoutUrl: process.env.NEXT_PUBLIC_MP_CHECKOUT_URL || "",
      // Cuando exista backend, el botón POST a esta ruta con { amount, concept, orderId }.
      createPreferencePath: "/api/mercadopago/preference",
      buttonText: "Pagar con Mercado Pago",
      currency: "MXN",
    },
  },

  // -----------------------------------------------------------
  // WhatsApp (wa.me). El número va en dígitos internacionales, sin + ni espacios.
  // -----------------------------------------------------------
  contact: {
    whatsappDigits: "526143032886",
    defaultMessage: "Hola, quiero información sobre Proteo (BSF)",
    buttonLabel: "Escríbenos por WhatsApp",
    floatAriaLabel: "Abrir chat de WhatsApp",
  },

  // -----------------------------------------------------------
  // Catálogo (vitrina, sin precio público)
  // -----------------------------------------------------------
  catalog: {
    eyebrow: "Catálogo",
    title: "Ingredientes BSF para formulación y operación",
    subtitle:
      "Vitrina técnica sin precio público: la cotización se arma según volumen, logística y especificación. Solicita una propuesta para tu operación.",
    quoteCta: "Solicitar cotización",
    emptyPricesNote: "Los precios se cotizan por pedido. No se publican en el sitio.",
    products: [
      {
        id: "harina",
        name: "Harina de larva",
        image: "/catalog/harina.svg",
        protein: "45–55% proteína cruda (típico, base seca)",
        use: "Ingrediente proteico para alimento avícola, porcícola, acuícola y pet food; complemento o sustitución parcial de harinas importadas.",
        specs: [
          "Presentación: harina / meal de larva BSF",
          "Uso recomendado: formulación de dietas",
          "Calidad: lote trazable, especificación por pedido",
        ],
      },
      {
        id: "larva-seca",
        name: "Larva seca",
        image: "/catalog/larva-seca.svg",
        protein: "≈40–45% proteína cruda (típico, entero seco)",
        use: "Inclusión como ingrediente entero o premezcla; útil cuando se busca proteína + grasa en un solo insumo.",
        specs: [
          "Presentación: larva deshidratada",
          "Uso recomendado: formuladores y plantas de alimento",
          "Manejo: estable en almacén vs. larva viva",
        ],
      },
      {
        id: "larva-viva",
        name: "Larva viva",
        image: "/catalog/larva-viva.svg",
        protein: "Proteína y humedad nativas (fresco)",
        use: "Alimento fresco o insumo de proceso; requiere cadena logística acordada (retiro o entrega programada).",
        specs: [
          "Presentación: larva viva / biomasa fresca",
          "Uso recomendado: operaciones con logística coordinada",
          "Nota: no es un SKU de anaquel; se programa por lote",
        ],
      },
    ],
  },

  // -----------------------------------------------------------
  // OpenAI
  // -----------------------------------------------------------
  ai: {
    chatModel: "gpt-4o-mini",
    structuredModel: "gpt-4o-mini",
    agentModel: "gpt-4o",
    maxTokens: 1500,
    temperature: 0.4,
  },

  // -----------------------------------------------------------
  // Resend (email transaccional)
  // -----------------------------------------------------------
  email: {
    from: "PROTEO <onboarding@resend.dev>",
    replyTo: "hola@proteo.mx",
    supportEmail: "hola@proteo.mx",
  },

  // -----------------------------------------------------------
  // Auth providers
  // -----------------------------------------------------------
  auth: {
    loginUrl: "/login",
    afterLoginUrl: "/dashboard",
    afterLogoutUrl: "/",
    providers: ["google"],
  },

  // -----------------------------------------------------------
  // Landing — copy de la página pública
  // -----------------------------------------------------------
  landing: {
    nav: [
      { label: "Problema", href: "/#problema" },
      { label: "Tecnología", href: "/#tecnologia" },
      { label: "Impacto", href: "/#impacto" },
      { label: "Catálogo", href: "/catalogo" },
      { label: "Pago", href: "/pago" },
      { label: "Contacto", href: "/#contacto" },
    ],
    navCta: { label: "Solicitar cotización", href: "/cotizacion" },
    hero: {
      eyebrow: "Black Soldier Fly Technology",
      title: "La naturaleza no genera residuos; transforma continuamente la materia",
      subtitle:
        "PROTEO opera bioconversión controlada con larva de Mosca Soldado Negra (BSF): residuo orgánico entra al sistema; salen proteína, aceite y fertilizante (frass) con trazabilidad de proceso.",
      cta: { label: "Ver catálogo", href: "/catalogo" },
      ctaSecondary: { label: "Solicitar cotización", href: "/cotizacion" },
      audiencePrompt: "Elige cómo quieres entrar a la conversación:",
      audienceChooser: [
        {
          id: "productores",
          label: "Soy productor pecuario",
          hint: "Proteína para alimento animal",
          href: "/#productores",
        },
        {
          id: "esg",
          label: "Represento un gobierno o programa ESG",
          hint: "Infraestructura y reportes de impacto",
          href: "/#esg",
        },
      ],
      process: [
        { step: "01", label: "Residuo orgánico" },
        { step: "02", label: "Larva BSF" },
        { step: "03", label: "Proteína · aceite · frass" },
      ],
    },
    audiences: {
      eyebrow: "A quién servimos",
      title: "Dos conversaciones distintas. Un mismo sistema biológico.",
      subtitle:
        "No mezclamos el pitch: el productor pecuario compra un insumo nutricional; el actor institucional compra desvío de residuo, datos y capacidad de bioconversión.",
      featured: [
        {
          id: "productores",
          kicker: "ICP · Productores pecuarios",
          title: "Proteína que complementa o sustituye harina importada",
          body: "Avícola, porcícola, acuícola y pet food: el dolor no es “comprar larva”, es formular con un insumo de calidad nutricional consistente y precio competitivo frente a harinas importadas. PROTEO cotiza harina, larva seca y larva viva contra tu dieta y tu volumen.",
          points: [
            "Especificación por lote (proteína y uso recomendado)",
            "Vitrina técnica; precio en cotización, no en anaquel",
            "Conversación con nutricionistas y compras de alimento",
          ],
          cta: { label: "Ir al catálogo de proteína", href: "/catalogo" },
        },
        {
          id: "esg",
          kicker: "ICP · Gobiernos, municipios y ESG / B2B institucional",
          title: "Residuo orgánico medible, no un SKU de proteína",
          body: "El KPI es desvío de relleno sanitario, reducción de GEI y evidencia auditable. Buscan infraestructura de bioconversión y reportes de impacto — no un saco de harina. PROTEO estructura el proyecto, el flujo de biomasa y la bitácora para tu programa.",
          points: [
            "Bioconversión como infraestructura, no como commodity suelta",
            "Métricas de desvío y proceso para ESG / auditoría",
            "Acompañamiento a licitaciones y programas públicos o corporativos",
          ],
          cta: { label: "Plantear un proyecto institucional", href: "/cotizacion?solicitud=esg" },
        },
      ],
      secondary: [
        {
          id: "generadores",
          title: "Generadores de residuo orgánico",
          body: "Agroindustria, food service y cadenas con fracción orgánica: valoramos el residuo como materia prima del proceso BSF, con acopio y condiciones de ingreso definidas.",
        },
        {
          id: "agricultores",
          title: "Agricultores",
          body: "El frass (fertilizante de proceso) cierra el ciclo en suelo. No es el ICP comercial principal; es el tercer producto del sistema cuando hay demanda agronómica.",
        },
      ],
    },
    problem: {
      eyebrow: "Problema",
      title: "Dos cuellos de botella, dos mercados que casi nunca se hablan.",
      subtitle:
        "La proteína para alimento animal depende de harinas importadas volátiles. El residuo orgánico termina en relleno, con costo ambiental y casi cero trazabilidad. El mismo proceso BSF atiende ambos, con mensajes y contratos distintos.",
      items: [
        {
          icon: "Wheat",
          title: "Proteína importada, margen local",
          body: "Quien formula alimento necesita un insumo estable. Sin especificación ni volumen comprometido, la larva es anécdota, no ingrediente.",
        },
        {
          icon: "LandPlot",
          title: "Orgánico que no se reporta",
          body: "Municipios y programas ESG no pueden auditar lo que se entierra. Falta infraestructura y un dato de desvío creíble.",
        },
        {
          icon: "GitBranch",
          title: "Un pitch genérico no cierra",
          body: "Vender “sostenibilidad” al pecuario o “harina” al gobierno diluye las dos ventas. PROTEO separa audiencia, oferta y prueba.",
        },
      ],
    },
    features: {
      id: "tecnologia",
      eyebrow: "Tecnología",
      title: "Bioconversión controlada con Mosca Soldado Negra.",
      subtitle:
        "No es compostaje improvisado: es un proceso de larva BSF con condiciones, lotes y productos definidos (proteína, aceite, frass).",
      items: [
        {
          icon: "Bug",
          title: "Larva BSF como biorreactor",
          body: "Hermetia illucens convierte fracción orgánica en biomasa en días, no en meses de descomposición pasiva.",
        },
        {
          icon: "Gauge",
          title: "Proceso controlado",
          body: "Temperatura, humedad, receta de dieta y tiempo de cosecha se operan como parámetros, no como ocurrencia.",
        },
        {
          icon: "FlaskConical",
          title: "Tres salidas de valor",
          body: "Harina y larva (proteína/grasa), aceite de proceso y frass. Cada corriente tiene cliente y especificación distinta.",
        },
        {
          icon: "ClipboardCheck",
          title: "Trazabilidad de lote",
          body: "Entrada de residuo y salida de producto se pueden documentar: base para cotización pecuaria y para reporte ESG.",
        },
        {
          icon: "ShieldCheck",
          title: "Calidad nutricional consistente",
          body: "El pecuario compra repetibilidad. La cotización parte de una ficha técnica, no de un promedio de internet.",
        },
        {
          icon: "Leaf",
          title: "Cierre de ciclo",
          body: "Lo que no va a proteína ni aceite queda como enmienda. El residuo deja de ser pasivo ambiental y entra a contabilidad de materia.",
        },
      ],
    },
    impact: {
      eyebrow: "Impacto",
      title: "Desvío de residuo y proteína local: el mismo flujo, dos reportes.",
      subtitle:
        "Al pecuario le importa el perfil del ingrediente. Al programa ESG le importa toneladas desviadas, GEI evitados y evidencia. Medimos el proceso para poder hablarle a los dos sin inventar un indicador único.",
      items: [
        {
          icon: "Scale",
          title: "Materia que no va a relleno",
          body: "Cada lote de dieta de larva es residuo orgánico que no se enterró. Ese es el numerador que un municipio puede auditar.",
        },
        {
          icon: "Factory",
          title: "Proteína producida en origen",
          body: "Harina y larva desplazan, en la dieta, una fracción de harina importada. El valor se discute en formulación, no en eslogan.",
        },
        {
          icon: "LineChart",
          title: "Bitácora para ESG",
          body: "Entradas, rendimientos y salidas se pueden tabular. El reporte institucional no depende de una foto de la planta.",
        },
      ],
    },
    quote: {
      eyebrow: "Cotización",
      title: "Cuéntanos el volumen y el uso. Armamos la propuesta.",
      subtitle:
        "Sin precio en vitrina: la cotización depende de producto, cantidad, presentación y logística. Si ya hablaste con nosotros, el pago de pedido o anticipo está en /pago.",
      successMessage: "Recibimos tu solicitud. Te contactamos para afinar especificación y entrega.",
      buttonLabel: "Enviar solicitud",
      whatsappAfter: "¿Prefieres ir más rápido?",
      audienceOptions: [
        { value: "productor", label: "Productor pecuario (alimento animal)" },
        { value: "esg", label: "Gobierno / municipio / programa ESG" },
        { value: "generador", label: "Generador de residuo orgánico" },
        { value: "agricultor", label: "Agricultor (frass)" },
        { value: "otro", label: "Otro" },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Correo o WhatsApp: la misma mesa técnica.",
      subtitle:
        "Usa el formulario para una cotización con contexto, o ábreos un WhatsApp si quieres una primera respuesta inmediata.",
    },
    pago: {
      eyebrow: "Pago",
      title: "Paga un pedido o anticipo ya cotizado",
      subtitle:
        "Esta página es para clientes con cotización aprobada. El cobro se hace en Mercado Pago (Checkout Pro): no capturamos tarjetas en este sitio.",
      conceptLabel: "Concepto",
      conceptPlaceholder: "Anticipo 30% — Pedido #123",
      amountLabel: "Monto (referencia)",
      amountPlaceholder: "Ej. 15000",
      orderLabel: "Número de pedido (opcional)",
      orderPlaceholder: "123",
      helper:
        "El monto y el concepto viajan con el botón para cuando el backend cree la preferencia de Mercado Pago. Mientras tanto, el botón abre el link de Checkout Pro que configures.",
      missingLink:
        "Aún no hay un link de Checkout Pro configurado. Pega tu URL en config.payment.mercadoPago.checkoutUrl (o NEXT_PUBLIC_MP_CHECKOUT_URL) cuando lo tengas.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suele preguntar cada audiencia.",
      items: [
        {
          q: "¿Publican el precio de la harina o la larva?",
          a: "No. El catálogo es vitrina técnica. El precio sale en cotización según producto, volumen, presentación y logística.",
        },
        {
          q: "¿La harina sustituye 100% la harina importada?",
          a: "Se cotiza como complemento o sustitución parcial según la dieta. La inclusión la define tu nutricionista con la ficha del lote.",
        },
        {
          q: "¿Un municipio “compra proteína”?",
          a: "En general no. El contrato institucional es infraestructura de bioconversión, acopio de orgánico y reporte de desvío / impacto. La proteína es un coproducto del sistema.",
        },
        {
          q: "¿Cómo se paga un pedido?",
          a: "Con cotización aprobada, usas /pago. El cargo ocurre en Mercado Pago; PROTEO no procesa ni almacena datos de tarjeta.",
        },
        {
          q: "¿Puedo pedir larva viva?",
          a: "Sí, como SKU logístico: se programa por lote. No es un producto de anaquel; la cotización incluye ventana de entrega o retiro.",
        },
      ],
    },
    finalCta: {
      eyebrow: "Siguiente paso",
      title: "Elige tu mesa: formulación o infraestructura.",
      subtitle:
        "Si formulas alimento, pide cotización de harina o larva. Si operas un programa de residuo, plantea el proyecto de bioconversión y el reporte que necesitas auditar.",
      cta: { label: "Solicitar cotización", href: "/cotizacion" },
      ctaSecondary: { label: "Hablar por WhatsApp", href: "/#contacto" },
    },
    waitlist: {
      eyebrow: "Únete primero",
      title: "Sé de los primeros en saber.",
      subtitle: "Déjanos tu correo y te avisamos cuando esto arranque.",
      successMessage: "¡Listo! Te avisamos en cuanto haya novedades.",
      buttonLabel: "Quiero entrar",
      placeholder: "tu@email.com",
    },
    footer: {
      tagline:
        "PROTEO — bioconversión con Mosca Soldado Negra: proteína, aceite y frass a partir de residuo orgánico.",
      columns: [
        {
          title: "Producto",
          links: [
            { label: "Catálogo", href: "/catalogo" },
            { label: "Cotización", href: "/cotizacion" },
            { label: "Pago", href: "/pago" },
          ],
        },
        {
          title: "Audiencias",
          links: [
            { label: "Productores pecuarios", href: "/#productores" },
            { label: "ESG y gobiernos", href: "/#esg" },
            { label: "Tecnología", href: "/#tecnologia" },
          ],
        },
        {
          title: "Contacto",
          links: [
            { label: "Formulario", href: "/#contacto" },
            { label: "WhatsApp", href: "/#contacto" },
          ],
        },
      ],
      links: [
        { label: "Catálogo", href: "/catalogo" },
        { label: "Contacto", href: "/#contacto" },
      ],
    },
  },

  pricing: {
    eyebrow: "Precios",
    title: "Simple y sin sorpresas.",
    subtitle: "Empieza gratis. Sube de plan cuando tu producto crezca.",
    plans: [],
  },
}

export default config
