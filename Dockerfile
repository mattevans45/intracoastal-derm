# Stage 1: Build
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

RUN npm ci && npm cache clean --force

# Copy the rest of the application files
COPY . .

# Build the React application
RUN npm run build

# Copy static files
COPY sitemap.xml /app/dist/sitemap.xml
COPY robots.txt /app/dist/robots.txt

# Stage 2: Serve
FROM nginx:1.23-alpine-slim

# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# We don't need a separate 404.html file anymore
COPY public/404.html /usr/share/nginx/html/404.html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Expose port 8080 (Cloud Run prefers this port)
EXPOSE 8080

# Use the shell form of CMD to expand the PORT variable
CMD sh -c "envsubst '\$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"