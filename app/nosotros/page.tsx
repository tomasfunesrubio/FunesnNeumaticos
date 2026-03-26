import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { VipalSection } from "@/components/vipal-section"
import { Award, Factory, CheckSquare } from "lucide-react"
import { Metadata } from 'next'

// Client Components for Animation
import { CompanyValues } from "@/components/company-values"
import { CompanyTimeline } from "@/components/company-timeline"
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"

// Specialized Hero for Nosotros
import { NostrosHero } from "@/components/nosotros-hero"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Funes Neumáticos",
  description: "Más de 20 años liderando la reconstrucción de neumáticos en Santiago del Estero. Planta industrial ISO 9001. Representante oficial VIPAL.",
  alternates: { canonical: '/nosotros' },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Sobre Nosotros | Funes Neumáticos",
    description: "Más de 20 años de experiencia. La única planta de reconstrucción de neumáticos agrícolas en Santiago del Estero.",
    url: "https://funesneumaticos.com/nosotros",
    siteName: "Funes Neumáticos",
    locale: "es_AR",
    type: "website",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre Nosotros – Funes Neumáticos",
  description: "Más de 20 años liderando la reconstrucción de neumáticos en Santiago del Estero. Representante oficial VIPAL.",
  url: "https://funesneumaticos.com/nosotros",
  mainEntity: {
    "@type": "AutoRepair",
    name: "Funes Neumáticos",
    foundingDate: "2003",
    url: "https://funesneumaticos.com",
    hasCredential: "ISO 9001",
  },
}

const benefits = [
  "Tecnología de última generación",
  "Personal altamente capacitado",
  "Procesos certificados ISO 9001",
  "Atención personalizada",
  "Compromiso ambiental",
  "Precios competitivos",
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <NostrosHero />

      {/* --- STORY SECTION --- */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Columna Texto */}
            <div className="space-y-8">
              <div className="border-b border-border pb-6">
                <h2 className="text-3xl font-black text-foreground sm:text-4xl uppercase flex items-center gap-3">
                  <Factory className="h-8 w-8 text-primary" />
                  Nuestra Historia
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Funes Neumáticos nació de la pasión de una familia por el mundo del transporte y la industria automotriz. Lo que comenzó como un pequeño taller de reparación, hoy es una planta modelo en la región.
                </p>
                <p>
                  A lo largo de dos décadas, hemos invertido constantemente en <strong className="text-foreground">tecnología de punta</strong> y capacitación técnica. Esto nos permite ofrecer productos que igualan el rendimiento del neumático nuevo.
                </p>
                <div className="bg-secondary/30 p-6 border-l-4 border-primary">
                  <p className="font-bold text-foreground">
                    "Nuestro compromiso es crecer junto a nuestros clientes, garantizando seguridad en cada kilómetro."
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Visual (IMAGEN DE FÁBRICA) */}
            <div className="relative h-full min-h-[500px] bg-zinc-900 border-2 border-zinc-800 overflow-hidden group">
              <Image
                src="/fabrica.jpg"
                alt="Funes Neumáticos Planta Industrial"
                fill
                className="object-cover object-center transition-all duration-700 transform group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/50 z-20"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/50 z-20"></div>

              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                <div className="h-16 w-16 bg-primary flex items-center justify-center text-black shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-5xl font-black text-white leading-none">20+</div>
                  <div className="text-xs font-mono text-primary uppercase tracking-widest bg-black/50 px-2 py-1 mt-1">
                    Años de Experiencia
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 bg-secondary/20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CompanyValues />
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* The tire track SVG uses pattern which needs client component to be safe or just standard SVG. 
            Since it's static decorative SVG I'll keep it simple or remove if complex. 
            For now, I'll pass it to CompanyTimeline or just render it here if no interaction needed.
            However, Timeline has scroll animations using intersection observer (motion).
        */}
        <CompanyTimeline />
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-0 border-y border-zinc-800 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">

            {/* Bloque Imagen */}
            <div className="relative min-h-[400px] lg:min-h-full bg-zinc-950 flex items-end justify-center border-r border-zinc-800 overflow-hidden group pb-10">
              <Image
                src="/calidad.jpg"
                alt="Calidad certificada"
                fill
                className="object-cover object-center transition-all duration-700 transform group-hover:scale-105 opacity-60 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="relative z-10 text-center p-8 bg-black/40 backdrop-blur-sm border border-white/10 m-8">
                <div className="text-4xl font-black uppercase text-white mb-2">
                  Calidad <br /> ISO 9001
                </div>
                <div className="h-1 w-12 bg-primary mx-auto"></div>
              </div>
            </div>

            {/* Bloque Texto */}
            <div className="p-12 lg:p-20">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-white sm:text-4xl uppercase mb-6">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-400 text-lg border-l-4 border-primary pl-6">
                  Nos diferenciamos por nuestra dedicación a la excelencia y nuestro compromiso inquebrantable con la satisfacción del cliente.
                </p>
              </div>

              <AnimatedGrid className="space-y-4">
                {benefits.map((benefit) => (
                  <AnimatedGridItem key={benefit}>
                    <div className="flex items-center gap-4 group">
                      <div className="h-6 w-6 flex items-center justify-center bg-primary/20 text-primary border border-primary/50 group-hover:bg-primary group-hover:text-black transition-colors">
                        <CheckSquare className="h-4 w-4" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{benefit}</span>
                    </div>
                  </AnimatedGridItem>
                ))}
              </AnimatedGrid>
            </div>
          </div>
        </div>
      </section>

      <VipalSection />

      <CTASection />
      <Footer />
    </main>
  )
}