"use client"

import Image from "next/image"
import { Award, MapPin, CheckCircle2 } from "lucide-react"

export function VipalSection() {
  // Filtro para convertir el logo (negro o color) a dorado
  const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

  return (
    <section className="relative w-full py-24 overflow-hidden bg-zinc-50">

      {/* --- FONDO AMBIENTAL (Canva Blanco) --- */}
      {/* Patrón de grilla negro muy sutil para canvas blanco */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">

        {/* --- CONTENEDOR TIPO "TARJETA FLOTANTE" (Oscuro sobre Blanco) --- */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-zinc-200">

          {/* Brillo Interior Sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.08),transparent_50%)] rounded-3xl pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

            {/* --- IZQUIERDA: INFORMACIÓN --- */}
            <div className="flex-1 space-y-8 text-center md:text-left">

              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 backdrop-blur-sm">
                <Award className="h-4 w-4 text-yellow-500" />
                <span className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest">
                  Certificación Oficial
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
                  Representante <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    VIPAL
                  </span>
                </h2>

                <p className="text-zinc-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                  Llevamos la tecnología de recapado N°1 del mundo a tu flota. Rendimiento garantizado por expertos.
                </p>
              </div>

              {/* Dato Clave: Santiago del Estero */}
              <div className="flex flex-col md:flex-row items-center gap-6 pt-2">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 shrink-0">
                    <MapPin className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Ubicación</p>
                    <p className="text-white font-bold leading-tight">Santiago del Estero</p>
                  </div>
                </div>

                {/* Separador vertical (solo desktop) */}
                <div className="hidden md:block w-px h-10 bg-zinc-800"></div>

                {/* Check de validación */}
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="text-zinc-300 text-sm font-medium">Socio Autorizado</span>
                </div>
              </div>
            </div>

            {/* --- DERECHA: LOGO (El "Premio") --- */}
            <div className="flex-1 flex justify-center items-center w-full relative">
              <div className="relative w-full max-w-[280px] aspect-[3/1] opacity-90 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src="/vipal.png"
                  alt="Vipal Logo Oficial"
                  fill
                  style={{ filter: goldFilter }}
                  className="object-contain" // drop-shadow omitida para look más limpio
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}