// Centralized catalog data for Precurado products
export interface PrecuradoProduct {
    id: string
    name: string
    model: string
    depth: string
    image: string
    category: "pesados" | "medianos"
    technology: string
    usage: string
    description: string
}

export const precuradoCatalog: PrecuradoProduct[] = [
    // PESADOS (Heavy Trucks)
    {
        id: "p1",
        name: "Tracción Profunda",
        model: "TR-900",
        depth: "22mm",
        image: "/rueda-camion.png",
        category: "pesados",
        technology: "Precurado de Alta Resistencia",
        usage: "Larga distancia, tracción en rutas exigentes",
        description: "Diseño optimizado para máxima tracción en condiciones de carga pesada. Ideal para flotas de larga distancia que requieren rendimiento superior en terrenos variados."
    },
    {
        id: "p2",
        name: "Eje Libre Lineal",
        model: "EL-500",
        depth: "14mm",
        image: "/rueda-camion.png",
        category: "pesados",
        technology: "Precurado Lineal",
        usage: "Ejes libres, servicio regional",
        description: "Banda de rodamiento lineal diseñada específicamente para ejes libres. Ofrece desgaste uniforme y excelente kilometraje en aplicaciones regionales."
    },
    {
        id: "p3",
        name: "Servicio Mixto",
        model: "MX-Heavy",
        depth: "20mm",
        image: "/rueda-camion.png",
        category: "pesados",
        technology: "Precurado Multifuncional",
        usage: "Aplicaciones mixtas on/off road",
        description: "Versatilidad excepcional para flotas que operan tanto en carretera como fuera de ella. Equilibrio perfecto entre tracción y durabilidad."
    },
    {
        id: "p4",
        name: "Super Single",
        model: "SS-Wide",
        depth: "18mm",
        image: "/rueda-camion.png",
        category: "pesados",
        technology: "Precurado Ancho Especial",
        usage: "Configuración super single",
        description: "Diseño de banda ancha para configuraciones super single. Reduce peso y mejora la eficiencia de combustible sin comprometer la capacidad de carga."
    },
    // MEDIANOS (Medium Trucks)
    {
        id: "m1",
        name: "Reparto Urbano",
        model: "URB-City",
        depth: "16mm",
        image: "/rueda-camion.png",
        category: "medianos",
        technology: "Precurado Urbano",
        usage: "Distribución en ciudad, múltiples paradas",
        description: "Optimizado para el exigente entorno urbano con múltiples arranques y frenadas. Excelente resistencia al desgaste irregular."
    },
    {
        id: "m2",
        name: "Regional Tracción",
        model: "RT-Medium",
        depth: "18mm",
        image: "/rueda-camion.png",
        category: "medianos",
        technology: "Precurado Regional",
        usage: "Rutas regionales, tracción",
        description: "Diseño agresivo para tracción en rutas regionales. Ideal para camiones medianos que operan en circuitos de distribución regional."
    },
    {
        id: "m3",
        name: "Direccional",
        model: "DR-Bus",
        depth: "15mm",
        image: "/rueda-camion.png",
        category: "medianos",
        technology: "Precurado Direccional",
        usage: "Eje direccional, buses y medianos",
        description: "Banda direccional con excelente estabilidad y respuesta. Perfecta para ejes delanteros de buses y camiones medianos."
    },
]

// Helper function to get product by ID
export function getProductById(id: string): PrecuradoProduct | undefined {
    return precuradoCatalog.find(product => product.id === id)
}

// Helper function to get products by category
export function getProductsByCategory(category: "pesados" | "medianos"): PrecuradoProduct[] {
    return precuradoCatalog.filter(product => product.category === category)
}
