FROM openjdk:18

WORKDIR /backend

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw && ./mvnw dependency:resolve

COPY src ./src

CMD ["./mvnw", "spring-boot:run"]
