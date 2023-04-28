FROM node:lts-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test

RUN npm run build

EXPOSE 8000

CMD ["node", "dist/index.js"]
