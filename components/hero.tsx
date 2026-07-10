"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Car, Truck, Tractor, ArrowDown } from "lucide-react"

function MobileFunesSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-900 font-sans flex flex-col justify-end">
      <Image 
        src="/hero/mobile-funes.png" 
        alt="Funes Neumáticos" 
        fill 
        className="object-cover"
        style={{ objectPosition: '58% 40%' }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-zinc-950/10"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-yellow-600 pointer-events-none"></div>
      
      <div className="relative z-10 p-6 pb-12 flex flex-col gap-2.5 pointer-events-none w-full">
        <h1 className="m-0 font-black text-3xl sm:text-[32px] leading-[1.05] text-zinc-50 tracking-tight mt-4">
          Neumáticos nuevos para <br/><span className="text-primary">todo tipo de transporte</span>
        </h1>
        
        <p className="m-0 text-[11px] leading-relaxed text-zinc-300">
          Amplio stock para autos, camionetas, camiones y flotas. Rendimiento y seguridad garantizada, directo de fábrica.
        </p>
        
        <div className="flex flex-col gap-0.5 mt-1.5">
          <span className="text-[12px] text-zinc-50 font-bold">+54 9 385 413-5265</span>
          <span className="text-[10px] text-zinc-400">ventas@funesneumaticos.com</span>
        </div>
      </div>
    </div>
  )
}

function MobileCuotasSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-900 font-sans flex flex-col justify-end">
      <Image 
        src="/hero/mobile-cuotas-bg.png" 
        alt="Textura de neumático" 
        fill 
        className="object-cover object-center" 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-yellow-600 pointer-events-none"></div>
      
      <div className="relative z-10 p-6 pb-12 flex flex-col gap-2.5 pointer-events-none w-full">
        <h1 className="m-0 font-black text-2xl leading-[1.05] text-zinc-50 tracking-tight mt-5">
          Pagá tus neumáticos con tarjeta <br/><span className="text-primary">hasta en 18 cuotas</span>
        </h1>
        
        <p className="m-0 text-[11px] leading-relaxed text-zinc-300">
          Sumamos Visa y Mastercard bancarizadas, y Tarjeta Naranja. Financiá tu compra en 2, 3, 6, 9, 12 o 18 cuotas.
        </p>
        
        <div className="flex items-center gap-2 mt-4">
          <div className="flex-1 h-10 rounded-md bg-white flex items-center justify-center p-2 shadow-lg">
            <img src="/hero/visa.png" alt="Visa" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex-1 h-10 rounded-md bg-white flex items-center justify-center p-1.5 shadow-lg">
            <img src="/hero/mastercard.png" alt="Mastercard" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="flex-1 h-10 rounded-md bg-white flex items-center justify-center p-2 shadow-lg">
            <img src="/hero/naranjax.png" alt="Naranja X" className="max-w-full max-h-full object-contain" />
          </div>
        </div>

        <div className="flex items-center flex-wrap gap-1.5 mt-2">
          <span className="text-[11px] text-zinc-400 mr-0.5">Cuotas:</span>
          {[2, 3, 6, 9, 12, 18].map(num => (
            <span 
              key={num} 
              className={`inline-flex items-center justify-center min-w-[24px] h-5 px-1.5 rounded-full font-bold text-[10px] ${
                num === 18 
                  ? "bg-primary text-zinc-900" 
                  : "border border-primary/50 text-primary"
              }`}
            >
              {num}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileServiciosSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-900 font-sans flex flex-col justify-end">
      <Image 
        src="/hero/mobile-servicios-bg.png" 
        alt="Operario reconstruyendo neumático" 
        fill 
        className="object-cover"
        style={{ objectPosition: '70% 35%', filter: 'brightness(0.82)' }} 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-yellow-600 pointer-events-none"></div>
      
      <div className="relative z-10 p-6 pb-12 flex flex-col gap-3 pointer-events-none w-full">
        <h1 className="m-0 font-black text-3xl leading-[1.05] text-zinc-50 tracking-tight mt-10">
          Precurado y <br/><span className="text-primary">Servicios Integrales</span>
        </h1>
        
        <p className="m-0 text-[11px] leading-relaxed text-zinc-300">
          Reconstrucción de neumáticos con tecnología premium y mecánica especializada para maximizar el rendimiento de tu flota.
        </p>
        
        <div className="flex items-center gap-4 mt-2">
          <div className="flex flex-col gap-0.5">
            <span className="font-black text-2xl leading-none text-zinc-50">20<span className="text-primary">+</span></span>
            <span className="text-[9px] text-zinc-400 leading-tight">Años de<br/>experiencia</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col gap-0.5">
            <span className="font-black text-2xl leading-none text-zinc-50">50<span className="text-primary">%</span></span>
            <span className="text-[9px] text-zinc-400 leading-tight">Ahorro<br/>promedio</span>
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col gap-0.5">
            <span className="font-black text-2xl leading-none text-zinc-50">50<span className="text-primary">k</span></span>
            <span className="text-[9px] text-zinc-400 leading-tight">Neumáticos<br/>restaurados</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileCalidadSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-900 font-sans flex flex-col justify-end">
      <Image 
        src="/hero/mobile-calidad-bg.png" 
        alt="Operario en planta" 
        fill 
        className="object-cover object-center"
        style={{ filter: 'brightness(0.9)' }} 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-yellow-600 pointer-events-none"></div>
      
      <div className="relative z-10 p-6 pb-10 flex flex-col gap-2.5 pointer-events-none w-full">
        <h1 className="m-0 font-black text-[26px] leading-[1.08] text-zinc-50 tracking-tight mt-2">
          Procesos certificados, <br/><span className="text-primary">resultados garantizados</span>
        </h1>
        
        <p className="m-0 text-[11px] leading-relaxed text-zinc-300">
          Trabajamos bajo normas ISO 9001 y somos representantes oficiales de VIPAL, marca líder global en tecnología de recapado. Más de 20 años reconstruyendo con los más altos estándares.
        </p>
        
        <div className="flex items-center gap-4 mt-1.5">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-md shrink-0">
            <img src="/hero/iso-logo.png" alt="ISO 9001" className="max-w-full max-h-full object-contain" />
          </div>
          <div className="w-px h-8 bg-white/20"></div>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-[8px] tracking-widest uppercase text-primary">Representantes oficiales</span>
            <img src="/hero/vipal-logo-hero.png" alt="VIPAL" className="h-5 w-auto object-left" style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileStockSlide() {
  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-900 font-sans flex flex-col justify-end">
      <Image 
        src="/hero/mobile-stock.png" 
        alt="Neumáticos en depósito" 
        fill 
        className="object-cover object-center" 
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary to-yellow-600 pointer-events-none"></div>
      
      <div className="relative z-10 p-6 pb-12 flex flex-col gap-2.5 pointer-events-none w-full">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[10px] tracking-widest uppercase text-primary">Stock permanente</span>
        </div>
        
        <h1 className="m-0 font-black text-[23px] leading-[1.12] text-zinc-50 tracking-tight">
          Variedad de marcas <br/><span className="text-primary">para cada necesidad</span>
        </h1>
        
        <p className="m-0 text-[11px] leading-relaxed text-zinc-300">
          Venta directa de neumáticos multimarca: primeras marcas para autos, camionetas, camiones y flotas. Stock permanente y asesoramiento personalizado.
        </p>
        
        <div className="flex items-center flex-wrap gap-1.5 mt-2">
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-zinc-900 font-bold text-[10px] tracking-wider">
            <Car className="w-3.5 h-3.5" /> AUTOS
          </span>
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-zinc-900 font-bold text-[10px] tracking-wider">
            <Truck className="w-3.5 h-3.5" /> CAMIONETAS
          </span>
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-zinc-900 font-bold text-[10px] tracking-wider">
            <Truck className="w-3.5 h-3.5" /> CAMIONES
          </span>
          <span className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full bg-primary text-zinc-900 font-bold text-[10px] tracking-wider">
            <Tractor className="w-3.5 h-3.5" /> AGRO
          </span>
        </div>
      </div>
    </div>
  )
}


const slides = [
  { 
    id: 1, 
    src: "/hero/Banner Funes.svg", 
    alt: "Funes Neumáticos - Campaña 1",
    mobileType: "funes"
  },
  { 
    id: 2, 
    src: "/hero/Banner Cuotas Funes.svg", 
    alt: "Funes Neumáticos - Campaña Cuotas",
    mobileType: "cuotas"
  },
  { 
    id: 3, 
    src: "/hero/Banner Calidad Funes (1).svg", 
    alt: "Funes Neumáticos - Campaña Calidad",
    mobileType: "calidad"
  },
  { 
    id: 4, 
    src: "/hero/Banner Stock Funes.svg", 
    alt: "Funes Neumáticos - Campaña Stock",
    mobileType: "stock"
  },
  { 
    id: 5, 
    src: "/hero/Banner Servicios Funes.svg", 
    alt: "Funes Neumáticos - Campaña Servicios",
    mobileType: "servicios"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full h-[340px] sm:h-[400px] md:h-auto md:aspect-[1200/400] overflow-hidden bg-zinc-100">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          {/* VISTA MOBILE: Contenedor con scroll horizontal suave ("correr la imagen") sin fondo negro */}
          <div className="md:hidden w-full h-full overflow-x-auto scrollbar-none flex items-center justify-start">
            {slide.mobileType === "funes" ? (
              <div className="relative w-full h-full shrink-0">
                <MobileFunesSlide />
              </div>
            ) : slide.mobileType === "cuotas" ? (
              <div className="relative w-full h-full shrink-0">
                <MobileCuotasSlide />
              </div>
            ) : slide.mobileType === "calidad" ? (
              <div className="relative w-full h-full shrink-0">
                <MobileCalidadSlide />
              </div>
            ) : slide.mobileType === "stock" ? (
              <div className="relative w-full h-full shrink-0">
                <MobileStockSlide />
              </div>
            ) : slide.mobileType === "servicios" ? (
              <div className="relative w-full h-full shrink-0">
                <MobileServiciosSlide />
              </div>
            ) : (
              <div className="relative h-full aspect-[3/1] shrink-0">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "low"}
                  quality={90}
                  sizes="100vw"
                />
              </div>
            )}
          </div>

          {/* VISTA DESKTOP: Banner panorámico 3:1 */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "low"}
              quality={90}
              sizes="100vw"
            />
          </div>
          
          {/* Botón CTA opcional sobre la imagen */}
          {slide.cta && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <a 
                href={slide.cta.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-[25%] right-[15%] md:right-[25%] pointer-events-auto flex items-center gap-2 bg-black/80 border border-[#25D366] text-[#25D366] px-5 py-2.5 rounded-lg font-bold uppercase tracking-wider backdrop-blur-sm hover:bg-[#25D366] hover:text-black transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {slide.cta.text}
              </a>
            </div>
          )}
        </div>
      ))}

      {/* Controles: Flechas Laterales */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-8 h-8 md:w-12 md:h-12 drop-shadow-lg" />
      </button>

      {/* Indicadores Inferiores */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-10 h-1.5 md:w-14 md:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}