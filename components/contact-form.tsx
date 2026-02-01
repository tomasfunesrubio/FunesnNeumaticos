"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function ContactForm() {
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

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
    )
}
