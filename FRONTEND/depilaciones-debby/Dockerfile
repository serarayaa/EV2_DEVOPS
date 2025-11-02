# ---------- Stage 1: Build ----------
FROM node:20-alpine AS build

WORKDIR /app

# Instala deps con caché eficiente
COPY package*.json ./
RUN npm ci

# Copia el resto y compila
COPY . .
RUN npm run build

# ---------- Stage 2: Runtime (Nginx) ----------
FROM nginx:alpine

# Copia el build
COPY --from=build /app/dist /usr/share/nginx/html

# Config SPA + gzip + cache
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Healthcheck del servidor
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -T 2 -O /dev/null http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
