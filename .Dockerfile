# Base image
FROM node:22-alpine

# Create app directory
WORKDIR /usr/src/app

ARG PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

ENV NX_CACHE=false
ENV NX_VERBOSE=true
ENV NX_LOG_LEVEL=verbose
ENV NX_DAEMON=false

# Install app dependencies
RUN npm config set @location-tips:registry https://npm.pkg.github.com && \
npm config set //npm.pkg.github.com/:_authToken ${PERSONAL_ACCESS_TOKEN} && \
npm install -g nx && \
npm ci

RUN echo $(ls)
RUN nx --version

# Creates a "dist" folder with the production build
RUN npm run build:back

# Start the server using the production build
CMD [ "node", "./dist/backend/main.js" ]
