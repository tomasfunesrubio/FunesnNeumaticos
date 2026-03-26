import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById } from "@/lib/data-precurado"
import { Ruler, Cog, Target } from "lucide-react"
import { AnimatedProductDetail } from "@/components/animated-product-detail"

// 1. Cambiamos la definición de props para Next.js 15
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // 2. Esperamos a que se resuelva la promesa de params
    const { id } = await params

    // 3. Ahora sí buscamos con el ID real
    const product = getProductById(id)

    if (!product) {
        notFound()
    }

    const specs = (
        <>
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-6 flex items-center gap-3">
                <Cog className="h-6 w-6 text-primary" />
                Especificaciones Técnicas
            </h2>

            <div className="grid grid-cols-1 gap-6">
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Ruler className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Profundidad</div>
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
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Aplicación</div>
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
                backLink="/precurado"
                backText="Volver al Catálogo"
                image={product.image}
                imageAlt={product.name}
                badgeText={`Modelo: ${product.model}`}
                title={product.name}
                description={product.description}
                specs={specs}
                ctaText={`Consultar por ${product.model}`}
                ctaLink={`https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Me%20interesa%20el%20modelo%20${product.model}`}
            />
            <Footer />
        </main>
    )
}