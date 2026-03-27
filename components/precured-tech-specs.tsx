"use client"

import { motion } from "framer-motion"
import {
    Ruler,
    Route,
    MapPinned,
    Truck,
    Building2,
    Mountain,
    TreePine,
    Factory,
    Cog,
    Target,
} from "lucide-react"
import type { PrecuradoProduct } from "@/lib/data-precurado"

// ──────────────────────────────────────────────────────────────────────────────
// Custom SVG inline icons for professional data representation
// ──────────────────────────────────────────────────────────────────────────────

/** Tire with performance lines (section icon for Atributos) */
function TirePerformanceIcon({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
            <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
            <path d="M18 18l-2.5-2.5M6 6l2.5 2.5M18 6l-2.5 2.5M6 18l2.5-2.5" strokeWidth="1" />
            <path d="M20 8l1-1M20 16l1 1" strokeWidth="1.5" />
        </svg>
    )
}

/** M+S / Lama y Nieve badge icon */
function MudSnowIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Snowflake */}
            <path d="M12 2v20M4 8l8 4 8-4M4 16l8-4 8 4" />
            {/* Mountain base (M+S symbolism) */}
            <path d="M2 20l5-8 3 4 4-6 4 6 3-4 5 8" strokeWidth="1.2" />
        </svg>
    )
}

/** Rotation direction arrow icon */
function RotationIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
            <path d="M2 12l3-3 3 3" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}

/** Traction axle icon */
function TractionAxleIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="4" cy="12" r="3" />
            <circle cx="20" cy="12" r="3" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <path d="M10 9l2-2 2 2M10 15l2 2 2-2" />
        </svg>
    )
}

/** Radial construction icon */
function RadialIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="5" />
            <text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">R</text>
        </svg>
    )
}

/** Speed index icon */
function SpeedIndexIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M12 2a10 10 0 0 1 10 10" />
            <path d="M12 2a10 10 0 0 0-10 10" />
            <path d="M2 12a10 10 0 0 0 5.1 8.7" />
            <path d="M22 12a10 10 0 0 1-5.1 8.7" />
            {/* Speedometer needle */}
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            <line x1="12" y1="12" x2="16" y2="6" strokeWidth="2" />
            {/* Speed marks */}
            <line x1="12" y1="3" x2="12" y2="5" strokeWidth="1" />
            <line x1="19" y1="5" x2="17.5" y2="6.5" strokeWidth="1" />
            <line x1="21" y1="12" x2="19" y2="12" strokeWidth="1" />
        </svg>
    )
}

/** Diagonal construction icon */
function DiagonalIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="10" />
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="8" y1="4" x2="20" y2="16" strokeWidth="1" opacity="0.5" />
            <line x1="4" y1="8" x2="16" y2="20" strokeWidth="1" opacity="0.5" />
        </svg>
    )
}

/** Rigid truck with dump body */
function TruckDumpIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Cab */}
            <rect x="1" y="6" width="8" height="8" rx="1" />
            <line x1="6" y1="6" x2="6" y2="14" />
            {/* Dump body */}
            <polygon points="10,4 28,4 30,14 10,14" fill="none" />
            <line x1="10" y1="4" x2="10" y2="14" />
            {/* Wheels */}
            <circle cx="5" cy="16" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="27" cy="16" r="2" fill="currentColor" opacity="0.3" />
            {/* Ground */}
            <line x1="0" y1="18" x2="32" y2="18" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
}

/** Tractor / semi-trailer tractor */
function TruckTractorIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Cab */}
            <rect x="1" y="4" width="10" height="10" rx="1" />
            <line x1="7" y1="4" x2="7" y2="14" />
            {/* Fifth wheel / coupling */}
            <path d="M12 10h3M15 8v4" />
            {/* Chassis */}
            <line x1="11" y1="14" x2="18" y2="14" />
            {/* Wheels */}
            <circle cx="5" cy="16" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="14" cy="16" r="2" fill="currentColor" opacity="0.3" />
            {/* Ground */}
            <line x1="0" y1="18" x2="32" y2="18" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
}

/** Trailer / semi-trailer */
function TrailerIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Cab */}
            <rect x="1" y="5" width="7" height="9" rx="1" />
            {/* Long trailer */}
            <rect x="9" y="3" width="21" height="11" rx="1" />
            {/* Wheels */}
            <circle cx="5" cy="16" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="27" cy="16" r="2" fill="currentColor" opacity="0.3" />
            {/* Ground */}
            <line x1="0" y1="18" x2="32" y2="18" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
}

/** Light vehicle */
function LightVehicleIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Car body */}
            <path d="M4 12 L8 6 L22 6 L26 12" />
            <rect x="2" y="12" width="26" height="4" rx="1" />
            {/* Wheels */}
            <circle cx="8" cy="18" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="22" cy="18" r="2" fill="currentColor" opacity="0.3" />
            {/* Windows */}
            <line x1="14" y1="6" x2="14" y2="12" strokeWidth="0.8" opacity="0.4" />
        </svg>
    )
}

/** Bus icon */
function BusIcon({ className = "h-4 w-4" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            {/* Bus body */}
            <rect x="2" y="3" width="28" height="12" rx="2" />
            {/* Windows */}
            <rect x="5" y="5" width="4" height="4" rx="0.5" opacity="0.4" />
            <rect x="11" y="5" width="4" height="4" rx="0.5" opacity="0.4" />
            <rect x="17" y="5" width="4" height="4" rx="0.5" opacity="0.4" />
            <rect x="23" y="5" width="4" height="4" rx="0.5" opacity="0.4" />
            {/* Wheels */}
            <circle cx="8" cy="17" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="24" cy="17" r="2" fill="currentColor" opacity="0.3" />
            {/* Ground */}
            <line x1="0" y1="19" x2="32" y2="19" strokeWidth="0.5" opacity="0.3" />
        </svg>
    )
}

// ──────────────────────────────────────────────────────────────────────────────
// Icon mappers — map data values to specific professional icons
// ──────────────────────────────────────────────────────────────────────────────

function getApplicationIcon(type: string) {
    const t = type.toLowerCase()
    if (t.includes('urbano')) return Building2
    if (t.includes('regional')) return MapPinned
    if (t.includes('carretera') && !t.includes('fuera')) return Route
    if (t.includes('todoterreno')) return Mountain
    if (t.includes('fuera de carretera')) return TreePine
    if (t.includes('industrial')) return Factory
    return null
}

function getAttributeIcon(attr: string): React.ComponentType<{ className?: string }> | null {
    const a = attr.toLowerCase()
    if (a.includes('lama') || a.includes('nieve') || a.includes('m+s')) return MudSnowIcon
    if (a.includes('rotación') || a.includes('rotacion')) return RotationIcon
    if (a.includes('slim')) return TirePerformanceIcon
    return null
}

function getUseIcon(use: string): React.ComponentType<{ className?: string }> | null {
    const u = use.toLowerCase()
    if (u.includes('tracción') || u.includes('traccion')) return TractionAxleIcon
    if (u.includes('radial')) return RadialIcon
    if (u.includes('velocidad') || u.includes('índice') || u.includes('indice')) return SpeedIndexIcon
    if (u.includes('diagonal')) return DiagonalIcon
    if (u.includes('eje libre')) return TractionAxleIcon
    return null
}

function getVehicleIcon(vehicle: string): React.ComponentType<{ className?: string }> | null {
    const v = vehicle.toLowerCase()
    if (v.includes('volquete') || v.includes('chasis')) return TruckDumpIcon
    if (v.includes('tractora')) return TruckTractorIcon
    if (v.includes('remolque') || v.includes('semirremolque') || v.includes('aislado')) return TrailerIcon
    if (v.includes('liviano') || v.includes('ligero')) return LightVehicleIcon
    if (v.includes('autobús') || v.includes('autobus') || v.includes('bus')) return BusIcon
    return null
}

// ──────────────────────────────────────────────────────────────────────────────
// Reusable UI blocks
// ──────────────────────────────────────────────────────────────────────────────

interface SpecBlockProps {
    icon: React.ReactNode
    label: string
    children: React.ReactNode
    delay?: number
    className?: string // Añadido para inyectar estilos de layout desde el padre
}

function SpecBlock({ icon, label, children, delay = 0, className = "" }: SpecBlockProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay }}
            // Agregamos flex, flex-col y h-full para que las tarjetas de una fila midan lo mismo
            className={`bg-white border border-zinc-200 p-6 hover:border-primary/50 transition-colors group flex flex-col h-full ${className}`}
        >
            <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 bg-zinc-900 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                    {icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 font-mono">
                    {label}
                </span>
            </div>
            {/* flex-1 empuja el contenido para llenar el espacio vertical si es necesario */}
            <div className="flex-1">
                {children}
            </div>
        </motion.div>
    )
}

type IconMapper = (value: string) => React.ComponentType<{ className?: string }> | null

interface TagListProps {
    items: string[]
    iconMapper?: IconMapper
}

function TagList({ items, iconMapper }: TagListProps) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((item) => {
                const Icon = iconMapper ? iconMapper(item) : null
                return (
                    <span
                        key={item}
                        className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-700"
                    >
                        {Icon && (
                            <span className="text-primary shrink-0">
                                <Icon className="h-4 w-4" />
                            </span>
                        )}
                        {item}
                    </span>
                )
            })}
        </div>
    )
}

// ──────────────────────────────────────────────────────────────────────────────
// Main component
// ──────────────────────────────────────────────────────────────────────────────

interface PrecuredTechSpecsProps {
    product: PrecuradoProduct
}

export function PrecuredTechSpecs({ product }: PrecuredTechSpecsProps) {
    let delayIndex = 0
    const nextDelay = () => 0.1 + delayIndex++ * 0.08

    return (
        <div className="space-y-6">
            {/* Section Header */}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-black text-zinc-900 uppercase flex items-center gap-3"
            >
                <Cog className="h-6 w-6 text-primary" />
                Especificaciones Técnicas
            </motion.h2>

            <div className="flex flex-col gap-4">

                {/* TOP ROW: Campos cortos (Profundidad, Recomendada, Opcional).
                  Al usar flex-wrap y flex-1, se distribuyen equitativamente sin dejar agujeros.
                */}
                <div className="flex flex-wrap gap-4">
                    {product.depth && (
                        <div className="flex-1 min-w-[240px] w-full">
                            <SpecBlock
                                icon={<Ruler className="h-5 w-5" />}
                                label="Profundidad"
                                delay={nextDelay()}
                            >
                                <span className="text-2xl font-black text-zinc-900 tracking-tight">
                                    {product.depth}
                                </span>
                            </SpecBlock>
                        </div>
                    )}

                    {product.recommendedApplication && (
                        <div className="flex-1 min-w-[240px] w-full">
                            <SpecBlock
                                icon={<Route className="h-5 w-5" />}
                                label="Aplicación Recomendada"
                                delay={nextDelay()}
                            >
                                <TagList
                                    items={Array.isArray(product.recommendedApplication) ? product.recommendedApplication : [product.recommendedApplication]}
                                    iconMapper={getApplicationIcon}
                                />
                            </SpecBlock>
                        </div>
                    )}

                    {product.optionalApplication && (
                        <div className="flex-1 min-w-[240px] w-full">
                            <SpecBlock
                                icon={<MapPinned className="h-5 w-5" />}
                                label="Aplicación Opcional"
                                delay={nextDelay()}
                            >
                                <TagList
                                    items={Array.isArray(product.optionalApplication) ? product.optionalApplication : [product.optionalApplication]}
                                    iconMapper={getApplicationIcon}
                                />
                            </SpecBlock>
                        </div>
                    )}
                </div>

                {/* BOTTOM ROWS: Campos largos (Atributos, Uso Indicado, Vehículos).
                  Ocupan SIEMPRE el 100% del ancho para acomodar la mayor cantidad de etiquetas
                  de forma horizontal y evitar que la grilla vertical se rompa.
                */}
                {product.attributes && product.attributes.length > 0 && (
                    <div className="w-full">
                        <SpecBlock
                            icon={<TirePerformanceIcon className="h-5 w-5" />}
                            label="Atributos"
                            delay={nextDelay()}
                        >
                            <TagList items={product.attributes} iconMapper={getAttributeIcon} />
                        </SpecBlock>
                    </div>
                )}

                {product.indicatedUse && product.indicatedUse.length > 0 && (
                    <div className="w-full">
                        <SpecBlock
                            icon={<Target className="h-5 w-5" />}
                            label="Uso Indicado"
                            delay={nextDelay()}
                        >
                            <TagList items={product.indicatedUse} iconMapper={getUseIcon} />
                        </SpecBlock>
                    </div>
                )}

                {product.vehicles && product.vehicles.length > 0 && (
                    <div className="w-full">
                        <SpecBlock
                            icon={<Truck className="h-5 w-5" />}
                            label="Vehículos"
                            delay={nextDelay()}
                        >
                            <TagList items={product.vehicles} iconMapper={getVehicleIcon} />
                        </SpecBlock>
                    </div>
                )}

            </div>
        </div>
    )
}