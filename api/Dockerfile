FROM node:20-alpine

WORKDIR /app

COPY nest-cli.json \
        typeOrmConfig.ts \
        package.json \
        yarn.lock \
        .env \
        tsconfig.json \
        tsconfig.build.json ./

RUN yarn config set network-timeout 3000000 \
    && yarn install

CMD yarn migration:run && yarn start:dev