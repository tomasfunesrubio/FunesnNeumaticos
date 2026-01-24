import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getRecauchutajeProductById } from "@/lib/data-recauchutaje"
import { ArrowLeft, Ruler, Cog, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default async function RecauchutajeDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product = getRecauchutajeProductById(id)

    if (!product) {
        notFound()
    }

    const goldFilter = "brightness(0) saturate(100%) invert(63%) sepia(85%) saturate(2333%) hue-rotate(1deg) brightness(93%) contrast(92%)"

    return (
        <main className="min-h-screen bg-zinc-50">
            <Header />

            {/* Back Navigation */}
            <section className="pt-32 pb-8 bg-background border-b border-border">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Link
                        href="/recauchutaje"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Volver al Catálogo
                    </Link>
                </div>
            </section>

            {/* Product Detail Section */}
            <section className="py-16 bg-zinc-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">

                        {/* LEFT: Product Image */}
                        <div className="relative bg-white border-2 border-zinc-200 p-12 lg:p-16">
                            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent"></div>

                            <div className="relative aspect-square">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    style={{ filter: goldFilter }}
                                    priority
                                />
                            </div>

                            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary"></div>
                            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary"></div>
                        </div>

                        {/* RIGHT: Product Information */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 font-mono text-xs uppercase tracking-widest">
                                Modelo: {product.model}
                            </div>

                            <div>
                                <h1 className="text-5xl lg:text-6xl font-black text-zinc-900 uppercase leading-[0.9] tracking-tighter mb-4">
                                    {product.name}
                                </h1>
                                <div className="h-1 w-24 bg-primary"></div>
                            </div>

                            <p className="text-lg text-zinc-600 leading-relaxed border-l-4 border-primary pl-6 py-2">
                                {product.description}
                            </p>

                            <div className="bg-white border border-zinc-200 p-8">
                                <h2 className="text-xl font-black text-zinc-900 uppercase mb-6 flex items-center gap-3">
                                    <Cog className="h-6 w-6 text-primary" />
                                    Especificaciones Agrícolas
                                </h2>

                                <div className="grid grid-cols-1 gap-6">
                                    <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                                        <div className="p-2 bg-zinc-900 text-primary">
                                            <Ruler className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Profundidad de Garra</div>
                                            <div className="text-lg font-black text-zinc-900">{product.depth}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 pb-4 border-b border-dashed border-zinc-200">
                                        <div className="p-2 bg-zinc-900 text-primary">
                                            <Cog className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Tecnología</div>
                                            <div className="text-lg font-black text-zinc-900">{product.technology}</div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-zinc-900 text-primary">
                                            <Target className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold mb-1">Aplicación de Campo</div>
                                            <div className="text-lg font-black text-zinc-900">{product.usage}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a
                                    href={`https://api.whatsapp.com/send/?phone=543856981610&text=Hola%21%20Me%20interesa%20el%20recauchutaje%20del%20modelo%20${product.model}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button className="w-full h-14 bg-primary text-black hover:bg-primary/90 font-bold uppercase tracking-wider text-lg rounded-none shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.633 1.432h.006c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Consultar por {product.model}
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
