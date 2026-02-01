"use client"

import { Target, Eye, Users } from "lucide-react"
import { motion } from "framer-motion"

const values = [
    {
        icon: Target,
        title: "Misión",
        description: "Brindar soluciones de recapado de alta calidad que permitan a nuestros clientes optimizar sus costos operativos sin comprometer la seguridad ni el rendimiento de sus flotas.",
    },
    {
        icon: Eye,
        title: "Visión",
        description: "Ser la empresa líder en recapado de neumáticos en Argentina, reconocida por nuestra excelencia en calidad, innovación tecnológica y compromiso con la sustentabilidad.",
    },
    {
        icon: Users,
        title: "Valores",
        description: "Compromiso con la calidad, honestidad en cada servicio, respeto por el medio ambiente y dedicación absoluta a la satisfacción del cliente.",
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const softItemVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: "easeInOut"
        }
    }
}

export function CompanyValues() {
    return (
        <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
        >
            {values.map((value, index) => (
                <motion.div
                    key={value.title}
                    variants={softItemVariants}
                    className="h-full"
                >
                    <div className="group p-8 bg-white border-2 border-border hover:border-primary transition-all duration-300 relative shadow-sm hover:shadow-lg hover:-translate-y-1 h-full">
                        <span className="absolute top-2 right-4 text-6xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                            0{index + 1}
                        </span>

                        <div className="flex flex-col items-start gap-6 mb-4">
                            <div className="flex h-16 w-16 items-center justify-center bg-zinc-900 border border-zinc-800 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
                                <value.icon className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide border-b border-primary/20 pb-2">
                                {value.title}
                            </h3>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mt-4">
                            {value.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}
