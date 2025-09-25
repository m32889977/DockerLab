docker pull alpine # pull a new image
docker images # see all images on our system

# Testing some runs with different output
docker run alpine ls -l
docker run alpine echo "hello from alpine"

# Shell will exit instantly
docker run alpine /bin/sh

# Same thing but with an interactive shell
docker run -it alpine /bin/sh

docker ps # shows all running containers
docker ps -a # shows previously run containers