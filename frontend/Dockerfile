FROM node:18-bookworm

RUN mkdir /frontend
WORKDIR /frontend

COPY package*.json ./
RUN npm i

COPY . .

CMD npm run dev