import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { retacadoCatalog } from "@/lib/data-retacado"
import { Tractor } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { ProductHero } from "@/components/product-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Retacado de Neumáticos | Funes Neumáticos",
    description: "Soluciones de retacado para maquinaria agrícola. Maximizamos el agarre y vida útil de sus cubiertas.",
}

export default function RetacadoPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ProductHero
                title={
                    <>
                        Retacado de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Neumáticos
                        </span>
                    </>
                }
                description="Soluciones específicas para maquinaria agrícola. Maximizamos el agarre y la vida útil de tus cubiertas en las condiciones más exigentes del campo."
            />

            {/* SECCIÓN: LÍNEA AGRÍCOLA */}
            <section id="agricola" className="py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Línea Agrícola"
                        subtitle="Máxima tracción y respeto por el suelo para maquinaria pesada."
                        icon={<Tractor className="h-8 w-8" />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {retacadoCatalog.map((item) => (
                            <ProductCard key={item.id} product={item} baseSlug="retacado" badgeLabel="RETACADO" />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
