FROM node:18-alpine

WORKDIR /home/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN mkdir -p /home/app/uploads
RUN chown -R node:node /home/app/uploads

EXPOSE 3000

CMD ["node", "index.js"]