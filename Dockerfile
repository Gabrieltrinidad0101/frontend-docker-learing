FROM node:18

WORKDIR /user/app/frontend

COPY packege*.json .

RUN npm install

COPY . .

CMD ["npm","run","dev"]