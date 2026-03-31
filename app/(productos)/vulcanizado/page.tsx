import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
    Truck,
    Car,
    Tractor,
    Activity,
    CheckCircle2,
    ShieldCheck,
    Wrench,
    Leaf,
    BadgeCheck,
    AlertTriangle
} from "lucide-react"

import { ServiceHero } from "@/components/service-hero"
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"
import { ProcessCarousel } from "@/components/process-carousel"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Vulcanizado y Reparación | Funes Neumáticos",
    description: "Servicio técnico de vulcanizado y reparación para todo tipo de neumáticos. Recuperación estructural con máxima seguridad.",
    alternates: {
        canonical: '/vulcanizado',
    },
    robots: { index: true, follow: true },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vulcanizado y Reparación de Neumáticos",
    description: "Servicio técnico de vulcanizado y reparación para todo tipo de neumáticos. Recuperación estructural con máxima seguridad.",
    provider: {
        "@type": "AutoRepair",
        name: "Funes Neumáticos",
        url: "https://funesneumaticos.com",
    },
    areaServed: {
        "@type": "City",
        name: "Santiago del Estero",
    },
    serviceType: "Tire Repair and Vulcanization",
    url: "https://funesneumaticos.com/vulcanizado",
}

export default function VulcanizadoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />

            <ServiceHero
                backgroundImage="/nosotros-hero.jpeg"
                imageAlt="Servicio de vulcanizado"
                badgeIcon={<Wrench className="h-4 w-4 text-primary" />}
                badgeText="Servicio Técnico Especializado"
                title={
                    <>
                        Vulcanizado y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Reparación
                        </span>
                    </>
                }
                description="Recuperación técnica de neumáticos dañados mediante procesos de vulcanización controlada. Seguridad garantizada para que su inversión siga rodando."
            />

            {/* --- SEGMENT INDICATORS --- */}
            <div className="bg-white border-b border-zinc-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6">
                        <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                            <CheckCircle2 className="text-primary h-5 w-5" />
                            Servicio Integral Multivehículo
                        </span>

                        <div className="flex items-center gap-12 text-zinc-400">
                            {[
                                { Icon: Truck, label: "Pesados" },
                                { Icon: Car, label: "Livianos" },
                                { Icon: Tractor, label: "Agrícola" }
                            ].map(({ Icon, label }) => (
                                <div key={label} className="flex flex-col items-center gap-2 group cursor-default">
                                    <Icon className="h-8 w-8 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-wider group-hover:text-zinc-900 transition-colors">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- NUEVA SECCIÓN: MITO VS VERDAD (Educativa) --- */}
            <section className="py-24 bg-white relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-3">La Ciencia Detrás</h2>
                                <h3 className="text-4xl font-black text-zinc-900 uppercase leading-none tracking-tight">
                                    No es un simple parche. <br /> Es una fusión.
                                </h3>
                            </div>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Muchas veces se confunde la reparación en frío (el clásico "parche de gomería") con el <strong>vulcanizado en caliente</strong>. Nuestro proceso no pega las partes, las une a nivel molecular mediante presión y temperatura exacta.
                            </p>

                            {/* Tarjeta Educativa */}
                            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-lg relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-zinc-400 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-zinc-900 mb-1">Mito común</h4>
                                        <p className="text-sm text-zinc-600">"Un neumático reparado en el flanco o banda nunca vuelve a ser seguro para cargas pesadas."</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 mt-6 pt-6 border-t border-zinc-200">
                                    <BadgeCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-zinc-900 mb-1">La Realidad Técnica</h4>
                                        <p className="text-sm text-zinc-600">Un vulcanizado bien ejecutado repone los cables de acero dañados y fusiona caucho virgen, restaurando la resistencia estructural original aprobada para ruta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Imagen Técnica */}
                        <div className="relative aspect-square lg:aspect-[4/3] bg-zinc-900 overflow-hidden shadow-2xl rounded-xl bg-cover bg-center" style={{ backgroundImage: "url('/gomeria-costado.jpg')" }}>
                            <div className="absolute inset-0 bg-zinc-900/10 mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- NUEVA SECCIÓN: CARRUSEL DEL PROCESO (Paso a Paso) --- */}
            <section className="py-24 bg-zinc-900 text-white relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-4">El Proceso de Recuperación</h2>
                    <p className="text-zinc-400 max-w-2xl text-lg">
                        Conozca paso a paso cómo le devolvemos la vida a sus neumáticos con tecnología de punta y estándares internacionales.
                    </p>
                </div>

                <ProcessCarousel />
            </section>

            {/* --- BENEFITS GRID (Ventajas) --- */}
            <section className="py-24 bg-zinc-50 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4">Ventajas de Elegirnos</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <AnimatedGrid className="grid md:grid-cols-3 gap-8">
                        <AnimatedGridItem>
                            <div className="bg-white border border-zinc-200 p-8 hover:border-primary transition-colors group h-full shadow-sm hover:shadow-xl">
                                <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 uppercase mb-3">Ahorro Económico</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    No descarte neumáticos que aún tienen vida útil. Recupere su cubierta dañada por una fracción del costo de comprar una nueva.
                                </p>
                            </div>
                        </AnimatedGridItem>

                        <AnimatedGridItem>
                            <div className="bg-white border border-zinc-200 p-8 hover:border-primary transition-colors group h-full shadow-sm hover:shadow-xl">
                                <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <ShieldCheck className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 uppercase mb-3">Seguridad Garantizada</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Nuestras reparaciones no son temporales, son definitivas. Devuelven la integridad estructural capaz de soportar las más altas exigencias de carga.
                                </p>
                            </div>
                        </AnimatedGridItem>

                        <AnimatedGridItem>
                            <div className="bg-white border border-zinc-200 p-8 hover:border-primary transition-colors group h-full shadow-sm hover:shadow-xl">
                                <div className="h-12 w-12 bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Leaf className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 uppercase mb-3">Cuidado Ambiental</h3>
                                <p className="text-zinc-600 leading-relaxed">
                                    Al extender la vida útil de sus neumáticos, reduce significativamente la cantidad de residuos industriales generados por su flota.
                                </p>
                            </div>
                        </AnimatedGridItem>
                    </AnimatedGrid>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}