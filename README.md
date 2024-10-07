# Documentación del Proyecto NestJS: Strip Comments API

## Índice
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Requisitos Previos](#requisitos-previos)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Desarrollo](#desarrollo)
6. [Construcción](#construcción)
7. [Pruebas](#pruebas)
8. [Despliegue](#despliegue)
9. [API Documentation](#api-documentation)
## Descripción del Proyecto

Este proyecto implementa una API RESTful utilizando NestJS para eliminar comentarios de un texto dado. La API recibe un texto y una lista de marcadores de comentarios, y devuelve el texto con los comentarios eliminados.

## Requisitos Previos

- Node.js (versión 20.x o superior)
- pnpm (versión 9.x o superior)
- Docker (opcional, para construcción y despliegue local)
- Cuenta en Fly.io (para despliegue en la nube)

## Configuración del Entorno

1. Clonar el repositorio:
   ```
   git clone https://github.com/osvalois/string-test
   cd string-test
   ```

2. Instalar dependencias:
   ```
   pnpm install
   ```

3. Configurar variables de entorno:
   Crear un archivo `.env` en la raíz del proyecto y añadir las siguientes variables:
   ```
   PORT=3000
   NODE_ENV=development
   ```

## Estructura del Proyecto

```
.
├── src/
│   ├── strip-comments/
│   │   ├── strip-comments.controller.ts
│   │   ├── strip-comments.service.ts
│   │   ├── strip-comments.module.ts
│   │   └── strip-comments.dto.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── nest-cli.json
└── README.md
```

## Desarrollo

Para iniciar el servidor de desarrollo:

```
pnpm run start:dev
```

El servidor estará disponible en `http://localhost:3000`.

## Construcción

Para construir el proyecto:

```
pnpm run build
```

Esto generará los archivos compilados en el directorio `dist/`.

## Pruebas

Para ejecutar las pruebas unitarias:

```
pnpm run test
```

Para las pruebas e2e:

```
pnpm run test:e2e
```

## Despliegue

### Despliegue Local con Docker

1. Construir la imagen Docker:
   ```
   docker build -t strip-comments-api .
   ```

2. Ejecutar el contenedor:
   ```
   docker run -p 3000:3000 strip-comments-api
   ```

### Despliegue en Fly.io

1. Asegúrate de tener la CLI de Fly.io instalada y estar autenticado.

2. Inicializa tu aplicación en Fly.io (si aún no lo has hecho):
   ```
   fly launch
   ```

3. Despliega la aplicación:
   ```
   fly deploy
   ```

4. Para ver los logs de la aplicación:
   ```
   fly logs
   ```

## API Documentation

### Endpoint: POST /strip-comments

Elimina los comentarios de un texto dado.

#### Request Body

```json
{
  "input": "string",
  "commentMarkers": "string[]"
}
```

#### Response

```json
{
  "result": "string"
}
```

#### Ejemplo

Request:
```json
{
  "input": "apples, pears # and bananas\ngrapes\nbananas !apples",
  "commentMarkers": ["#", "!"]
}
```

Response:
```json
{
  "result": "apples, pears\ngrapes\nbananas"
}
```