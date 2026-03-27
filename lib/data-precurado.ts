// Centralized catalog data for Precurado products
export interface PrecuradoProduct {
    id: string
    name: string
    model: string
    depth: string
    image: string
    category: "pesados" | "medianos"
    // Legacy fields (kept for backward compatibility with other product pages)
    technology: string
    usage: string
    description: string
    // Structured spec fields (used by PrecuredTechSpecs component)
    recommendedApplication?: string | string[]       // e.g. "Carretera" or ["Regional", "Urbano"]
    optionalApplication?: string | string[]          // e.g. "Regional"
    indicatedUse?: string[]               // e.g. ["Eje de tracción", "Radial", "Índice de velocidad L"]
    attributes?: string[]                 // e.g. ["Lama y nieve", "Dirección de rotación"]
    vehicles?: string[]                   // e.g. ["Camión rígido con chasis y volquete", "Tractora"]
}

export const precuradoCatalog: PrecuradoProduct[] = [
    // PESADOS (Heavy Trucks)
    {
        id: "p6",
        name: "VDE2",
        model: "VDE2",
        depth: "18 / 19mm",
        image: "/precurado/VDE2.jpeg",
        category: "pesados",
        technology: "Carretera",
        usage: "Eje de tracción",
        description: [" Excelente poder de tracción",

            "Tiene sentido de rodamiento",
            "Excelente resistencia al desgaste por abrasión",
            "Indicada para transporte carretero de carga."],
        recommendedApplication: ["Carretera"],
        optionalApplication: ["Regional"],
        indicatedUse: ["Eje de tracción", "Radial", "Índice de velocidad L"],
        attributes: [
            "3PMSF",
            "Lama y nieve",
            "Dirección de rotación",
            "Disponible en versión Eco"
        ],
        vehicles: [
            "Camión rígido con chasis y volquete",
            "Tractora"
        ],
        isVipal: true
    },
    {
        id: "p7",
        name: "DV-RL",
        model: "DV-RL",
        depth: "12 / 15mm",
        image: "/precurado/DVRL.jpeg",
        category: "pesados",
        technology: "Carretera",
        usage: "Eje libre",
        description: [
            "Hombros proyectados para reducir los efectos del arrastre lateral.",
            "Excelente resistencia al desgaste por abrasión.",
            "Tiene surcos con expulsores que evitan la retención de piedras y otros objetos.",
            "Indicada para transporte carretero de carga."
        ],
        recommendedApplication: ["Carretera"],
        optionalApplication: ["Regional"],
        indicatedUse: ["Eje libre", "Radial", "Índice de velocidad L"],
        attributes: ["Desarrollo Vipal", "Banda con alas", "Raspado"],
        vehicles: ["Remolque y semirremolque"],
        isVipal: true
    },

    {
        id: "p8",
        name: "VL110L",
        model: "VL110L",
        depth: "12mm",
        image: "/precurado/VL110.jpeg",
        category: "pesados",
        technology: "Carretera",
        usage: "Eje libre",
        description: [
            "Hombros proyectados para reducir los efectos del arrastre lateral.",
            "Excelente resistencia al desgaste por abrasión.",
            "Escultura de los surcos proyectada para minimizar la retención de piedras y otros objetos.",
            "Baja generación de calor, reduciendo la fatiga de la carcasa.",
            "Indicada para transporte carretero de carga."
        ],
        recommendedApplication: ["Carretera"],
        optionalApplication: ["Regional"],
        indicatedUse: ["Eje libre", "Radial", "Índice de velocidad L"],
        attributes: ["Desarrollo Vipal", "Slim"],
        vehicles: ["Remolque y semirremolque"],
        isVipal: true
    },

    {
        id: "p9",
        name: "VM530L",
        model: "VM530L",
        depth: "14mm",
        image: "/precurado/VM530.png",
        category: "pesados",
        technology: "Todoterreno",
        usage: "Eje de tracción y libre",
        description: [
            "Indicada para ejes de tracción moderada y opcional para ejes libres.",
            "Más resistencia a daños provocados por objetos puntiagudos.",
            "Indicada para vehículos que circulan en carreteras pavimentadas y no pavimentadas."
        ],
        recommendedApplication: ["Todoterreno", "Regional"],
        optionalApplication: ["Fuera de carretera"],
        indicatedUse: ["Eje de tracción y libre", "Radial", "Índice de velocidad J"],
        attributes: ["V® Super Hybrid", "Slim"],
        vehicles: ["Camión volcador", "Camión rígido con chasis y volquete"],
        isVipal: true
    },
    {
        id: "velb",
        name: "VELB",
        model: "VELB",
        depth: "11mm", // Si no hay profundidad específica, el componente se reajusta
        image: "/precurado/VELB.png",
        category: "pesados",
        technology: "Carretera",
        usage: "Eje libre",
        description: [
            "Hombros proyectados para reducir los efectos del arrastre lateral.",
            "Excelente resistencia al desgaste por abrasión.",
            "Tiene surcos con expulsores que evitan la retención de piedras y otros objetos.",
            "Indicada para transporte carretero de carga y pasajeros."
        ],
        recommendedApplication: ["Carretera"],
        optionalApplication: ["Regional"],
        indicatedUse: ["Eje libre", "Radial", "Índice de velocidad L"],
        attributes: [],
        vehicles: [
            "Remolque y semirremolque",
            "Autobús carretera",
            "Camión rígido con chasis y volquete"
        ],
        isVipal: true
    },


    {
        id: "p1",
        name: "PBD20",
        model: "PBD20",
        depth: "17mm",
        image: "/precurado/PBD20.png",
        category: "pesados",
        technology: "Lama y Nieve – Dirección de Rotación",
        usage: "Camión rígido con chasis, volquete y tractora",
        description: "",
        // Structured specs
        recommendedApplication: "Carretera",
        optionalApplication: "Regional",
        indicatedUse: ["Eje de tracción", "Radial", "Índice de velocidad L"],
        attributes: ["Lama y nieve", "Dirección de rotación"],
        vehicles: ["Camión rígido con chasis y volquete", "Tractora"],
    },
    {
        id: "p2",
        name: "PBA64S",
        model: "PBA64S",
        depth: "14mm",
        image: "/precurado/PBA64S.png",
        category: "pesados",
        technology: "Todoterreno",
        usage: "Eje de tracción y libre",
        description: "",
        // Structured specs
        recommendedApplication: "Todoterreno",
        optionalApplication: "Regional",
        indicatedUse: ["Eje de tracción y libre", "Radial", "Índice de velocidad J"],
        vehicles: ["Camión rígido con chasis y volquete", "Camión con remolque / camión aislado", "Vehículo liviano"],
    },
    {
        id: "p3",
        name: "PBT19S",
        model: "PBT19S",
        depth: "12mm",
        image: "/precurado/PBT19S.png",
        category: "pesados",
        technology: "Carretera",
        usage: "Eje libre",
        description: "",
        // Structured specs
        recommendedApplication: "Carretera",
        indicatedUse: ["Eje libre", "Radial", "Índice de velocidad L"],
        vehicles: ["Remolque y semirremolque"],
    },

    {
        id: "p4",
        name: "PBT11",
        model: "PBT11",
        depth: "13 / 13,5 / 14mm",
        image: "/precurado/PBT11.png",
        category: "pesados",
        technology: "Ver especificaciones",
        usage: "Ver especificaciones",
        description: "",
        recommendedApplication: ["Regional", "Urbano"],
        optionalApplication: ["Carretera"],
        indicatedUse: ["Eje libre", "Diagonal", "Índice de velocidad J"],
        vehicles: ["Remolque y semirremolque", "Autobús carretera", "Camión rígido con chasis y volquete"],
    },
    {
        id: "p5",
        name: "RZT50L",
        model: "RZT50L",
        depth: "14mm",
        image: "/precurado/RZT50L.png",
        category: "pesados",
        technology: "Todoterreno / Regional",
        usage: "Eje de tracción",
        description: "",
        recommendedApplication: ["Todoterreno", "Regional"],
        optionalApplication: ["Fuera de carretera", "Industrial"],
        indicatedUse: ["Eje de tracción", "Diagonal", "Índice de velocidad J"],
        attributes: ["Slim"],
        vehicles: ["Camión rígido con chasis y volquete", "Camión con remolque / camión aislado"],
    },

    {
        id: "vfs",
        name: "VFS",
        model: "VFS",
        depth: "10,5mm", // Ahora el bloque de profundidad aparecerá primero
        image: "/precurado/VFS.png",
        category: "medianos",
        technology: "Regional / Urbano",
        usage: "Eje de tracción",
        description: [
            "Excelente poder de tracción.",
            "Indicada para vehículos comerciales ligeros.",
            "Indicada para transporte urbano de carga."
        ],
        recommendedApplication: ["Regional", "Urbano"],
        optionalApplication: ["Carretera"],
        indicatedUse: ["Eje de tracción", "Radial", "Índice de velocidad L"],
        attributes: [], // Enviamos vacío si no hay específicos, para que el grid se reacomode
        vehicles: [
            "Vehículo liviano",
            "Camioneta",
            "Van"
        ],
        isVipal: true
    },

    {
        id: "vm530l-mediano",
        name: "VM530L - Mediano",
        model: "VM530L",
        depth: "12mm",
        image: "/precurado/VM530.png",
        category: "medianos",
        technology: "Regional",
        usage: "Eje de tracción y libre",
        description: [
            "Indicada para ejes de tracción moderada y opcional para ejes libres.",
            "Más resistencia a daños provocados por objetos puntiagudos.",
            "Indicada para vehículos que circulan en carreteras pavimentadas y no pavimentadas."
        ],
        recommendedApplication: ["Todoterreno", "Regional"],
        optionalApplication: ["Fuera de carretera"],
        indicatedUse: ["Eje de tracción y libre", "Radial", "Índice de velocidad J"],
        attributes: ["V® Super Hybrid", "Slim"],
        vehicles: ["Vehículo liviano", "Van"],
        isVipal: true
    },
    {
        id: "vt51",
        name: "VT51",
        model: "VT51",
        depth: "12 / 12,5mm",
        image: "/precurado/VT51.jpeg",
        category: "medianos", // Se adapta a ambos, pero lo dejamos en medianos como pediste
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
        vehicles: [
            "Camión rígido con chasis y volquete",
            "Camión con remolque / camión aislado",
            "Vehículo liviano",
            "Van",
            "Camioneta"
        ],
        isVipal: true
    },

    {
        id: "m1",
        name: "RZT50L",
        model: "RZT50L",
        depth: "12,5mm",
        image: "/precurado/RZT50L.png",
        category: "medianos",
        technology: "Todoterreno / Regional",
        usage: "Eje de tracción",
        description: "",
        recommendedApplication: ["Todoterreno", "Regional"],
        optionalApplication: ["Fuera de carretera", "Industrial"],
        indicatedUse: ["Eje de tracción", "Diagonal", "Índice de velocidad J"],
        attributes: ["Slim"],
        vehicles: ["Van", "Camioneta", "Vehículo liviano"],
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
        vehicles: [
            "Autobús urbano",

            "Camioneta",
            "Van",
            "Vehículo liviano"
        ]
    }
]

// Helper function to get product by ID
export function getProductById(id: string): PrecuradoProduct | undefined {
    return precuradoCatalog.find(product => product.id === id)
}

// Helper function to get products by category
export function getProductsByCategory(category: "pesados" | "medianos"): PrecuradoProduct[] {
    return precuradoCatalog.filter(product => product.category === category)
}
