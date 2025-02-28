# REST-WEB 🚀 — Node.js + TypeScript - Notas del Curso

## 📋 Índice

1. [Instalación y Configuración](docs/01-instalacion.md)

## 📌 Instalación

**1. Clona el repositorio:**

```bash
git clone <repo-url>
cd rest-web
```

**2. Instala las dependencias:**

```bash
npm install
```

## 🚀 Configuración y Scripts

Se agregaron los siguientes scripts en `package.json`:

| Script            | Descripción                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `npm run dev`     | Ejecuta el servidor en modo de desarrollo con recarga automática |
| `npm run build`   | Compila el código TypeScript y limpia la carpeta `dist/`         |
| `npm run start`   | Compila el código y ejecuta el servidor en producción            |
| `npm run release` | Genera el CHANGELOG y actualiza la versión del proyecto          |

## 🔧 Tecnologías Utilizadas

    • TypeScript: Tipado estático para JavaScript.
    • @types/node: Definiciones de tipos para Node.js.
    • ts-node-dev: Recarga automática para TypeScript en desarrollo.
    • rimraf: Limpia la carpeta dist/ antes de compilar.

## 📝 Estructura del Proyecto

```
rest-web/
│── src/
│   ├── app.ts   # Archivo principal
│── package.json
│── tsconfig.json
│── README.md
```
