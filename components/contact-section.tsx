"use client"

import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle } from "lucide-react"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send
} from "lucide-react"

function TireTrackPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 400"
      fill="currentColor"
      {...props}
    >
      <defs>
        <pattern id="tread" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
          <path d="M0,0 L35,10 L35,30 L0,20 Z" className="opacity-80" />
          <path d="M50,20 L85,10 L85,30 L50,40 L15,30 L15,10 Z" transform="translate(0, -10)" />
          <path d="M100,0 L65,10 L65,30 L100,20 Z" className="opacity-80" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tread)" />
    </svg>
  )
}

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: [
      "Fijo: (0385) 427-6652",
      "Móvil: 0385 154-135265",
      "WhatsApp: 385 698 1610"
    ],
    action: "tel:03854276652",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ventas@funesneumaticos.com", "funesneumaticos@hotmail.com"],
    action: "mailto:ventas@funesneumaticos.com",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["RN34 720, La Banda", "Santiago del Estero"],
    action: "#ubicacion",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun a Vie: 7 a 13 hs", "y 14 a 17 hs"],
    action: null,
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const [isMapLoaded, setIsMapLoaded] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-24 bg-background relative overflow-hidden">
      {/* Fondo decorativo sutil estilo industrial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>

      {/* Background Tire Track */}
      <div className="absolute top-24 right-0 h-[120%] opacity-[0.1] pointer-events-none z-0 rotate-12">
        <TireTrackPattern className="h-full w-[250px] text-primary" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* --- Header de la Sección (Modificado: Izquierda + Eyebrow) --- */}
        <div className="mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-primary"></div>
            <span className="text-primary font-bold tracking-widest text-sm uppercase">
              Canales de Atención
            </span>
          </div>

          {/* Título y Descripción distribuidos */}
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <h2 className="text-4xl font-black text-foreground sm:text-5xl uppercase tracking-tight leading-none">
              ESTAMOS PARA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">AYUDARTE</span>
            </h2>
            <p className="text-lg text-muted-foreground border-l-4 border-primary/30 pl-6 mb-2">
              Contactanos para recibir asesoramiento técnico personalizado o solicitar una cotización para tu flota sin compromiso.
            </p>
          </div>
        </div>

        {/* --- Tarjetas de Información --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="p-6 rounded-none border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:border-primary transition-all duration-300 mb-4">
                <info.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-foreground uppercase text-xs tracking-wider mb-2">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail) => {
                  if (detail.includes("WhatsApp")) {
                    return (
                      <a
                        key={detail}
                        href="https://wa.me/5493856981610"
                        className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mt-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-3 w-3" />
                        {detail}
                      </a>
                    )
                  }
                  return (
                    <p key={detail} className="text-sm text-muted-foreground font-medium">{detail}</p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* --- 1. MAPA REAL (Estilo Grises) --- */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Nuestra Planta Industrial</h3>
              <p className="text-sm text-muted-foreground font-medium">RN34 720, La Banda, Santiago del Estero</p>
            </div>
          </div>

          <div className="w-full h-[500px] border border-border shadow-2xl bg-secondary/20 relative group overflow-hidden">
            {/* Skeleton Loader */}
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-zinc-100 animate-pulse z-20 flex items-center justify-center">
                <span className="text-zinc-400 font-bold text-sm uppercase tracking-widest">Cargando Mapa...</span>
              </div>
            )}

            <iframe
              src="https://maps.google.com/maps?q=Funes+Neumaticos+RN34+720+La+Banda&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
              className={`transition-opacity duration-700 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
              title="Ubicación Funes Neumáticos"
            ></iframe>
          </div>
        </div>

        {/* --- 2. FORMULARIO --- */}
        <div>
          <div className="flex items-center gap-3 mb-6 border-l-4 border-primary pl-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground uppercase tracking-tight">Envíanos un mensaje</h3>
              <p className="text-sm text-muted-foreground font-medium">Respuesta técnica en menos de 24hs</p>
            </div>
          </div>

          <Card className="bg-card border-border shadow-lg rounded-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 -mr-8 -mt-8 rotate-45"></div>

            <CardContent className="p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-foreground font-bold text-xs uppercase">Nombre completo *</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="bg-secondary/30 border-border h-12 rounded-none focus:border-primary focus:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa" className="text-foreground font-bold text-xs uppercase">Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-secondary/30 border-border h-12 rounded-none focus:border-primary focus:ring-0"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono" className="text-foreground font-bold text-xs uppercase">Teléfono *</Label>
                    <Input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+54 ..."
                      required
                      className="bg-secondary/30 border-border h-12 rounded-none focus:border-primary focus:ring-0"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-bold text-xs uppercase">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tucorreo@empresa.com"
                    required
                    className="bg-secondary/30 border-border h-12 rounded-none focus:border-primary focus:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje" className="text-foreground font-bold text-xs uppercase">Mensaje *</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Contanos qué necesitas: tipo de neumáticos, cantidad, medidas, etc."
                    rows={6}
                    required
                    className="bg-secondary/30 border-border rounded-none focus:border-primary focus:ring-0 resize-none p-4"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto px-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold h-12 text-sm tracking-wide shadow-lg shadow-primary/20 transition-all"
                >
                  ENVIAR CONSULTA
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}