# Sara Studio — Catálogo Web Premium 🛍️

Catálogo boutique online para venta de bolsas y calzado de marcas premium.

---

## ⚠️ IMPORTANTE: No abrir el index.html directo

Este proyecto usa **Vite** como servidor. Si abres el `index.html` haciendo doble clic o con **Live Server de VS Code**, la página se verá vacía (sin productos).

> ❌ NO usar: Click derecho → "Open with Live Server"  
> ✅ SÍ usar: Terminal → `npm run dev`

---

## 🚀 Cómo correr el proyecto

### Primer uso (solo una vez)

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).

```bash
# 1. Ir a la carpeta del proyecto
cd ~/Desktop/proyectosnatan/appweb/gabysary

# 2. Instalar dependencias
npm install
```

### Cada vez que quieras ver la web

```bash
# Primero estar en la carpeta del proyecto
cd ~/Desktop/proyectosnatan/appweb/gabysary

# Luego levantar el servidor
npm run dev
```

Luego abre tu navegador en:

```
http://localhost:5173/
```

> Si el puerto 5173 ya está ocupado, Vite usará el siguiente disponible (5174, 5175...). Mira en la terminal cuál te asignó.

### Para detener el servidor

Presiona `Ctrl + C` en la terminal.

---

## 📁 Estructura del proyecto

```
gabysary/
├── index.html          # Página principal
├── main.js             # Lógica del catálogo
├── style.css           # Estilos
├── package.json        # Config del proyecto
├── public/
│   └── imagenes/       # Fotos de los productos
└── src/
    └── data/
        └── products.json   # Lista de productos y precios
```

---

## 📦 Agregar o editar productos

Edita el archivo `src/data/products.json`.

Cada producto tiene esta estructura:

```json
{
  "id": "nombre-unico",
  "brand": "Marca del producto",
  "name": "Nombre descriptivo",
  "category": "bolsas",
  "marketPrices": { "Liverpool": 5000 },
  "salePrice": 2500,
  "images": ["imagenes/mi_foto.jpg"],
  "dateAdded": "2026-05-09",
  "available": true
}
```

Las categorías disponibles son: `bolsas`, `calzado`.

---

## 🌐 Despliegue en Vercel

El proyecto ya está conectado a Vercel. Cada `git push` a `main` actualiza la web automáticamente.

```bash
git add .
git commit -m "feat: nuevo producto agregado"
git push
```

---

## 📞 Contacto

WhatsApp: **+52 81 1635 2178**
