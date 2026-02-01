"use client"

import { Headset } from "lucide-react"
import { motion } from "framer-motion"

export function ContactHero() {
    return (
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
    )
}
