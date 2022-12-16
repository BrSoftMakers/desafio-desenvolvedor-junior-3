FROM node:18-alpine

WORKDIR /server

COPY package.json /server

RUN npm install

COPY . /server/

EXPOSE 3001

CMD ["npm", "run", "dev"]