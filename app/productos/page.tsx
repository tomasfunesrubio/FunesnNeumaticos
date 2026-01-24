"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  RefreshCw,
  Settings,
  Truck,
  Wrench,
  CheckSquare,
  ArrowRight,
  Zap,
  Shield,
  Leaf,
  Factory,
  Package
} from "lucide-react"

// --- COMPONENTE DE HUELLA DE NEUMÁTICO (SVG CUSTOM) ---
// Simula una marca de rodamiento industrial de alta tracción
function TireTrackPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 400" // Formato vertical alargado
      fill="currentColor"
      {...props}
    >
      <defs>
        {/* Definimos un patrón que se repite para formar la huella */}
        <pattern id="tread" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          {/* Tacos laterales izquierdos */}
          <path d="M0,0 L35,10 L35,30 L0,20 Z" className="opacity-80" />
          {/* Tacos centrales (Chevrons) */}
          <path d="M50,20 L85,10 L85,30 L50,40 L15,30 L15,10 Z" transform="translate(0, -10)" />
          {/* Tacos laterales derechos */}
          <path d="M100,0 L65,10 L65,30 L100,20 Z" className="opacity-80" />
        </pattern>
      </defs>
      {/* Usamos el patrón para llenar todo el alto */}
      <rect width="100%" height="100%" fill="url(#tread)" />
    </svg>
  )
}

const services = [
  {
    icon: RefreshCw, // Or Layers
    title: "Recapado y Precurado",
    description: "Reconstrucción certificada para transporte y carga. Máximo rendimiento kilométrico con bandas precuradas.",
    features: ["Bandas de alto rendimiento", "Proceso en frío", "Garantía de casco", "Ahorro de combustible"],
    href: "/precurado",
    badge: "Transporte",
  },
  {
    icon: Factory, // Or Tractor icon if avail
    title: "Retacado Agrícola",
    description: "Recuperación de tacos y tracción para maquinaria agrícola. Solución robusta para el trabajo de campo.",
    features: ["Recuperación de tracción", "Vulcanización profunda", "Tractores y Cosechadoras", "Alta resistencia"],
    href: "/retacado",
    badge: "Agro",
  },
  {
    icon: Settings,
    title: "Recauchutaje",
    description: "Renovación integral tradicional (En Caliente) para devolver la vida útil al neumático en condiciones severas.",
    features: ["Matricería propia", "Fusión molecular", "Ideal Off-Road", "Máxima durabilidad"],
    href: "/recauchutaje",
    badge: "Industrial",
  },
  {
    icon: Zap, // Or Flame
    title: "Vulcanizado",
    description: "Reparación técnica de cortes y secciones. Recuperamos neumáticos que otros descartan.",
    features: ["Parches con refuerzo", "Reparación seccional", "Control de rayos X", "Seguridad garantizada"],
    href: "/vulcanizado",
    badge: "Técnico",
  },
  {
    icon: Shield,
    title: "Refuerzo Interno",
    description: "Soluciones estructurales para recuperar carcasas fatigadas y extender su ciclo de vida.",
    features: ["Refuerzo de hombros", "Talones reforzados", "Análisis de estructura", "Prevención de fallas"],
    href: "/refuerzo-interno",
    badge: "Especial",
  },
  {
    icon: Truck, // Or Disc icon
    title: "Alineación 3D",
    description: "Precisión láser para camiones y livianos. Ahorrá combustible y cuidá tus cubiertas.",
    features: ["Tecnología 3D", "Balanceo dinámico", "Corrección de comba", "Informe digital"],
    href: "/alineado-balanceado",
    badge: "Taller",
  },
  {
    icon: Wrench,
    title: "Tren Delantero",
    description: "Diagnóstico y reparación integral de suspensión, frenos y dirección para tu seguridad.",
    features: ["Cambio de bujes", "Extremos de dirección", "Amortiguación", "Frenos"],
    href: "/tren-delantero",
    badge: "Mecánica",
  },
  {
    icon: Package, // Import Package from lucide-react
    title: "Neumáticos Nuevos",
    description: "Venta directa de las mejores marcas nacionales e internacionales para renovar tu flota.",
    features: ["Michelin / Fate / Bridgestone", "Todas las medidas", "Stock permanente", "Envíos a todo el país"],
    href: "/cubiertas-nuevas",
    badge: "Venta",
  },
]

const productCategories = [
  {
    title: "Camiones y Transporte",
    description: "Neumáticos para camiones de carga, distribución urbana y larga distancia.",
    sizes: ["11R22.5", "275/80R22.5", "295/80R22.5", "315/80R22.5"],
  },
  {
    title: "Ómnibus y Colectivos",
    description: "Soluciones para transporte de pasajeros urbano e interurbano.",
    sizes: ["275/80R22.5", "295/80R22.5", "12R22.5"],
  },
  {
    title: "Maquinaria Agrícola",
    description: "Neumáticos para tractores, cosechadoras y equipos agrícolas.",
    sizes: ["18.4-38", "20.8-38", "23.1-30", "14.9-24"],
  },
  {
    title: "Equipos Industriales",
    description: "Neumáticos para autoelevadores, grúas y maquinaria industrial.",
    sizes: ["7.00-12", "8.25-15", "28x9-15", "6.50-10"],
  },
]

const advantages = [
  {
    icon: Zap,
    title: "Ahorro del 50%",
    description: "Reducción drástica de costos operativos.",
  },
  {
    icon: Shield,
    title: "Garantía Total",
    description: "Respaldo certificado en cada trabajo.",
  },
  {
    icon: Leaf,
    title: "Eco-Eficiente",
    description: "Procesos sostenibles de recuperación.",
  },
]

export default function ProductosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* --- HERO SECTION INDUSTRIAL (Fondo Claro con Huella) --- */}
      <section className="pt-40 pb-20 bg-white relative border-b border-zinc-200 overflow-hidden">

        {/* Grilla Técnica Sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

        {/* HUELLA DE NEUMÁTICO (TRACK) EN EL FONDO */}
        {/* CAMBIO: Usamos 'text-primary' para el color dorado y ajustamos opacidad */}
        <div className="absolute top-0 right-10 h-[150%] -translate-y-20 rotate-12 opacity-[0.15] pointer-events-none z-0">
          <TireTrackPattern className="h-full w-[200px] text-primary" />
        </div>

        {/* Una segunda huella más fina para acompañar */}
        {/* CAMBIO: Usamos 'text-primary' también aquí */}
        <div className="absolute top-20 right-[300px] h-[120%] rotate-12 opacity-[0.08] pointer-events-none z-0 hidden lg:block">
          <TireTrackPattern className="h-full w-[140px] text-primary" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Badge Técnico */}
            <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 bg-primary animate-pulse"></span>
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                Catálogo Técnico
              </span>
            </div>

            <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-zinc-900 mb-6 uppercase">
              Soluciones <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                Integrales
              </span>
            </h1>

            <p className="text-xl text-zinc-500 leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
              Gama completa de servicios de recapado y productos para mantener tu flota rodando con máxima eficiencia.
            </p>
          </div>
        </div>
      </section>

      {/* --- ADVANTAGES (Panel Oscuro) --- */}
      <section className="py-0 border-b border-zinc-800 bg-zinc-900 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-center gap-6 p-8 hover:bg-white/5 transition-colors group">
                <div className="flex h-14 w-14 items-center justify-center bg-black border border-white/20 group-hover:border-primary transition-colors flex-shrink-0">
                  <advantage.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-wide text-lg">{advantage.title}</h3>
                  <p className="mt-1 text-sm text-gray-400 font-mono">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 bg-zinc-50 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-zinc-300 pb-8">
            <div>
              <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl uppercase">
                Nuestros Servicios
              </h2>
              <p className="mt-2 text-primary font-mono text-sm">
                // TECNOLOGÍA APLICADA
              </p>
            </div>
            <p className="text-zinc-500 max-w-md text-right hidden md:block">
              Procesos certificados ISO 9001 para garantizar rendimiento kilométrico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={service.title} className="h-full flex flex-col bg-white border-2 border-zinc-200 hover:border-primary transition-all duration-300 group rounded-none overflow-hidden relative shadow-sm hover:shadow-lg">

                <span className="absolute top-0 right-0 p-4 text-6xl font-black text-zinc-100 group-hover:text-primary/10 transition-colors pointer-events-none">
                  0{index + 1}
                </span>

                <CardHeader className="relative z-10 pb-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-16 w-16 items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                    </div>
                    {service.badge && (
                      <Badge className="bg-primary text-black hover:bg-primary font-bold rounded-none uppercase tracking-wider px-3 py-1">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 uppercase tracking-wide group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 flex flex-col flex-grow">
                  <p className="text-zinc-500 leading-relaxed mb-6 border-l-2 border-zinc-200 pl-4">
                    {service.description}
                  </p>

                  <div className="bg-zinc-50 p-4 border border-zinc-100 mb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-zinc-700">
                          <CheckSquare className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <Link href={service.href} className="inline-block w-full">
                      <Button variant="outline" className="w-full border-zinc-900 text-zinc-900 hover:bg-primary hover:text-black hover:border-primary bg-transparent rounded-none h-12 uppercase font-bold tracking-widest transition-all">
                        Ver Detalle
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- KEY SPECS STRIP --- */}
      <section className="py-12 bg-primary text-black border-y border-yellow-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center divide-x divide-black/10">
            <div className="font-black uppercase tracking-widest text-lg sm:text-xl">TECNOlOGÍA DE PUNTA</div>
            <div className="font-black uppercase tracking-widest text-lg sm:text-xl">CALIDAD ISO 9001</div>
            <div className="font-black uppercase tracking-widest text-lg sm:text-xl">ATENCIÓN A FLOTAS</div>
          </div>
        </div>
      </section>

      {/* --- BRANDS & PARTNERS (Replaces Categories) --- */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl uppercase">
              Marcas que Trabajamos
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["MICHELIN", "BRIDGESTONE", "FATE", "PIRELLI", "GOODYEAR", "CONTINENTAL"].map((brand) => (
              <div
                key={brand}
                className="aspect-[3/2] flex items-center justify-center bg-zinc-100 border-2 border-transparent hover:border-primary transition-all duration-300 group cursor-default"
              >
                <span className="text-zinc-400 font-black text-sm uppercase tracking-widest group-hover:text-zinc-900 transition-colors">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>



      <CTASection />
      <Footer />
    </main>
  )
}