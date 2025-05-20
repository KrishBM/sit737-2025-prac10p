# SIT737 Task 10.1P: Monitoring and Visibility

## Project Overview
This repository contains implementation files for Task 10.1P of SIT737, focusing on containerization, deployment, and monitoring of a Node.js application. The project demonstrates cloud deployment processes with appropriate monitoring configurations.

## Repository Structure
- **index.js**: Express.js web application with basic form functionality and health check endpoint
- **Dockerfile**: Container configuration for the Node.js application
- **docker-compose.yml**: Multi-service orchestration with health check and resource configurations
- **deployment.yaml**: Kubernetes deployment manifest with security context and container specifications
- **service.yaml**: Kubernetes service configuration for load balancing

## Implementation Steps

### 1. Local Development
- Created GitHub repository and cloned locally
- Initialized Node.js project with `npm init -y`
- Implemented Express.js application with form submission and health check endpoint

### 2. Containerization
- Created Dockerfile with security best practices:
  - Non-root user implementation
  - Dependencies installation optimization
  - Port exposure configuration
- Established docker-compose.yml with resource limits and monitoring settings

### 3. Kubernetes Configuration
- Defined deployment.yaml with security context and container specifications
- Created service.yaml for load balancing and external access

### 4. Google Cloud Deployment
- Built Docker image: `docker build -t nodejs-app:latest`
- Configured Google Artifact Registry repository "node-project"
- Authenticated with Google Cloud
- Configured Docker for Google Artifact Registry integration
- Tagged and pushed Docker image to Artifact Registry
- Deployed service to Google Cloud Run

### 5. Authentication Configuration
- Implemented developer authentication using authentication tokens
- Tested deployment with Postman using Bearer token authentication

### 6. Monitoring and Visibility
- Implemented logging configuration
- Configured CPU and memory metrics monitoring
- Added filters for project_id, location, and cluster_name

## Technologies Utilized
- Node.js/Express.js
- Docker and Docker Compose
- Kubernetes
- Google Cloud Platform (Artifact Registry, Cloud Run)
- Monitoring and observability tools

## Access Information
The application is deployed and accessible through Google Cloud Run with appropriate authentication.

## Repository URL
[https://github.com/KrishBM/sit737-2025-prac10p](https://github.com/KrishBM/sit737-2025-prac10p)
