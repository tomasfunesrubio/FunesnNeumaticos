import { Footer } from '@/components/footer'
import { CatalogBrowser } from '@/components/catalog-browser'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Venta de Neumáticos Nuevos | Funes Neumáticos",
    description: "Catálogo completo de cubiertas para autos, camionetas y camiones en Santiago del Estero. Stock permanente, asesoramiento técnico.",
    alternates: { canonical: '/cubiertas-nuevas' },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Venta de Neumáticos Nuevos | Funes Neumáticos",
        description: "Catálogo completo de neumáticos. Encontrá la medida ideal y consultá con nuestros asesores técnicos.",
        url: "https://funesneumaticos.com/cubiertas-nuevas",
        siteName: "Funes Neumáticos",
        locale: "es_AR",
        type: "website",
    },
}

const WHATSAPP_NUMBER = '5493854135265'

export default function CubiertasNuevasPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            {/* Catalog Browser handles Hero, Search, Filter and Grid */}
            <CatalogBrowser />

            {/* Bottom CTA (Static) */}
            <section className="bg-zinc-900 py-16">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                        ¿Necesitás asesoramiento?
                    </h2>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                        Nuestro equipo técnico puede recomendarte el neumático ideal según tu tipo de vehículo, uso y presupuesto.
                    </p>
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, necesito asesoramiento para elegir neumáticos.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold h-14 px-10 text-base gap-3 shadow-xl shadow-primary/30">
                            <MessageCircle className="h-5 w-5" />
                            Hablar con un asesor
                        </Button>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </main>
    )
}
