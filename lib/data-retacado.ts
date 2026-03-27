// 1. Interfaz expandida para soportar campos estructurados y Arrays
export interface RetacadoProduct {
    id: string
    name: string
    model: string
    depth?: string | null
    image: string
    category: string // Lo pasamos a string genérico por si agregás "vial" o "industrial" después
    technology?: string
    usage?: string
    description?: string | string[]
    isVipal?: boolean
    recommendedApplication?: string | string[]
    optionalApplication?: string | string[]
    indicatedUse?: string[]
    attributes?: string[]
    vehicles?: string[]
}

export const retacadoCatalog: RetacadoProduct[] = [
    // --- NUEVO PRODUCTO CON ESPECIFICACIONES ESTRUCTURADAS ---

    {
        id: "vdagro",
        name: "VDAGRO",
        model: "VDAGRO",
        depth: "17,5mm", // Dejalo en null si no hay medida exacta, el grid se adapta solo
        image: "/retacado/VDAGRO.png", // Asegurate de cambiar esto por la ruta de tu imagen real
        category: "agricola",
        technology: "Fuera de carretera", // Lo usamos como texto rápido para la tarjeta
        usage: "Eje libre", // Uso principal
        description: [
            "Exclusiva para utilización en ejes delanteros y tractores, además de implementos agrícolas.",
            "Buena resistencia a los daños provocados por piedras, raíces y protuberancias.",
            "Resistente a picoteos."
        ],
        recommendedApplication: ["Fuera de carretera"],
        optionalApplication: [], // Lo dejamos vacío para que el grid no deje agujeros
        indicatedUse: ["Eje libre", "Diagonal"],
        attributes: ["V® Super Hybrid"],
        vehicles: ["Tractor agrícola"],
        isVipal: true // ¡El toque dorado activado!
    },


    {
        id: "vt51",
        name: "VT51",
        model: "VT51",
        depth: "12,5mm", // Ajustá si tenés la profundidad real de retacado
        image: "/retacado/VT51.png", // Cambiá por la ruta real de la imagen
        category: "agricola",
        technology: "Todoterreno / Regional",
        usage: "Eje de tracción",
        description: [
            "Excelente poder de tracción.",
            "Buena adherencia en diferentes tipos de piso.",
            "Baja generación de calor, reduciendo la fatiga de la carcasa.",
            "Indicada para vehículos que circulan en carreteras pavimentadas y no pavimentadas."
        ],
        recommendedApplication: ["Todoterreno", "Regional"],
        optionalApplication: ["Urbano"],
        indicatedUse: ["Eje de tracción", "Radial", "Índice de velocidad J"],
        attributes: ["Lama y nieve"],
        isVipal: true // Agregado para que muestre el logo dorado
    },



    {
        id: "rhw",
        name: "RHW",
        model: "RHW",
        depth: "11 / 11,5 / 12mm", // El grid se adaptará automáticamente
        image: "/precurado/RHW.png",
        category: "medianos",
        technology: "Regional / Urbano",
        usage: "Eje libre",
        description: null, // Si luego querés sumarle beneficios, podés usar un array aquí
        recommendedApplication: ["Regional", "Urbano"],
        optionalApplication: ["Carretera"],
        indicatedUse: ["Eje libre", "Diagonal", "Índice de velocidad J"],
        attributes: [], // Si no hay atributos específicos, enviamos array vacío para que no ocupe espacio
    }
]

export function getRetacadoProductById(id: string): RetacadoProduct | undefined {
    return retacadoCatalog.find(product => product.id === id)
}