FROM node:latest as build

WORKDIR /app

COPY package*.json ./

# Instala apk 
RUN apt-get update && apt-get install -y nodejs npm

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80
