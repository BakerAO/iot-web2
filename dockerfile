FROM node:lts

WORKDIR /web
COPY . /web

RUN npm install
RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]
