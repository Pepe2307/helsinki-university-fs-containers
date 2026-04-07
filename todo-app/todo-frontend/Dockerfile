# --- STAGE 1: BUILD ---
FROM node:24 AS build-stage
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# --- STAGE 2: TEST ---
FROM build-stage AS test-stage
RUN npm test

# --- STAGE 3: PRODUCTION ---
FROM nginx:1.29-alpine

COPY --from=test-stage /usr/src/app/dist /usr/share/nginx/html

RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid /var/cache/nginx /var/log/nginx /etc/nginx/conf.d

USER nginx