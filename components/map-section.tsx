import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function MapSection() {
  return (
    <section className="py-24 bg-secondary/20" id="ubicacion">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: INFORMACIÓN --- */}
          <div>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-primary"></div>
                <span className="text-primary font-bold tracking-widest text-sm uppercase">
                  Nuestra Planta
                </span>
              </div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Visitanos en Santiago del Estero
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nuestra planta central cuenta con la tecnología más avanzada para el recapado y reconstrucción de neumáticos. Acercate para recibir asesoramiento personalizado.
              </p>
            </div>

            {/* Datos de contacto */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Dirección</h3>
                  <p className="text-muted-foreground">RN34 720, La Banda</p>
                  <p className="text-muted-foreground">Santiago del Estero, Argentina</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 border border-primary/20">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Horarios de atención</h3>
                  <p className="text-muted-foreground">Lunes a Viernes: 08:00 - 18:00 hs</p>
                  <p className="text-muted-foreground">Sábados: 08:00 - 13:00 hs</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Contacto Rápido */}
            <Card className="bg-white dark:bg-card border-l-4 border-l-primary shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  ¿Necesitas atención inmediata?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground mb-4">
                  Llamanos directamente para consultas urgentes o emergencias con tu flota.
                </p>
                <Button 
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-none"
                  asChild
                >
                  <a href="tel:+5493851234567">
                    Llamar ahora
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* --- COLUMNA DERECHA: MAPA --- */}
          <div className="h-full min-h-[400px] lg:min-h-[600px] relative rounded-lg overflow-hidden border border-border shadow-xl">
            {/* IFRAME DE GOOGLE MAPS CON LA DIRECCIÓN REAL:
                "RN34 720, La Banda, Santiago del Estero"
            */}
            <iframe 
              src="https://maps.google.com/maps?q=RN34+720+La+Banda+Santiago+del+Estero&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500" // Efecto pro: blanco y negro hasta que pasas el mouse
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  )
}