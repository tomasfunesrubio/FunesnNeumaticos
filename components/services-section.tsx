"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Layers, Tractor, RefreshCw, Flame, ShieldCheck, Gauge, Wrench, Disc, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: "01",
    icon: Layers,
    title: "Precurado",
    description: "Reconstrucción certificada para transporte y carga. Máximo rendimiento kilométrico.",
    href: "/precurado",
  },
  {
    id: "02",
    icon: Tractor,
    title: "Retacado Agrícola",
    description: "Recuperación de tacos para tracción en maquinaria agrícola.",
    href: "/retacado",
  },
  {
    id: "03",
    icon: RefreshCw,
    title: "Recauchutaje",
    description: "Renovación integral para devolver la vida útil al neumático agrícola.",
    href: "/recauchutaje",
  },
  {
    id: "04",
    icon: Flame,
    title: "Vulcanizado",
    description: "Reparación de cortes y secciones en todos los segmentos (Auto, Camión, Agro).",
    href: "/vulcanizado",
  },
  {
    id: "05",
    icon: ShieldCheck,
    title: "Refuerzo Interno",
    description: "Soluciones estructurales para recuperar carcasas fatigadas.",
    href: "/refuerzo-interno",
  },
  {
    id: "06",
    icon: Gauge,
    title: "Alineación 3D",
    description: "Precisión láser para camiones y livianos. Ahorrá combustible y cubiertas.",
    href: "/alineado-balanceado",
  },
  {
    id: "07",
    icon: Wrench,
    title: "Tren Delantero",
    description: "Diagnóstico y reparación de suspensión, frenos y dirección.",
    href: "/tren-delantero",
  },
  {
    id: "08",
    icon: Disc,
    title: "Neumáticos Nuevos",
    description: "Venta directa de las mejores marcas para renovar tu flota.",
    href: "/cubiertas-nuevas",
  },
]

// Reusable Service Card Component
function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Link href={service.href} className="w-full h-full block">
      <Card className="group relative bg-card border border-border rounded-none hover:border-primary transition-all duration-300 overflow-hidden h-full">
        {/* Acento superior al hacer hover */}
        <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

        <CardContent className="p-8 h-full flex flex-col">
          {/* Header de la tarjeta: Número e Icono */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex h-14 w-14 items-center justify-center bg-secondary border border-border group-hover:bg-primary group-hover:text-black transition-colors duration-300">
              <service.icon className="h-7 w-7" />
            </div>
            <span className="text-4xl font-black text-muted/20 group-hover:text-primary/20 transition-colors select-none">
              {service.id}
            </span>
          </div>

          {/* Contenido */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-3 group-hover:text-primary transition-colors min-h-[3.5rem]">
              {service.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Footer de la tarjeta (Decorativo técnico) */}
          <div className="mt-8 pt-4 border-t border-dashed border-border flex items-center justify-between text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors">
            <span>VER CATÁLOGO</span>
            <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function ServicesSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const goldFilter = "brightness(0) saturate(100%) invert(74%) sepia(74%) saturate(542%) hue-rotate(358deg) brightness(85%) contrast(105%)";

  // Split services into two groups
  const firstGroup = services.slice(0, 4)
  const secondGroup = services.slice(4, 8)

  return (
    <section id="servicios" className="py-24 bg-background scroll-mt-20 relative border-b border-border overflow-hidden">
      {/* --- FONDO DECORATIVO (Rueda gigante) --- */}
      <div className="absolute top-20 right-0 translate-x-1/4 opacity-[0.1] pointer-events-none z-0">
        <div className="relative w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
          <Image
            src="/rueda-camion.png"
            alt="Fondo Rueda Industrial"
            fill
            className="object-contain"
            style={{ filter: goldFilter }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* --- Header Industrial --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              Catálogo de Servicios
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl font-black text-foreground sm:text-6xl uppercase tracking-tighter max-w-2xl leading-none">
              Soluciones <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                Integrales
              </span>
            </h2>
            <p className="text-muted-foreground max-w-md text-right md:text-left border-l-4 border-primary/20 pl-4 mb-2">
              Tecnología de punta aplicada al rendimiento y la vida útil de tus neumáticos.
            </p>
          </div>
        </div>

        {/* --- Group A: First 4 Services (Always Visible with Scroll Reveal) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {firstGroup.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* --- Group B: Remaining Services --- */}
        {/* Mobile: Animated expand/collapse with scroll reveal */}
        <div className="md:hidden">
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {secondGroup.map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5 }}
                    >
                      <ServiceCard service={service} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: Always visible with scroll reveal */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {secondGroup.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* --- Toggle Button (Mobile Only) --- */}
        <div className="flex justify-center mt-8 md:hidden">
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-none px-8 py-6 font-bold tracking-wide uppercase text-sm"
          >
            {isExpanded ? (
              <>
                <span>Ver Menos</span>
                <ChevronUp className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
              </>
            ) : (
              <>
                <span>Ver Todos los Servicios</span>
                <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}