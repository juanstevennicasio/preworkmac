# HR Management Platform Skeleton

This repository contains a minimal Node.js/Express skeleton for a Human Resources management platform. It exposes placeholder endpoints for configuration and employees and provides seed and test scripts.

## Scripts

- `npm run dev` – start development server
- `npm start` – start server
- `npm run build` – placeholder build step
- `npm run migrate` – placeholder migration step
- `npm run seed` – run sample seed script
- `npm test` – run placeholder tests

## Environment

Copy `.env.example` to `.env` and adjust variables.

## Endpoints

- `GET /health` – basic health check
- `GET /config` – fetch current configuration
- `PUT /config` – update configuration in memory
- `GET /employees` – list employees in memory
- `POST /employees` – create a new employee

This skeleton is intended as a starting point for the full platform described in the specification.
