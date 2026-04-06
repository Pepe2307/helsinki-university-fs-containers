# --- STAGE 1: BUILD ---
# Use Node to transform React code into static files (HTML/JS/CSS)
FROM node:24 AS build-stage
WORKDIR /usr/src/app

# Copy dependency files first for better Docker caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application code
COPY . .

# Define the variable needed by Vite at build time
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Build the application
RUN npm run build


# --- STAGE 2: PRODUCTION ---
# Use Nginx Alpine for a lightweight and secure image
FROM nginx:1.29-alpine

# Copy the build output from the previous stage
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

# SECURITY: Adjust permissions so Nginx can run as a non-root user
# We create the necessary cache and pid files and give ownership to the nginx user
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

# Switch to the non-root user 'nginx' (provided by the alpine image)
USER nginx

# Nginx still listens on port 80 by default inside the container