FROM node:12.16.2-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN pwd
RUN ls
RUN cat package.json

EXPOSE 8080

CMD [ "npm", "start" ]

COPY . .