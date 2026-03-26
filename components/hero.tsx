"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award, Star, MapPin } from "lucide-react"

const backgroundImages = [
  "/hero/slide-1.jpg",
  "/hero/slide-2.jpg",
  "/hero/slide-3.jpg",
  "/hero/slide-4.jpg"
]

const stats = [
  { label: "Trayectoria", value: "+20 Años", icon: Award },
  { label: "Calidad", value: "ISO 9001", icon: Shield },
  { label: "Servicio", value: "Integral", icon: Clock },
]

const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)";

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
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={src}
              alt={`Imagen de fondo ${index + 1}`}
              fill
              className="object-cover object-top"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />
      </div>

      {/* --- Contenido Principal --- */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full pt-48 pb-20 lg:pt-40 lg:pb-24 lg:px-8 flex flex-col lg:flex-row lg:items-center">
        <div className="flex-1 max-w-3xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-[0.2em] text-sm uppercase font-mono">
              // Ingeniería en Transporte
            </span>
          </motion.div>

          {/* TÍTULO: EQUILIBRADO (Ni muy corto, ni muy largo) */}
          {/* Ajusté el tamaño a text-7xl para que las 3-4 palabras entren perfectas */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-5xl font-black tracking-tight text-white sm:text-7xl mb-6 leading-[0.95] uppercase"
          >
            Precurado y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-yellow-600">
              Servicios Integrales
            </span>
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-xl text-gray-300 leading-relaxed mb-10 max-w-xl border-l-4 border-primary pl-6 py-1"
          >
            Reconstrucción de neumáticos con tecnología premium y mecánica especializada para maximizar el rendimiento de tu flota.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Quisiera%20cotizar%20un%20servicio."
              target="_blank"
              rel="noopener noreferrer"
            >
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
          </motion.div>

          {/* --- SPECS PANEL --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="w-[90%] bg-zinc-950/80 backdrop-blur-md border border-white/10 border-l-4 border-l-primary p-0 rounded-none"
          >
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
          </motion.div>
        </div>

        {/* --- VIPAL FLOATING CARD (Right Side) --- */}
        <div className="w-full flex justify-center lg:block lg:flex-1 relative lg:h-full lg:min-h-[400px] pointer-events-none mt-12 lg:mt-0">
          <div className="pointer-events-auto lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">

            {/* Card Container: Industrial Glass Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -10, 0] // Floating effect
              }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut", delay: 1.0 },
                x: { duration: 0.8, ease: "easeOut", delay: 1.0 },
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                  delay: 1.0 // Start floating after entrance
                }
              }}
            >
              <div className="w-[280px] bg-zinc-950/40 backdrop-blur-xl border border-yellow-500/30 rounded-2xl p-5 shadow-[0_0_50px_-10px_rgba(234,179,8,0.2)] hover:scale-[1.02] transition-transform duration-500 group">

                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none"></div>

                {/* Header: Certification Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500/20 p-1.5 rounded-md">
                      <Award className="h-4 w-4 text-yellow-500" />
                    </div>
                    <span className="text-[10px] font-bold text-yellow-500 tracking-[0.2em] uppercase">
                      Certificado Oficial
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white italic uppercase leading-none">
                    Representante
                  </h3>

                  {/* Vipal Logo (Gold Filtered) */}
                  <div className="relative h-14 w-40 my-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Image
                      src="/vipal.png"
                      alt="Vipal Logo"
                      fill
                      className="object-contain object-left"
                      style={{ filter: goldFilter }}
                    />
                  </div>
                </div>

                {/* Footer: Location */}
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10">
                    <MapPin className="h-4 w-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Santiago del Estero</p>
                    <p className="text-zinc-500 text-[10px] uppercase">Planta Industrial La Banda</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}