# Use Node 24 as the base image
FROM node:24

# Define the working directory inside the container
WORKDIR /usr/src/app

# Copy all project files and set ownership to 'node' user for security
COPY --chown=node:node . .

# Install dependencies using 'npm ci' for a clean, reproducible build
RUN npm ci

# Set the environment variable for debugging
ENV DEBUG=todo-backend:*

# Switch to non-root user for security
USER node

# Execute the application
CMD ["npm", "start"]