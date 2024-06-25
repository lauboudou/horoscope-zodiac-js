# Use the official Node.js image as the base image
FROM node:22.3.0 as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the application
RUN npm run build

# Use the official NGINX image to serve the application
FROM nginx:alpine

# Copy the build output to NGINX's HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

#FROM nginx:1.26.0
#COPY /build /usr/share/nginx/html