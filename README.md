# Full Stack Open — Part 12: Containers

This repository contains my solutions for [Part 12 (Containers)](https://fullstackopen.com/en/part12) of the Full Stack Open course.

## Exercises

- **Chapter 2** (12.1–12.4): Introduction to containers — Ubuntu container basics, running Node.js
- **Chapter 3** (12.5–12.12): Building and configuring containers — Todo backend, MongoDB, Redis
- **Chapter 4** (12.13–12.21): Orchestrating multiple containers — Todo full-stack app with Nginx reverse proxy, development environments, production builds, and Playwright E2E tests

## Running the projects

### Todo App (Chapters 3–4)

```bash
cd todo-app
# Development
docker compose -f docker-compose.dev.yml up --build
# Production
docker compose up --build
```

Access: http://localhost:8080

### My App — Laravel Task List (Exercises 12.22–12.23)

```bash
cd my-app
# Development
docker compose -f docker-compose.dev.yml up --build
# Production
docker compose up --build
```

Access: http://localhost:8080

No `.env` file is needed. The container creates one automatically on first startup using `.env.example` as a template.

> **Note:** Both apps use port 8080. Stop one before starting the other:
> ```bash
> docker compose down   # inside the running app's folder
> ```

---

## My Application (Exercises 12.22–12.23)

For the final exercises, I containerized my own Laravel application:

**Repository:** https://github.com/Pepe2307/Laravel-Task-List
