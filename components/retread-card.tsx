"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  icon: LucideIcon
  image: string
  slug: string
}

interface RetreadCardProps {
  product: Product
}

export function RetreadCard({ product }: RetreadCardProps) {
  return (
    <Link href={`/recapados/${product.slug}`} className="block h-full">
      <article className="group relative h-full bg-white border border-zinc-200 hover:border-primary transition-all duration-300 flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1">
        
        {/* 1. Header de la tarjeta (Categoría) */}
        <div className="absolute top-0 left-0 z-20 bg-zinc-900 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border-b border-r border-zinc-800">
           {product.category}
        </div>
    
        {/* 2. Contenedor de Imagen (Con efecto Zoom) */}
        <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden border-b border-zinc-100">
          {/* Fondo decorativo por si la imagen tarda */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
          
          {/* Imagen del Producto */}
          <div className="relative w-full h-full p-8 group-hover:scale-105 transition-transform duration-500 ease-out">
             <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain drop-shadow-xl"
             />
          </div>

          {/* Overlay Hover (Borde inferior amarillo que sube) */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* 3. Contenido (Texto) */}
        <div className="p-6 flex flex-col flex-grow relative">
          
          <div className="flex items-center gap-2 mb-3 text-zinc-400 group-hover:text-primary transition-colors">
             <product.icon className="h-4 w-4" />
             <span className="text-xs font-bold uppercase tracking-wider">Diseño Técnico</span>
          </div>

          <h3 className="text-xl font-black text-zinc-900 uppercase leading-tight mb-2 group-hover:text-primary-foreground transition-colors">
            {product.name}
          </h3>

          {/* Botón Simulado */}
          <div className="mt-auto pt-4 flex items-center text-sm font-bold text-zinc-900 uppercase tracking-wide group/btn">
             <span className="border-b-2 border-transparent group-hover:border-primary transition-all">Ver Especificaciones</span>
             <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform text-primary" />
          </div>

          {/* Decoración de esquina */}
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-b-primary border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      </article>
    </Link>
  )
}