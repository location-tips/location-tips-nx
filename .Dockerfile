# Base image
FROM node:20

# Create app directory
WORKDIR /

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build:backend

# Start the server using the production build
CMD [ "node", "dist/backend/main.js" ]
