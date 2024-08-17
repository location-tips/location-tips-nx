# Base image
FROM node:20-alpine AS base

# Create app directory
WORKDIR /usr/src/app

ARG PERSONAL_ACCESS_TOKEN
ENV PERSONAL_ACCESS_TOKEN=${PERSONAL_ACCESS_TOKEN}

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies
RUN echo PERSONAL_ACCESS_TOKEN: $PERSONAL_ACCESS_TOKEN $(PERSONAL_ACCESS_TOKEN)

RUN npm install -g nx && \
npm install --no-package-lock
