FROM node:alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm i


COPY . ./


ENV MONGO_URL = mongodb://localhost:27017/PasswordManagerApp

ENV JWT_SECRETKEY = dsdkasghdkjsdghjasdhasjkdhsjkdhskd232dkbasmndbj23jbasjkdk

ENV COOKIE_EXPIRE = 5

ENV NODE_ENV = production
ENV PORT = 4000



CMD ["npm", "run", "start"]