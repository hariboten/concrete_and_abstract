FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npx prisma migrate deploy && npm run build
# RUN npx prisma migrate deploy && npx prisma generate

# CMD [ "node", "dist/main.js" ]
CMD ["npm","run","start:dev"]
