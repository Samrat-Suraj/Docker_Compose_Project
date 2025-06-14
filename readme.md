


````markdown
# Docker Compose Project

This project demonstrates how to set up and run a Docker Compose-based environment with a bind-mounted volume and a custom build.

---

## 🐳 Prerequisites

Make sure Docker and Docker Compose are installed:

```bash
docker --version
docker-compose --version
````

---

## 📦 Clone the Repository

```bash
git clone https://github.com/Samrat-Suraj/Docker_Compose_Project.git
cd Docker_Compose_Project
```

---

## 📁 Create a Named Bind Volume

Create a Docker volume that binds to a specific host directory:

```bash
docker volume create \
  --name frokfly_volume \
  --opt type=none \
  --opt device=/home/suraj/Documents/frokfly_volume \
  --opt o=bind
```

Ensure the `/home/suraj/Documents/frokfly_volume` directory exists on your host system.

---

## 🚀 Build & Start the Project

Use Docker Compose to build and start the containers:

```bash
docker-compose up --build -d
```

---

## 🖥 Access the Application

Open your browser and navigate to:

```
http://localhost:5173
```

---

## 📋 Verify Running Containers

Check if your containers are running:

```bash
docker ps
```

---

## 🧹 Stop and Remove Containers

To stop and clean up all running containers and associated resources:

```bash
docker-compose down
```



## 👤 Author

* **Samrat Suraj**
  [GitHub Profile](https://github.com/Samrat-Suraj)

