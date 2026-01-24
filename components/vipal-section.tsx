"use client"

import Image from "next/image"
import { Award, MapPin, CheckCircle2 } from "lucide-react"

export function VipalSection() {
  // Filtro para convertir el logo (negro o color) a dorado
  const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

  return (
    <section className="relative w-full py-10 overflow-hidden bg-zinc-950">

      {/* --- FONDO AMBIENTAL --- */}
      {/* Patrón de grilla sutil para dar textura técnica */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-yellow-600/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>

      <div className="w-full max-w-3xl mx-auto px-6 relative z-10">

        {/* --- CONTENEDOR TIPO "TARJETA / LOGRO" --- */}
        <div className="relative bg-zinc-900/80 backdrop-blur-md border border-yellow-500/20 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_-12px_rgba(234,179,8,0.15)]">

          {/* Adorno visual: Esquina superior brillante */}
          <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-xl"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* --- IZQUIERDA: INFORMACIÓN --- */}
            <div className="flex-1 space-y-6 text-center md:text-left">

              {/* Badge Superior */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                <Award className="h-4 w-4 text-zinc-950" />
                <span className="text-zinc-950 font-bold text-[10px] uppercase tracking-widest">
                  Certificación Oficial
                </span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.9] tracking-tighter">
                  Representante <br />
                  <span className="text-yellow-400 drop-shadow-sm">
                    VIPAL
                  </span>
                </h2>

                <p className="text-white text-lg font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                  Llevamos la tecnología de recapado N°1 del mundo a tu flota. Rendimiento garantizado por expertos.
                </p>
              </div>

              {/* Dato Clave: Santiago del Estero */}
              <div className="flex flex-col md:flex-row items-center gap-4 pt-2">
                <div className="flex items-center gap-3 bg-zinc-800/80 px-5 py-3 rounded-xl border border-white/5">
                  <MapPin className="h-5 w-5 text-yellow-500 shrink-0" />
                  <div className="text-left">
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Ubicación</p>
                    <p className="text-white font-bold">Santiago del Estero</p>
                  </div>
                </div>

                {/* Check de validación */}
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  <span className="text-zinc-300 text-sm font-medium">Socio Autorizado</span>
                </div>
              </div>
            </div>

            {/* --- DERECHA: LOGO (El "Premio") --- */}
            <div className="flex-1 flex justify-center items-center w-full relative">

              {/* Círculo decorativo detrás del logo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 to-transparent rounded-full blur-2xl transform scale-90"></div>

              <div className="relative w-full max-w-[280px] aspect-[3/1] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/vipal.png"
                  alt="Vipal Logo Oficial"
                  fill
                  style={{ filter: goldFilter }}
                  className="object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}