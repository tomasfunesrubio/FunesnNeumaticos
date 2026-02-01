"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Ruler, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { type PrecuradoProduct } from "@/lib/data-precurado"
import { useIsMobile } from "@/hooks/use-mobile"

interface ProductCardProps {
    product: PrecuradoProduct
}

export function ProductCard({ product }: ProductCardProps) {
    const isMobile = useIsMobile()

    return (
        <Link href={`/precurado/${product.id}`} className="block">
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                className="object-contain drop-shadow-md"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight mb-2 group-hover:text-primary transition-colors text-balance">
                            {product.name}
                        </h3>
                        <div className="mt-auto pt-4 border-t border-dashed border-zinc-200 grid grid-cols-2 gap-2 text-xs text-zinc-500 font-mono">
                            <div className="flex items-center gap-2">
                                <Ruler className="h-3 w-3 text-primary" />
                                <span>{product.depth}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Layers className="h-3 w-3 text-primary" />
                                <span>PRECURADO</span>
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
