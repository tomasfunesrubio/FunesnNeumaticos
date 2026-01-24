export interface VulcanizadoProduct {
    id: string
    name: string
    category: "pesados" | "livianos" | "agricola"
    image: string
    processTime: string
    guarantee: string
    temperature: string
    description: string
}

export const vulcanizadoCatalog: VulcanizadoProduct[] = [
    {
        id: "v-p1",
        name: "Reparación Seccional",
        category: "pesados",
        image: "/rueda-camion.png",
        processTime: "24 - 48 hs",
        guarantee: "Garantía Total de por vida",
        temperature: "145°C",
        description: "Reparación de cortes profundos y daños mayores en la estructura del neumático pesado. Mediante la aplicación de calor y presión controlada, devolvemos la integridad estructural para que la unidad regrese al servicio con total seguridad."
    },
    {
        id: "v-l1",
        name: "Vulcanizado de Flanco",
        category: "livianos",
        image: "/rueda-camion.png",
        processTime: "12 - 24 hs",
        guarantee: "Garantía por escrito",
        temperature: "135°C",
        description: "Especialmente diseñado para reparar daños en el lateral de neumáticos de autos y camionetas. Este proceso evita el desecho prematuro de la unidad, recuperando su flexibilidad y resistencia original."
    },
    {
        id: "v-a1",
        name: "Refuerzo de Hombro",
        category: "agricola",
        image: "/rueda-camion.png",
        processTime: "48 - 72 hs",
        guarantee: "Garantía según aplicación",
        temperature: "140°C",
        description: "Refuerzo estructural en el área del hombro para maquinaria agrícola sometida a altas torsiones. Ideal para cubiertas que presentan desgarros por rastrojos o piedras en el campo."
    },
    {
        id: "v-g1",
        name: "Parche en Frío con Refuerzo",
        category: "pesados",
        image: "/rueda-camion.png",
        processTime: "1 - 2 hs",
        guarantee: "Garantía de sellado",
        temperature: "Ambiente",
        description: "Reparación técnica de pinchaduras mediante parches de alta gama con refuerzo textil. Un proceso rápido y extremadamente confiable para mantener la operatividad de la flota."
    }
]

export function getVulcanizadoProductById(id: string): VulcanizadoProduct | undefined {
    return vulcanizadoCatalog.find(product => product.id === id)
}

export function getVulcanizadoProductsByCategory(category: "pesados" | "livianos" | "agricola"): VulcanizadoProduct[] {
    return vulcanizadoCatalog.filter(product => product.category === category)
}
