"use client"

import { motion } from "framer-motion"

export function NostrosHero() {
    return (
        <section className="pt-40 pb-20 bg-background text-foreground relative border-b border-border overflow-hidden">
            {/* Grilla Técnica Sutil */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] z-0 pointer-events-none"></div>

            {/* TIPOGRAFÍA GIGANTE "2003" */}
            <motion.div
                className="absolute top-1/2 right-[-50px] md:right-10 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <span className="text-[12rem] md:text-[18rem] leading-none font-black text-primary tracking-tighter">
                    2003
                </span>
            </motion.div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 mb-8 backdrop-blur-sm">
                            <span className="h-2 w-2 bg-primary animate-pulse"></span>
                            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase font-mono">
                                Perfil Corporativo
                            </span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl font-black tracking-tight sm:text-7xl text-foreground mb-6 uppercase">
                            Más de 20 años <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
                                de Excelencia
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6 py-2">
                            Desde 2003, Funes Neumáticos ha sido sinónimo de confianza y calidad en el sector del recapado, combinando economía, seguridad y sustentabilidad.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
