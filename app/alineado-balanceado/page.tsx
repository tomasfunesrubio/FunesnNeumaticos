"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
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
    Phone,
    ArrowRight,
    MoveHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AlineadoPage() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // Variants for Staggered Animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    }

    // Standard scroll reveal for simple elements (Mobile Only)
    const simpleScrollProps = isMobile
        ? {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.1 },
            transition: { duration: 0.5 }
        }
        : {}

    const whatsappUrl = "https://api.whatsapp.com/send/?phone=543856981610&text=Hola%2C%20quiero%20pedir%20un%20turno%20para%20alineaci%C3%B3n"

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-20 bg-zinc-950 text-white relative border-b border-zinc-800 overflow-hidden">
                <Image
                    src="/fondo-alineacion-balanceo.jpeg"
                    alt="Taller de alineación 3D para camiones pesados"
                    fill
                    className="object-cover object-center opacity-90"
                    priority
                />

                {/* Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-0"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
                                <Activity className="h-4 w-4 text-primary" />
                                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                                    Servicio Premium
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h1 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-7xl text-white mb-8 uppercase leading-tight sm:leading-[0.9]">
                                Alineación y <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                                    Balanceo Computarizado
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2 mb-10">
                                Precisión láser para toda tu flota. Maximizá la vida útil de tus neumáticos y reducí el consumo de combustible.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider h-14 px-8 text-lg rounded-none shadow-[0_0_20px_rgba(234,179,8,0.3)] transition-all hover:scale-105 flex items-center gap-3">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    Solicitar Turno por WhatsApp
                                </Button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- SEGMENT INDICATORS (Staggered) --- */}
            <motion.div
                className="bg-white border-b border-zinc-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6">
                        <motion.span
                            variants={itemVariants}
                            className="text-zinc-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2"
                        >
                            <CheckCircle2 className="text-primary h-5 w-5" />
                            Servicio Integral Multivehículo
                        </motion.span>

                        <div className="flex items-center gap-12 text-zinc-400">
                            {[
                                { Icon: Truck, label: "Pesados" },
                                { Icon: Car, label: "Livianos" },
                                { Icon: MoveHorizontal, label: "Utilitarios" }
                            ].map(({ Icon, label }) => (
                                <motion.div
                                    key={label}
                                    variants={itemVariants}
                                    className="flex flex-col items-center gap-2 group cursor-default"
                                >
                                    <Icon className="h-8 w-8 group-hover:text-zinc-900 transition-colors" />
                                    <span className="text-xs font-bold uppercase tracking-wider group-hover:text-zinc-900 transition-colors">{label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* --- SHOWCASE / IMAGE SECTION --- */}
            <section className="py-20 bg-zinc-50 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            className="order-2 lg:order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="relative aspect-[4/3] bg-zinc-200 lg:-rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl border-4 border-white">
                                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-sm">
                                    {/* Placeholder visible */}
                                    [IMAGEN TALLER: Alineadora 3D]
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="order-1 lg:order-2 space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={containerVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl font-black text-zinc-900 uppercase tracking-tight">
                                Tecnología de Vanguardia
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-lg text-zinc-600 leading-relaxed">
                                Utilizamos equipamiento de última generación con <strong>sensores 3D de alta precisión</strong>. Nuestro sistema realiza lecturas milimétricas de:
                            </motion.p>
                            <ul className="space-y-3">
                                {[
                                    "Corrección de Comba (Camber)",
                                    "Alineación de Avance (Caster)",
                                    "Ajuste de Convergencia"
                                ].map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={itemVariants}
                                        className="flex items-center gap-3 text-zinc-700 font-medium"
                                    >
                                        <CheckCircle2 className="h-5 w-5 text-primary" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- BENEFITS GRID (Staggered) --- */}
            <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,#222_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                <motion.div
                    className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                >
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">¿Por qué alinear tu vehículo?</h2>
                            <div className="h-1 w-20 bg-primary mx-auto"></div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Benefit 1 */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Gauge className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Ahorro Real</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    La correcta alineación reduce la resistencia al rodamiento, lo que se traduce directamente en un menor consumo de combustible por kilómetro.
                                </p>
                            </div>
                        </motion.div>

                        {/* Benefit 2 */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Durabilidad</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Evitá el desgaste irregular y prematuro ('dientes de sierra') de la banda de rodamiento. Extendé la vida útil de tus neumáticos hasta un 20%.
                                </p>
                            </div>
                        </motion.div>

                        {/* Benefit 3 */}
                        <motion.div variants={itemVariants}>
                            <div className="bg-zinc-800/50 border border-zinc-700 p-8 hover:border-primary transition-colors group h-full">
                                <div className="h-12 w-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Zap className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-3 text-white">Seguridad</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Mejor respuesta de dirección y estabilidad en ruta. Prevení vibraciones al volante y asegurá un frenado parejo en situaciones críticas.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
