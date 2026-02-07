# Tech Debt Score

A Spring Boot + Angular dashboard application for measuring and visualizing organizational technical debt maturity across 8 key dimensions.

## Overview

Tech Debt Score is a subjective scoring model that measures your organization's holistic technical debt management maturity. The application produces a score in the range of **0-800**, where:
- **0** indicates low technical debt management maturity
- **800** indicates high technical debt management maturity

Each of the 8 dimensions in the model has a configurable weight, allowing customization based on organizational priorities.

## Technology Stack (2026)

### Backend
- **Java 21 LTS** (Amazon Corretto or Eclipse Temurin)
- **Spring Boot 3.2.2**
  - Spring Data JPA
  - Spring Boot Validation
  - Spring Web MVC
- **Jakarta EE** (javax → jakarta migration)
- **MySQL 8.0** with Flyway migrations
- **Maven 3.9+** for build management

### Frontend
- **Angular 18** with standalone components
- **TypeScript 5.4** (strict mode, ES2022)
- **Bootstrap 5.3** for responsive UI
- **ApexCharts 3.x** for radar and bar charts
- **RxJS 7.8** for reactive programming
- **ESLint** for code quality

### Development & Testing
- **Node.js 20.18 LTS**
- **Cypress 13** for E2E testing
- **JUnit 5** with Mockito for backend testing
- **Karma + Jasmine** for frontend unit testing

## Requirements

- **Java 21** (LTS) - [Download Amazon Corretto 21](https://aws.amazon.com/corretto/)
- **Node.js 20.18** (LTS) - [Download Node.js](https://nodejs.org/)
- **MySQL 8.0** - Run via Docker or local installation
- **Maven 3.9+** (included via Maven Wrapper)

## Quick Start

### 1. Start MySQL Database

Using Docker (recommended):
```bash
docker run --name techdebtscore-mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=smdb \
  -e MYSQL_USER=smdbtsu \
  -e MYSQL_PASSWORD=your_secure_password \
  -p 3306:3306 \
  -d mysql:8.0
```

### 2. Set Environment Variables

Create a local configuration file (git-ignored):
```bash
cp application-local.properties.template application-local.properties
```

Edit `application-local.properties`:
```properties
DB_URL=jdbc:mysql://localhost:3306/smdb
DB_USER=smdbtsu
DB_PASSWORD=your_secure_password
```

**Important:** Never commit credentials to version control.

### 3. Run Database Migrations

```bash
./mvnw flyway:migrate -Djdbcurl=jdbc:mysql://localhost:3306/smdb
```

### 4. Build and Run

```bash
# Build with tests
./mvnw clean package

# Run the application
./mvnw spring-boot:run
```

The application will start on http://localhost:8081

## Development

### Backend Development

```bash
# Run with auto-reload
./mvnw spring-boot:run

# Run tests only
./mvnw test

# Run specific test
./mvnw test -Dtest=FeatureServiceTest
```

### Frontend Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Development server with live reload
npm start

# Build for production
npm run build

# Run linter
npm run lint

# Run E2E tests
npm run e2e
```

### Project Structure

```
src/
├── main/
│   ├── java/io/smartbrains/techdebtscore/
│   │   ├── controller/       # REST API endpoints
│   │   ├── service/          # Business logic layer
│   │   ├── repository/       # Data access layer
│   │   ├── model/            # JPA entities
│   │   ├── dto/              # Data transfer objects
│   │   └── exception/        # Global exception handling
│   └── resources/
│       ├── application.properties
│       └── db/migration/     # Flyway SQL migrations
├── app/
│   ├── components/           # Angular standalone components
│   ├── services/             # HTTP and business logic
│   ├── models/               # TypeScript interfaces
│   └── app.module.ts
└── test/                     # Backend unit tests
```

## API Endpoints

### Dashboard
```http
GET /feature/dashboard
```
Returns dashboard data with all features and calculated scores.

### Features
```http
GET /feature/all
```
Returns all features.

```http
POST /feature/add
Content-Type: application/json

{
  "name": "Code Style & Formatting",
  "value": 85.0,
  "weight": 7.0,
  "status": 1
}
```
Creates a new feature with validation.

## Testing

### Backend Tests
```bash
# Run all tests
./mvnw test

# Run with coverage
./mvnw test jacoco:report
# View report: target/site/jacoco/index.html
```

### Frontend Tests
```bash
# Unit tests
npm test

# E2E tests (requires running application)
npm run cypress:run

# Interactive E2E test runner
npm run e2e
```

## Security

### Credentials Management
- Never commit secrets to Git
- Use environment variables for sensitive data
- `.env`, `.env.local`, and `application-local.properties` are git-ignored
- Use strong passwords for production databases

### Known Vulnerabilities
Run security audits regularly:
```bash
npm audit
./mvnw dependency-check:check
```

## Deployment

### Production Build
```bash
# Build JAR with embedded frontend
./mvnw clean package -DskipTests

# Run production JAR
java -jar target/techdebtscore-0.0.1-SNAPSHOT.jar \
  --DB_URL=jdbc:mysql://prod-db:3306/smdb \
  --DB_USER=prod_user \
  --DB_PASSWORD=prod_password
```

### AWS CodeBuild
The project includes `buildspec.yml` for AWS CodeBuild integration with Java 21 and Node 20.

### Environment Configuration
- `application.properties` - Base configuration
- `application-local.properties` - Local development (git-ignored)
- Environment variables override properties files

## Tech Debt Dimensions

### 1. Coding Practices, Style & Formatting (0-100)
Measures coding policies, standards, and procedures for your application and organization.

### 2. Modularity & Coupling (0-100)
Measures the strategy and methods for coupling and decoupling applications & services within your organization.

### 3. Test Coverage & Automated Testing (0-100)
Measures the test coverage and automated testing policies, standards, and procedures for your application and organization.

### 4. Continuous Integration & Delivery (0-100)
Measures the level of CI/CD deployed for your application and organization.

### 5. Lifecycle (0-100)
Measures the end-of-service-life (EOSL) management and lifecycle management policies, standards, and procedures for your application and organization.

### 6. Documentation (0-100)
Measures the documentation and asset management policies, standards, and procedures for your application and organization.

### 7. Homogeneity of Tech Stack (0-100)
Measures the homogeneity of the technical stack policies, standards, and procedures for your application and organization.

### 8. Architectural Complexity (0-100)
Measures the cyclomatic complexity and architectural policies, standards, and procedures for your application and organization.

## Feature Weighting

Each dimension has a configurable weight (0-10) that determines its impact on the final score:
```
Final Score = Σ (dimension_value × dimension_weight)
Maximum Score = 800 (8 dimensions × 100 points × 1.0 average weight)
```

## Modernization History

This application was comprehensively modernized in 2026:
- **Angular 7 → 18**: Modern standalone components, TypeScript 5.4, Bootstrap 5
- **Spring Boot 2.1 → 3.2**: Jakarta EE, modern configuration, service architecture
- **Java 8 → 21**: Virtual threads ready, modern language features
- **Security**: Externalized credentials, input validation, global error handling
- **Testing**: Cypress E2E, JUnit 5, integration tests, 75%+ coverage target
- **Architecture**: Service layer, DTOs, proper separation of concerns

See git history and `CLAUDE.md` for detailed modernization documentation.

## Troubleshooting

### Build Issues
- **Java version error**: Ensure Java 21 is installed and `JAVA_HOME` is set correctly
  ```bash
  java -version  # Should show version 21
  export JAVA_HOME=$(/usr/libexec/java_home -v 21)
  ```
- **Node version error**: Use Node 20 LTS
  ```bash
  node -v  # Should show v20.x
  nvm use 20  # If using nvm
  ```
- **npm peer dependency errors**: Use `--legacy-peer-deps` flag (configured in `.npmrc`)

### Database Issues
- **Connection refused**: Ensure MySQL is running on port 3306
- **Access denied**: Verify database credentials in environment variables
- **Schema not found**: Run Flyway migrations

### Application Issues
- **Port 8081 in use**: Change `server.port` in `application.properties` or stop conflicting process
- **Frontend blank**: Check browser console for errors, verify API connectivity
- **Charts not rendering**: Verify ApexCharts loaded, check network tab for data fetch

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes: `git commit -m "Add my feature"`
4. Push to branch: `git push origin feature/my-feature`
5. Submit a pull request

### Code Style
- Backend: Follow Spring Boot best practices
- Frontend: Run `npm run lint` before committing
- Tests: Maintain 75%+ code coverage

## Support

For issues and questions:
- Create an issue on GitHub
- Review `CLAUDE.md` for architecture documentation
- Check git commit history for implementation details

## License

MIT License

Copyright (c) 2020 Jimmy Hurff

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
