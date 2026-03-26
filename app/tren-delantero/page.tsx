import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
    Truck,
    Car,
    MoveHorizontal,
    CheckCircle2,
    AlertTriangle,
    Volume2,
    CircleDot,
    TrendingDown,
    Crosshair,
    ShieldCheck,
    Gauge,
    Disc
} from "lucide-react"
import { Button } from "@/components/ui/button"

import { ServiceHero } from "@/components/service-hero"
import { ServiceContentBlock } from "@/components/service-content-block"
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Reparación de Tren Delantero y Frenos | Funes Neumáticos",
    description: "Diagnóstico y reparación integral de tren delantero, suspensión y frenos para flotas pesadas y vehiculos livianos. Garantía de seguridad.",
}

export default function TrenDelanteroPage() {
    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            <ServiceHero
                backgroundImage="/fondo-1-tren.jpg"
                imageAlt="Reparación de tren delantero de camión pesado en taller"
                badgeIcon={<Crosshair className="h-4 w-4 text-primary" />}
                badgeText="Diagnóstico y Reparación"
                title={
                    <>
                        Suspensión y <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                            Tren Delantero
                        </span>
                    </>
                }
                description="Seguridad y confort de marcha. Reparación integral de sistemas de dirección y amortiguación para toda tu flota."
                ctaText="Agendar Revisión Técnica"
            />

            {/* --- SEGMENT BAR --- */}
            <div className="bg-zinc-900 border-y border-zinc-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between py-10 gap-8">
                        <span className="text-white font-black uppercase tracking-widest text-base flex items-center gap-3">
                            <CheckCircle2 className="text-primary h-6 w-6" />
                            Atendemos toda tu flota
                        </span>

                        <div className="flex items-center gap-16">
                            <div className="flex flex-col items-center gap-2">
                                <Truck className="h-10 w-10 text-primary" />
                                <span className="text-sm font-bold uppercase tracking-wider text-white">Pesados</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Car className="h-10 w-10 text-primary" />
                                <span className="text-sm font-bold uppercase tracking-wider text-white">Livianos</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <MoveHorizontal className="h-10 w-10 text-primary" />
                                <span className="text-sm font-bold uppercase tracking-wider text-white">Utilitarios</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- SERVICES ZIG-ZAG LAYOUT --- */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-20">
                        <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4">Nuestros Servicios de Reparación</h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <ServiceContentBlock
                        icon={<Gauge className="h-5 w-5" />}
                        title="Amortiguadores y Elásticos"
                        description="Restauramos la estabilidad y el confort de marcha. Reemplazamos amortiguadores, bujes, elásticos y soportes de suspensión con repuestos de primera línea."
                        features={[
                            "Reemplazo de amortiguadores",
                            "Bujes y soportes",
                            "Elásticos y abrazaderas"
                        ]}
                        imageContent={
                            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                [IMAGEN: Amortiguadores]
                            </div>
                        }
                    />

                    <ServiceContentBlock
                        icon={<Crosshair className="h-5 w-5" />}
                        title="Extremos y Dirección"
                        description="Control preciso para tu vehículo. Reparamos y reemplazamos terminales, rotulas, cremalleras y bombas hidráulicas para una respuesta de dirección impecable."
                        features={[
                            "Terminales de dirección",
                            "Rotulas superiores e inferiores",
                            "Cajas y bombas de dirección"
                        ]}
                        reversed={true}
                        imageContent={
                            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                [IMAGEN: Rotulas]
                            </div>
                        }
                    />

                    <ServiceContentBlock
                        icon={<Disc className="h-5 w-5" />}
                        title="Frenos y Rodamientos"
                        description="Seguridad ante todo. Servicio completo de frenos: discos, pastillas, campanas, cintas y rodamientos de maza. Frenado parejo y confiable."
                        features={[
                            "Discos y pastillas",
                            "Campanas y cintas",
                            "Rodamientos de maza"
                        ]}
                        imageContent={
                            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                [IMAGEN: Sistema de Frenos]
                            </div>
                        }
                    />
                </div>
            </section>

            {/* --- SYMPTOMS / DIAGNOSIS GRID --- */}
            <section className="py-20 bg-zinc-100 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 border border-red-500/30 bg-red-500/10 px-4 py-2 mb-6">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-red-600 font-bold tracking-[0.1em] text-xs uppercase">Diagnóstico Preventivo</span>
                        </div>
                        <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4">¿Detectás alguna de estas fallas?</h2>
                        <p className="text-zinc-500">Si tu vehículo presenta uno o más de estos síntomas, es momento de una revisión profesional.</p>
                    </div>

                    <AnimatedGrid className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Symptom 1 */}
                        <AnimatedGridItem>
                            <div className="bg-white border-2 border-zinc-200 p-6 hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full">
                                <div className="h-12 w-12 bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-primary transition-all duration-300">
                                    <Volume2 className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-black transition-colors duration-300">Ruidos o Golpes</h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-800 transition-colors duration-300">Sonidos al pasar baches o en superficies irregulares.</p>
                            </div>
                        </AnimatedGridItem>

                        {/* Symptom 2 */}
                        <AnimatedGridItem>
                            <div className="bg-white border-2 border-zinc-200 p-6 hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full">
                                <div className="h-12 w-12 bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-primary transition-all duration-300">
                                    <CircleDot className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-black transition-colors duration-300">Vibración en Volante</h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-800 transition-colors duration-300">Temblor perceptible en la dirección a ciertas velocidades.</p>
                            </div>
                        </AnimatedGridItem>

                        {/* Symptom 3 */}
                        <AnimatedGridItem>
                            <div className="bg-white border-2 border-zinc-200 p-6 hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full">
                                <div className="h-12 w-12 bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-primary transition-all duration-300">
                                    <TrendingDown className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-black transition-colors duration-300">Desgaste Irregular</h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-800 transition-colors duration-300">Las cubiertas se gastan de forma dispareja o prematura.</p>
                            </div>
                        </AnimatedGridItem>

                        {/* Symptom 4 */}
                        <AnimatedGridItem>
                            <div className="bg-white border-2 border-zinc-200 p-6 hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer h-full">
                                <div className="h-12 w-12 bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-primary transition-all duration-300">
                                    <Crosshair className="h-6 w-6" />
                                </div>
                                <h3 className="font-bold text-zinc-900 mb-2 group-hover:text-black transition-colors duration-300">Dirección Inestable</h3>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-800 transition-colors duration-300">Dificultad para mantener el vehículo en línea recta.</p>
                            </div>
                        </AnimatedGridItem>
                    </AnimatedGrid>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-20 bg-zinc-950 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#222_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl"></div>

                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
                    <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />

                    <h2 className="text-4xl font-black uppercase tracking-tight mb-6">No arriesgues la seguridad de tu flota</h2>
                    <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                        Una revisión a tiempo evita accidentes y gastos mayores. Contactanos hoy para agendar un diagnóstico profesional.
                    </p>

                    <a href="https://api.whatsapp.com/send?phone=5493854135265" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-10 text-lg rounded-none shadow-[0_0_25px_rgba(234,179,8,0.4)] transition-all hover:scale-105 flex items-center gap-3 mx-auto">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Agendar Revisión Técnica
                        </Button>
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    )
}
