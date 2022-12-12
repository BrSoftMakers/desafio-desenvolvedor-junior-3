FROM node:16

COPY package*.json /

RUN npm install

COPY . .

EXPOSE 3001

RUN npm install -g prisma

RUN npx prisma generate

CMD ["npm", "start"]
