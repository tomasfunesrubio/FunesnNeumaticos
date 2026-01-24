"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Facebook, Instagram, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// MODIFICACIÓN: Nueva estructura solicitada por el cliente
const navigation = [
  { name: "Inicio", href: "/" },
  {
    name: "Productos", // Antes "Servicios"
    href: null,
    children: [
      { name: "Precurado", href: "/precurado" },
      { name: "Retacado", href: "/retacado" },
      { name: "Vulcanizado", href: "/vulcanizado" },
      { name: "Refuerzo Interno", href: "/refuerzo-interno" },
      { name: "Recauchutaje", href: "/recauchutaje" },
      { name: "Cubiertas Nuevas", href: "/cubiertas-nuevas" }
    ]
  },
  {
    name: "Servicios", // Nuevo ítem independiente
    href: null,
    children: [
      { name: "Alineado y Balanceado", href: "/alineado-balanceado" },
      { name: "Tren delantero", href: "/tren-delantero" }
    ]
  },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
]

const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/funesneumaticos",
  instagram: "https://www.instagram.com/funesneumaticos/",
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // CAMBIO: Ahora manejamos el nombre del dropdown activo (string) en vez de boolean
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Ref para el contenedor de navegación (para detectar click afuera globalmente)
  const navRef = useRef(null)

  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cerrar cualquier desplegable si se hace click fuera del menú de navegación
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const toggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  // Función modificada para aceptar el nombre del menú
  const handleDropdownToggle = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }

  const isTransparent = isHome && !isScrolled
  const linkColorClass = isTransparent
    ? "text-gray-200 hover:text-primary"
    : "text-muted-foreground hover:text-primary";

  const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!isTransparent
      ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3"
      : "bg-transparent border-b border-white/10 py-5"
      }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* --- LOGO --- */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition-transform active:scale-95">
            <div className="relative h-12 w-auto">
              <Image
                src="/logo.png"
                alt="Funes Neumáticos S.R.L."
                width={180}
                height={60}
                className="h-12 w-auto object-contain transition-all duration-500"
                style={{ filter: isTransparent ? goldFilter : "none" }}
                priority
              />
            </div>
          </Link>
        </div>

        {/* --- BOTÓN MENÚ MÓVIL --- */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className={`rounded-none ${isTransparent ? "text-primary hover:bg-white/10" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* --- NAVEGACIÓN DESKTOP --- */}
        {/* Agregamos el ref aquí para controlar clicks afuera de toda la barra */}
        <div className="hidden lg:flex lg:gap-x-12 items-center" ref={navRef}>
          {navigation.map((item) => {
            const isActive = activeDropdown === item.name;

            // CASO 1: ÍTEM CON DESPLEGABLE (Productos y Servicios)
            if (item.children) {
              return (
                <div key={item.name} className="relative group h-full flex items-center">
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`
                      flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative outline-none
                      ${linkColorClass}
                      ${isActive ? "text-primary" : ""}
                    `}
                  >
                    {item.name}
                    {isActive ? (
                      <ChevronUp className="h-3 w-3" />
                    ) : (
                      <ChevronDown className="h-3 w-3 transition-transform group-hover:rotate-180" />
                    )}

                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </button>

                  {/* Panel Desplegable */}
                  <div className={`absolute top-full left-0 pt-4 transition-all duration-200 ${isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'}`}>
                    <div className="bg-background border-t-2 border-primary shadow-xl min-w-[200px] flex flex-col py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="px-6 py-3 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary hover:bg-secondary/20 transition-colors whitespace-nowrap block"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            // CASO 2: LINK NORMAL
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveDropdown(null)} // Cerrar dropdowns si toco un link normal
                className={`
                  text-sm font-bold uppercase tracking-widest transition-all duration-300 relative group
                  ${linkColorClass}
                `}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-6">
          <div className={`flex items-center gap-4 ${isTransparent ? "text-primary/80" : "text-muted-foreground"}`}>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:scale-110 transition-all">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <a href="https://wa.me/5493856981610?text=Hola%21%20Me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider px-6 rounded-none shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contactar
            </Button>
          </a>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL --- */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl animate-in slide-in-from-top-2 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-bold uppercase tracking-wide text-foreground hover:bg-secondary/50 transition-colors border-b border-border/50"
                    >
                      {item.name}
                      {openSubmenu === item.name ? (
                        <ChevronUp className="h-4 w-4 text-primary" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    {openSubmenu === item.name && (
                      <div className="flex flex-col bg-secondary/10 animate-in slide-in-from-top-1">
                        {item.children.map(child => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block pl-8 pr-4 py-3 text-sm font-bold uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors border-l-4 border-transparent hover:border-primary"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-bold uppercase tracking-wide text-foreground hover:text-primary hover:bg-secondary/50 transition-colors border-b border-border/50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-6 px-4 py-6 mt-4 justify-center">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-2 font-bold text-sm uppercase p-2 border border-border">
                <Facebook className="h-5 w-5" /> Facebook
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary flex items-center gap-2 font-bold text-sm uppercase p-2 border border-border">
                <Instagram className="h-5 w-5" /> Instagram
              </a>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=543856981610&text=Hola%21%20Me%20gustar%C3%ADa%20realizar%20una%20consulta" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block mt-4 px-4 pb-8">
              <Button className="w-full h-12 bg-primary text-black hover:bg-primary/90 rounded-none font-bold uppercase text-lg shadow-lg flex items-center justify-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Contactar
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}