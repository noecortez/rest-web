# Instalación y Configuración Inicial

Este documento detalla los pasos seguidos para la instalación y configuración inicial del proyecto **rest-web** con Node.js y TypeScript.

## 1️⃣ Creación del Proyecto

1. Se creó el proyecto con el siguiente comando:

   ```bash
   mkdir rest-web && cd rest-web
   ```

   Esto crea una carpeta `rest-web` y accede a ella.

2. Inicialización de `package.json`:
   ```bash
   npm init -y
   ```
   - El flag `-y` acepta los valores por defecto.
   - Se genera el archivo `package.json`, que almacena información del proyecto y sus dependencias.

## 2️⃣ Instalación de Dependencias

Se instalaron las siguientes dependencias de desarrollo:

```bash
npm i -D typescript @types/node ts-node-dev rimraf
```

### Explicación de cada dependencia:

| Paquete       | Descripción                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| `typescript`  | Permite usar TypeScript en el proyecto.                                                                        |
| `@types/node` | Añade definiciones de tipos para Node.js.                                                                      |
| `ts-node-dev` | Permite ejecutar TypeScript en desarrollo con recarga automática.                                              |
| `rimraf`      | Permite eliminar archivos y carpetas de manera segura, útil para limpiar la carpeta `dist/` antes de compilar. |

## 3️⃣ Configuración de Scripts en `package.json`

Se agregaron los siguientes scripts para facilitar el desarrollo:

```json
"scripts": {
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
}
```

### Explicación de los scripts:

| Script  | Descripción                                                    |
| ------- | -------------------------------------------------------------- |
| `dev`   | Ejecuta el servidor en modo desarrollo con recarga automática. |
| `build` | Compila el código TypeScript y limpia la carpeta `dist/`.      |
| `start` | Compila el código y luego lo ejecuta en producción.            |

## 4️⃣ Creación del Archivo Principal `app.ts`

Se creó la carpeta `src/` y dentro de ella el archivo `app.ts` con un mensaje de prueba:

```typescript
console.log("Hello, Node.js with TypeScript!");
```

## ✅ Prueba del Proyecto

Para verificar que todo está configurado correctamente, se ejecuta:

```bash
npm run dev
```

Esto debería imprimir:

```plaintext
Hello, Node.js with TypeScript!
```
