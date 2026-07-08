"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  { 
    id: 1, 
    src: "/hero/Banner Funes.svg", 
    alt: "Funes Neumáticos - Campaña 1"
  },
  { 
    id: 2, 
    src: "/hero/Banner Cuotas Funes.svg", 
    alt: "Funes Neumáticos - Campaña Cuotas" 
  },
  { 
    id: 3, 
    src: "/hero/Banner Calidad Funes (1).svg", 
    alt: "Funes Neumáticos - Campaña Calidad" 
  },
  { 
    id: 4, 
    src: "/hero/Banner Stock Funes.svg", 
    alt: "Funes Neumáticos - Campaña Stock" 
  },
  { 
    id: 5, 
    src: "/hero/Banner Servicios Funes.svg", 
    alt: "Funes Neumáticos - Campaña Servicios" 
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
    <section className="relative w-full aspect-[16/10] sm:aspect-[16/7] md:aspect-[1200/400] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-contain md:object-cover object-center"
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
            quality={90}
            sizes="100vw"
          />
          
          {/* Botón CTA opcional sobre la imagen */}
          {slide.cta && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <a 
                href={slide.cta.href} 
                target="_blank" 
                rel="noopener noreferrer"
                /* 
                  AJUSTE DE POSICIÓN: 
                  Cambié a right-[15%] en celulares y md:right-[25%] en PC 
                  para moverlo más a la izquierda. 
                */
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