export interface RecauchutajeProduct {
    id: string
    name: string
    model: string
    depth: string
    image: string
    category: "agricola"
    technology: string
    usage: string
    description: string
}

export const recauchutajeCatalog: RecauchutajeProduct[] = [
    {
        id: "rc-a1",
        name: "Renovación Total R2",
        model: "RC-Arroz",
        depth: "55mm",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Compuesto Anti-Abrasivo Premium",
        usage: "Zonas de alta humedad y arrozales",
        description: "Recauchutaje especializado con tacos extra profundos para suelos inundados o extremadamente blandos. Garantiza tracción donde otros fallan, extendiendo la vida útil de carcasas de alta gama."
    },
    {
        id: "rc-a2",
        name: "Tracción Mixta Campo",
        model: "RC-Vial-Agro",
        depth: "30mm",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Tracción Balanceada",
        usage: "Retroexcavadoras y tractores utilitarios",
        description: "Un diseño versátil que combina la robustez del servicio vial con la tracción necesaria para el suelo agrícola. Ideal para equipos que operan en mantenimiento de caminos internos y labores de campo."
    },
    {
        id: "rc-a3",
        name: "Refuerzo Forestal",
        model: "RC-Forest",
        depth: "45mm",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Banda de Rodamiento Ultra-Reforzada",
        usage: "Maquinaria en entornos forestales exigentes",
        description: "Diseño para resistir pinchaduras y desgarros en terrenos con residuos de madera o piedras. Máxima protección para la carcasa en las condiciones más hostiles del sector primario."
    }
]

export function getRecauchutajeProductById(id: string): RecauchutajeProduct | undefined {
    return recauchutajeCatalog.find(product => product.id === id)
}
