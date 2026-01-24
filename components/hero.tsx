"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award } from "lucide-react"

const backgroundImages = [
  "/hero/slide-1.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
  "/hero/slide-4.jpg"
]

const stats = [
  { label: "Trayectoria", value: "+20 Años", icon: Award },
  { label: "Calidad", value: "Certificada", icon: Shield },
  { label: "Servicio", value: "Integral", icon: Clock },
]

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black border-b border-white/10">
      
      {/* --- Carrusel de Fondo --- */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Imagen de fondo ${index + 1}`}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
      </div>

      {/* --- Contenido Principal --- */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pt-48 pb-20 lg:pt-40 lg:pb-24 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase font-mono">
              // Ingeniería en Transporte
            </span>
          </div>

          {/* TÍTULO: EQUILIBRADO (Ni muy corto, ni muy largo) */}
          {/* Ajusté el tamaño a text-7xl para que las 3-4 palabras entren perfectas */}
          <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl mb-6 leading-[0.95] uppercase">
            Precurado y <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-yellow-600">
              Servicios Integrales
            </span>
          </h1>

          {/* Descripción */}
          <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl border-l-4 border-primary pl-6 py-1">
            Reconstrucción de neumáticos con tecnología premium y mecánica especializada para maximizar el rendimiento de tu flota.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#contacto">
              <Button size="lg" className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-bold tracking-wide rounded-none border-l-4 border-white/40 uppercase">
                Cotizar Ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/productos">
              <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 text-white hover:bg-white/10 bg-black/20 backdrop-blur-sm rounded-none uppercase tracking-wide font-semibold">
                Ver Catálogo
              </Button>
            </Link>
          </div>

          {/* --- SPECS PANEL --- */}
          <div className="w-[90%] bg-zinc-950/80 backdrop-blur-md border border-white/10 border-l-4 border-l-primary p-0 rounded-none">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col p-6 hover:bg-white/5 transition-colors cursor-default group">
                  <div className="flex items-center gap-3 text-primary mb-2">
                    <stat.icon className="h-5 w-5" />
                    <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-gray-400 group-hover:text-primary transition-colors">
                      {stat.label}
                    </span>
                  </div>
                  <span className="text-2xl font-black text-white tracking-tight">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}