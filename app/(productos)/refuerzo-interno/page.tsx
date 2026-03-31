import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Tractor, ShieldCheck, Award, Leaf, Layers, Target, CheckCircle2, Factory, MessageCircle, Waves, ArrowDownToDot, Wrench, Activity } from "lucide-react"
import { Metadata } from "next"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedGrid, AnimatedGridItem } from "@/components/animated-grid"

export const metadata: Metadata = {
    title: "Refuerzo Interno Agrícola | Funes Neumáticos",
    description: "Soluciones de refuerzo estructural avanzado para neumáticos agrícolas. Resistencia y rendimiento garantizados para el campo.",
    alternates: {
        canonical: '/refuerzo-interno',
    },
    robots: { index: true, follow: true },
}

export default function RefuerzoPage() {
    return (
        <main className="min-h-screen bg-zinc-50 font-sans selection:bg-primary/30">
            <Header />

            {/* SECCIÓN 1: HERO INDUSTRIAL PREMIUM */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-zinc-950">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <AnimatedGrid className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                        <AnimatedGridItem className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
                                <Factory className="h-4 w-4" />
                                Tecnología de Refuerzo
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1]">
                                Recuperá la <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-yellow-600">
                                    Integridad de tu
                                </span> <br />
                                Carcasa
                            </h1>

                            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
                                Soluciones estructurales avanzadas para reparar daños severos y devolver a tus neumáticos agrícolas su resistencia original ante las condiciones operativas más extremas.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <a href="#contacto" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-black font-bold px-8 py-4 rounded-full transition-colors group text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                    <MessageCircle className="h-5 w-5" />
                                    Consultar Viabilidad
                                </a>
                            </div>
                        </AnimatedGridItem>

                        <AnimatedGridItem className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-zinc-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent z-10"></div>
                                {/* Imagen representativa */}
                                <div className="w-full h-full bg-zinc-800 flex flex-col items-center justify-center bg-cover bg-center transition-transform hover:scale-105 duration-1000" style={{ backgroundImage: "url('/calidad.jpg')" }}>

                                </div>
                            </div>

                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-zinc-200 flex items-center gap-4 z-20">
                                <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Certificación</p>
                                    <p className="font-black text-zinc-900 leading-none">Reparación Estructural</p>
                                </div>
                            </div>
                        </AnimatedGridItem>
                    </AnimatedGrid>
                </div>
            </section>

            {/* SECCIÓN 2: INTRODUCCIÓN FEATURE HIGHLIGHT */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <AnimatedGrid className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedGridItem className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight leading-[1.1]">
                                Reparar y Curar <br /> desde el interior
                            </h2>
                            <div className="h-1 w-20 bg-primary mb-8 rounded-full"></div>

                            <p className="text-2xl text-zinc-600 leading-relaxed font-medium">
                                Un neumático dañado en el campo no significa necesariamente una pérdida total. Nuestros procesos de refuerzo interno rescatan carcasas aparentemente desechables.
                            </p>
                            <p className="text-lg text-zinc-500 leading-relaxed">
                                Aplicamos parches de múltiples lonas, aramida y refuerzos metálicos que se fusionan a nivel molecular con el flanco o banda dañada mediante vulcanización controlada, manteniendo la flexibilidad y funcionalidad del neumático intacta.
                            </p>
                        </AnimatedGridItem>

                        <AnimatedGridItem>
                            <div className="bg-zinc-50 rounded-2xl p-8 lg:p-12 border border-zinc-200 shadow-sm relative">
                                <div className="absolute -top-6 -right-6 bg-primary text-black font-black uppercase text-sm px-4 py-2 rounded-full shadow-lg transform rotate-3">
                                    Dato Clave
                                </div>

                                <h3 className="text-3xl font-black text-zinc-900 mb-8 leading-tight tracking-tight">
                                    Salvataje <span className="text-primary">Estructural</span> a un bajo costo
                                </h3>

                                <ul className="space-y-6">
                                    {[
                                        "Parches radiales de alta tecnología (Aramida/Acero).",
                                        "Fusiones en caliente sin costuras ni escalones.",
                                        "Recuperación 100% segura para rodado en campo.",
                                        "Alternativa de mínimo costo comparada a un neumático nuevo grande."
                                    ].map((punto, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1 shrink-0 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                            </div>
                                            <span className="text-lg text-zinc-700 font-medium">{punto}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedGridItem>
                    </AnimatedGrid>
                </div>
            </section>

            {/* SECCIÓN 3: BENTO GRID DE BENEFICIOS TÉCNICOS */}
            <section className="py-24 bg-zinc-50 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4">
                            Ingeniería Aplicada a la Reparación
                        </h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
                        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Layers className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wide">Refuerzos Radiales</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Aplicamos lonas direccionales y materiales de alto impacto para recomponer completamente el índice de carga original en las zonas críticas afectadas por cortes y desgarros.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wide">Vulcanización Precisa</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Utilizamos un curado de termo-presión localizado, fundiendo el caucho reparador con la carcasa a nivel molecular. Esto evita las burbujas internas tan comunes en parches fríos convencionales.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-8 hover:shadow-xl hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center">
                            <div className="h-20 w-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Award className="h-10 w-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-4 uppercase tracking-wide">Flexibilidad Intacta</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                A diferencia de pegamentos rígidos, nuestros materiales acompañan la elongación y flexión del neumático en el terreno bajo cargas drásticas, neutralizando el riesgo de estallido.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 4: TIPOS DE DAÑOS REPARABLES */}
            <section className="py-24 bg-zinc-100 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight mb-4">
                            ¿Qué podemos salvar?
                        </h2>
                        <div className="h-1 w-20 bg-primary mx-auto"></div>
                        <p className="mt-6 text-lg text-zinc-600 max-w-2xl mx-auto">
                            No descartes tu inversión a primera vista. Nuestro equipo técnico certifica e interviene daños críticos que la vulcanización tradicional da por perdidos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="h-14 w-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                <Waves className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Cortes en el Flanco</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Producidos por desgarros laterales con tocones invisibles o piedras filosas. Reconstruimos la pared cruzando lonas de alta resistencia que previenen abombamientos futuros.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="h-14 w-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                <ArrowDownToDot className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Punzadas Profundas</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Perforaciones directas en la banda rodante causadas por hierros gruesos en el lote. Sellamos térmica y estructuralmente el canal de penetración desde la primer lona.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border border-zinc-200/60 shadow-sm hover:border-primary/50 transition-colors">
                            <div className="h-14 w-14 bg-zinc-900 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                                <Wrench className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3 uppercase tracking-wide">Problemas de Talón</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                Recuperación de la zona de anclaje con el aro metálico. Reparamos desgarros por montajes forzados asegurando un asentamiento perfecto y retención de libras ideal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECCIÓN 5: TECNOLOGÍA BACTERIOLÓGICA Y MATERIALES */}
            <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute -left-40 top-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            {/* Decorative element showcasing material layers */}
                            <div className="aspect-[4/5] sm:aspect-square max-w-md mx-auto relative group">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-700"></div>
                                <div className="relative h-full w-full border border-white/10 rounded-2xl bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-center gap-6 overflow-hidden">
                                    <div className="absolute -right-12 -top-12 w-48 h-48 opacity-10 pointer-events-none text-white whitespace-pre font-mono text-xs leading-[8px] transform rotate-12">
                                        ||||||||||||||||
                                        \\\\\\\\\\\\\\\\
                                        ||||||||||||||||
                                    ////////////////
                                    </div>

                                    <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-white/10 shadow-xl z-10 hover:-translate-y-1 transition-transform">
                                        <div className="bg-primary/20 p-2 rounded-lg">
                                            <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white leading-none uppercase tracking-wide text-sm">Capa 1: Base de Anclaje</p>
                                            <p className="text-xs text-zinc-400 mt-1">Caucho de cojín termofusionable molecular.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-white/10 shadow-xl ml-4 sm:ml-8 z-10 hover:-translate-y-1 transition-transform">
                                        <div className="bg-primary/20 p-2 rounded-lg">
                                            <Layers className="h-6 w-6 text-primary shrink-0" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white leading-none uppercase tracking-wide text-sm">Capa 2: Malla Antibalística</p>
                                            <p className="text-xs text-zinc-400 mt-1">Lonas entrecruzadas de Aramida ultraliviana.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 bg-zinc-950 p-4 rounded-xl border border-white/10 shadow-xl ml-8 sm:ml-16 z-10 hover:-translate-y-1 transition-transform">
                                        <div className="bg-primary/20 p-2 rounded-lg">
                                            <Target className="h-6 w-6 text-primary shrink-0" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white leading-none uppercase tracking-wide text-sm">Capa 3: Sellado Bloqueante</p>
                                            <p className="text-xs text-zinc-400 mt-1">Película final con aislación 100% antihumedad.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold tracking-widest uppercase text-sm border border-primary/20">
                                    <Activity className="h-5 w-5" />
                                    Grado Industrial
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-[1.1]">
                                    Materiales con <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-yellow-600">
                                        Fuerza Balística
                                    </span>
                                </h2>
                                <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                                    El secreto de un refuerzo estructural que sobrevive intacto miles de horas radica en no escatimar jamás en su paquete constructivo interno.
                                </p>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 bg-white/5 p-1.5 rounded-full border border-white/10">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    </div>
                                    <div>
                                        <strong className="text-white text-lg block mb-1">Aramida Kevlar®:</strong>
                                        <p className="text-zinc-400 leading-relaxed">Implementamos parches compuestos por las mismas fibras flexibles que detienen impactos balísticos. Aportan extrema resistencia a la tracción sin sumar el peso muerto del acero rígido.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="mt-1 bg-white/5 p-1.5 rounded-full border border-white/10">
                                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                                    </div>
                                    <div>
                                        <strong className="text-white text-lg block mb-1">Vulcanización Dinámica:</strong>
                                        <p className="text-zinc-400 leading-relaxed">Nuestro caucho base no seca como un pegamento, sino que al entrar a los autoclaves (140°C), se termofusiona. Se transforma permanentemente en una extensión viva de tu carcasa.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
