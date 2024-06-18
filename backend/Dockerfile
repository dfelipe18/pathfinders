FROM node:18

RUN mkdir -p /home/app
RUN mkdir -p /home/app/uploads
RUN chown -R node:node /home/app/uploads

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]