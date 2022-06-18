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
...

<a name="setup"></a>
## Project setup
```
npm install
```

### Copy .env.example to .env and replace with your values
```
cp .env.example .env
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
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

<a name="j-k8s"></a>
##### Kubernetes Deployment
After we have [configure connection](https://github.com/pan-bellias/Reference-Letters-Client#connect-kubernetes-cluster-with-local-pc-orand-jenkins-server) 
between jenkins user and our k8s cluster, we update secrets and configmaps using also some Ansible to populate ~/.
env values and create all the needed entities such as persistent volume claims, deployments, cluster IPs, ingress, 
services.

Secrets and ConfigMaps could be just prepared from earlier. This is applied to the https ingress, we will see 
later in [SSL configuration](https://github.com/pan-bellias/Reference-Letters-Client#in-kubernetes-environment)

<a name="ansible"></a>
### Deployment with pure Ansible
In order to be able to use Ansible for automation, there is the [ansible-reference-letter-project](https://github.com/). There is installation and usage guide.

* [More Details](https://github.com/pan-bellias/ansible-reference-letter-code#pure-ansible)

<a name="docker"></a>
### Deployment with Docker and docker-compose using Ansible
In order to deploy our project in Docker environment, we use again the [ansible-reference-letter-project]() where we use a playbook that uses an Ansible role to run the application 
with docker-compose according to the [docker-compose.yaml](docker-compose.yaml). In that file, we have defined three 
services, the postgres container with its volume in order to be able to store data, the vuejs container for our 
app taking environmental variables from local .env file (it's ready when we run the playbook from jenkins-server 
where the sensitive values from environmental variables are parametric). The django container is built according 
to the [Dockerfile](Dockerfile). Also, the nginx container 
is defined to start so as to have a web server in front of vuejs container and to be able to pass SSL 
certificates for HTTPS environment. For the HTTPS part we will talk about [later](https://github.com/panagiotisbellias/e-movies-app#in-docker-environment).

* [More Info Here](https://github.com/pan-bellias/ansible-reference-letter-project#ansible--docker)

#### Docker Images - GitHub Container Registry
```bash
# build image
docker build . -t ghcr.io/pan-bellias/ref-letters-client:latest
# push image
docker push ghcr.io/pan-bellias/ref-letters-client:latest
```
Panagiotis Bellias
submodule test
