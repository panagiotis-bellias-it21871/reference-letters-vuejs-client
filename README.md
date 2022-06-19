# reference-letters-vuejs-client
A front end web application about reference letter handling in the context of DIT HUA Thesis "Use of devops methodologies and tools in development and production environment of web applications"

<p align="left"> <img src="https://komarev.com/ghpvc/?username=panagiotis-bellias-it21871&label=Profile%20views&color=0e75b6&style=flat" alt="panagiotis-bellias-it21871" /> </p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a>
</p>

<a name="contents"></a>
## Table Of Contents
1. [Table Of Contents](#contents)  
2. [Project setup](#setup)  
3. [Deploy vuejs project to a VM (Virtual Machine)](#deployment)  
3.1. [CI/CD tool configuration (Jenkins Server)](#jenkins)  
3.2. [Deployment with Docker and docker-compose using Ansible](#docker) 

<a name="setup"></a>
## Project setup
```bash
npm install
cp .env.example .env # Copy .env.example to .env and replace with your values
npm run serve # Compiles and hot-reloads for development
```

### Compiles and minifies for production
``` bash
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

[See what you have done](http://127.0.0.1:8000/)

<a name="deployment"></a>
## Deploy vuejs project to a VM (Virtual Machine)
For deployment see [here](https://github.com/panagiotis-bellias-it21871/reference-letters-system#deploy-fastapi-and-vuejs-projects-to-a-vm-virtual-machine) 

<a name="jenkins"></a>
### CI/CD tool configuration (Jenkins Server)
For jenkins configuration see [here](https://github.com/panagiotis-bellias-it21871/reference-letters-system#cicd-tool-configuration-jenkins-server) 

<a name="docker"></a>
### Deployment with Docker and docker-compose using Ansible

The vuejs container is built according
to the [Dockerfile](Dockerfile)

More about deployment with Docker see [here](https://github.com/panagiotis-bellias-it21871/reference-letters-system#deployment-with-docker-and-docker-compose-using-ansible) and [here](https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code#docker)

#### Docker Images - GitHub Container Registry
```bash
# build image
docker build . -t ghcr.io/pan-bellias/ref-letters-client:latest
# push image
docker push ghcr.io/pan-bellias/ref-letters-client:latest
```