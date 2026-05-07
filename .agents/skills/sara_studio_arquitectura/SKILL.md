---
name: sara-studio-arquitectura
description: Explica el stack técnico, la estructura de archivos y los patrones de implementación para Sara Studio. Usar al agregar características o revisar la arquitectura.
---

# Arquitectura Técnica — Sara Studio

Instrucciones técnicas detalladas para el agente.

## Cuándo usar esta skill
- Usa esta skill al estructurar archivos, escribir lógica en JavaScript o configurar Vite.
- Es útil para comprender el modelo de datos y los presupuestos de rendimiento.

## Cómo usarla

### Stack Tecnológico
- Frontend: HTML5, CSS3, Vanilla JS (ES6+).
- Bundler: Vite.
- Hosting: Vercel (plan gratuito).
- Datos: JSON Estático (`src/data/products.json`).

### Formato de Datos (`products.json`)
```json
{
  "config": {
    "whatsappNumber": "528116352178",
    "currency": "MXN",
    "brandName": "Sara Studio"
  },
  "products": [
    {
      "id": "slug-unico",
      "brand": "Marca",
      "name": "Nombre del Producto",
      "category": "bolsas",
      "marketPrices": {
        "Liverpool": 4290,
        "Palacio de Hierro": 4500
      },
      "salePrice": 1800,
      "images": ["imagenes/foto.jpg"],
      "dateAdded": "2026-05-06",
      "available": true
    }
  ]
}
```

### Integración con WhatsApp
Genera enlaces usando: `https://wa.me/528116352178?text=...` con el mensaje del producto prellenado.

### Rendimiento y SEO
- Objetivo: FCP < 1.5s, LCP < 2.5s.
- Mantener el peso total de la página en < 2MB.
- Optimizar imágenes a < 300KB (usar formato WebP).
- Incluir siempre etiquetas Open Graph para las vistas previas de enlaces en WhatsApp.
