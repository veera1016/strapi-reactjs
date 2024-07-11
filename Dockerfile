# Use the official Nginx image from Docker Hub
FROM nginx:latest

# Copy the custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
