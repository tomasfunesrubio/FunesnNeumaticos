export interface RetacadoProduct {
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

export const retacadoCatalog: RetacadoProduct[] = [
    {
        id: "r-a1",
        name: "Tracción Superior R1",
        model: "AG-700",
        depth: "38mm",
        image: "/rueda-camion.png", // Usando el mismo placeholder por ahora
        category: "agricola",
        technology: "Compuesto Ultra-Resistente para Suelos Duros",
        usage: "Eje trasero de tractores de alta potencia",
        description: "Diseño de garras profundas optimizado para máxima tracción en campos arados. Su tecnología de autolimpieza evita la acumulación de barro, manteniendo el agarre constante."
    },
    {
        id: "r-a2",
        name: "Implemento de Flotación",
        model: "FLOT-500",
        depth: "18mm",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Baja Compactación de Suelo",
        usage: "Tolvas, sembradoras y equipos de arrastre",
        description: "Diseñada para minimizar la presión sobre el suelo, protegiendo los cultivos y evitando la compactación. Excelente estabilidad lateral para equipos pesados de siembra."
    },
    {
        id: "r-a3",
        name: "Cosechadora Industrial",
        model: "HV-Extreme",
        depth: "42mm",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Carcasa Reforzada de Alta Capacidad",
        usage: "Eje delantero de cosechadoras pesadas",
        description: "Soporta cargas extremas durante la cosecha. Su diseño de hombros redondeados facilita las maniobras en cabeceras sin dañar la superficie del campo."
    }
]

export function getRetacadoProductById(id: string): RetacadoProduct | undefined {
    return retacadoCatalog.find(product => product.id === id)
}
