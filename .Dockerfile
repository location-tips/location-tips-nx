# Base image
FROM node:20-alpine AS base

# Create app directory
WORKDIR /usr/src/app

ARG PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies
RUN npm config set @location-tips:registry https://npm.pkg.github.com && \
npm config set //npm.pkg.github.com/:_authToken ${PERSONAL_ACCESS_TOKEN} && \
npm install -g nx && \
npm install --no-package-lock
