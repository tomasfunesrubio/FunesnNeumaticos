import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Headset,
  Factory
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { Metadata } from 'next'

// Client Components for Animation (could be refactored to generic AnimatedGrid if we wanted perfect matching, 
// but local small one-off motion wrappers are fine for this page to avoid over-abstraction)
// I will reuse AnimatedGrid for the contact info cards.
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"

// For the Hero, it assumes specific icons and layout, I'll use ServiceHero logic but adapt it or use ServiceHero 
// with a custom BG? The design in contact is slightly specific (Headset icon in background).
// To keep it simple and consistent: I will use a ServiceHero-like structure but inline since it has special decorations.
// Wait, ServiceHero is flexible enough? It takes badgeIcon and text.
// The "Headset" absolute SVG in background is unique. I can reimplement that easily or omit for consistency.
// Let's implement the Hero as a Client Component specifically for Contact to keep the "Headset" effect.
// OR: Create `ContactHero` component.

import { ContactHero } from "@/components/contact-hero"

export const metadata: Metadata = {
  title: "Contacto | Funes Neumáticos",
  description: "Contactá a Funes Neumáticos. Atención telefónica, WhatsApp, email y dirección de planta en Santiago del Estero.",
  alternates: { canonical: '/contacto' },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Contacto | Funes Neumáticos",
    description: "Canales de contacto oficial. Atención telefónica, WhatsApp y ubicación de planta industrial en La Banda, Santiago del Estero.",
    url: "https://funesneumaticos.com/contacto",
    siteName: "Funes Neumáticos",
    locale: "es_AR",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto – Funes Neumáticos",
  url: "https://funesneumaticos.com/contacto",
  mainEntity: {
    "@type": "AutoRepair",
    name: "Funes Neumáticos",
    telephone: "+54 385 413-5265",
    email: "ventas@funesneumaticos.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "RN34 720",
      addressLocality: "La Banda",
      addressRegion: "Santiago del Estero",
      addressCountry: "AR",
    },
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Atención Telefónica",
    details: [
      "Fijo: (0385) 427-6652",
      "Móvil: 0385 154-135265",
      "WhatsApp: 385 413-5265"
    ],
    action: "tel:03854276652",
  },
  {
    icon: Mail,
    title: "Área Comercial",
    details: ["ventas@funesneumaticos.com", "funesneumaticos@hotmail.com"],
    action: "mailto:ventas@funesneumaticos.com",
  },
  {
    icon: MapPin,
    title: "Ubicación de Planta",
    details: ["RN34 720, La Banda", "Santiago del Estero"],
    action: null,
  },
  {
    icon: Clock,
    title: "Horarios de Carga",
    details: ["Lun a Vie: 7 a 13 hs", "y 14 a 17 hs"],
    action: null,
  },
]

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <ContactHero />

      {/* --- SECCIÓN PRINCIPAL: CONTACTO --- */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

          {/* 1. INFORMACIÓN PLANTA CENTRAL */}
          <div className="w-full mb-16">
            <div className="border-b border-border pb-8 mb-10">
              <h3 className="text-3xl font-black text-foreground mb-4 uppercase flex items-center gap-3">
                <Factory className="h-8 w-8 text-primary" />
                Planta Central
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                Nuestras instalaciones están operativas de Lunes a Sábados para recepción y despacho de flotas. Contactanos por cualquiera de nuestros canales oficiales.
              </p>
            </div>

            <AnimatedGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info) => (
                <AnimatedGridItem key={info.title} className="h-full">
                  <div
                    className="group flex flex-col items-start gap-4 p-8 bg-secondary/10 border-2 border-border hover:border-primary transition-all duration-300 h-full"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-900 text-white group-hover:bg-primary group-hover:text-black transition-colors">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-xs tracking-widest mb-2 font-mono">{info.title}</h4>
                      {info.details.map((detail: string, idx: number) => {
                        if (detail.includes("WhatsApp")) {
                          return (
                            <a
                              key={idx}
                              href="https://api.whatsapp.com/send?phone=5493854135265"
                              className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mt-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageSquare className="h-4 w-4" />
                              {detail}
                            </a>
                          )
                        }
                        return (
                          <p key={idx} className="text-base text-muted-foreground font-medium mb-1">{detail}</p>
                        )
                      })}
                    </div>
                  </div>
                </AnimatedGridItem>
              ))}
            </AnimatedGrid>
          </div>

          {/* 2. FORMULARIO */}
          <div className="w-full">
            <ContactForm />
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight sm:text-4xl">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground font-mono text-sm">
                    // INFORMACIÓN TÉCNICA
            </p>
          </div>

          <AnimatedGrid className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "¿Cuánto tiempo demora el proceso?",
                a: "Ciclo de producción estándar de 48 a 72 horas hábiles.",
              },
              {
                q: "¿Qué tipo de garantía ofrecen?",
                a: "Garantía total sobre banda de rodamiento y proceso de adhesión.",
              },
              {
                q: "¿Realizan retiro y entrega?",
                a: "Logística propia para retiro y entrega de cascos en zona de influencia.",
              },
              {
                q: "¿Trabajan con cuentas corrientes?",
                a: "Financiación disponible para flotas previa calificación crediticia.",
              },
            ].map((faq, i) => (
              <AnimatedGridItem key={faq.q} className="h-full">
                <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors relative group shadow-sm h-full">
                  <span className="absolute top-4 right-4 text-foreground/5 font-black text-5xl group-hover:text-primary/10 transition-colors select-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-bold text-foreground text-lg uppercase mb-3 relative z-10">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{faq.a}</p>
                </div>
              </AnimatedGridItem>
            ))}
          </AnimatedGrid>
        </div>
      </section>

      <Footer />
    </main>
  )
}