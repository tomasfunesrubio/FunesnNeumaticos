"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { getProductsByCategory, type PrecuradoProduct } from "@/lib/data-precurado"
import {
  Truck,
  Bus,
  ArrowRight,
  Ruler,
  Activity,
  Layers
} from "lucide-react"



// --- COMPONENTE INTERNO: TARJETA DE PRODUCTO ---
function ProductCard({ product }: { product: PrecuradoProduct }) {
  return (
    <Link href={`/precurado/${product.id}`} className="block">
      <div className="group relative bg-white border border-zinc-200 hover:border-primary transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:-translate-y-1 cursor-pointer">

        {/* Etiqueta de Modelo (Esquina) */}
        <div className="absolute top-0 left-0 z-20 bg-zinc-900 text-white px-3 py-1 text-[10px] font-mono uppercase tracking-widest border-b border-r border-zinc-800">
          Model: {product.model}
        </div>

        {/* Imagen */}
        <div className="relative aspect-square bg-zinc-50 overflow-hidden border-b border-zinc-100 p-8">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* Overlay Hover */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </div>

        {/* Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-black text-zinc-900 uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Specs Técnicas */}
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

          {/* Botón fantasma */}
          <div className="mt-4 flex items-center justify-end text-xs font-bold text-zinc-900 uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Ver Detalle</span>
            <ArrowRight className="ml-1 h-3 w-3 text-primary" />
          </div>
        </div>
      </div>
    </Link>
  )
}

// --- COMPONENTE INTERNO: HEADER DE SECCIÓN ---
function CategoryHeader({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end gap-4 mb-10 border-b-2 border-zinc-200 pb-4">
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
    </div>
  )
}

export default function PrecuradoPage() {
  const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)";

  const pesados = getProductsByCategory("pesados")
  const medianos = getProductsByCategory("medianos")

  return (
    <main className="min-h-screen bg-zinc-50">
      <Header />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-10 bg-background text-foreground relative border-b border-border overflow-hidden">
        {/* Grilla Técnica */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            {/* Columna Izquierda: Título */}
            <div>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground uppercase leading-[0.9]">
                Diseños de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                  Precurado
                </span>
              </h1>
            </div>

            {/* Columna Derecha: Descripción */}
            <div className="max-w-xl">
              <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6 py-2">
                Soluciones de reconstrucción certificada para cada tipo de terreno y aplicación. Maximizamos el rendimiento kilométrico de tu carcasa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECCIÓN 1: CAMIONES PESADOS
         ========================================= */}
      <section id="pesados" className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryHeader
            title="Transporte Pesado"
            subtitle="Larga distancia, Servicio Regional y Fuera de Ruta."
            icon={Truck}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pesados.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECCIÓN 2: CAMIONES MEDIANOS (Fondo alternado)
         ========================================= */}
      <section id="medianos" className="py-20 bg-white border-y border-zinc-200 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <CategoryHeader
            title="Medianos & Reparto"
            subtitle="Soluciones ágiles para distribución urbana y regional."
            icon={Bus}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {medianos.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>



      <CTASection />
      <Footer />
    </main>
  )
}