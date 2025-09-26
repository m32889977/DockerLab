# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a Docker learning laboratory (`DockerLab`) containing progressive Docker tutorials and exercises. The repository is structured with numbered labs that demonstrate different Docker concepts and features.

## Repository Structure

- `setup/`: Initial Docker setup and hello-world test
- `lab01/`: Basic Docker image pulling, running containers, and interactive shells
- `lab02/`: Container deployment, port mapping, and Flask application containerization
- `lab03/`: (Empty, for future exercises)
- `lab02/flask-app/`: Complete Flask web application with Docker containerization

## Common Docker Commands

Based on the lab exercises, these are the most frequently used commands:

### Basic Docker Operations
```bash
# Test Docker installation
docker run hello-world

# Pull and run basic containers
docker pull alpine
docker run alpine ls -l
docker run -it alpine /bin/sh

# View containers and images
docker ps          # running containers
docker ps -a       # all containers
docker images      # all images
```

### Flask Application (lab02)
```bash
# Build the Flask app image
docker build -t m32889977/myfirstapp lab02/flask-app/

# Run the Flask app
docker run -p 8888:5000 --name myfirstapp m32889977/myfirstapp

# Alternative static site examples
docker run --name static-site -e AUTHOR="MS" -d -P dockersamples/static-site
docker run --name static-site-2 -e AUTHOR="MS2" -p 8888:80 -d dockersamples/static-site
```

## Flask Application Architecture

The `lab02/flask-app/` contains a simple Flask web application that displays random cat GIFs:

- **Base Image**: Alpine Linux with Python 3 and pip
- **Application**: Flask app serving random cat images from a predefined list
- **Port**: Exposes port 5000 internally, typically mapped to 8888 externally
- **Template**: Single HTML template for rendering the web interface

## Development Notes

- All lab scripts (`.bash` files) contain executable Docker commands for learning purposes
- The Flask application uses `--break-system-packages` flag due to modern pip restrictions
- Port mappings typically use 8888 as the external port for web applications