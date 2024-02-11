# Fetching the latest node image on apline linux
FROM node:alpine AS builder

# Declaring env
ENV NODE_ENV production

# Setting up the work directory
WORKDIR /app

# Installing dependencies
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm install

# Copying all the files in our project
COPY ./frontend .

# Building our application
RUN npm run build

FROM openjdk:18

WORKDIR /app

COPY .mvn .mvn
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw && ./mvnw dependency:resolve

COPY src ./src

# Copying built assets from builder
COPY --from=builder /app/build ./src/main/resources/static

CMD ["./mvnw", "spring-boot:run"]
