import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import {
    Truck,
    Car,
    Activity,
    CheckCircle2,
    Gauge,
    Zap,
    MoveHorizontal
} from "lucide-react"

import { ServiceHero } from "@/components/service-hero"
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Alineación y Balanceo Computarizado | Funes Neumáticos",
    description: "Servicio de alineación 3D y balanceo para transporte pesado y liviano. Precisión láser para maximizar la vida útil de sus neumáticos.",
}

export default function AlineadoPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ServiceHero
                backgroundImage="/fondo-alineacion-balanceo.jpeg"
                imageAlt="Taller de alineación 3D para camiones pesados"
                badgeIcon={<Activity className="h-4 w-4 text-primary" />}
                badgeText="Servicio Premium"
                title={
                    <>
                        Alineación y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Balanceo Computarizado
                        </span>
                    </>
                }
                description="Precisión láser para toda tu flota. Maximizá la vida útil de tus neumáticos y reducí el consumo de combustible."
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
                                { Icon: MoveHorizontal, label: "Utilitarios" }
                            ].map(({ Icon, label }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center gap-2 group cursor-default"
                                >
                                    <Icon className="h-8 w-8 text-zinc-300 group-hover:text-zinc-900 transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-wider group-hover:text-zinc-900 transition-colors">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SHOWCASE / IMAGE SECTION --- */}
            <section className="py-20 bg-zinc-50 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="relative aspect-[4/3] bg-zinc-200 lg:-rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl border-4 border-white">
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                    {/* Placeholder visible */}
                                    [IMAGEN TALLER: Alineadora 3D]
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
                                Tecnología de Vanguardia
                            </h2>
                            <p className="text-lg text-zinc-600 leading-relaxed">
                                Utilizamos equipamiento de última generación con <strong>sensores 3D de alta precisión</strong>. Nuestro sistema realiza lecturas milimétricas de:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Corrección de Comba (Camber)",
                                    "Alineación de Avance (Caster)",
                                    "Ajuste de Convergencia"
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-3 text-zinc-700 font-medium"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- BENEFITS GRID --- */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#222_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-4">¿Por qué alinear tu vehículo?</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <AnimatedGrid className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <AnimatedGridItem>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Gauge className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Ahorro Real</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    La correcta alineación reduce la resistencia al rodamiento, lo que se traduce directamente en un menor consumo de combustible por kilómetro.
                                </p>
                            </div>
                        </AnimatedGridItem>

                        {/* Benefit 2 */}
                        <AnimatedGridItem>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Durabilidad</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Evitá el desgaste irregular y prematuro ('dientes de sierra') de la banda de rodamiento. Extendé la vida útil de tus neumáticos hasta un 20%.
                                </p>
                            </div>
                        </AnimatedGridItem>

                        {/* Benefit 3 */}
                        <AnimatedGridItem>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Seguridad</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Mejor respuesta de dirección y estabilidad en ruta. Prevení vibraciones al volante y asegurá un frenado parejo en situaciones críticas.
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
