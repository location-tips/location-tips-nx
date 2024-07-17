# Base image
FROM node:20

# Create app directory
WORKDIR /

ARG PERSONAL_ACCESS_TOKEN

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm config set @location-tips:registry https://npm.pkg.github.com && \
npm config set //npm.pkg.github.com/:_authToken ${PERSONAL_ACCESS_TOKEN} && \
npm install

# Creates a "dist" folder with the production build
RUN npm run build:back

# Bundle app source
COPY . .

# Start the server using the production build
CMD [ "node", "dist/backend/main.js" ]
