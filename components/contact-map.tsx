"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ContactMap() {
    const [isMapLoaded, setIsMapLoaded] = useState(false)

    return (
        <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
        >
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
        </motion.div>
    )
}
