# Use an official Node runtime as the parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app


# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

COPY sitemap.xml /app/dist/sitemap.xml
COPY robots.txt /app/dist/robots.txt


# Serve the app

RUN npm install -g serve

# Specify the command to run on container start
CMD serve -s dist -l $PORT