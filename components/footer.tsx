import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"



export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Funes Neumáticos S.R.L."
                width={160}
                height={55}
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Más de 20 años brindando soluciones de calidad en recapado y venta de neumáticos para flotas de transporte.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Social placeholders could go here if needed, keeping simple for now */}
            </div>
          </div>

          {/* Column 2: Servicios */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-foreground">Servicios</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/precurado" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Recapado y Precurado
                </Link>
              </li>
              <li>
                <Link href="/retacado" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Retacado Agrícola
                </Link>
              </li>
              <li>
                <Link href="/recauchutaje" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Recauchutaje
                </Link>
              </li>
              <li>
                <Link href="/vulcanizado" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Vulcanizado
                </Link>
              </li>
              <li>
                <Link href="/refuerzo-interno" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refuerzo Interno
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Taller y Productos */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-foreground">Taller y Productos</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/alineado-balanceado" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Alineación y Balanceo
                </Link>
              </li>
              <li>
                <Link href="/tren-delantero" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tren Delantero
                </Link>
              </li>
              <li>
                <Link href="/cubiertas-nuevas" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  Cubiertas Nuevas
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">New</span>
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-wider text-foreground">Contacto</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>(0385) 427-6652</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>ventas@funesneumaticos.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>RN34 720, La Banda, Santiago del Estero</span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mt-6">
              &copy; {new Date().getFullYear()} Funes Neumáticos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
