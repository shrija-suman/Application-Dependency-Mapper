# Dockerfile for Application Dependency Mapper Backend

FROM node:14-alpine

WORKDIR /app

COPY src/main/backend/package*.json ./
RUN npm install

COPY src/main/backend/ .

EXPOSE 8080

CMD ["npm", "start"]