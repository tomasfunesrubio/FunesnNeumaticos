import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getRetacadoProductById } from "@/lib/data-retacado"
import { Ruler, Cog, Target } from "lucide-react"
import { AnimatedProductDetail } from "@/components/animated-product-detail"
import { PrecuredTechSpecs } from "@/components/precured-tech-specs" // <-- Importamos nuestro super componente

export default async function RetacadoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getRetacadoProductById(id)

    if (!product) {
        notFound()
    }

    // 1. Lógica inteligente: ¿Tiene las especificaciones nuevas?
    const hasStructuredSpecs = !!(
        product.recommendedApplication ||
        product.optionalApplication ||
        product.indicatedUse?.length ||
        product.attributes?.length ||
        product.vehicles?.length
    )

    // 2. Renderizado condicional de las Especificaciones
    const specs = hasStructuredSpecs ? (
        // Usamos el componente avanzado de iconos. 
        // Nota: as any se usa para que TypeScript no se queje de la diferencia estricta de interfaces, 
        // ya que PrecuredTechSpecs soporta perfectamente la estructura que armamos.
        <PrecuredTechSpecs product={product as any} />
    ) : (
        // Diseño Legacy para los productos agrícolas clásicos
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
                backLink="/retacado"
                backText="Volver al Catálogo"
                image={product.image}
                imageAlt={product.name}
                badgeText={`Modelo: ${product.model}`}
                title={product.name}
                // Pasamos la descripción y si es Vipal al componente (que ya lo soporta)
                description={product.description}
                isVipal={product.isVipal}
                specs={specs}
                ctaText={`Consultar por ${product.model}`}
                ctaLink={`https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Me%20interesa%20el%20modelo%20de%20retacado%20${product.model}`}
            />
            <Footer />
        </main>
    )
}