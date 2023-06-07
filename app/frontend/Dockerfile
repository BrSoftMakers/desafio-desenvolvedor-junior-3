FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
CMD [ "start" ]