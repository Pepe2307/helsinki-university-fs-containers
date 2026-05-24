FROM nginx:1.29-alpine

# In development, static assets are served from the backend volume
# Nginx proxies all requests to the Laravel dev server
COPY nginx.dev.conf /etc/nginx/nginx.conf