#syntax=docker/dockerfile:1
FROM node:18-alpine
LABEL org.opencontainers.image.source=https://github.com/Dpbm/coderchallenge-dsin-2023
ENV LANG pt_BR.UTF-8
WORKDIR /app
COPY package.json pnpm-lock.yaml /app/
RUN npm install -g pnpm && pnpm install
COPY . /app/
CMD [ "pnpm", "start" ]
