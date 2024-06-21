# Stage 1: Build
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install && npm cache clean --force

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve
FROM nginx:1-alpine-slim

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
