FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

ENV DEBUG=todo-backend:*

# Run as non-root user for security
USER node

CMD ["npm", "start"]