FROM node:16

WORKDIR /web
COPY ./build /web/build
COPY ./server.js /web/server.js

# RUN npm install
# RUN npm run build

EXPOSE 8080

CMD [ "node", "server.js" ]
