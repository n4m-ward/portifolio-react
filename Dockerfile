# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy source files
COPY . .

RUN yarn

EXPOSE 3000
CMD ["yarn", "start"]