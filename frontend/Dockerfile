FROM node:lts-bullseye as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build-step /app/dist/frontend /usr/share/nginx/html/
