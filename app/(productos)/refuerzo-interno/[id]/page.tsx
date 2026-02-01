import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getRefuerzoProductById } from "@/lib/data-refuerzo"
import { ShieldCheck, Cog, Target } from "lucide-react"
import { AnimatedProductDetail } from "@/components/animated-product-detail"

export default async function RefuerzoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getRefuerzoProductById(id)

    if (!product) {
        notFound()
    }

    const specs = (
        <>
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-6 flex items-center gap-3">
                <Cog className="h-6 w-6 text-primary" />
                Seguridad Estructural
            </h2>

            <div className="grid grid-cols-1 gap-6">
                {/* Beneficio Principal */}
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Target className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Beneficio Clave</div>
                        <div className="text-lg font-black text-zinc-900">{product.benefit}</div>
                    </div>
                </div>

                {/* Tecnología */}
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Cog className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Tecnología Aplicada</div>
                        <div className="text-lg font-black text-zinc-900">{product.technology}</div>
                    </div>
                </div>

                {/* Resistencia */}
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Tipo de Resistencia</div>
                        <div className="text-lg font-black text-zinc-900">Extrema / Alto Impacto</div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />
            <AnimatedProductDetail
                backLink="/refuerzo-interno"
                backText="Volver al Catálogo"
                image={product.image}
                imageAlt={product.name}
                badgeText={`Modelo: ${product.model}`}
                title={product.name}
                description={product.description}
                specs={specs}
                ctaText={`Consultar por Refuerzo`}
                ctaLink={`https://api.whatsapp.com/send/?phone=543856981610&text=Hola%21%20Me%20interesa%20el%20servicio%20de%20Refuerzo%20${product.name}`}
            />
            <Footer />
        </main>
    )
}
