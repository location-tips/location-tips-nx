# Base image
FROM node:20-alpine AS base

# Create app directory
WORKDIR /usr/src/app

ARG NPM_AUTH_TOKEN
ENV PERSONAL_ACCESS_TOKEN=${NPM_AUTH_TOKEN}

RUN echo PERSONAL_ACCESS_TOKEN: $PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies

RUN npm install -g nx && \
npm install --no-package-lock
