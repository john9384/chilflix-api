FROM node
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install -g nodemon
COPY . /app
CMD ["node", "index.js"]
EXPOSE 8800