# Ayush Raj — Software Engineer Portfolio

A responsive full-stack portfolio presenting my work as a Software Engineer focused on Java, Spring Boot, backend systems, and full-stack development. The application pairs a React interface with a Spring Boot REST API for contact submissions, resume delivery, and lightweight download tracking.

- **Live portfolio:** [portfolio-orcin-zeta-43.vercel.app](https://portfolio-orcin-zeta-43.vercel.app/)
- **Source:** [github.com/Ayush-Raj178/Portfolio](https://github.com/Ayush-Raj178/Portfolio)
- **GitHub profile:** [github.com/Ayush-Raj178](https://github.com/Ayush-Raj178)

## Key Features

- Recruiter-oriented presentation of projects, skills, engineering focus, education, and contact information
- Responsive desktop and mobile layouts with accessible navigation
- Light and dark themes with saved browser preference
- Featured Smart Expense architecture walkthrough and API Shield project summary
- Resume download through the backend with a consistent public filename
- Validated Contact form with duplicate-submit protection, timeout/error handling, preserved input after failure, and a direct-email fallback
- Production-aware CORS configuration for the deployed frontend and local development

## Tech Stack

**Frontend**

- React 19 and JavaScript
- Tailwind CSS 3 and custom CSS
- Framer Motion
- Axios
- React Icons
- Jest and React Testing Library

**Backend**

- Java 17
- Spring Boot 3.2
- Spring Web MVC, Validation, Security, Data JPA, Mail, and Thymeleaf
- H2 database
- MapStruct and Lombok
- Maven, JUnit, Mockito, and MockMvc

**Deployment**

- Vercel for the React frontend
- Render for the Dockerized Spring Boot backend

## Architecture and Project Structure

```text
Browser
  └── React frontend (Vercel)
        └── Axios requests
              └── Spring Boot REST API (Render)
                    ├── In-memory H2 storage for contact records and download counts
                    ├── Classpath-hosted resume PDF
                    └── Gmail SMTP contact delivery
```

```text
Portfolio/
├── frontend/
│   ├── public/                  # Browser-facing static assets
│   └── src/
│       ├── components/          # Portfolio sections and interactive controls
│       ├── utils/               # Resume download handling
│       ├── App.js               # Page composition and theme state
│       └── index.css            # Tailwind layers and portfolio styling
├── backend/
│   ├── src/main/java/com/portfolio/
│   │   ├── config/              # Security, CORS, and application configuration
│   │   ├── controller/          # Contact, resume, and API endpoints
│   │   ├── service/             # Persistence and email workflows
│   │   ├── repository/          # Spring Data repositories
│   │   ├── model/               # JPA entities
│   │   ├── dto/                 # API request and response models
│   │   └── mapper/              # DTO-to-entity mapping
│   ├── src/main/resources/
│   │   ├── static/              # Downloadable resume PDF
│   │   └── templates/           # Contact email template
│   ├── Dockerfile
│   └── pom.xml
└── .gitignore
```

## Implemented Functionality

The frontend renders the complete portfolio, persists the selected theme in local storage, links to project repositories and demos, downloads the resume as a browser Blob, and manages Contact states from idle through success or failure.

The backend provides:

- `GET /api` — API information and health response
- `POST /api/contact` — validates and stores a Contact submission, then invokes email delivery
- `GET /api/resume/download` — returns the bundled PDF as `Ayush-Raj-Resume.pdf`
- `GET /api/resume/download-count` — returns the current runtime's stored download count

## Local Setup

### Prerequisites

- Node.js and npm
- Java Development Kit 17
- Maven 3.8 or later

Clone the repository:

```bash
git clone https://github.com/Ayush-Raj178/Portfolio.git
cd Portfolio
```

### Environment Variables

Configure secrets through your shell, IDE, or hosting provider. Never commit credentials or Gmail App Passwords.

- `SPRING_MAIL_PASSWORD` — required by the backend for authenticated SMTP delivery
- `REACT_APP_API_BASE_URL` — frontend backend-base URL; optional locally because the frontend defaults to `http://localhost:8080`
- `PORT` — optional backend HTTP port override; defaults to `8080`

### Run the Backend

After configuring `SPRING_MAIL_PASSWORD`:

```bash
cd backend
mvn spring-boot:run
```

The local API is available at `http://localhost:8080/api` when the default port is used.

### Run the Frontend

In another terminal:

```bash
cd frontend
npm ci
npm start
```

The development server uses the local backend default unless `REACT_APP_API_BASE_URL` is configured.

## Build and Test

Frontend:

```bash
cd frontend
npm test -- --watchAll=false
npm run build
```

Backend:

```bash
cd backend
mvn clean verify
```

The backend Docker image can be built from `backend/Dockerfile`.

## Deployment

The frontend is deployed on [Vercel](https://portfolio-orcin-zeta-43.vercel.app/) and communicates with the Spring Boot backend at [portfolio-sfmy.onrender.com](https://portfolio-sfmy.onrender.com/api), hosted on Render. Production configuration supplies the frontend API base URL and the backend mail secret outside source control.

> **Deployment note:** The Contact form is implemented with Gmail SMTP on port 587. The current backend is hosted on Render Free, which blocks outbound SMTP traffic on ports 25, 465, and 587. Consequently, email delivery from the deployed Contact form may be unavailable on the free hosting tier even though the application-side Contact flow is implemented. This is an infrastructure limitation rather than a frontend validation issue; local SMTP behavior may differ. Credentials and App Passwords must remain outside the repository.

Render Free services can also spin down while idle, so the first backend request after inactivity may take longer than subsequent requests.
