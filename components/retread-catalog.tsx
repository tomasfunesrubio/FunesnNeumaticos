"use client"

import Link from "next/link"
import { ArrowRight, Box, Zap, Mountain, Route } from "lucide-react"
import { RetreadCard } from "@/components/retread-card" // <--- CAMBIA ESTO SI LA RUTA ES DISTINTA

// --- DATOS DE EJEMPLO ---
// Cambia las rutas de las imágenes por las que tengas en tu carpeta public
const retreadProducts = [
  {
    id: "premium-drive",
    name: "Tracción Regional Premium",
    category: "Larga Distancia",
    icon: Route,
    image: "/rueda-camion.png", // Usando la que subiste como ejemplo
    slug: "traccion-regional-premium"
  },
  {
    id: "mixed-service",
    name: "Servicio Mixto Obra",
    category: "Terreno Agreste",
    icon: Mountain,
    image: "/rueda-camion.png", 
    slug: "servicio-mixto-obra"
  },
  {
    id: "urban-bus",
    name: "Urbano Reforzado",
    category: "Transporte Urbano",
    icon: Box,
    image: "/rueda-camion.png",
    slug: "urbano-reforzado"
  },
  {
    id: "eco-trailer",
    name: "Eco Trailer Line",
    category: "Eje Libre",
    icon: Zap,
    image: "/rueda-camion.png",
    slug: "eco-trailer-line"
  },
]

export function RetreadCatalog() {
  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      
      {/* Fondo técnico sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* --- Header de Sección --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-300 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-10 bg-primary"></div>
                <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">
                  Catálogo 2026
                </span>
              </div>
              <h2 className="text-3xl font-black text-zinc-900 sm:text-5xl uppercase tracking-tight">
                Diseños de <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-800 to-zinc-500">Recapado</span>
              </h2>
            </div>
            
            <p className="text-zinc-600 max-w-md text-right hidden md:block border-r-4 border-primary pr-4">
              Contamos con una amplia variedad de bandas precuradas para cada tipo de terreno y exigencia.
            </p>
        </div>

        {/* --- Grid de Productos --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {retreadProducts.map((product) => (
               <RetreadCard key={product.id} product={product} />
            ))}
        </div>

        {/* --- CTA Inferior --- */}
        <div className="mt-16 text-center">
            <Link 
              href="/catalogo-completo" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900 text-white font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all group"
            >
               Descargar Catálogo PDF
               <ArrowRight className="h-5 w-5 group-hover:rotate-45 transition-transform" />
            </Link>
        </div>

      </div>
    </section>
  )
}