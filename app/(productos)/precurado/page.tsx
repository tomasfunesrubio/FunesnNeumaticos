import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { getProductsByCategory } from "@/lib/data-precurado"
import { Truck, Bus } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { PrecuradoHero } from "@/components/precurado-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diseños de Precurado | Funes Neumáticos",
  description: "Catálogo de bandas precuradas para transporte de carga y pasajeros. Reconstrucción certificada VIPAL.",
}

export default function PrecuradoPage() {
  const pesados = getProductsByCategory("pesados")
  const medianos = getProductsByCategory("medianos")

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      <PrecuradoHero />

      {/* SECCIÓN 1: CAMIONES PESADOS */}
      <section id="pesados" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryHeader
            title="Transporte Pesado"
            subtitle="Larga distancia, Servicio Regional y Fuera de Ruta."
            icon={<Truck className="h-8 w-8" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pesados.map((item) => (
              <ProductCard key={item.id} product={item} baseSlug="precurado" badgeLabel="PRECURADO" />
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: CAMIONES MEDIANOS */}
      <section id="medianos" className="py-20 bg-white border-y border-zinc-200 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryHeader
            title="Medianos & Reparto"
            subtitle="Soluciones ágiles para distribución urbana y regional."
            icon={<Bus className="h-8 w-8" />}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medianos.map((item) => (
              <ProductCard key={item.id} product={item} baseSlug="precurado" badgeLabel="PRECURADO" />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}