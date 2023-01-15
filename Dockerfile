FROM node:18

WORKDIR /user/app/frontend

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","run","dev","--host"]