FROM node:18-bookworm

RUN mkdir /backend
WORKDIR /backend

COPY package*.json ./
RUN npm i

COPY . .

CMD npm run start