"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Ruler, Layers, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

interface ProductItem {
    id: string
    name: string
    image: string
    model?: string
    depth?: string
    processTime?: string
    isVipal?: boolean
    [key: string]: any
}

interface ProductCardProps {
    product: ProductItem
    baseSlug: string
    badgeLabel: string
}

export function ProductCard({ product, baseSlug, badgeLabel }: ProductCardProps) {
    const isMobile = useIsMobile()

    // El filtro dorado guardado como constante
    const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

    return (
        <Link href={`/${baseSlug}/${product.id}`} className="block h-full">
            <motion.div
                className="h-full"
                initial={isMobile ? { opacity: 0, y: 50 } : { opacity: 1, y: 0 }}
                whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
                viewport={isMobile ? { once: true, amount: 0.1 } : undefined}
                transition={isMobile ? { duration: 0.5, delay: 0.1 } : { duration: 0 }}
            >
                {/* El div principal tiene la clase "group", esto nos permite disparar efectos en los hijos al hacer hover */}
                <div className="group relative bg-white border border-zinc-200 hover:border-primary transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 cursor-pointer h-full">

                    {/* Badge de Modelo */}
                    {product.model && (
                        <div className="absolute top-0 left-0 z-30 bg-zinc-900 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border-b border-r border-zinc-800">
                            Model: {product.model}
                        </div>
                    )}

                    <div className="relative aspect-square bg-zinc-50 overflow-hidden border-b border-zinc-100 p-8">
                        {/* Fondo cuadriculado */}
                        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

                        {/* RENDERIZADO CONDICIONAL VIPAL - EFECTO HOVER MÁS GRANDE */}
                        {product.isVipal && (
                            <div
                                // Inyectamos el filtro como una variable CSS nativa
                                style={{ "--gold-filter": goldFilter } as React.CSSProperties}
                                // AJUSTE DE TAMAÑO: Pasamos de h-7 w-16 a h-10 w-24. p-1.5 a p-2.
                                className="absolute top-3 right-3 z-20 h-10 w-24 bg-white/90 backdrop-blur shadow-sm border border-zinc-200 rounded flex items-center justify-center p-2 transition-all duration-300 group-hover:bg-zinc-900 group-hover:border-zinc-800 group-hover:scale-105"
                            >
                                <Image
                                    src="/vipal.png"
                                    alt="Vipal Certificado"
                                    // AJUSTE DE TAMAÑO INTERNO: Next.js necesita estos valores actualizados para la optimización.
                                    width={80} // Un poco más grande internamente
                                    height={30}
                                    // Por defecto: sin filtro. En hover: lee la variable CSS y se pinta de dorado.
                                    className="object-contain w-full h-full transition-all duration-300 [filter:none] group-hover:[filter:var(--gold-filter)]"
                                />
                            </div>
                        )}

                        {/* Imagen del Neumático */}
                        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-contain drop-shadow-md z-10"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight mb-2 group-hover:text-primary transition-colors text-balance min-h-[3.5rem]">
                            {product.name}
                        </h3>

                        <div className="mt-auto pt-4 border-t border-dashed border-zinc-200 grid grid-cols-2 gap-2 text-xs text-zinc-500 font-mono">
                            {/* Slot 1: Profundidad o Tiempo */}
                            {product.depth ? (
                                <div className="flex items-center gap-2">
                                    <Ruler className="h-3 w-3 text-primary" />
                                    <span>{product.depth}</span>
                                </div>
                            ) : product.processTime ? (
                                <div className="flex items-center gap-2">
                                    <Clock className="h-3 w-3 text-primary" />
                                    <span>{product.processTime}</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <span>-</span>
                                </div>
                            )}

                            {/* Slot 2: Badge Label */}
                            <div className="flex items-center gap-2">
                                <Layers className="h-3 w-3 text-primary" />
                                <span>{badgeLabel}</span>
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