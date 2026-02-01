import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { refuerzoCatalog } from "@/lib/data-refuerzo"
import { Tractor } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { ProductHero } from "@/components/product-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Refuerzo Interno Agrícola | Funes Neumáticos",
    description: "Soluciones de refuerzo estructural para neumáticos agrícolas. Resistencia garantizada.",
}

export default function RefuerzoPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ProductHero
                title={
                    <>
                        Refuerzo Interno <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Agrícola
                        </span>
                    </>
                }
                description="Soluciones estructurales para recuperar la carcasa y garantizar la resistencia en el trabajo pesado. Prolongamos la vida útil de su inversión."
            />

            {/* SECCIÓN: LÍNEA AGRÍCOLA */}
            <section id="agricola" className="py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Línea Agrícola"
                        subtitle="Tecnología de refuerzo para condiciones extremas."
                        icon={<Tractor className="h-8 w-8" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {refuerzoCatalog.map((item) => (
                            <ProductCard key={item.id} product={item} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
