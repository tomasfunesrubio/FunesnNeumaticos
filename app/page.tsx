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
  description:
    "Líderes en recapado de neumáticos, alineación y balanceo para flotas. Planta industrial en Santiago del Estero. Distribuidor oficial Vipal.",
  keywords: [
    "recapado",
    "neumaticos",
    "camiones",
    "alineacion",
    "balanceo",
    "santiago del estero",
    "vipal",
    "recauchutaje",
    "precurado",
    "vulcanizado",
    "tren delantero",
    "flotas",
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Funes Neumáticos | Ingeniería en Transporte",
    description:
      "Maximiza el rendimiento de tu flota con nuestros servicios de reconstrucción y mecánica pesada.",
    url: "https://funesneumaticos.com",
    siteName: "Funes Neumáticos",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/icono.png",
        width: 512,
        height: 512,
        alt: "Funes Neumáticos Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funes Neumáticos | Reconstrucción y Servicios para Transporte",
    description:
      "Líderes en recapado de neumáticos, alineación y balanceo para flotas en Santiago del Estero.",
    images: ["/icono.png"],
  },
}

// ── JSON-LD Structured Data (Schema.org – AutoRepair / LocalBusiness) ──
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Funes Neumáticos",
  image: "https://funesneumaticos.com/icono.png",
  description:
    "Planta industrial de reconstrucción de neumáticos y servicios integrales para flotas de transporte. Representante oficial VIPAL en Santiago del Estero.",
  url: "https://funesneumaticos.com",
  telephone: "+54 385 421-5835",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ruta Nacional 9 Km 1128",
    addressLocality: "Santiago del Estero",
    addressRegion: "Santiago del Estero",
    postalCode: "4200",
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.7834,
    longitude: -64.2642,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    // Agregar URLs de redes sociales cuando estén disponibles
    // "https://www.facebook.com/funesneumaticos",
    // "https://www.instagram.com/funesneumaticos",
  ],
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data para SEO Local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
