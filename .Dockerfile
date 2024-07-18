# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

ARG PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm config set @location-tips:registry https://npm.pkg.github.com && \
npm config set //npm.pkg.github.com/:_authToken ${PERSONAL_ACCESS_TOKEN} && \
npm install

# Bundle app source
COPY . .

RUN echo $(ls)
RUN ./node_modules/.bin/nx --version
RUN export PATH=$(pwd)/node_modules/.bin:$PATH

RUN ./node_modules/.bin/nx reset

# Creates a "dist" folder with the production build
RUN npm run build:back

# Start the server using the production build
CMD [ "npm", "start" ]
