# Handling the client build
FROM node:14.8.0 as client

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./frontend/package.json ./frontend/yarn.lock ./

RUN npm install

COPY ./frontend/ ./

RUN yarn build

# Handling the server 
FROM node:14.8.0

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm install

COPY --from=client /usr/src/app/build ./frontend/build

ENV NODE_ENV=prod

EXPOSE 5000

CMD ["yarn","start"]