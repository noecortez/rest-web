# Creación de un Servidor HTTP Básico

En este documento, se detalla el proceso de creación de un servidor HTTP básico utilizando el módulo `http` de Node.js. Se explican los conceptos fundamentales de `request` y `response`, así como el método `listen` para levantar el servidor. Además, se incluyen ejemplos prácticos y resultados esperados.

## Conceptos Fundamentales

### HTTP (HyperText Transfer Protocol)

HTTP es el protocolo utilizado para la transferencia de datos en la web. Funciona en un modelo de solicitud-respuesta, donde un cliente (generalmente un navegador web) realiza una solicitud a un servidor, y el servidor response con los datos solicitados.

### Módulo `http` de Node.js

El módulo `http` de Node.js permite crear un servidor HTTP y manejar las solicitudes y prespuestas. Es una parte fundamental del ecosistema de Node.js para desarrollar aplicaciones web.

### Request (Solicitud)

Una solicitud HTTP es una petición realizada por el cliente al servidor. Contiene información como la URL solicitada, los encabezados HTTP, y posiblemente datos enviados por el cliente (por ejemplo, en una solicitud POST).

### Response (Respuesta)

Una respuesta HTTP es la respuesta del servidor a la solicitud del cliente. Incluye un código de estado HTTP, encabezados HTTP, y el cuerpo de la respuesta que contiene los datos solicitados.

## Creación del Servidor HTTP

### Paso 1: Importar el Módulo `http`

Primero, importamos el módulo `http` de Node.js.

```typescript
import http from 'http'
```

### Paso 2: Definir el puerto

Definimos el puerto en el que el servidor escuchará las solicitudes. En este caso, utilizamos el puerto `8080`

```typescript
const PORT = 8080
```

### Paso 3: Crear el Servidor

Utilizamos el método `createServer` del módulo `http` para crear un nuevo servidor. Este método toma una función de callback que se ejecuta cada vez que se recibe una solicitud

```typescript
const server = http.createServer((request, response) => {
  console.log('🚀 ~ server ~ request.url:', request.url)

  response.write('Welcome to the App Rest Server!')
  response.end()
})
```

**Explicación del código** <br />

- `request`: Objeto que contiene información sobre la solicitud HTTP recibida.
- `response`: Objeto que se utiliza para enviar la respuesta HTTP al cliente.
- `request.url`: Propiedad que contiene la URL solicitada por el cliente.
- `response.write`: Método utilizado para enviar datos al cliente como parte de la respuesta.
- `response.end`: Método utilizado para finalizar la respuesta y enviar todos los datos al cliente.

### Paso 4: Levantar el Servidor

Utlizamos el método `listen` del objeto `server` para que el servidor comience a escuchar las solicitudes en el puerto especificado. El método `listen` toma dos argumentos: el puerto y una función de callback que se ejecuta cuando el servidor está listo para recibir solicitudes.

```typescript
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
```

## Ejemplos de Resultados

### Ejemplo 1: Solicitud a la URL /

Cuando el cliente realiza una solicitud a la URL /, el servidor imprime la URL solicitada en la consola y envía una respuesta con el mensaje "Welcome to the App Rest Server!".

Consola del Servidor:

```bash
🚀 ~ server ~ request.url: /
```

Respuesta del Servidor:

```
Welcome to the App Rest Server!
```

### Ejemplo 2: Solicitud a la URL /api

Cuando el cliente realiza una solicitud a la URL /api, el servidor imprime la URL solicitada en la consola y envía una respuesta con el mensaje "Welcome to the App Rest Server!".

Consola del Servidor:

```bash
🚀 ~ server ~ request.url: /api
```

Respuesta del Servidor:

```
Welcome to the App Rest Server!
```

## Conclusión

En este documento, se ha explicado cómo crear un servidor HTTP básico utilizando el módulo http de Node.js. Se han detallado los conceptos fundamentales de request y response, así como el método listen para levantar el servidor. Además, se han proporcionado ejemplos prácticos y resultados esperados para una mejor comprensión.

## Temas Relevantes Adicionales

### Métodos HTTP

Los métodos HTTP más comunes son:

- `GET`: Solicitar datos del servidor.
- `POST`: Enviar datos al servidor para crear un nuevo recurso.
- `PUT`: Actualizar un recurso existente en el servidor.
- `DELETE`: Eliminar un recurso del servidor.

### Códigos de Estado HTTP

Algunos códigos de estado HTTP comunes son:

- `200 OK`: La solicitud ha tenido éxito.
- `201 Created`: La solicitud ha tenido éxito y se ha creado un nuevo recurso.
- `404 Not Found`: El recurso solicitado no se encuentra en el servidor.
- `500 Internal Server Error`: Error interno del servidor.

### Encabezados HTTP

Los encabezados HTTP proporcionan información adicional sobre la solicitud o la respuesta. Algunos encabezados comunes son:

- `Content-Type`: Indica el tipo de contenido del cuerpo de la solicitud o respuesta.
- `Authorization`: Utilizado para enviar credenciales de autenticación.
- `Cache-Control`: Controla el almacenamiento en caché de la respuesta.

---

Estos conceptos adicionales son fundamentales para el desarrollo de aplicaciones web y te ayudarán a comprender mejor cómo funciona el protocolo HTTP y cómo manejar las solicitudes y respuestas en tu servidor.
