## DOCKER WITH EXPRESS

Skeleton for API with docker and node

## CHECK CONTAINER

docker container ls -a

## REMOVE CONTAINER

docker container rm CONTAINER_ID

## CHECK IMAGES

docker image ls

## REMOVE IMAGES

docker image rm IMAGE_ID

## BUILD IMAGE

docker build --tag <NAME OF YOUR IMAGE> .
docker build --tag two-fields-app .

## RUN IMAGE CONTAINER

docker run --publish {PORT-to-browser}:{PORT-in-project} --detach --name <name container> <image name>
docker run --publish 8000:8080 --detach --name two-fields-app-container two-fields-app

Check logs

# GET CONTAINER ID

\$ docker ps

# PRINT APP OUTPUT

\$ docker logs <container id>

# EXAMPLE

Running on http://localhost:8080

## STOP CONTAINER

docker stop my_container

## DOCKER COMPOSE FILE

## check docker-compose file

docker-compose config

## BUILD IMAGE AND RUN FOR THE FIRST TIME

docker-compose up --build

# To use in cms
