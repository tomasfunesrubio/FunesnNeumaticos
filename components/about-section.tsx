"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Eye, Users, CheckSquare, Factory, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Target,
    title: "Misión",
    description: "Brindar soluciones de recapado de alta calidad que permitan a nuestros clientes optimizar sus costos operativos.",
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Ser la empresa líder en recapado de neumáticos en Argentina, reconocida por nuestra excelencia tecnológica.",
  },
  {
    icon: Users,
    title: "Valores",
    description: "Compromiso con la calidad, honestidad en cada servicio y dedicación total a la satisfacción del cliente.",
  },
]

const benefits = [
  "Tecnología de última generación",
  "Personal altamente capacitado",
  "Procesos certificados ISO 9001",
  "Atención personalizada a flotas",
  "Compromiso ambiental certificado",
  "Precios competitivos de mercado",
]

export function AboutSection() {
  // Filtro para teñir la imagen negra al color primary (dorado/amarillo)
  const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)";

  return (
    <section id="nosotros" className="relative bg-secondary/10 scroll-mt-20 border-t border-zinc-900 overflow-hidden">

      {/* --- FONDO INDUSTRIAL DECORATIVO --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none"></div>

      {/* --- WATERMARK DE RUEDA GIGANTE --- */}
      <div className="absolute top-20 right-0 translate-x-1/4 opacity-[0.1] pointer-events-none z-0">
        <div className="relative w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]">
          <Image
            src="/ruedas-camion-apiladas.png"
            alt="Fondo Rueda Industrial"
            fill
            className="object-contain"
            style={{ filter: goldFilter }}
          />
        </div>
      </div>

      {/* --- CONTENIDO DE LA SECCIÓN --- */}
      <div className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* --- Header Industrial --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-widest text-sm uppercase">
                Perfil Corporativo
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-end">
              <h2 className="text-3xl font-black text-foreground sm:text-5xl uppercase tracking-tight leading-none">
                Más de <span className="text-primary">20 años</span> <br />
                de trayectoria
              </h2>
              <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-6 lg:mb-2">
                Desde 2003, Funes Neumáticos ha sido sinónimo de confianza, seguridad y calidad certificada en el sector del transporte.
              </p>
            </div>
          </motion.div>

          {/* --- 1. Pilares Corporativos (3 Columnas) --- */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="group relative bg-background border border-border p-8 transition-all hover:border-primary/50 h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center bg-secondary border border-border group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <span className="text-4xl font-black text-muted/10 group-hover:text-primary/10 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground uppercase tracking-wide mb-4">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- 2. ¿POR QUÉ ELEGIRNOS? (BLOQUE HÍBRIDO) --- */}
          <div className="w-full shadow-2xl border-y border-primary/20">
            <div className="grid lg:grid-cols-2 bg-white">

              {/* COLUMNA IZQUIERDA: IMAGEN (Más clara y nítida) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative min-h-[400px] lg:min-h-full border-b lg:border-b-0 lg:border-r border-zinc-800 group overflow-hidden bg-zinc-900"
              >
                {/* Imagen de fondo: Opacidad aumentada significativamente */}
                <Image
                  src="/gomeria-costado.jpg"
                  alt="Planta industrial Funes Neumáticos"
                  fill
                  // CAMBIO AQUÍ: opacity-85 base, opacity-100 al hover
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                />

                {/* Overlay: Mucho más sutil, solo un poco de sombra abajo */}
                {/* CAMBIO AQUÍ: Eliminado el 'to-zinc-950/50' superior, suavizado el inferior */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none"></div>

                {/* --- BADGE PEQUEÑO (Inferior Izquierda) --- */}
                <div className="absolute bottom-6 left-6 pointer-events-none z-20">
                  <div className="bg-black/80 backdrop-blur-md border-l-4 border-primary py-3 px-5 flex items-center gap-3 shadow-xl transition-transform duration-500 group-hover:translate-x-2">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                    <div className="text-left">
                      <p className="text-white font-black uppercase tracking-wider text-sm leading-none">Calidad</p>
                      <p className="text-zinc-400 text-[10px] font-mono uppercase tracking-widest mt-1">Garantizada</p>
                    </div>
                  </div>
                </div>

                {/* Borde Naranja Lateral */}
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              </motion.div>

              {/* COLUMNA DERECHA: CONTENIDO (Claro) */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="p-10 lg:p-16 relative bg-white text-foreground"
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:24px_24px] z-0 pointer-events-none opacity-20"></div>

                <div className="relative z-10">
                  <div className="mb-10">
                    <h3 className="text-3xl font-black text-foreground uppercase tracking-tight mb-3">
                      ¿Por qué elegirnos?
                    </h3>
                    <p className="text-muted-foreground font-medium text-lg border-l-4 border-primary pl-4">
                      Estándares industriales y compromiso total con tu flota.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-4 group">
                        <div className="mt-1 flex-shrink-0 p-2 bg-secondary border border-border group-hover:border-primary transition-colors">
                          <CheckSquare className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                        </div>
                        <div>
                          <span className="text-foreground font-bold text-sm block mb-1 group-hover:text-primary transition-colors">
                            {benefit}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3 text-primary">
                      <Factory className="h-6 w-6" />
                      <span className="text-sm font-black uppercase tracking-widest text-foreground">
                        Planta Modelo Certificada
                      </span>
                    </div>
                    <div className="text-xs font-mono text-primary uppercase tracking-widest bg-secondary px-3 py-1 border border-border">
                      REF: QUAL-ISO-9001
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}