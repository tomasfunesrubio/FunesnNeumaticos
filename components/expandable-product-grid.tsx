"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

interface ExpandableProductGridProps {
    products: any[]
    baseSlug: string
    badgeLabel?: string
    itemsToShowMobile?: number
    itemsToShowDesktop?: number
}

export function ExpandableProductGrid({
    products,
    baseSlug,
    badgeLabel,
    itemsToShowMobile = 2,
    itemsToShowDesktop = 8
}: ExpandableProductGridProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const mobileVisible = products.slice(0, itemsToShowMobile)
    const desktopAdditional = products.slice(itemsToShowMobile, itemsToShowDesktop)
    const hiddenOnBoth = products.slice(itemsToShowDesktop)

    const hasMobileHiddenItems = desktopAdditional.length > 0 || hiddenOnBoth.length > 0
    const hasDesktopHiddenItems = hiddenOnBoth.length > 0

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mobile Visible (Always visible everywhere) */}
                {mobileVisible.map((product) => (
                    <ProductCard key={product.id} product={product} baseSlug={baseSlug} badgeLabel={badgeLabel} />
                ))}

                {/* Desktop Additional (Visible natively on desktop, hidden on mobile) */}
                <div className="hidden md:contents">
                    {desktopAdditional.map((product) => (
                        <ProductCard key={product.id} product={product} baseSlug={baseSlug} badgeLabel={badgeLabel} />
                    ))}
                </div>
            </div>

            {/* Expandable Section for Mobile (Items 2 to end) */}
            <div className="md:hidden">
                <AnimatePresence initial={false}>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-1 gap-6 mt-6">
                                {desktopAdditional.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <ProductCard product={product} baseSlug={baseSlug} badgeLabel={badgeLabel} />
                                    </motion.div>
                                ))}
                                {hiddenOnBoth.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <ProductCard product={product} baseSlug={baseSlug} badgeLabel={badgeLabel} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Expandable Section for Desktop (Items 8 to end) */}
            {hiddenOnBoth.length > 0 && (
                <div className="hidden md:block">
                    <AnimatePresence initial={false}>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                    {hiddenOnBoth.map((product) => (
                                        <motion.div
                                            key={product.id}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <ProductCard product={product} baseSlug={baseSlug} badgeLabel={badgeLabel} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Toggle Button Container */}
            <div
                className={`flex justify-center mt-8 
          ${!hasMobileHiddenItems ? 'hidden' : ''} 
          ${!hasDesktopHiddenItems ? 'md:hidden' : ''}
        `}
            >
                <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 rounded-none px-8 py-6 font-bold tracking-wide uppercase text-sm"
                >
                    {isExpanded ? (
                        <>
                            <span>Ver Menos</span>
                            <ChevronUp className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-1" />
                        </>
                    ) : (
                        <>
                            <span>Ver Todos los Diseños</span>
                            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                        </>
                    )}
                </Button>
            </div>
        </>
    )
}
