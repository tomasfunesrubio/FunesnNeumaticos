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
              Líderes en innovación para el transporte y el campo. Somos la <strong>única planta de reconstrucción de Neumáticos Agrícolas</strong> en Santiago del Estero, respaldados por tecnología VIPAL y certificación ISO 9001.
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
              <li>
                <a href="https://api.whatsapp.com/send?phone=5493854135265&text=Hola%21%20Me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>+54 9 385 413-5265</span>
                </a>
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
