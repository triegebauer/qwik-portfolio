FROM node:alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build --verbose

EXPOSE 3004

CMD ["npm", "run", "serve"]