import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Contenedor estilo "Bloque Industrial" */}
        <div className="relative bg-zinc-900 overflow-hidden px-8 py-16 lg:px-16 lg:py-20 border-l-8 border-primary shadow-2xl rounded-none">
          
          {/* Fondo: Grilla técnica sutil para textura */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none"></div>
          
          {/* Decoración mecánica en la esquina */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <div className="h-20 w-20 border-t-4 border-r-4 border-white"></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Texto de alto impacto */}
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 mb-4 text-primary/80">
                <MessageSquare className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-widest">Atención Inmediata</span>
              </div>
              
              <h2 className="text-3xl font-black text-white sm:text-5xl uppercase tracking-tight mb-6">
                ¿Tu flota necesita <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                  Optimización?
                </span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                No pierdas más dinero en neumáticos. Solicitá hoy mismo un diagnóstico técnico gratuito y descubrí cuánto podés ahorrar con nuestro sistema de recapado.
              </p>
            </div>
            
            {/* Botones Industriales */}
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-black hover:bg-white hover:text-black font-black uppercase tracking-wider rounded-none h-16 px-10 text-base border-2 border-transparent hover:border-primary transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/nosotros">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white hover:text-black bg-transparent uppercase tracking-wider rounded-none h-16 px-8 text-base font-bold transition-all">
                  Conocer la Planta
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}