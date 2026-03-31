"use client"

import { Search, Wrench, Layers, ThermometerSun } from "lucide-react"
import { motion } from "framer-motion"

const processSteps = [
    {
        icon: Search,
        title: "01. Inspección y Escaneo",
        desc: "Evaluamos el daño interno y externo para asegurar que la carcasa sea apta para una recuperación 100% segura."
    },
    {
        icon: Wrench,
        title: "02. Preparación y Escariado",
        desc: "Removemos el material dañado y limpiamos la herida con herramientas de alta precisión para evitar la oxidación."
    },
    {
        icon: Layers,
        title: "03. Relleno y Parche",
        desc: "Aplicamos cojín de caucho crudo y un parche de refuerzo estructural (con mallas de acero si es necesario)."
    },
    {
        icon: ThermometerSun,
        title: "04. Curado Térmico",
        desc: "La cubierta ingresa a la vulcanizadora (calor + presión). El caucho nuevo se fusiona molecularmente con el original."
    }
]

// Duplicamos el arreglo para crear un loop ininterrumpido
const duplicatedSteps = [...processSteps, ...processSteps]

export function ProcessCarousel() {
    return (
        <div className="relative w-full overflow-hidden pb-12">
            {/* Sombras en los bordes para suavizar la entrada y salida de las tarjetas */}
            <div className="pointer-events-none absolute left-0 top-0 z-20 h-[calc(100%-3rem)] w-12 lg:w-32 bg-gradient-to-r from-zinc-900 to-transparent"></div>
            <div className="pointer-events-none absolute right-0 top-0 z-20 h-[calc(100%-3rem)] w-12 lg:w-32 bg-gradient-to-l from-zinc-900 to-transparent"></div>

            <motion.div
                className="flex gap-6 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    duration: 25, // Tiempo que tarda en dar una vuelta completa (ajustar para velocidad)
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {duplicatedSteps.map((step, index) => {
                    const Icon = step.icon
                    const originalIndex = index % processSteps.length

                    return (
                        <div key={index} className="w-[85vw] md:w-[400px] shrink-0">
                            <div className="bg-zinc-800 border border-zinc-700 p-8 flex flex-col relative group hover:border-primary transition-colors h-full shadow-sm">
                                <div className="text-6xl font-black text-zinc-700/30 absolute top-4 right-6 group-hover:text-primary/10 transition-colors pointer-events-none">
                                    0{originalIndex + 1}
                                </div>
                                <div className="h-14 w-14 bg-zinc-900 text-primary flex items-center justify-center mb-8 border border-zinc-700 group-hover:scale-110 transition-transform">
                                    <Icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold uppercase mb-4 text-white relative z-10">{step.title}</h3>
                                <p className="text-zinc-400 leading-relaxed flex-grow relative z-10">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}
