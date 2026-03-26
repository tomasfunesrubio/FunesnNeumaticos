import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://funesneumaticos.com'

    return [
        // ── Página principal ──
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // ── Reconstrucción de Neumáticos (prioridad alta) ──
        {
            url: `${baseUrl}/precurado`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/retacado`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/vulcanizado`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/recauchutaje`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/refuerzo-interno`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },

        // ── Servicios / Taller (prioridad alta) ──
        {
            url: `${baseUrl}/cubiertas-nuevas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/alineado-balanceado`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tren-delantero`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/productos`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },

        // ── Páginas institucionales (prioridad media) ──
        {
            url: `${baseUrl}/nosotros`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5,
        },

        // ── Productos individuales (agregar dinámicamente si es necesario) ──
        // Ejemplo para rutas dinámicas con [id]:
        // {
        //   url: `${baseUrl}/precurado/${productId}`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.6,
        // },
    ]
}
