"use client"

import { Smartphone, PhoneCall } from "lucide-react"
import { motion } from "framer-motion"

export function ContactHero() {
    return (
        <section className="pt-40 pb-20 bg-background text-foreground relative border-b border-border overflow-hidden">
            {/* Grilla Sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

            {/* Icono gigante decorativo de Celular */}
            <motion.div
                className="absolute top-1/2 right-[-50px] lg:right-16 -translate-y-1/2 opacity-[0.06] pointer-events-none select-none z-0"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 0.06, scale: 1, rotate: -10 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            >
                <Smartphone className="w-[450px] h-[450px] md:w-[550px] md:h-[550px] text-primary stroke-[1.2]" />
            </motion.div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-foreground mb-6 uppercase leading-none">
                            Contacto y <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-yellow-700">
                                Asesoramiento
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
                            Atención directa para flotas de transporte, agro e industrias. Consultá desde tu celular por presupuestos, stock y turnos de recauchutaje.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
