# 🌟 WEB GDG ARANJUEZ [![GitHub Pages](https://img.shields.io/github/deployments/AdoptaUnJuniorPlatform/GDGAranjuez/github-pages?label=gh-pages&logo=github)](https://devfest2025.gdgaranjuez.com/) ![Deploy status](https://github.com/AdoptaUnJuniorPlatform/GDGAranjuez/actions/workflows/deploy.yml/badge.svg)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Astro](https://img.shields.io/badge/Astro-5.8.1-FF5D01?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.8-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-9.27.0-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?logo=prettier)](https://prettier.io/)

> Sitio web oficial del DevFest 2025 organizado por GDG Aranjuez 🚀

---

## 🚀 Despliegue automático

Este proyecto se despliega automáticamente a **GitHub Pages** cada vez que se hace push a la rama `main`.

- El workflow de GitHub Actions (`.github/workflows/deploy.yml`) construye el sitio con Astro y sube los archivos generados a GitHub Pages.
- No es necesario hacer el build manualmente: se ejecuta solo con cada cambio en `main`.

🔗 Versión en producción:  
👉 [https://devfest2025.gdgaranjuez.com/](https://devfest2025.gdgaranjuez.com/)

---

## 📖 Contexto

GDG Aranjuez es una comunidad tecnológica asentada en Aranjuez, una localidad histórica en el sur de la Comunidad de Madrid.  
El año pasado se realizó el primer evento grande, el [DevFest 2024](https://devfest-2024-aranjuez.vercel.app/), y este año vuelve para realizar un nuevo evento el 4 de Octubre.

---

## 🛠 Tech Stack

| Área           | Tecnologías                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework      | ![Astro](https://img.shields.io/badge/Astro-5.8.1-FF5D01?logo=astro)                                                                                     |
| Estilos        | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1.8-06B6D4?logo=tailwindcss)                                                                     |
| Tipado         | ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)                                                                      |
| Calidad código | ![ESLint](https://img.shields.io/badge/ESLint-9.27.0-4B32C3?logo=eslint) + ![Prettier](https://img.shields.io/badge/Prettier-3.5.3-F7B93E?logo=prettier) |

---

## 📂 Estructura del proyecto

```
GDGAranjuez/
├─ public/               # Archivos públicos y estáticos accesibles por ruta directa
│  ├─ colaboradores/     # Fotos de los colaboradores
│  ├─ desarrolladores/   # Iconos de los desarrolladores
│  ├─ icons/             # Iconos del sitio
│  ├─ img/               # Imágenes generales
│  ├─ organizadores/     # Fotos de los organizadores
│  ├─ patrocinadores/    # Logos de los patrocinadores
│  ├─ speakers/          # Fotos de los ponentes
│  ├─ gdg-favicon.jpg    # Favicon personalizado
│  └─ themeToggle.js     # Script para modo claro/oscuro
│
├─ src/
│  ├─ components/        # Componentes Astro reutilizables y secciones de página
│  │  └─ *.astro         # Agenda, Charlas, Navbar, Footer, etc.
│  │
│  ├─ content/           # Contenido dinámico (entradas del blog en Markdown)
│  │  ├─ _template/      # Artículos individuales
│  │  │  └─ _README.md   # Como crear un nuevo post
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
├─ .gitignore            # Archivo para que Git ignore ciertos archivos o directorios
├─ .prettierrc           # Configuración de Prettier
├─ astro.config.mjs      # Configuración principal de Astro
├─ eslint.config.js      # Configuración de ESLint
├─ LICENSE               # Este proyecto cuenta con licencia conforme a los términos de la licencia MIT
├─ package-lock.json     # Bloqueo de versiones exactas de dependencias
├─ package.json          # Definición de dependencias y scripts del proyecto
├─ tailwind.config.js    # Configuración de Tailwind CSS
├─  README.md             # Documentación principal del proyecto
└─ tsconfig.json         # Configuración de TypeScript y paths personalizados
```

---

## ✅ Estado actual del proyecto

| Elemento                               | Estado             | Comentarios                                                                                                                     |
| -------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Despliegue automático                  | ✅ Completado      | Se actualiza con cada cambio en `main`. Enlace: [devfest2025.gdgaranjuez.com](https://devfest2025.gdgaranjuez.com/)             |
| Componentes reutilizables y responsive | ✅ Completado      | Secciones como agenda, charlas, ponentes, organizadores y patrocinadores implementadas como componentes reutilizables.          |
| Modo claro / oscuro                    | ✅ Completado      | Toggle funcional con soporte visual completo.                                                                                   |
| Blog en Markdown                       | ✅ Completado      | Sección de artículos funcional con posts dinámicos.                                                                             |
| Subdominios y estructura por ediciones | ❎ Parcial         | La edición 2024 está enlazada desde el subdominio 2025. Falta implementar estructura base para futuras ediciones y dominio GDG. |
| Gestión vía CMS                        | ❌ No implementado | Pendiente para una posible versión ampliada del proyecto.                                                                       |

---

## 🚧 Próximas mejoras y tareas pendientes

- **Integración con CMS:** Evaluar opciones de CMS headless para facilitar la edición de contenido sin necesidad de modificar el código.
- **Internacionalización del código:** Refactorizar nombres de componentes, variables y comentarios para mantener todo en inglés de forma coherente.
- **Mejoras en SEO:** Ajustes para optimizar posicionamiento y visibilidad en buscadores.
- **Navegación con subpáginas y mejora de la barra de navegación:** Reemplazar el scroll continuo por rutas dedicadas a cada sección del sitio. Optimizar el Navbar y agregarle modo oscuro.
- **Optimización de la experiencia en móvil:** Mejorar la navegación y usabilidad general en dispositivos móviles, especialmente el comportamiento del menú y la estructura visual de las secciones.

---

## 🚀 Workflow de Despliegue Automático

Este proyecto cuenta con un workflow de GitHub Actions que automatiza el despliegue de la web en GitHub Pages cada vez que se hace push a la rama `main`.

### ¿Qué hace este workflow?

1. **Checkout:** Clona el código del repositorio.
2. **Instala dependencias:** Ejecuta `npm ci` para instalar las dependencias exactas.
3. **Build:** Construye el proyecto con `npm run build`.
4. **Sube los archivos estáticos:** Usa `actions/upload-pages-artifact` para preparar los archivos para GitHub Pages.
5. **Despliega:** Usa `actions/deploy-pages` para publicar la web automáticamente.

### Beneficios

- No es necesario desplegar manualmente.
- Asegura que la web siempre esté actualizada con los últimos cambios en `main`.
- Facilita el flujo de trabajo y reduce errores.

---

## 🧪 Ejecutar localmente (opcional para desarrolladores)

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

## 👩‍💻 Desarrolladores

| <img src="https://github.com/RaulGamBalonga.png" width=70><br>&nbsp;&nbsp;<a href="https://github.com/RaulGamBalonga">Raúl Gambalonga</a>&nbsp; | <img src="https://github.com/AngieMiv.png" width=70><br>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/AngieMiv">Angie M. I. V.</a>&nbsp;&nbsp;&nbsp;&nbsp; | <img src="https://github.com/Aredhel269.png" width=70><br>&nbsp;&nbsp;&nbsp;<a href="https://github.com/Aredhel269">Glòria Monzó</a>&nbsp;&nbsp;&nbsp;| <img src="https://github.com/belensuarez477.png" width=70><br>&nbsp;&nbsp;&nbsp;<a href="https://github.com/belensuarez477">Belén Suárez</a>&nbsp;&nbsp;&nbsp;&nbsp; |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |

| <img src="https://github.com/jramoncarralero.png" width=70><br>&nbsp;<a href="https://github.com/jramoncarralero">J. Ramón Carralero </a>| <img src="https://github.com/ShadeVI.png" width=70><br><a>&nbsp;</a><a href="https://github.com/ShadeVI">Manuel Tomasino</a> | <img src="https://github.com/sargentogato.png" width=70><br><a href="https://github.com/sargentogato">Marlon Velásquez</a> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |

---

## 🤝 Agradecimientos

Queremos agradecer a [GDG Aranjuez](https://gdg.community.dev/gdg-aranjuez/) y al equipo de [Adopta un Junior](https://adoptaunjunior.es) por darnos esta oportunidad y acompañarnos durante todo este camino.

---

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
