FROM node:20-alpine

WORKDIR /app

COPY nest-cli.json package.json yarn.lock tsconfig.json tsconfig.build.json ./

RUN yarn config set network-timeout 3000000 \
    && yarn install

CMD yarn start:dev