import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getVulcanizadoProductById } from "@/lib/data-vulcanizado"
import { Clock, ShieldCheck, Thermometer, Cog } from "lucide-react"
import { AnimatedProductDetail } from "@/components/animated-product-detail"

export default async function VulcanizadoDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getVulcanizadoProductById(id)

    if (!product) {
        notFound()
    }

    const specs = (
        <>
            <h2 className="text-xl font-black text-zinc-900 uppercase mb-6 flex items-center gap-3">
                <Cog className="h-6 w-6 text-primary" />
                Características del Proceso
            </h2>

            <div className="grid grid-cols-1 gap-6">
                {/* Tiempo */}
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Clock className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Tiempo de Entrega</div>
                        <div className="text-lg font-black text-zinc-900">{product.processTime}</div>
                    </div>
                </div>

                {/* Garantía */}
                <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Garantía del Servicio</div>
                        <div className="text-lg font-black text-zinc-900">{product.guarantee}</div>
                    </div>
                </div>

                {/* Temperatura */}
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-zinc-900 text-primary">
                        <Thermometer className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Temperatura de Vulcanizado</div>
                        <div className="text-lg font-black text-zinc-900">{product.temperature}</div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />
            <AnimatedProductDetail
                backLink="/vulcanizado"
                backText="Volver a Servicios"
                image={product.image}
                imageAlt={product.name}
                badgeText={`Categoría: ${product.category.toUpperCase()}`}
                title={product.name}
                description={product.description}
                specs={specs}
                ctaText="Consultar Reparación"
                ctaLink={`https://api.whatsapp.com/send/?phone=543856981610&text=Hola%21%20Me%20interesa%20realizar%20un%20servicio%20de%20${product.name}`}
            />
            <Footer />
        </main>
    )
}
