
# 🌟 WEB GDG ARANJUEZ

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.8.1-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.27.0-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?logo=prettier)](https://prettier.io/)

---

## 🌐 Demo en vivo

Puedes visitar la versión actual desplegada del proyecto en:

➡️ [devfest-gdg-aranjuez.netlify.app/](https://devfest-gdg-aranjuez.netlify.app/)

## 📖 Contexto

GDG Aranjuez es una comunidad tecnológica asentada en Aranjuez, una localidad histórica en el sur de la Comunidad de Madrid.  
El año pasado se realizó el primer evento grande, el [DevFest 2024](https://devfest-2024-aranjuez.vercel.app/), y este año vuelve para realizar un nuevo evento el 4 de Octubre.

---

## 🎯 OBJETIVO

Desarrollar una web base para GDG Aranjuez que incluya:

- Componentes típicos de una página de eventos tecnológicos
- Sistema reutilizable para futuros eventos
- Diseño responsive y accesible

---

## 🛠 TECH STACK

| Área           | Tecnologías                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework      | ![Astro](https://img.shields.io/badge/Astro-5.8.1-FF5D01?logo=astro)                                                                                     |
| Estilos        | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.8-06B6D4?logo=tailwindcss)                                                                     |
| Tipado         | ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)                                                                      |
| Calidad código | ![ESLint](https://img.shields.io/badge/ESLint-9.27.0-4B32C3?logo=eslint) + ![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?logo=prettier) |

---

## 📂 ESTRUCTURA DEL PROYECTO

```
GDGAranjuez/
├─ public/               # Archivos públicos y estáticos accesibles por ruta directa
│  ├─ icons/             # Iconos del sitio
│  ├─ img/               # Imágenes generales
│  ├─ organizadores/     # Fotos de organizadores
│  ├─ patrocinadores/    # Logos de patrocinadores
│  ├─ ponentes/          # Fotos de ponentes
│  ├─ gdg-favicon.jpg    # Favicon personalizado
│  └─ themeToggle.js     # Script para modo claro/oscuro
│
├─ src/
│  ├─ components/        # Componentes Astro reutilizables y secciones de página
│  │  └─ *.astro         # Agenda, Charlas, Navbar, Footer, etc.
│  │
│  ├─ content/           # Contenido dinámico (entradas del blog en Markdown)
│  │  ├─ posts/          # Artículos individuales
│  │  └─ config.ts       # Configuración del blog
│  │
│  ├─ layouts/           # Plantillas de layout generales
│  │  └─ Layout.astro
│  │
│  ├─ pages/             # Rutas de la web
│  │  ├─ blog/           # Entradas individuales dinámicas ([...slug].astro)
│  │  ├─ blog.astro      # Índice del blog
│  │  └─ index.astro     # Página principal del sitio
│  │
│  ├─ styles/            # Estilos globales y base (usando Tailwind)
│  │  └─ global.css
│  │
│  ├─ types/             # Tipados personalizados para contenido
│  │  └─ posts.d.ts
│  │
│  └─ env.d.ts           # Tipado para variables de entorno
│
├─ astro.config.mjs      # Configuración principal de Astro
├─ tailwind.config.js    # Configuración de Tailwind CSS
├─ tsconfig.json         # Configuración de TypeScript y paths personalizados
├─ eslint.config.js      # Configuración de ESLint
├─ .prettierrc           # Configuración de Prettier
├─ package.json          # Definición de dependencias y scripts del proyecto
├─ package-lock.json     # Bloqueo de versiones exactas de dependencias
├─ LICENSE               # Este proyecto cuenta con licencia conforme a los términos de la licencia MIT
└─ README.md             # Documentación principal del proyecto
```

---

## ✅ Estado Actual - Implementación

| Requisito                                | Estado             | Comentarios                                                                                                                                         |
| ---------------------------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Uso de Astro                             | ✅ Completado      | Proyecto creado y desplegado con Astro.                                                                                                             |
| Componentes reutilizables (claro/oscuro) | ✅ Completado      | Componentes con soporte para temas claro y oscuro.                                                                                                  |
| Subdominios para ediciones               | ❎ Parcial         | Actualmente se enlaza el DevFest 2024 desde la web principal. La gestión dinámica de subdominios y ediciones futuras está pendiente de realización. |
| Sección organizadores                    | ✅ Completado      | Muestra foto, nombre, cargo y redes sociales opcionales.                                                                                            |
| Blog (posts)                             | ✅ Completado      | Sección funcional con posts en Markdown.                                                                                                            |
| Sección patrocinadores                   | ✅ Completado      | Logos visibles y bien integrados.                                                                                                                   |
| Modo oscuro / claro                      | ✅ Completado      | Toggle implementado con `themeToggle.js`.                                                                                                           |
| Web evento DevFest                       | ✅ Completado      | Sección dedicada con agenda, charlas y ponentes.                                                                                                    |
| Sección agenda                           | ✅ Completado      | Agenda detallada visible.                                                                                                                           |
| Sección charlas                          | ✅ Completado      | Incluye título, descripción, ponente y foto.                                                                                                        |
| Sección ponentes                         | ✅ Completado      | Datos completos con enlaces sociales.                                                                                                               |
| Gestión CMS organizadores                | ❌ No implementado | Pendiente para futuras versiones.                                                                                                                   |
| Sección colaboradores y CMS              | ❌ No implementado | Pendiente y recomendada para ampliación del proyecto.                                                                                               |

---

## 🚀 Qué nos hubiera gustado implementar / mejorar

- **Gestión dinámica vía CMS:** Integrar un CMS headless para administrar organizadores, colaboradores y patrocinadores de forma dinámica sin tocar código.
- **Sección colaborativa:** Implementar sección de colaboradores con gestión desde CMS.
- **Mejoras en SEO:** Ajustes para optimizar posicionamiento.

---

## 🚀 GUÍA DE INICIO RÁPIDO

### 📋 Requisitos previos

- [Node.js](https://nodejs.org/) Recomendado tener Node.js v22+ instalado, que incluye npm.
- [Git](https://git-scm.com/) instalado.
- Editor de código (recomendado [VS Code](https://code.visualstudio.com/) con extensión [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode))

### ⚡ Pasos para ejecutar localmente:

```
git clone https://github.com/AdoptaUnJuniorPlatform/GDGAranjuez.git
cd GDGAranjuez
npm install
npm run dev
```

Abre en tu navegador:

```
http://localhost:4321
```

### 🔧 Comandos útiles

| Comando           | Acción                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Inicia servidor de desarrollo      |
| `npm run build`   | Genera versión para producción     |
| `npm run preview` | Previsualiza la build localmente   |
| `npm run format`  | Formatea el código automáticamente |

---

## 👥 EQUIPO DESARROLLADOR

| [<img src="https://github.com/RaulGamBalonga.png" width=70><br>Raúl Gambalonga](https://github.com/RaulGamBalonga) | [<img src="https://github.com/AngieMiv.png" width=70><br>Angie Ibarrola](https://github.com/AngieMiv) | [<img src="https://github.com/Aredhel269.png" width=70><br>Glòria Monzó](https://github.com/Aredhel269) | [<img src="https://github.com/belensuarez477.png" width=70><br>Belén Suarez](https://github.com/belensuarez477) |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |

---

## 🤝 AGRADECIMIENTOS

Queremos agradecer a [GDG Aranjuez]() y all equipo de [Adopta un Junior](https://adoptaunjunior.es) por darnos esta oportunidad y acompañarnos durante todo este camino.

---

## 📝 LICENCIA

Este proyecto está bajo la licencia [MIT](LICENSE).
