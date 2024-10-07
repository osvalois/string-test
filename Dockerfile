# Usa una imagen base de Node.js LTS
FROM node:20-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Instala las dependencias necesarias
RUN apk add --no-cache python3 make g++

# Instala pnpm globalmente
RUN npm install -g pnpm

# Copia los archivos de configuración del proyecto
COPY package.json ./
COPY pnpm-lock.yaml* ./

# Instala las dependencias (con o sin archivo de bloqueo)
RUN if [ -f pnpm-lock.yaml ]; then pnpm install --frozen-lockfile; \
    else pnpm install; fi

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación
RUN pnpm run build

# Etapa de producción
FROM node:20-alpine

WORKDIR /app

# Copia los archivos necesarios desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "dist/main.js"]