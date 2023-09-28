# base image
FROM node:18.17.1

# set working directory
WORKDIR /src

COPY package*.json ./

RUN npm install -qy
RUN npm install react-scripts -g
RUN npm install http-server -g

COPY . .

RUN rm -rf /usr/build
RUN npm run build

COPY . .

EXPOSE 7000

RUN cp -R ./build /usr/build
CMD ["http-server", "/usr/build", "-p 3000"]

 
