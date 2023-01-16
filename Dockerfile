FROM node:18

WORKDIR /user/app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN chmod 777 ./node_modules

CMD ["npm","run","host"]