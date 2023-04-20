FROM node

WORKDIR /docker

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]