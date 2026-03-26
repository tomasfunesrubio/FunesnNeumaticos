"use client"

import { useState, useMemo } from 'react'
import { Search, MessageCircle, ArrowLeft, Filter } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { neumaticosCatalog, categories } from '@/lib/data-neumaticos-nuevos'
import { ProductCard } from '@/components/product-card' // Assumes we can reuse specific styles, but ProductCard in project is likely for Retread. Let's verify.
// Wait, ProductCard in the project is for Retread (data-precurado). 
// The Cubiertas page had an inline ProductCard. I should check if I can reuse the global one or if it expects a specific type.
// The existing `ProductCard` expects `PrecuradoProduct | RetacadoProduct ...` which might be compatible or I might need to adapt.
// For now, I will include the inline ProductCard logic here to avoid type mismatch issues, or better, adapt it.
// Actually, let's keep the inline card logic but simplified, or specific to New Tires.

const WHATSAPP_NUMBER = '5493854135265'

// --- Internal NewTireCard ---
import { Package } from 'lucide-react'
import { Neumatico } from '@/lib/data-neumaticos-nuevos'

function NewTireCard({ product }: { product: Neumatico }) {
    const whatsappMessage = encodeURIComponent(`Hola, quiero cotizar el neumático ${product.brand} ${product.model} (${product.size})`)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`

    return (
        <div className="bg-white border border-zinc-200 flex flex-col h-full group hover:border-primary/50 hover:shadow-xl transition-all duration-300">
            {/* Brand Badge */}
            <div className="px-4 pt-4">
                <span className="inline-block bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider px-3 py-1">
                    {product.brand}
                </span>
            </div>

            {/* Product Image */}
            <div className="relative h-48 flex items-center justify-center bg-zinc-50 mx-4 mt-3 overflow-hidden">
                <div className="w-32 h-32 bg-zinc-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Package className="w-16 h-16 text-zinc-400" />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-4">
                {/* Model Name */}
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
                    {product.model}
                </h3>

                {/* Size Badge */}
                <div className="inline-flex mb-3">
                    <span className="bg-zinc-900 text-white text-sm font-bold px-3 py-1.5 tracking-wide">
                        {product.size}
                    </span>
                </div>

                {/* Features */}
                <ul className="text-xs text-zinc-500 space-y-1 mb-4 flex-grow">
                    {product.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-0.5">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold text-sm h-11 gap-2 shadow-lg shadow-primary/20">
                        <MessageCircle className="h-4 w-4" />
                        Cotizar {product.model}
                    </Button>
                </a>
            </div>
        </div>
    )
}

export function CatalogBrowser() {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('todo')

    const filteredProducts = useMemo(() => {
        return neumaticosCatalog.filter((product) => {
            // Category filter
            const matchesCategory = activeCategory === 'todo' || product.category === activeCategory

            // Search filter (brand, model, or size)
            const searchLower = searchQuery.toLowerCase()
            const matchesSearch =
                searchQuery === '' ||
                product.brand.toLowerCase().includes(searchLower) ||
                product.model.toLowerCase().includes(searchLower) ||
                product.size.toLowerCase().includes(searchLower)

            return matchesCategory && matchesSearch
        })
    }, [searchQuery, activeCategory])

    return (
        <>
            {/* Search Hero */}
            <section className="bg-zinc-950 pt-32 pb-16 relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                {/* Gold Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors text-sm font-medium mb-8"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver al inicio
                    </Link>

                    {/* Eyebrow */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-0.5 w-8 bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest text-xs uppercase">
                            Catálogo de Neumáticos
                        </span>
                        <div className="h-0.5 w-8 bg-primary"></div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                        Encontrá el neumático ideal
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
                            para tu vehículo
                        </span>
                    </h1>

                    {/* Search Bar */}
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
                        <Input
                            type="text"
                            placeholder="Buscá por medida, marca o modelo..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-14 pl-12 pr-4 bg-white border-0 rounded-none text-zinc-900 placeholder:text-zinc-400 text-base focus:ring-2 focus:ring-primary shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Filter Bar - Sticky Container */}
            <div className="sticky top-0 z-50 w-full left-0 bg-white/95 backdrop-blur-md border-b border-zinc-200 shadow-sm">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-3 overflow-x-auto pb-1">
                        <Filter className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 border-2 ${activeCategory === cat.id
                                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                                    : 'bg-transparent text-zinc-500 border-zinc-300 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Grid */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Results Count */}
                    <div className="mb-8 flex items-center justify-between">
                        <p className="text-sm text-zinc-500">
                            Mostrando <span className="font-bold text-zinc-900">{filteredProducts.length}</span> productos
                        </p>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <NewTireCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="text-center py-20 px-6 bg-white border border-zinc-200">
                            <div className="mx-auto w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                                <Search className="h-8 w-8 text-zinc-400" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-900 uppercase tracking-tight mb-2">
                                No encontramos esa medida
                            </h3>
                            <p className="text-zinc-500 mb-6 max-w-md mx-auto">
                                No hay resultados para tu búsqueda, pero podemos ayudarte. Consultanos directamente por WhatsApp.
                            </p>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, busco un neumático que no encontré en el catálogo.')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none font-bold h-12 px-8 gap-2 shadow-lg shadow-primary/20">
                                    <MessageCircle className="h-4 w-4" />
                                    Consultar por WhatsApp
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
