import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductById } from "@/lib/data-precurado"
import { AnimatedProductDetail } from "@/components/animated-product-detail"
import { PrecuredTechSpecs } from "@/components/precured-tech-specs"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getProductById(id)

    if (!product) {
        notFound()
    }

    // Chequeamos si tiene especificaciones estructuradas
    const hasStructuredSpecs = !!(
        product.recommendedApplication ||
        product.optionalApplication ||
        product.indicatedUse?.length ||
        product.attributes?.length ||
        product.vehicles?.length
    )

    const specs = hasStructuredSpecs
        ? <PrecuredTechSpecs product={product} />
        : null

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
                // PASAMOS LA DESCRIPCIÓN SIEMPRE Y EL ESTADO VIPAL
                description={product.description}
                isVipal={product.isVipal}
                specs={specs}
                ctaText={`Consultar por ${product.model}`}
                ctaLink={`https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Me%20interesa%20el%20modelo%20${product.model}`}
            />
            <Footer />
        </main>
    )
}