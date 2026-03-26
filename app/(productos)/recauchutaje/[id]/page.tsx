import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getRecauchutajeProductById } from "@/lib/data-recauchutaje"
import { Ruler, Cog, Target } from "lucide-react"
import { AnimatedProductDetail } from "@/components/animated-product-detail"

export default async function RecauchutajeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getRecauchutajeProductById(id)

    if (!product) {
        notFound()
    }

    const specs = (
        <>
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-6 flex items-center gap-3">
                <Cog className="h-6 w-6 text-primary" />
                Especificaciones Agrícolas
            </h2>

            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Ruler className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Profundidad de Garra</div>
                        <div className="text-lg font-black text-zinc-900">{product.depth}</div>
                    </div>
                </div>

                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Cog className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Tecnología</div>
                        <div className="text-lg font-black text-zinc-900">{product.technology}</div>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Target className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Aplicación de Campo</div>
                        <div className="text-lg font-black text-zinc-900">{product.usage}</div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />
            <AnimatedProductDetail
                backLink="/recauchutaje"
                backText="Volver al Catálogo"
                image={product.image}
                imageAlt={product.name}
                badgeText={`Modelo: ${product.model}`}
                title={product.name}
                description={product.description}
                specs={specs}
                ctaText={`Consultar por ${product.model}`}
                ctaLink={`https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Me%20interesa%20el%20recauchutaje%20del%20modelo%20${product.model}`}
            />
            <Footer />
        </main>
    )
}
