# Use official lightweight Node image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Install NestJS CLI, TypeScript, ts-node globally
RUN npm install -g @nestjs/cli typescript ts-node

# Copy package files and install all dependencies (including dev)
COPY package*.json ./
RUN npm install

# Copy the entire project source
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app in development mode (with hot reload)
CMD ["npm", "run", "start:dev"]
