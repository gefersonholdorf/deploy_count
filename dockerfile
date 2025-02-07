FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npx prisma generate

CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]

EXPOSE 3399