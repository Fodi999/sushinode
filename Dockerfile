FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx tailwindcss -i ./src/public/css/styles.css -o ./src/public/css/output.css

EXPOSE 3000
CMD [ "node", "src/server.js" ]
