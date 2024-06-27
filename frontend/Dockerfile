# Etapa de construcción
FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

# Construir la aplicación Angular
RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copiar el archivo de configuración de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos construidos de Angular al directorio raíz de Nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

# Copiar el código fuente y dependencias para permitir la ejecución de tests
COPY --from=build /app /app

# Instalar Node.js y npm en la imagen de producción para ejecutar los tests
RUN apt-get update && apt-get install -y nodejs npm

# Configurar el directorio de trabajo para los tests
WORKDIR /app

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
