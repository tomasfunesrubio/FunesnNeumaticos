export interface RefuerzoProduct {
    id: string
    name: string
    model: string // Keeping model for consistency in display
    image: string
    category: "agricola"
    technology: string
    benefit: string
    description: string
}

export const refuerzoCatalog: RefuerzoProduct[] = [
    {
        id: "rf-a1",
        name: "Refuerzo de Talón",
        model: "RT-Bead",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Compuesto de Alta Adherencia",
        benefit: "Evita el deslizamiento en llanta",
        description: "Refuerzo específico para la zona del talón del neumático. Crucial para maquinaria de alta tracción donde el torque puede dañar el asiento del neumático en la llanta. Recupera la estanqueidad y seguridad operativa."
    },
    {
        id: "rf-a2",
        name: "Parche Estructural",
        model: "PE-Side",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Estructura Textil Multicapa",
        benefit: "Recuperación de cortes laterales",
        description: "Solución avanzada para daños en el flanco. Mediante la aplicación de una estructura multicapa interna, devolvemos la capacidad de carga original a la carcasa, permitiendo que siga trabajando bajo presión sin riesgo de estallido."
    },
    {
        id: "rf-a3",
        name: "Malla de Acero",
        model: "MA-Steel",
        image: "/rueda-camion.png",
        category: "agricola",
        technology: "Malla Metálica Flexible",
        benefit: "Resistencia extrema a rastrojos",
        description: "Inserción de malla de acero interna para proteger la cámara y la carcasa contra perforaciones por rastrojos duros (soja, maíz). Una barrera física impenetrable que extiende significativamente la vida útil en siembra directa."
    }
]

export function getRefuerzoProductById(id: string): RefuerzoProduct | undefined {
    return refuerzoCatalog.find(product => product.id === id)
}
