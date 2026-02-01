import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { VipalSection } from "@/components/vipal-section"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Funes Neumáticos | Reconstrucción y Servicios para Transporte",
  description: "Líderes en recapado de neumáticos, alineación y balanceo para flotas. Planta industrial en Santiago del Estero. Distribuidor oficial Vipal.",
  keywords: ["recapado", "neumaticos", "camiones", "alineacion", "balanceo", "santiago del estero", "vipal"],
  openGraph: {
    title: "Funes Neumáticos | Ingeniería en Transporte",
    description: "Maximiza el rendimiento de tu flota con nuestros servicios de reconstrucción y mecánica pesada.",
    url: 'https://funesneumaticos.com',
    siteName: 'Funes Neumáticos',
    locale: 'es_AR',
    type: 'website',
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <AboutSection />
      <VipalSection />
      <CTASection />
      <Footer />
    </main>
  )
}
