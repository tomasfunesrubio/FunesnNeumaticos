"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Truck, Shield, Wrench, Tractor } from "lucide-react"

const divisions = [
  {
    id: "01",
    title: "Neumáticos Camión",
    subtitle: "Transporte Pesado",
    description: "Cubiertas direccionales, tracción y mixtas para máxima durabilidad y rendimiento.",
    image: "/rueda-camion.png",
    href: "/cubiertas-nuevas",
    badge: "Venta Directa",
    icon: Truck,
    features: [
      "Amplio stock en 22.5 y 24.5",
      "Financiación especial",
      "Primeras marcas"
    ]
  },
  {
    id: "02",
    title: "Neumáticos Agrícolas",
    subtitle: "Campo y Cosecha",
    description: "Tractores, cosechadoras e implementos agrícolas con la mejor tracción del mercado.",
    image: "/hero/tire-3.png",
    href: "/productos",
    badge: "Agro",
    icon: Tractor,
    features: [
      "Alta capacidad de carga",
      "Menor compactación",
      "Asesoramiento a campo"
    ]
  },
  {
    id: "03",
    title: "Neumáticos OTR & Vial",
    subtitle: "Industria y Minería",
    description: "Soluciones de alta resistencia para palas cargadoras, motoniveladoras y equipos pesados.",
    image: "/ruedas-camion-apiladas.png",
    href: "/productos",
    badge: "Industrial",
    icon: Shield,
    features: [
      "Máxima resistencia a cortes",
      "Diseños profundos",
      "Soporte especializado"
    ]
  },
  {
    id: "04",
    title: "Neumáticos Camioneta",
    subtitle: "Utilitarios y 4x4",
    description: "Para flotas livianas y uso mixto. Modelos AT, MT y HT con excelente agarre y confort.",
    image: "/hero/tire-1.png",
    href: "/productos",
    badge: "Livianos",
    icon: CheckCircle2,
    features: [
      "Descuentos por flota",
      "Instalación en planta",
      "Modelos All-Terrain"
    ]
  }
]

export function CommercialCategories() {
  return (
    <section className="py-20 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background glow and subtle dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Divisiones Comerciales
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              Soluciones Principales <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-yellow-500">
                Para Tu Flota y Negocio
              </span>
            </h2>
          </div>
          <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed border-l-2 border-primary/40 pl-4">
            Elegí la división especializada que necesitás. Calidad certificada, stock permanente y atención mayorista en Santiago del Estero y todo el país.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {divisions.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex"
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col w-full bg-zinc-900/80 border border-white/10 hover:border-primary/60 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:-translate-y-1 overflow-hidden"
                >
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-2.5 py-1 bg-zinc-800/80 border border-white/10 rounded-md text-[11px] font-bold text-primary tracking-wide uppercase">
                      {item.badge}
                    </span>
                    <span className="text-2xl font-black text-white/10 group-hover:text-primary/30 transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Image Presentation Box */}
                  <div className="relative w-full h-44 bg-gradient-to-b from-zinc-800/40 to-black/60 rounded-xl mb-6 flex items-center justify-center p-4 border border-white/5 overflow-hidden group-hover:border-white/15 transition-all">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
                      <Icon className="h-4 w-4" />
                      <span>{item.subtitle}</span>
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1">
                      {item.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-2 mb-6 border-t border-white/10 pt-4">
                      {item.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom CTA Button */}
                    <div className="mt-auto pt-3 flex items-center justify-between text-xs font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                      <span>Ver Más Detalles</span>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Commercial Banner Strip below Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 border border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                ¿Buscás atención personalizada para tu flota o empresa?
              </h4>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Contamos con convenios corporativos, planes de facturación y asesoramiento técnico in situ en Santiago del Estero y zonas de influencia.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <a
              href="https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Quiero%20consultar%20por%20atenci%C3%B3n%20a%20flotas%20y%20convenios%20comerciales."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-primary text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:bg-primary/90 transition-all shadow-[0_0_25px_-5px_rgba(234,179,8,0.5)] hover:scale-105"
            >
              Cotizar con Asesor
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Ver Sucursales
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
