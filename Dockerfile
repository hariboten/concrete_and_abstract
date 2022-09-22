FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npx prisma migrate deploy

CMD [ "node", "dist/main.js" ]
