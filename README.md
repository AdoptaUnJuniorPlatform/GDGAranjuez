# Proyecto Web GDG Aranjuez 🚀

## 🏁 Objetivo

El objetivo del hackaton es la realización de una web base para GDG Aranjuez que contenga los componentes típicos de una página de evento tecnológico.

La web está desarrollada con [Astro](https://astro.build/) ✨y utiliza tecnologías como Tailwind CSS, PostCSS, ESLint y Prettier para mantener una experiencia de desarrollo limpia y moderna. 💅🏻

---

## 🧩 Requisitos del cliente

### 🌐 _WEB BASE PARA GDG ARANJUEZ_

#### 👥 Organizadores

- Nombre y apellidos
- Foto
- Título o cargo en la empresa
- Enlaces a RRSS opcionales según cada integrante

#### 🪧 Blog

- Para hacer posts

#### 🌗 Modo claro/oscuro

### 🗺️ _WEB DEL EVENTO DevFest_

#### 📒 Sección de Agenda

#### 🎤 Sección de Charlas

- Título
- Descripción
- Ponente
- Foto el ponente

#### 🗣️ Sección de ponentes con los siguientes campos

- Nombre y apellidos
- Foto
- Título o cargo en la empresa
- Enlaces a RRSS opcionales según cada integrante

---

    - Sitio accesible, responsive y rápido.
    - Diseño visual atractivo basado en la identidad del evento.
    - Secciones personalizables: organizadores, actividades, patrocinadores, etc.
    - Código colaborativo, limpio y documentado.

---

## ⚙️ Tech Stack

- **Astro** como framework principal.
- **Tailwind CSS** para los estilos.
- **PostCSS** para procesamiento de CSS.
- **Prettier** + `prettier-plugin-astro` para formateo automático.
- **ESLint** para mantener calidad de código.
- **Git y GitHub** para control de versiones colaborativo.

---

## 📁 Estructura del proyecto

```
src/
├── components/         # Componentes Astro (Organizadores.astro, etc.)
├── layouts/            # Layouts globales como Layout.astro
├── pages/              # Páginas principales de la web
├── styles/             # Archivos CSS (Tailwind incluido)
public/                 # Archivos estáticos
```

---

## 👩‍💻 Autoras y autores

Este proyecto lo hemos desarrolldo un equipo formado por integrantes de Adopta un Junior que hemos dar el paso de unirnos a la hackatón del Proyecto de página Web para GDG Aranjuez 🏰

🙆🏻‍♀️ Somos:

- Raúl Gambalonga Cilla
- Angie Magalí Ibarrola Valenzuela
- Glòria Monzó
- Belén Suarez

💚 ¡Gracias por vuestra colaboración, esfuerzo y energía!

---

## 🚀 Cómo empezar

### 🌱 Flujo de trabajo con Git

#### ✅ 1. Clonamos el repo principal (una vez)

```
git clone <URL-del-repo>
cd <nombre-del-repo>
```

Instalamos las dependencias:

`npm install`
Arrancamos el entorno de desarrollo:

`npm run dev`
📦 Comandos útiles
| Comando | Descripción |
| ------------------------ | ----------------------------------------- |
| `npm run dev` | Arranca el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción. |
| `npx prettier --write .` | Formatea todos los archivos con Prettier. |
| `npx eslint .` | Linter para revisar errores de estilo. |

#### 🌱 2. Creamos una nueva rama desde dev

Antes de empezar una nueva tarea o funcionalidad:

Creamos una rama desde la Issue en GitHub con _Create a branch_ for this issue para que automáticamente nos cree la rama con el # de la issue y que el origen de la rama sea dev 🪴

```
git checkout dev
git pull origin dev  # nos aseguramos de tener lo último
git checkout -b #issue-nombre-del-issue-rama
```

#### 🛠 3. Trabajamos en nuestra rama

Hacemos cambios, añadimos y commiteamos con mensajes claros:

```
git add .
git commit -m "implementada sección de organizadores"
```

#### 🔄 4. Sincronizamos con dev si han habido cambios mientras trabajábamos

Antes de hacer la PR, nos aseguramos de tener lo último de dev:

```
git checkout dev
git pull origin dev

git checkout nombre-de-tu-rama
git merge dev
# resolvemos conflictos si los hay, luego:
git add .
git commit
```

#### 🚀 5. Subimos nuestra rama al remoto

```
git push origin nombre-de-tu-rama
```

#### 🔁 6. Creamos la Pull Request (PR)
- Añadiendo comentarios sobre qué hemos modificado/añadido/eliminado y la razón.
- Si corresponde, podemos agregar fotos de como quedaría en la web.

#### ✅ 7. Una vez mergeada la PR...

Traemos los cambios de dev a nuestro local:

```
git checkout dev
git pull origin dev
```

Y actualizamos otras ramas si es necesario:

```
git checkout otra-rama
git merge dev
```

#### 🧹 8. Opcional: Borrar ramas que ya no usemos
- Normalmente, al mergear una PR borramos la rama si ya no la estamos usando, pero por si teníamos alguna por ahí suelta...

```
git branch -d nombre-de-la-rama
```

### 🧯 Cómo deshacer un commit

Si necesitamos deshacer el último commit (sin perder cambios):

```
git reset --soft HEAD~1
```

Si queremos dejarlo tal y como estaba antes:

```
git reset --hard HEAD~1
```

### 🧪 ¿Algo no funciona?

Revisamos:

- Si hemos instalado dependencias (npm install)
- Si hemos sincronizado con la rama dev
- Si hemos formateado con Prettier y no hay conflictos

### ✨ Buenas prácticas

- Partimos siempre desde la rama dev.
- Hacemos commits con comentarios claros
- Sincronizamos nuesstra rama antes de mergear (git merge origin/dev).
- Resuelvemos conflictos con cuidado.
- Usamos Prettier antes de cada commit para evitar problemas de estilo.
- Si no sabemos algo, ¡Preguntamos! 😃
