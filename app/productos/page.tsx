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
  Factory
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
    icon: RefreshCw,
    title: "Recapado en frío",
    description: "Proceso de recapado que utiliza bandas de rodamiento precuradas aplicadas mediante adhesivos especiales y vulcanización a baja temperatura.",
    features: [
      "Ideal para neumáticos de alta gama",
      "Mayor vida útil de la carcasa",
      "Menor consumo energético",
      "Acabado premium",
    ],
    badge: null,
  },
  {
    icon: Settings,
    title: "Recapado en caliente",
    description: "Método tradicional donde se aplica caucho crudo que se vulcaniza a alta temperatura, creando una unión molecular perfecta con la carcasa.",
    features: [
      "Máxima durabilidad",
      "Ideal para uso severo",
      "Rendimiento comprobado",
      "Costo-beneficio óptimo",
    ],
    badge: null,
  },
  {
    icon: Truck,
    title: "Neumáticos nuevos",
    description: "Amplio catálogo de neumáticos nuevos de las mejores marcas nacionales e internacionales para todo tipo de vehículos.",
    features: [
      "Marcas premium",
      "Garantía de fábrica",
      "Asesoramiento especializado",
      "Precios competitivos",
    ],
    badge: null,
  },
  {
    icon: Wrench,
    title: "Reparación Integral",
    description: "Servicios de reparación, parches, balanceo y alineación para extender la vida útil de tus neumáticos y optimizar el rendimiento.",
    features: [
      "Reparación de pinchazos",
      "Balanceo y alineación",
      "Inspección técnica",
      "Rotación de neumáticos",
    ],
    badge: null,
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
              Soluciones <br/> 
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
                    <Link href="/contacto" className="inline-block w-full">
                      <Button variant="outline" className="w-full border-zinc-900 text-zinc-900 hover:bg-primary hover:text-black hover:border-primary bg-transparent rounded-none h-12 uppercase font-bold tracking-widest transition-all">
                        Consultar Servicio
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

      {/* --- PRODUCT CATEGORIES --- */}
      <section className="py-24 bg-white border-y border-zinc-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl uppercase">
              Categorías de Productos
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div 
                key={category.title} 
                className="group p-6 bg-zinc-50 border-2 border-zinc-100 hover:border-primary transition-all hover:-translate-y-1 duration-300 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4 text-primary">
                   <Factory className="h-5 w-5" />
                   <span className="text-xs font-mono uppercase text-zinc-500">Stock Disponible</span>
                </div>
                <h3 className="font-bold text-zinc-900 text-lg uppercase mb-2">{category.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6 h-12">{category.description}</p>
                
                <div className="pt-4 border-t border-zinc-200">
                  <p className="text-[10px] uppercase tracking-widest text-zinc-400 mb-3 font-bold">Medidas Comunes:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.sizes.map((size) => (
                      <span key={size} className="px-2 py-1 bg-white text-zinc-600 text-xs font-mono border border-zinc-200 group-hover:border-zinc-400 transition-colors">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-black text-zinc-900 sm:text-4xl uppercase">
              Línea de Producción
            </h2>
            <p className="mt-4 text-lg text-zinc-500">
              Proceso estandarizado de reconstrucción
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Recepción", desc: "Inspección técnica de casco" },
              { step: "02", title: "Raspado", desc: "Remoción de caucho remanente" },
              { step: "03", title: "Preparación", desc: "Reparación y cementado" },
              { step: "04", title: "Vulcanizado", desc: "Fusión molecular (Autoclave)" },
              { step: "05", title: "Control Final", desc: "Verificación de calidad" },
            ].map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Conector de línea */}
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-zinc-200 -z-10">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out delay-100"></div>
                  </div>
                )}
                
                <div className="flex flex-col items-center text-center relative z-10">
                  {/* Círculo */}
                  <div className="h-16 w-16 flex items-center justify-center bg-white border-4 border-zinc-900 text-zinc-900 font-black text-xl group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-sm rounded-full">
                    {item.step}
                  </div>
                  <h3 className="mt-6 font-bold text-zinc-900 uppercase tracking-wider">{item.title}</h3>
                  <p className="mt-2 text-xs text-zinc-500 uppercase font-mono">{item.desc}</p>
                </div>
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