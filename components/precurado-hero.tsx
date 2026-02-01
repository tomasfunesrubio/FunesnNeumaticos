"use client"

import { motion } from "framer-motion"

export function PrecuradoHero() {
    return (
        <section className="pt-32 pb-10 bg-background text-foreground relative border-b border-border overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-foreground uppercase leading-[0.9] text-balance">
                            Diseños de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                                Precurado
                            </span>
                        </h1>
                    </motion.div>
                    <motion.div
                        className="max-w-xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-primary pl-6 py-2 text-balance">
                            Soluciones de reconstrucción certificada para cada tipo de terreno y aplicación. Maximizamos el rendimiento kilométrico de tu carcasa.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
