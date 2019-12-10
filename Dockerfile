FROM node:10.15.3
WORKDIR /app
COPY package.json /app
COPY . /app
RUN npm install
CMD node app.js
EXPOSE 3000
