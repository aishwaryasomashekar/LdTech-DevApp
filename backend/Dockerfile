# base image
FROM node:18.17.1

WORKDIR /backend

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 6000

CMD ["npm", "start"]
