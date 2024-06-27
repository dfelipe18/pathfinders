FROM node:latest as build

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

COPY --from=build /app /app

RUN [ -x "$(command -v node)" ] || apt-get update && apt-get install -y nodejs npm

WORKDIR /app

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
