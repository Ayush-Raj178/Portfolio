# Build stage
FROM maven:3.8.6-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Copy only the POM file first to leverage Docker cache
COPY pom.xml .

# Download all dependencies
RUN mvn dependency:go-offline

# Copy source code
COPY src ./src

# Build the application
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copy the built JAR from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose the port your app runs on
EXPOSE 8080

# Set JVM options
ENV JAVA_OPTS="-Xmx512m -Xms256m -Dserver.port=8080 -Dserver.servlet.context-path=/api"

# Health check (used by Render)
HEALTHCHECK --interval=30s --timeout=3s --start-period=30s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/api/actuator/health || exit 1

# Command to run the application
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
