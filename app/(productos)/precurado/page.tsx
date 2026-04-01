import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { getProductsByCategory } from "@/lib/data-precurado"
import { Truck, Bus } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { ExpandableProductGrid } from "@/components/expandable-product-grid"
import { PrecuradoHero } from "@/components/precurado-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diseños de Precurado | Funes Neumáticos",
  description:
    "Catálogo de bandas precuradas para transporte de carga y pasajeros. Reconstrucción certificada VIPAL.",
  alternates: {
    canonical: '/precurado',
  },
  robots: { index: true, follow: true },
}

export default function PrecuradoPage() {
  const pesados = getProductsByCategory("pesados")
  const medianos = getProductsByCategory("medianos")

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />
      <PrecuradoHero />

      {/* NAVEGACIÓN RÁPIDA (Sticky) */}
      <div className="w-full border-b border-zinc-200 bg-zinc-100/95 backdrop-blur-md py-3 sm:py-4 sticky top-[72px] z-40 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-nowrap items-center justify-center gap-2 sm:gap-6 w-full">
          <a href="#pesados" className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-none border-2 border-zinc-300 bg-white text-[11px] sm:text-sm font-bold uppercase tracking-wider text-zinc-600 hover:border-primary hover:text-black transition-all shadow-sm">
            <Truck className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span className="truncate">Pesados</span>
          </a>
          <a href="#medianos" className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-2 sm:py-2.5 rounded-none border-2 border-zinc-300 bg-white text-[11px] sm:text-sm font-bold uppercase tracking-wider text-zinc-600 hover:border-primary hover:text-black transition-all shadow-sm">
            <Bus className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
            <span className="truncate">Medianos <span className="hidden sm:inline">& Reparto</span></span>
          </a>
        </div>
      </div>

      {/* SECCIÓN 1: CAMIONES PESADOS */}
      <section id="pesados" className="py-20 relative scroll-mt-32 lg:scroll-mt-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryHeader
            title="Transporte Pesado"
            subtitle="Larga distancia, Servicio Regional y Fuera de Ruta."
            icon={<Truck className="h-8 w-8" />}
          />

          <ExpandableProductGrid
            products={pesados}
            baseSlug="precurado"
            badgeLabel="PRECURADO"
            itemsToShowMobile={4}
            itemsToShowDesktop={8}
          />
        </div>
      </section>

      {/* SECCIÓN 2: CAMIONES MEDIANOS */}
      <section id="medianos" className="py-20 bg-white border-y border-zinc-200 relative scroll-mt-32 lg:scroll-mt-40">
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