FROM node:alpine as builder

WORKDIR /usr/app

COPY ./package.json ./yarn.lock ./
RUN yarn install --pure-lockfile

COPY ./ ./

RUN yarn build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html
