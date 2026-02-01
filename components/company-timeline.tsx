"use client"

import { motion } from "framer-motion"

const milestones = [
    { year: "2003", event: "Fundación de Funes Neumáticos" },
    { year: "2008", event: "Expansión a nivel provincial" },
    { year: "2012", event: "Certificación ISO 9001" },
    { year: "2016", event: "Incorporación de tecnología de recapado en frío" },
    { year: "2020", event: "Apertura de nueva planta industrial" },
    { year: "2024", event: "Más de 50.000 neumáticos recapados" },
]

function TireTrackVertical(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 800"
            fill="currentColor"
            {...props}
        >
            <defs>
                <pattern id="v-tread" x="0" y="0" width="100" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,0 L30,10 L30,30 L0,20 Z" className="opacity-40" />
                    <path d="M100,0 L70,10 L70,30 L100,20 Z" className="opacity-40" />
                    <path d="M50,15 L80,5 L80,25 L50,35 L20,25 L20,5 Z" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#v-tread)" />
        </svg>
    )
}

export function CompanyTimeline() {
    return (
        <>
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[200px] opacity-[0.03] pointer-events-none z-0">
                <TireTrackVertical className="w-full h-full text-zinc-900" preserveAspectRatio="none" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-3xl font-black text-foreground sm:text-4xl uppercase">
                        Nuestra Trayectoria
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground font-mono text-sm uppercase">
              // Hitos de Crecimiento
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-secondary md:-ml-0.5 z-0"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div
                                key={milestone.year}
                                className={`flex flex-col md:flex-row gap-8 items-start relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <motion.div
                                    className={`flex-1 w-full pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    <div className="bg-secondary/10 border border-border p-6 hover:border-primary transition-colors group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-primary/10 to-transparent -mr-4 -mt-4 rounded-full"></div>
                                        <span className="text-4xl font-black text-foreground/10 group-hover:text-primary/20 transition-colors block mb-2">
                                            {milestone.year}
                                        </span>
                                        <h4 className="text-lg font-bold text-foreground uppercase relative z-10">{milestone.event}</h4>
                                    </div>
                                </motion.div>

                                <div className="absolute left-4 md:left-1/2 -ml-[9px] md:-ml-[9px] w-5 h-5 bg-background border-4 border-primary rounded-full z-10 mt-6 shadow-sm ring-4 ring-background"></div>

                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
