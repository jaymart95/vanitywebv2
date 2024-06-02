# Use an official Nginx image as the base image
FROM nginx:latest

# Copy the contents of your website to the nginx/html directory
COPY . /usr/share/nginx/html
