# Documentación Funcional - Plataforma Funes Neumáticos

## 1. Objetivo del Proyecto
El objetivo principal de esta plataforma web es posicionar a **Funes Neumáticos** como referente en ingeniería de transporte y reconstrucción de neumáticos en la región. 

La página actúa como una herramienta de venta y asesoramiento técnico las 24 horas, diseñada para:
*   **Centralizar el Catálogo**: Mostrar claramente la división entre servicios para transporte (Precurado, Alineación) y soluciones agrícolas (Retacado, Reparación).
*   **Generar Confianza**: Destacar la certificación **ISO 9001** y la alianza estratégica como Licenciatario Oficial **VIPAL**.
*   **Captar Clientes (Leads)**: Facilitar el contacto inmediato a través de múltiples canales digitales (WhatsApp, Formulario, Teléfono) para dueños de flotas y empresas.

---

## 2. Flujo del Usuario (User Journey)

El diseño guía al visitante a través de un "embudo" de conversión lógico:

1.  **Atracción (Home)**: El usuario llega a la página de inicio. Un **Hero Section** impactante con imágenes industriales y propuesta de valor clara ("Ingeniería en Transporte") captura su atención en segundos.
2.  **Segmentación (Exploración)**:
    *   Si busca neumáticos: Navega al menú "Productos" -> "Cubiertas Nuevas" o "Precurado".
    *   Si tiene un problema mecánico: Navega a "Servicios" -> "Alineado y Balanceado" o "Tren Delantero".
3.  **Educación (Páginas de Detalle)**: En la página del servicio elegido, el usuario lee sobre procesos técnicos, beneficios tangibles (ahorro de combustible, durabilidad) y ve imágenes reales del taller/planta.
4.  **Validación**: Observa elementos de autoridad como logos de clientes, menciones a normas ISO y el respaldo de VIPAL.
5.  **Acción (Conversión)**: El usuario decide contactar. Hace clic en:
    *   Botón flotante de WhatsApp.
    *   Botón "Solicitar Cotización" en el detalle del servicio.
    *   Sección de Contacto para ver el mapa o llenar el formulario formal.

---

## 3. Funcionalidades Clave

### A. Navegación y Estructura
*   **Header Inteligente**: Barra de navegación superior que permanece visible (sticky) o cambia de estilo al hacer scroll, facilitando el acceso al menú en todo momento.
*   **Mega Menú de Servicios**: Desplegables organizados que categorizan la oferta en "Productos" (Bienes tangibles/reconstrucción) y "Servicios" (Mecánica/Diagnóstico).

### B. Interacción y Conversión
*   **Integración WhatsApp API**: Botones de llamada a la acción (CTA) programados con enlaces `wa.me` que abren directamente la aplicación de WhatsApp con mensajes pre-redactados (ej: *"Hola, quiero pedir un turno..."*).
*   **Formularios de Contacto Dinámicos**: Formularios con campos específicos para empresas (Razón Social, Flota) que validan la información antes de enviar.
*   **Botones de Llamada Directa**: En versión móvil, los números de teléfono son "tocables" (tap-to-call) para iniciar una llamada de voz inmediata.

### C. Presentación Visual
*   **Grillas Interactivas**: Tarjetas de servicios que reaccionan al pasar el mouse (hover effects), revelando opciones como "VER CATÁLOGO" o cambiando de color para invitar al clic.
*   **Hero Sections Inmersivos**: Encabezados de página con imágenes de alta calidad y superposiciones de degradado (gradientes) que garantizan la legibilidad del texto sobre fotos complejas de taller.
*   **Feedback Visual**: Micro-animaciones en botones y enlaces para confirmar la interacción del usuario.

### D. Información Geográfica
*   **Google Maps Embed**: Mapa interactivo incrustado en la sección de contacto y pie de página para facilitar la navegación GPS hacia la planta industrial.

---

## 4. Integraciones y Tecnologías

La plataforma está construida sobre un stack tecnológico moderno enfocado en **rendimiento (velocidad)** y **SEO (posicionamiento)**:

*   **Next.js (React Framework)**: Tecnología base que permite una carga de página casi instantánea y una navegación fluida entre secciones sin recargar el sitio completo.
*   **Tailwind CSS**: Framework de diseño que asegura una estética consistente, profesional y totalmente **Responsiva** (se adapta perfectamente a Celulares, Tablets y Computadoras de escritorio).
*   **Lucide React Icons**: Biblioteca de iconos vectoriales ligeros y nítidos para representar conceptos técnicos (camiones, herramientas, certificaciones).
*   **Vercel / Node.js**: Infraestructura de servidor optimizada para aplicaciones web modernas.
*   **WhatsApp Business**: Integración mediante enlaces profundos (Deep Links) para gestión de clientes.
