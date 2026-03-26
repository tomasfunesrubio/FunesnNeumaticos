import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { getVulcanizadoProductsByCategory } from "@/lib/data-vulcanizado"
import { Truck, Car, Tractor } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { ProductHero } from "@/components/product-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Vulcanizado y Reparación | Funes Neumáticos",
    description: "Servicio técnico de vulcanizado y reparación para todo tipo de neumáticos.",
    alternates: {
        canonical: '/vulcanizado',
    },
    robots: { index: true, follow: true },
}

export default function VulcanizadoPage() {
    const pesados = getVulcanizadoProductsByCategory("pesados")
    const livianos = getVulcanizadoProductsByCategory("livianos")
    const agricola = getVulcanizadoProductsByCategory("agricola")

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ProductHero
                title={
                    <>
                        Vulcanizado y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Reparación
                        </span>
                    </>
                }
                description="Recuperación técnica de neumáticos dañados mediante procesos de vulcanización controlada. Seguridad garantizada para que su inversión siga rodando."
            />

            {/* SECCIÓN 1: PESADOS */}
            <section id="pesados" className="py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Transporte Pesado"
                        subtitle="Reparaciones estructurales para camiones y buses."
                        icon={<Truck className="h-8 w-8" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pesados.map((item) => (
                            <ProductCard key={item.id} product={item} baseSlug="vulcanizado" badgeLabel="VULCANIZADO" />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 2: LIVIANOS */}
            <section id="livianos" className="py-20 bg-white border-y border-zinc-200 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Línea Liviana"
                        subtitle="Cuidado experto para autos, utilitarios y pick-ups."
                        icon={<Car className="h-8 w-8" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {livianos.map((item) => (
                            <ProductCard key={item.id} product={item} baseSlug="vulcanizado" badgeLabel="VULCANIZADO" />
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN 3: AGRÍCOLA */}
            <section id="agricola" className="py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Maquinaria Agrícola"
                        subtitle="Refuerzos y reparaciones de alta resistencia para el campo."
                        icon={<Tractor className="h-8 w-8" />}
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {agricola.map((item) => (
                            <ProductCard key={item.id} product={item} baseSlug="vulcanizado" badgeLabel="VULCANIZADO" />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
