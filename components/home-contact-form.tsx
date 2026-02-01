"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function HomeContactForm() {
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
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
        </motion.div>
    )
}
