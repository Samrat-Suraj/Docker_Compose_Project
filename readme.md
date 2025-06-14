

````markdown
# 🚀 ForkFly - Vite App (Dockerized)
````
This project runs a Vite-based frontend inside a Docker container. Follow the instructions below to pull the Docker image, run the container, and access the app in your browser.

---

## 🐳 Docker Usage

### 1. Pull the Docker Image

```bash
docker pull samratsooraj/forkfly:latest
````

### 2. Verify Image is Pulled

```bash
docker images
```

### 3. Run the Docker Container

```bash
docker run -d --name forkfly-ctl -p 5173:5173 samratsooraj/forkfly
```

* `-d`: Run container in detached mode
* `--name`: Name the container `forkfly-ctl`
* `-p 5173:5173`: Maps local port 5173 to container port 5173

### 4. Check Running Containers

```bash
docker ps
```

---

## 🌐 Access the App

Open your browser and visit:

[http://localhost:5173/](http://localhost:5173/)

----

---

## 🧑‍💻 Maintainer

**Samrat Sooraj**
📦 Docker Hub: [samratsooraj/forkfly](https://hub.docker.com/r/samratsooraj/forkfly)

---


