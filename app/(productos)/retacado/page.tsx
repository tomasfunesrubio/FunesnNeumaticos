"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { retacadoCatalog, type RetacadoProduct } from "@/lib/data-retacado"
import {
    Tractor,
    ArrowRight,
    Ruler,
    Layers
} from "lucide-react"
import { motion } from "framer-motion"

// --- TARJETA DE PRODUCTO (Retacado) ---
function ProductCard({ product, isMobile }: { product: RetacadoProduct; isMobile: boolean }) {
    return (
        <Link href={`/retacado/${product.id}`} className="block">
            <motion.div
                initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={isMobile ? { once: true, amount: 0.1 } : undefined}
                transition={isMobile ? { duration: 0.5, delay: 0.1 } : { duration: 0 }}
            >
                <div className="group relative bg-white border border-zinc-200 hover:border-primary transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                    <div className="absolute top-0 left-0 z-20 bg-zinc-900 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border-b border-r border-zinc-800">
                        Model: {product.model}
                    </div>
                    <div className="relative aspect-square bg-zinc-50 overflow-hidden border-b border-zinc-100 p-8">
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-dashed border-zinc-200 grid grid-cols-2 gap-2 text-xs text-zinc-500 font-mono">
                            <div className="flex items-center gap-2">
                                <Ruler className="h-3 w-3 text-primary" />
                                <span>{product.depth}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Layers className="h-3 w-3 text-primary" />
                                <span>RETACADO</span>
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-end text-xs font-bold text-zinc-900 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                            <span>Ver Detalle</span>
                            <ArrowRight className="ml-1 h-3 w-3 text-primary" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

// --- HEADER DE SECCIÓN ---
function CategoryHeader({ title, subtitle, icon: Icon, isMobile }: { title: string; subtitle: string; icon: any; isMobile: boolean }) {
    return (
        <motion.div
            className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-b-2 border-zinc-200 pb-4"
            initial={isMobile ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            whileInView={isMobile ? { opacity: 1, x: 0 } : undefined}
            viewport={isMobile ? { once: true, amount: 0.1 } : undefined}
            transition={isMobile ? { duration: 0.4, ease: "easeOut" } : { duration: 0 }}
        >
            <div className="p-3 bg-zinc-900 text-primary w-fit">
                <Icon className="h-8 w-8" />
            </div>
            <div>
                <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-tight leading-none">
                    {title}
                </h2>
                <p className="text-sm text-zinc-500 font-medium mt-1">
                    {subtitle}
                </p>
            </div>
        </motion.div>
    )
}

export default function RetacadoPage() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            {/* --- HERO SECTION (Refined Design) --- */}
            <section className="pt-32 pb-10 bg-background text-foreground relative border-b border-border overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground uppercase leading-[0.9]">
                                Retacado de <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                                    Neumáticos
                                </span>
                            </h1>
                        </motion.div>
                        <motion.div
                            className="max-w-xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6 py-2">
                                Soluciones específicas para maquinaria agrícola. Maximizamos el agarre y la vida útil de tus cubiertas en las condiciones más exigentes del campo.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =========================================
          SECCIÓN: LÍNEA AGRÍCOLA
         ========================================= */}
            <section id="agricola" className="py-20 relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CategoryHeader
                        title="Línea Agrícola"
                        subtitle="Máxima tracción y respeto por el suelo para maquinaria pesada."
                        icon={Tractor}
                        isMobile={isMobile}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {retacadoCatalog.map((item) => (
                            <ProductCard key={item.id} product={item} isMobile={isMobile} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    )
}
