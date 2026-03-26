import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle, // Used in the inline render if we keep it, but we can't use Client components inline logic for link rendering inside a server component easily if it depends on browser quirks, but these are simple links.
} from "lucide-react"

// Import Client Islands
import { ContactMap } from "@/components/contact-map"
import { HomeContactForm } from "@/components/home-contact-form"

// Import Motion Wrapper for Server Component Parts (if needed, or use a simple shared client wrapper)
// For the contact info cards, they were animated. I should create a client wrapper for the cards list OR keep them static for now.
// Given the design quality requirement, I should keep them animated. 
// Reusing `AnimatedGrid` (which I created earlier) is perfect here!
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"

// Also need a wrapper for the Header section if we want it animated on scroll?
// Or just let it be static. The original had scroll reveal.
// I will create `SectionHeader` client component if I strictly want animation, or just wrap it in AnimatedGridItem?
// Let's wrap the Header in a simple client-side RevealWrapper to match the original feel.

import { RevealWrapper } from "@/components/reveal-wrapper" // I'll create this simple wrapper.


function TireTrackPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 400"
      fill="currentColor"
      {...props}
    >
      <defs>
        <pattern id="tread" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,0 L35,10 L35,30 L0,20 Z" className="opacity-80" />
          <path d="M50,20 L85,10 L85,30 L50,40 L15,30 L15,10 Z" transform="translate(0, -10)" />
          <path d="M100,0 L65,10 L65,30 L100,20 Z" className="opacity-80" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tread)" />
    </svg>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: [
      "Fijo: (0385) 427-6652",
      "Móvil: 0385 154-135265",
      "WhatsApp: 385 698 1610"
    ],
    action: "tel:03854276652",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ventas@funesneumaticos.com", "funesneumaticos@hotmail.com"],
    action: "mailto:ventas@funesneumaticos.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["RN34 720, La Banda", "Santiago del Estero"],
    action: "#ubicacion",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun a Vie: 7 a 13 hs", "y 14 a 17 hs"],
    action: null,
  },
]

export function ContactSection() {
  return (
    <section id="contacto" className="scroll-mt-24 py-24 bg-background relative overflow-hidden">
      {/* Fondo decorativo sutil estilo industrial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      {/* Background Tire Track */}
      <div className="absolute top-24 right-0 h-[120%] opacity-[0.1] pointer-events-none z-0 rotate-12">
        <TireTrackPattern className="h-full w-[250px] text-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* --- Header de la Sección --- */}
        <RevealWrapper className="mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              Canales de Atención
            </span>
          </div>

          {/* Título y Descripción distribuidos */}
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="text-4xl font-black text-foreground sm:text-5xl uppercase tracking-tight leading-none">
              ESTAMOS PARA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">AYUDARTE</span>
            </h2>
            <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-6 mb-2">
              Contactanos para recibir asesoramiento técnico personalizado o solicitar una cotización para tu flota sin compromiso.
            </p>
          </div>
        </RevealWrapper>

        {/* --- Tarjetas de Información --- */}
        <AnimatedGrid className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info) => (
            <AnimatedGridItem key={info.title} className="h-full">
              <div className="p-6 rounded-none border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md h-full">
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 mb-4">
                  <info.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground uppercase text-xs tracking-wider mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail) => {
                    if (detail.includes("WhatsApp")) {
                      return (
                        <a
                          key={detail}
                          href="https://api.whatsapp.com/send?phone=5493854135265"
                          className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mt-1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="h-3 w-3" />
                          {detail}
                        </a>
                      )
                    }
                    return (
                      <p key={detail} className="text-sm text-muted-foreground font-medium">{detail}</p>
                    )
                  })}
                </div>
              </div>
            </AnimatedGridItem>
          ))}
        </AnimatedGrid>

        {/* --- 1. MAPA REAL (Island) --- */}
        <ContactMap />

        {/* --- 2. FORMULARIO (Island) --- */}
        <HomeContactForm />

      </div>
    </section>
  )
}