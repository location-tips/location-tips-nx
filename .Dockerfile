# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /usr/src/app

ARG PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Bundle app source
COPY . .

# ENV NX_CACHE=false
# ENV NX_VERBOSE=true
# ENV NX_LOG_LEVEL=verbose
# ENV NX_DAEMON=false

# Install app dependencies
RUN npm config set @location-tips:registry https://npm.pkg.github.com && \
npm config set //npm.pkg.github.com/:_authToken ${PERSONAL_ACCESS_TOKEN} && \
npm install -g nx && \
npm ci --include=optional
# npm install --no-package-lock

# RUN echo $(ls -la)
# RUN nx --version
# RUN nx reset

# Creates a "dist" folder with the production build
RUN nx run backend:build

EXPOSE 3000
EXPOSE 8080

# Start the server using the production build
CMD [ "node", "./dist/backend/main.js" ]
