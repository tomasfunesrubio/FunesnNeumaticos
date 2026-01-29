"use client"

import React, { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ArrowRight,
  Headset,
  Factory
} from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Atención Telefónica",
    details: [
      "Fijo: (0385) 427-6652",
      "Móvil: 0385 154-135265",
      "WhatsApp: 385 698 1610"
    ],
    action: "tel:03854276652",
  },
  {
    icon: Mail,
    title: "Área Comercial",
    details: ["ventas@funesneumaticos.com", "funesneumaticos@hotmail.com"],
    action: "mailto:ventas@funesneumaticos.com",
  },
  {
    icon: MapPin,
    title: "Ubicación de Planta",
    details: ["RN34 720, La Banda", "Santiago del Estero"],
    action: null,
  },
  {
    icon: Clock,
    title: "Horarios de Carga",
    details: ["Lun a Vie: 7 a 13 hs", "y 14 a 17 hs"],
    action: null,
  },
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

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

  // Variants for Staggered Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2 // Pequeño delay para que espere al título
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* --- HERO SECTION INDUSTRIAL --- */}
      <section className="pt-40 pb-20 bg-background text-foreground relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.05] pointer-events-none">
          <Headset className="w-[600px] h-[600px] text-primary" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-2 mb-8 backdrop-blur-sm">
                <span className="h-2 w-2 bg-primary animate-pulse"></span>
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                  Atención al Cliente
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-foreground mb-6 uppercase">
                Hablemos de <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                  Negocios
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
                Canales directos con nuestra planta industrial. Soluciones técnicas y comerciales para tu flota de transporte.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN PRINCIPAL: CONTACTO --- */}
      <section className="py-24 bg-background relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">

          {/* 1. INFORMACIÓN PLANTA CENTRAL (ANCHO COMPLETO) */}
          <div className="w-full mb-16">
            <div className="border-b border-border pb-8 mb-10">
              <h3 className="text-3xl font-black text-foreground mb-4 uppercase flex items-center gap-3">
                <Factory className="h-8 w-8 text-primary" />
                Planta Central
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                Nuestras instalaciones están operativas de Lunes a Sábados para recepción y despacho de flotas. Contactanos por cualquiera de nuestros canales oficiales.
              </p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={containerVariants}
            >
              {contactInfo.map((info) => (
                <motion.div key={info.title} variants={itemVariants} className="h-full">
                  <div
                    className="group flex flex-col items-start gap-4 p-8 bg-secondary/10 border-2 border-border hover:border-primary transition-all duration-300 h-full"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-zinc-900 text-white group-hover:bg-primary group-hover:text-black transition-colors">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground uppercase text-xs tracking-widest mb-2 font-mono">{info.title}</h4>
                      {info.details.map((detail, idx) => {
                        if (detail.includes("WhatsApp")) {
                          return (
                            <a
                              key={idx}
                              href="https://wa.me/5493856981610"
                              className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors mt-1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <MessageSquare className="h-4 w-4" />
                              {detail}
                            </a>
                          )
                        }
                        return (
                          <p key={idx} className="text-base text-muted-foreground font-medium mb-1">{detail}</p>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* 2. FORMULARIO (ANCHO COMPLETO) */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }} // CORRECCIÓN: Delay agregado para que espere a la sección superior
            >
              <div className="bg-card border-2 border-border shadow-xl relative">
                {/* Encabezado del Formulario */}
                <div className="bg-zinc-800 text-white p-6 border-b-4 border-primary flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-bold uppercase tracking-wider">Solicitud de Cotización</h2>
                  </div>
                </div>

                <div className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Fila 1: Nombre y Empresa */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="nombre" className="text-foreground font-bold text-xs uppercase tracking-widest">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          placeholder="EJ: JUAN PÉREZ"
                          required
                          className="bg-secondary/20 border-border h-14 rounded-none focus:border-primary focus:ring-0 font-medium border-b-2 border-x-0 border-t-0 px-0 focus:bg-secondary/40 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="empresa" className="text-foreground font-bold text-xs uppercase tracking-widest">Empresa / Flota</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          placeholder="EJ: LOGÍSTICA S.A."
                          className="bg-secondary/20 border-border h-14 rounded-none focus:border-primary focus:ring-0 font-medium border-b-2 border-x-0 border-t-0 px-0 focus:bg-secondary/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Fila 2: Email y Teléfono */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-foreground font-bold text-xs uppercase tracking-widest">Email Corporativo *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="contacto@empresa.com"
                          required
                          className="bg-secondary/20 border-border h-14 rounded-none focus:border-primary focus:ring-0 font-medium border-b-2 border-x-0 border-t-0 px-0 focus:bg-secondary/40 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="telefono" className="text-foreground font-bold text-xs uppercase tracking-widest">Teléfono Móvil *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          placeholder="+54 9 ..."
                          required
                          className="bg-secondary/20 border-border h-14 rounded-none focus:border-primary focus:ring-0 font-medium border-b-2 border-x-0 border-t-0 px-0 focus:bg-secondary/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Fila 3: Mensaje (Full Width) */}
                    <div className="space-y-3">
                      <Label htmlFor="mensaje" className="text-foreground font-bold text-xs uppercase tracking-widest">Detalle del Requerimiento *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Especifique medidas, cantidad y tipo de servicio..."
                        rows={6}
                        required
                        className="bg-secondary/20 border-border rounded-none focus:border-primary focus:ring-0 font-medium resize-none p-4 border-2"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-16 bg-primary text-black hover:bg-yellow-500 rounded-none text-lg font-black tracking-wider uppercase shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border-b-4 border-yellow-700 hover:border-yellow-800 active:border-b-0 active:translate-y-1"
                    >
                      Enviar Solicitud
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-secondary/30 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-black text-foreground uppercase tracking-tight sm:text-4xl">
              Preguntas Frecuentes
            </h2>
            <p className="mt-4 text-muted-foreground font-mono text-sm">
              // INFORMACIÓN TÉCNICA
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {[
              {
                q: "¿Cuánto tiempo demora el proceso?",
                a: "Ciclo de producción estándar de 48 a 72 horas hábiles.",
              },
              {
                q: "¿Qué tipo de garantía ofrecen?",
                a: "Garantía total sobre banda de rodamiento y proceso de adhesión.",
              },
              {
                q: "¿Realizan retiro y entrega?",
                a: "Logística propia para retiro y entrega de cascos en zona de influencia.",
              },
              {
                q: "¿Trabajan con cuentas corrientes?",
                a: "Financiación disponible para flotas previa calificación crediticia.",
              },
            ].map((faq, i) => (
              <motion.div key={faq.q} variants={itemVariants} className="h-full">
                <div className="p-8 bg-background border-2 border-border hover:border-primary transition-colors relative group shadow-sm h-full">
                  <span className="absolute top-4 right-4 text-foreground/5 font-black text-5xl group-hover:text-primary/10 transition-colors select-none">
                    0{i + 1}
                  </span>
                  <h3 className="font-bold text-foreground text-lg uppercase mb-3 relative z-10">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed relative z-10">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}