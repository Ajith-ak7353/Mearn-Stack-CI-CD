# 🚀 Discover Dollar – DevOps Engineer Internship Assignment

**Candidate Name:** Ajith Kumar  
**Role:** DevOps Engineer Intern  

---

# 📌 Project Overview

This project demonstrates a complete production-style CI/CD implementation for a full-stack MEAN (MongoDB, Express, Angular, Node.js) application.

The objective of this assignment was to:

- Containerize frontend and backend applications
- Push Docker images to Docker Hub
- Deploy the application on an Ubuntu VM using Docker Compose
- Implement CI/CD for automated build and deployment
- Configure Nginx as a reverse proxy on port 80

---

# 🏗️ Architecture Overview

GitHub Repository  
        ↓  
CI/CD Pipeline (Jenkins / GitHub Actions)  
        ↓  
Docker Hub (Image Registry)  
        ↓  
Ubuntu VM (AWS EC2)  
        ↓  
Docker Compose  
        ↓  
Nginx Reverse Proxy (Port 80)  
        ↓  
Running Application  

---

# 🐳 Dockerization

## Backend

- Base Image: Node.js
- Exposes Port: 8080
- Uses environment variable for MongoDB connection
- Production-ready container build

## Frontend

- Multi-stage Docker build
  - Stage 1: Angular build
  - Stage 2: Nginx for serving static files
- Exposed via Nginx on port 80

---

# 🐳 Docker Hub Repositories

Backend:
https://hub.docker.com/r/ajith7353/backend

Frontend:
https://hub.docker.com/r/ajith7353/frontend

Images are tagged using:
- latest
- Version-based tagging (CI build number)

---

# ☁️ Cloud Infrastructure

- Cloud Provider: AWS EC2
- OS: Ubuntu 22.04
- Instance Type: t3.small
- Docker Installed
- Docker Compose Installed
- Nginx Installed

Security Group Open Ports:
- 22 (SSH)
- 80 (HTTP)

The infrastructure is still active and available for live demo.

---

# 🗄️ Database Setup

MongoDB is configured using the official Docker image:

image: mongo:6

Persistent storage is configured using a Docker volume:

mongo-data

MongoDB communicates internally with backend using Docker networking.

---

# 📦 Docker Compose Configuration

Services included:

- mongodb
- backend
- frontend

Backend exposed internally on port 5000.
Frontend served via Nginx on port 80.

Application accessible via:

Instance Public IP

All services connected using a custom Docker bridge network.

---

# 🔁 CI/CD Pipeline Implementation

CI/CD implemented using Jenkins (or GitHub Actions).

Pipeline automatically performs:

1. Pull latest code from GitHub
2. Build Docker images (frontend & backend)
3. Tag images (latest + version)
4. Push images to Docker Hub
5. Pull latest images on VM
6. Restart containers using Docker Compose

Deployment is fully automated after each code push.

---

# 🌐 Nginx Reverse Proxy Configuration

Nginx is configured to:

- Serve frontend on port 80
- Route API requests to backend container

Example routing:

/        → Frontend  
/api     → Backend  

Application is accessible via:

Instance Public IP

No additional ports required.

---

# ▶️ Step-by-Step Setup Instructions

## 1. Clone Repository

git clone https://github.com/Ajith-ak7353/Mearn-Stack-CI-CD.git  
cd Mearn-Stack-CI-CD

---

## 2. Install Docker & Docker Compose

sudo apt update  
sudo apt install docker.io docker-compose -y  

Enable Docker:

sudo systemctl enable docker  
sudo systemctl start docker  
(make sure the user is added to docker group to execute docker commands)
---

## 3. Start Application

docker-compose up -d  

---

## 4. Verify Running Containers

docker ps  

You should see:
- mongodb
- backend
- frontend

---

## 5. Access Application

Open browser:

http://Instance-Public_IP

---

# 🧠 DevOps Best Practices Implemented

- Containerized microservices architecture
- Multi-stage Docker builds
- Image versioning & tagging strategy
- Automated CI/CD pipeline
- Infrastructure as Code using Docker Compose
- Service networking using Docker bridge network
- Reverse proxy setup
- Persistent database storage
- Environment variable configuration

---

# 🔒 Important Note

The cloud infrastructure has NOT been deleted.

The server can be started anytime for:

- Live CI/CD pipeline demonstration
- Docker deployment walkthrough
- Application demo

---

# 👨‍💻 Author

Ajith Kumar  
DevOps Engineer Internship Assignment  
Discover Dollar
