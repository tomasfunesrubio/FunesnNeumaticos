import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { recauchutajeCatalog } from "@/lib/data-recauchutaje"
import { Tractor } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { CategoryHeader } from "@/components/category-header"
import { ProductHero } from "@/components/product-hero"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Recauchutaje Agrícola | Funes Neumáticos",
    description: "Recuperación integral de neumáticos para maquinaria agrícola. Procesos certificados.",
}

export default function RecauchutajePage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ProductHero
                title={
                    <>
                        Recauchutaje <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Agrícola
                        </span>
                    </>
                }
                description="Recuperación integral para maquinaria agrícola. Extendemos la vida operativa de tus neumáticos con procesos certificados que garantizan seguridad y rendimiento en el campo."
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
                        {recauchutajeCatalog.map((item) => (
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
