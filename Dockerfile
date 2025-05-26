# Dockerfile
FROM node:18-alpine as builder

WORKDIR /app

# Instalar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Imagen final con Nginx
FROM nginx:alpine

# Instalar certificados SSL
RUN apk add --no-cache openssl

# Generar certificado autofirmado
RUN mkdir -p /etc/nginx/certs && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/nginx/certs/private.key \
    -out /etc/nginx/certs/certificate.crt \
    -subj "/C=CO/ST=State/L=City/O=Organization/CN=190.129.224.28"

# Copiar configuración de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build de Vite
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8000 8443

CMD ["nginx", "-g", "daemon off;"]