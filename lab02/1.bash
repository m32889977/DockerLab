docker run -d dockersamples/static-site
docker ps
docker run --name static-site -e AUTHOR="MS" -d -P dockersamples/static-site
docker port static-site
docker
docker run --name static-site-2 -e AUTHOR="MS2" -p 8888:80 -d -P dockersamples/static-site