<h4 align="center">
:construction: Proyecto en construcción :construction:
</h4>

# 🌟 WEB GDG ARANJUEZ 

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.0-blue.svg)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-blueviolet.svg)](https://tailwindcss.com)

## 🎯 OBJETIVOS

Desarrollar una web base para GDG Aranjuez que incluya:
- Componentes típicos de una página de eventos tecnológicos
- Sistema reutilizable para futuros eventos
- Diseño responsive y accesible

## ✨ CARACTERÍSTICAS PRINCIPALES

- 🌗 Modo claro/oscuro automático
- 📱 Diseño completamente responsive
- ⚡ Rendimiento optimizado (100% Lighthouse)
- ✍️ Sistema de blog integrado
- 🎨 Personalización mediante Tailwind CSS

## 🛠 TECH STACK  

| Área           | Tecnologías                                                                 |
|----------------|-----------------------------------------------------------------------------|
| Framework      | ![Astro](https://img.shields.io/badge/Astro-5.8.1-FF5D01?logo=astro)       |
| Estilos        | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss) |
| Tipado         | ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript) |
| Calidad código | ![ESLint](https://img.shields.io/badge/ESLint-9.0-4B32C3?logo=eslint) + ![Prettier](https://img.shields.io/badge/Prettier-3.0-F7B93E?logo=prettier) |


## 📌 REQUISITOS IMPLEMENTADOS

### 🏠 Web Base
- [x] Sistema de componentes reutilizables
- [x] Sección de organizadores
- [x] Blog con posts en Markdown
- [x] Soporte para subdominios

### 🎪 DevFest 2024
- [x] Agenda del evento
- [x] Listado de charlas
- [x] Perfiles de ponentes
- [x] Sección de patrocinadores


## 🚀 GUÍA DE INICIO RÁPIDO

### 📋 Requisitos previos
- [Node.js](https://nodejs.org/) v22 o superior
- [Git](https://git-scm.com/) instalado
- Editor de código (recomendado [VS Code](https://code.visualstudio.com/) con extensión [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode))

### ⚡ Sigue estos pasos:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/AdoptaUnJuniorPlatform/GDGAranjuez.git
   cd GDGAranjuez
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador**:
   ```
   http://localhost:4321
   ```

### 🔧 Comandos útiles

| Comando          | Acción                                |
|------------------|---------------------------------------|
| `npm run dev`    | Inicia servidor de desarrollo         |
| `npm run build`  | Genera versión para producción        |
| `npm run preview`| Previsualiza la build localmente      |
| `npm run format` | Formatea el código automáticamente    |

### 📌 Notas importantes
- El proyecto usa **Tailwind CSS** para estilos (no edites archivos CSS manualmente)
- Los cambios en archivos `.astro` se reflejan al instante en desarrollo


## 📂 ESTRUCTURA DEL PROYECTO

```
GDGAranjuez/
├─ public/               # Assets estáticos (img, iconos, fuentes)
│  ├─ img/               # Imágenes globales (logo, fondo...)
│  ├─ organizadores/     # Fotos de los organizadores
│  └─ ponentes/          # Fotos de los ponentes
│
├─ src/
│  ├─ components/        # Componentes Astro reutilizables
│  │  ├─ Card.astro      # Componente genérico (modo claro/oscuro)
│  │  ├─ Navbar.astro    # Barra de navegación
│  │  └─ ...             # (Componentes específicos: agenda, charlas, etc.)
│  │
│  ├─ content/           # Contenido dinámico (entradas de blog)
│  ├─ layouts/           # Plantillas globales
│  ├─ pages/             # Páginas de la web
│  │  ├─ blog/           # Rutas del blog
│  │  └─ index.astro     # Página de inicio
│  │
│  └─ styles/            # Estilos globales (Tailwind/PostCSS)
│
├─ astro.config.mjs      # Configuración de Astro
├─ tailwind.config.js    # Configuración de Tailwind
└─ tsconfig.json         # Tipado de TypeScript                
```


## 👥 EQUIPO DESARROLLADOR

| [<img src="https://github.com/RaulGamBalonga.png" width=70><br>Raúl Gambalonga](https://github.com/RaulGamBalonga) | [<img src="https://github.com/AngieMiv.png" width=70><br>Angie Ibarrola](https://github.com/AngieMiv) | [<img src="https://github.com/Aredhel269.png" width=70><br>Glòria Monzó](https://github.com/Aredhel269) | [<img src="https://github.com/belensuarez477.png" width=70><br>Belén Suarez](https://github.com/belensuarez477) |
|-------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|


## 🤝 AGRADECIMIENTOS

Queremos agradecer al equipo de [Adopta un Junior](https://adoptaunjunior.es) por darnos esta oportunidad y acompañarnos durante todo este camino.


## 📝 LICENCIA

Este proyecto está bajo la licencia [MIT](LICENSE).
