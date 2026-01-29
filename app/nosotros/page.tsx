"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { VipalSection } from "@/components/vipal-section"
import { Target, Eye, Users, Award, CheckSquare, Factory } from "lucide-react"
import { motion } from "framer-motion"

// --- COMPONENTE DECORATIVO: HUELLA VERTICAL (Se usa más abajo) ---
function TireTrackVertical(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 800"
      fill="currentColor"
      {...props}
    >
      <defs>
        <pattern id="v-tread" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,0 L30,10 L30,30 L0,20 Z" className="opacity-40" />
          <path d="M100,0 L70,10 L70,30 L100,20 Z" className="opacity-40" />
          <path d="M50,15 L80,5 L80,25 L50,35 L20,25 L20,5 Z" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#v-tread)" />
    </svg>
  )
}

const values = [
  {
    icon: Target,
    title: "Misión",
    description: "Brindar soluciones de recapado de alta calidad que permitan a nuestros clientes optimizar sus costos operativos sin comprometer la seguridad ni el rendimiento de sus flotas.",
  },
  {
    icon: Eye,
    title: "Visión",
    description: "Ser la empresa líder en recapado de neumáticos en Argentina, reconocida por nuestra excelencia en calidad, innovación tecnológica y compromiso con la sustentabilidad.",
  },
  {
    icon: Users,
    title: "Valores",
    description: "Compromiso con la calidad, honestidad en cada servicio, respeto por el medio ambiente y dedicación absoluta a la satisfacción del cliente.",
  },
]

const milestones = [
  { year: "2003", event: "Fundación de Funes Neumáticos" },
  { year: "2008", event: "Expansión a nivel provincial" },
  { year: "2012", event: "Certificación ISO 9001" },
  { year: "2016", event: "Incorporación de tecnología de recapado en frío" },
  { year: "2020", event: "Apertura de nueva planta industrial" },
  { year: "2024", event: "Más de 50.000 neumáticos recapados" },
]

const benefits = [
  "Tecnología de última generación",
  "Personal altamente capacitado",
  "Procesos certificados ISO 9001",
  "Atención personalizada",
  "Compromiso ambiental",
  "Precios competitivos",
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // CAMBIO: Stagger un poco más lento para que respire mejor
      staggerChildren: 0.3
    }
  }
}

// CAMBIO: NUEVA VARIANTE "ULTRA SUAVE" (Solo Opacidad Lenta)
// Se eliminó el 'scale' para evitar cualquier sensación de salto.
// Se aumentó la duración a 1.2s para un efecto premium.
const softItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut" // Curva estándar muy suave
    }
  }
}

const slideInVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* --- HERO SECTION (Estilo Industrial Claro) --- */}
      <section className="pt-40 pb-20 bg-background text-foreground relative border-b border-border overflow-hidden">

        {/* Grilla Técnica Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

        {/* --- SOLUCIÓN: TIPOGRAFÍA GIGANTE "2003" --- */}
        {/* CAMBIO: Color 'text-primary' y opacidad ajustada para que combine */}
        <motion.div
          className="absolute top-1/2 right-[-50px] md:right-10 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none z-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="text-[12rem] md:text-[18rem] leading-none font-black text-primary tracking-tighter">
            2003
          </span>
        </motion.div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Movimiento reducido
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }} // Más lento
            >
              <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="h-2 w-2 bg-primary animate-pulse"></span>
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                  Perfil Corporativo
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-foreground mb-6 uppercase">
                Más de 20 años <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                  de Excelencia
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
                Desde 2003, Funes Neumáticos ha sido sinónimo de confianza y calidad en el sector del recapado, combinando economía, seguridad y sustentabilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- STORY SECTION (Con Foto de Fábrica) --- */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Columna Texto */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }} // Menos desplazamiento
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="border-b border-border pb-6">
                <h2 className="text-3xl font-black text-foreground sm:text-4xl uppercase flex items-center gap-3">
                  <Factory className="h-8 w-8 text-primary" />
                  Nuestra Historia
                </h2>
              </div>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Funes Neumáticos nació de la pasión de una familia por el mundo del transporte y la industria automotriz. Lo que comenzó como un pequeño taller de reparación, hoy es una planta modelo en la región.
                </p>
                <p>
                  A lo largo de dos décadas, hemos invertido constantemente en <strong className="text-foreground">tecnología de punta</strong> y capacitación técnica. Esto nos permite ofrecer productos que igualan el rendimiento del neumático nuevo.
                </p>
                <div className="bg-secondary/30 p-6 border-l-4 border-primary">
                  <p className="font-bold text-foreground">
                    "Nuestro compromiso es crecer junto a nuestros clientes, garantizando seguridad en cada kilómetro."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Columna Visual (IMAGEN DE FÁBRICA) */}
            <motion.div
              className="relative h-full min-h-[500px] bg-zinc-900 border-2 border-zinc-800 overflow-hidden group"
              initial={{ opacity: 0, x: 30 }} // Menos desplazamiento
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/fabrica.jpg"
                alt="Funes Neumáticos Planta Industrial"
                fill
                className="object-cover object-center transition-all duration-700 transform group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-primary/50 z-20"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-primary/50 z-20"></div>

              <div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
                <div className="h-16 w-16 bg-primary flex items-center justify-center text-black shadow-lg">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-5xl font-black text-white leading-none">20+</div>
                  <div className="text-xs font-mono text-primary uppercase tracking-widest bg-black/50 px-2 py-1 mt-1">
                    Años de Experiencia
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- VALUES SECTION (SECCIÓN MODIFICADA) --- */}
      <section className="py-24 bg-secondary/20 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              // APLICANDO LA NUEVA VARIANTE ULTRA SUAVE
              <motion.div
                key={value.title}
                variants={softItemVariants}
                className="h-full"
              >
                <div className="group p-8 bg-white border-2 border-border hover:border-primary transition-all duration-300 relative shadow-sm hover:shadow-lg hover:-translate-y-1 h-full">
                  <span className="absolute top-2 right-4 text-6xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                    0{index + 1}
                  </span>

                  <div className="flex flex-col items-start gap-6 mb-4">
                    <div className="flex h-16 w-16 items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground uppercase tracking-wide border-b border-primary/20 pb-2">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- TIMELINE SECTION --- */}
      <section className="py-24 bg-background relative overflow-hidden">

        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[200px] opacity-[0.03] pointer-events-none z-0">
          <TireTrackVertical className="w-full h-full text-zinc-900" preserveAspectRatio="none" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-black text-foreground sm:text-4xl uppercase">
              Nuestra Trayectoria
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-mono text-sm uppercase">
              // Hitos de Crecimiento
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-secondary md:-ml-0.5 z-0"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                >
                  <motion.div
                    className={`flex-1 w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }} // Desplazamiento reducido
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="bg-secondary/10 border border-border p-6 hover:border-primary transition-colors group relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/10 to-transparent -mr-4 -mt-4 rounded-full"></div>
                      <span className="text-4xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors block mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="text-lg font-bold text-foreground uppercase relative z-10">{milestone.event}</h4>
                    </div>
                  </motion.div>

                  <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] w-5 h-5 bg-background border-4 border-primary rounded-full z-10 mt-6 shadow-sm ring-4 ring-background"></div>

                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Bloque Oscuro) --- */}
      <section className="py-0 border-y border-zinc-800 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">

            {/* Bloque Imagen */}
            <motion.div
              className="relative min-h-[400px] lg:min-h-full bg-zinc-950 flex items-end justify-center border-r border-zinc-800 overflow-hidden group pb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Fade in muy lento
            >
              <Image
                src="/calidad.jpg"
                alt="Calidad certificada"
                fill
                className="object-cover object-center transition-all duration-700 transform group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="relative z-10 text-center p-8 bg-black/40 backdrop-blur-sm border border-white/10 m-8">
                <div className="text-4xl font-black uppercase text-white mb-2">
                  Calidad <br /> ISO 9001
                </div>
                <div className="h-1 w-12 bg-primary mx-auto"></div>
              </div>
            </motion.div>

            {/* Bloque Texto */}
            <div className="p-12 lg:p-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black text-white sm:text-4xl uppercase mb-6">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-gray-400 text-lg mb-10 border-l-4 border-primary pl-6">
                  Nos diferenciamos por nuestra dedicación a la excelencia y nuestro compromiso inquebrantable con la satisfacción del cliente.
                </p>
              </motion.div>

              <motion.ul
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
              >
                {benefits.map((benefit) => (
                  <motion.li key={benefit} className="flex items-center gap-4 group" variants={slideInVariants}>
                    <div className="h-6 w-6 flex items-center justify-center bg-primary/20 text-primary border border-primary/50 group-hover:bg-primary group-hover:text-black transition-colors">
                      <CheckSquare className="h-4 w-4" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors font-medium">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      <VipalSection />

      <CTASection />
      <Footer />
    </main>
  )
}