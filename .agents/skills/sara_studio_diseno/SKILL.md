---
name: sara-studio-diseno
description: Proporciona los estándares del sistema de diseño, colores, tipografía y espaciado para el proyecto Sara Studio. Usar al modificar la UI o el CSS.
---

# Estándares de Diseño — Sara Studio

Instrucciones detalladas de diseño para el agente.

## Cuándo usar esta skill
- Usa esta skill cuando construyas nuevos componentes de interfaz de usuario (UI) o modifiques el CSS.
- Es útil para mantener la consistencia del tema "Luxury Dark" (Lujo Oscuro).

## Cómo usarla

### Paleta "Luxury Dark"
- Fondos: `--bg-primary: #0A0A0A`, `--bg-surface: #141414`.
- Acentos: Dorado (`--gold: #C9A84C`), Rosa (`--rose: #D4A0A0`).
- Texto: `--text-primary: #F5F5F5`.
- Precios: Original (`--price-original: #E74C3C`), Venta (`--price-sale: #27AE60`).

### Tipografía
- Títulos: `Playfair Display, Georgia, serif`.
- Cuerpo: `Inter, -apple-system, sans-serif`.

### Componentes
- Las tarjetas de producto (Product Cards) deben tener una relación de aspecto de imagen de 4:5.
- La visualización del precio DEBE seguir exactamente este patrón:
  `Precio en [Tienda]: ~~$X,XXX~~`
  `Tu precio: $X,XXX`
  `Ahorras: $X,XXX (XX%)`
