<template>
  <div class="about">
    <h1 id="reference-letters-system">reference-letters-system</h1>
<p>A web system about reference letter handling in the context of DIT HUA Thesis &quot;Use of devops methodologies and tools in development and production environment of web applications&quot;</p>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=panagiotis-bellias-it21871&label=Profile%20views&color=0e75b6&style=flat" alt="panagiotis-bellias-it21871" /> </p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://azure.microsoft.com/en-in/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="40" height="40"/> </a> <a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.jenkins.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" alt="jenkins" width="40" height="40"/> </a> <a href="https://kubernetes.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
</p>

<p><a name="locally"></a></p>
<h2 id="setup-run-projects-locally-installation-">Setup &amp; Run Projects Locally (Installation)</h2>
<h3 id="clone-repository-with-submodules">Clone repository with submodules</h3>
<pre><code class="lang-bash">git <span class="hljs-keyword">clone</span> <span class="hljs-title">--recurse-submodules</span> https://github.com/panagiotis-bellias-it21871/<span class="hljs-keyword">reference</span>-letters-system.git
cd <span class="hljs-keyword">reference</span>-letters-system
</code></pre>
<h1 id="reference-letters-fastapi-server">reference-letters-fastapi-server</h1>
<p>A back end web application about reference letter handling in the context of DIT HUA Thesis &quot;Use of devops methodologies and tools in development and production environment of web applications&quot;</p>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=panagiotis-bellias-it21871&label=Profile%20views&color=0e75b6&style=flat" alt="panagiotis-bellias-it21871" /> </p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
<a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
</p>

<p><a name="locally"></a></p>
<h2 id="run-project-locally-installation-">Run Project Locally (Installation)</h2>
<p><a name="clone"></a></p>
<h3 id="clone-and-initialize-project">Clone and initialize project</h3>
<pre><code class="lang-bash">git clone https:<span class="hljs-comment">//github.com/panagiotis-bellias-it21871/reference-letters-fastapi-server.git</span>
virtualenv fvenv -<span class="hljs-selector-tag">p</span> python3<span class="hljs-selector-class">.X</span>
source fvenv/bin/activate
pip install -r requirements.txt
</code></pre>
<p>and</p>
<pre><code class="lang-bash">cp ref_letters/<span class="hljs-selector-class">.env</span><span class="hljs-selector-class">.example</span> ref_letters/.env
</code></pre>
<p>editting .env file to define</p>
<pre><code class="lang-vim">DATABASE_URL=sqlite:<span class="hljs-comment">///./dev.db</span>
ORIGINS = <span class="hljs-string">"http://127.0.0.1:8000"</span> # client's ip and port
KC_SERVER_URL=<span class="hljs-string">"https://auth.some-domain.com/auth"</span>
KC_CLIENT_ID=<span class="hljs-string">"test-client"</span>
KC_REALM=<span class="hljs-string">"Test"</span>
KC_CLIENT_SECRET=<span class="hljs-string">"GzgACcJzhzQ4j8kWhmhazt7WSdxDVUyE"</span>
</code></pre>
<p>or</p>
<pre><code class="lang-bash">cp ref_letters/<span class="hljs-selector-class">.env</span><span class="hljs-selector-class">.docker</span><span class="hljs-selector-class">.example</span> ref_letters/.env
</code></pre>
<pre><code class="lang-vim">DATABASE_URL=postgresql:<span class="hljs-comment">//&lt;DB-USERNAME&gt;:&lt;DB-PASSWORD&gt;@localhost:5432/&lt;DB-NAME&gt;</span>
ORIGINS = <span class="hljs-string">"http://vuejs/"</span> # client's ip and port
KC_SERVER_URL=<span class="hljs-string">"http://keycloak_auth:8085/auth/"</span>
KC_CLIENT_ID=<span class="hljs-string">"fastapi-service"</span>
KC_REALM=<span class="hljs-string">"Clients"</span>
KC_CLIENT_SECRET=<span class="hljs-string">"GzgACcJzhzQ4j8kWhmhazt7WSdxDVUyE"</span>
</code></pre>
<p>in case you want to use postgresql either you are in a docker environment or not. First you should have created a database using <a href="https://www.youtube.com/watch?v=1wvDVBjNDys">pgAdmin</a> or command line.
The other variables are referred in keycloak usage where you should suit them according to the environment where keycloak service is running.</p>
<p><a name="run_server"></a></p>
<h3 id="run-application-server">Run application server</h3>
<pre><code class="lang-bash"><span class="hljs-selector-tag">uvicorn</span> <span class="hljs-selector-tag">ref_letters</span><span class="hljs-selector-class">.main</span><span class="hljs-selector-pseudo">:app</span> <span class="hljs-selector-tag">--reload</span>
</code></pre>
<p><a href="http://127.0.0.1:8080/">See what you have done</a></p>
<p><a name="deployment"></a></p>
<h2 id="deploy-fastapi-project-to-a-vm-virtual-machine-">Deploy fastapi project to a VM (Virtual Machine)</h2>
<p>For deployment see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#deploy-fastapi-and-vuejs-projects-to-a-vm-virtual-machine">here</a> </p>
<p><a name="jenkins"></a></p>
<h3 id="ci-cd-tool-configuration-jenkins-server-">CI/CD tool configuration (Jenkins Server)</h3>
<p>For jenkins configuration see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#cicd-tool-configuration-jenkins-server">here</a> </p>
<p><a name="docker"></a></p>
<h3 id="deployment-with-docker-and-docker-compose-using-ansible">Deployment with Docker and docker-compose using Ansible</h3>
<p>The fastapi container is built according
to the <a href="nonroot.Dockerfile">nonroot.Dockerfile</a> as a nonroot process for safety reasons.</p>
<p>More about deployment with Docker see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#deployment-with-docker-and-docker-compose-using-ansible">here</a> and <a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code#docker">here</a></p>
<h4 id="docker-images-github-container-registry">Docker Images - GitHub Container Registry</h4>
<ul>
<li><a href="https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry">Link for Info</a></li>
</ul>
<pre><code class="lang-bash"># <span class="hljs-keyword">build </span>image
<span class="hljs-symbol">docker</span> <span class="hljs-keyword">build </span>. -t ghcr.io/panagiotis-<span class="hljs-keyword">bellias-it21871/ref-letters-fastapi-server:latest </span>-f nonroot.Dockerfile
# <span class="hljs-keyword">push </span>image
<span class="hljs-symbol">docker</span> <span class="hljs-keyword">push </span>ghcr.io/panagiotis-<span class="hljs-keyword">bellias-it21871/ref-letters-fastapi-server:latest</span>
</code></pre>

<h1 id="reference-letters-vuejs-client">reference-letters-vuejs-client</h1>
<p>A front end web application about reference letter handling in the context of DIT HUA Thesis &quot;Use of devops methodologies and tools in development and production environment of web applications&quot;</p>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=panagiotis-bellias-it21871&label=Profile%20views&color=0e75b6&style=flat" alt="panagiotis-bellias-it21871" /> </p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a>
</p>

<p><a name="setup"></a></p>
<h2 id="project-setup">Project setup</h2>
<pre><code class="lang-bash">npm <span class="hljs-keyword">install</span>
cp .env.example .env # Copy .env.example <span class="hljs-keyword">to</span> .env <span class="hljs-keyword">and</span> <span class="hljs-keyword">replace</span> <span class="hljs-keyword">with</span> your <span class="hljs-keyword">values</span>
npm run serve # Compiles <span class="hljs-keyword">and</span> hot-reloads <span class="hljs-keyword">for</span> development
</code></pre>
<h3 id="compiles-and-minifies-for-production">Compiles and minifies for production</h3>
<pre><code class="lang-bash">npm <span class="hljs-keyword">run</span><span class="bash"> build</span>
</code></pre>
<h3 id="lints-and-fixes-files">Lints and fixes files</h3>
<pre><code>npm <span class="hljs-keyword">run</span><span class="bash"> lint</span>
</code></pre><h3 id="customize-configuration">Customize configuration</h3>
<p>See <a href="https://cli.vuejs.org/config/">Configuration Reference</a>.</p>
<p><a href="http://127.0.0.1:8000/">See what you have done</a></p>
<p><a name="deployment"></a></p>
<h2 id="deploy-vuejs-project-to-a-vm-virtual-machine-">Deploy vuejs project to a VM (Virtual Machine)</h2>
<p>For deployment see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#deploy-fastapi-and-vuejs-projects-to-a-vm-virtual-machine">here</a> </p>
<p><a name="jenkins"></a></p>
<h3 id="ci-cd-tool-configuration-jenkins-server-">CI/CD tool configuration (Jenkins Server)</h3>
<p>For jenkins configuration see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#cicd-tool-configuration-jenkins-server">here</a> </p>
<p><a name="docker"></a></p>
<h3 id="deployment-with-docker-and-docker-compose-using-ansible">Deployment with Docker and docker-compose using Ansible</h3>
<p>The vuejs container is built according
to the <a href="Dockerfile">Dockerfile</a></p>
<p>More about deployment with Docker see <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#deployment-with-docker-and-docker-compose-using-ansible">here</a> and <a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code#docker">here</a></p>
<h4 id="docker-images-github-container-registry">Docker Images - GitHub Container Registry</h4>
<pre><code class="lang-bash"># <span class="hljs-keyword">build </span>image
<span class="hljs-symbol">docker</span> <span class="hljs-keyword">build </span>. -t ghcr.io/panagiotis-<span class="hljs-keyword">bellias-it21871/ref-letters-vuejs-client:latest
</span># <span class="hljs-keyword">push </span>image
<span class="hljs-symbol">docker</span> <span class="hljs-keyword">push </span>ghcr.io/panagiotis-<span class="hljs-keyword">bellias-it21871/ref-letters-vuejs-client:latest</span>
</code></pre>


<p><a name="deployment"></a></p>
<h2 id="deploy-fastapi-and-vuejs-projects-to-a-vm-virtual-machine-">Deploy fastapi and vuejs projects to a VM (Virtual Machine)</h2>
<p>We are going to need 3 VMs. One for the jenkins server and one for each execution environment (docker and kubernetes)</p>
<ul>
<li><a href="https://docs.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal">Create VM in Azure Portal</a></li>
<li><a href="https://help.skytap.com/connect-to-a-linux-vm-with-ssh.html">SSH Access to VMs</a></li>
<li><a href="https://linuxize.com/post/using-the-ssh-config-file/">SSH Automation</a></li>
<li><a href="https://azure.microsoft.com/en-au/resources/videos/azure-friday-how-to-reserve-a-public-ip-range-in-azure-using-public-ip-prefix/">Reserve Static IP in Azure</a></li>
</ul>
<p><a name="jenkins"></a></p>
<h3 id="ci-cd-tool-configuration-jenkins-server-">CI/CD tool configuration (Jenkins Server)</h3>
<ul>
<li><a href="https://www.jenkins.io/doc/book/installing/linux/">Install Jenkins</a></li>
</ul>
<p>Make sure service is running</p>
<pre><code class="lang-bash">sudo systemctl status jenkins
netstat -anlp | grep <span class="hljs-number">8080</span> # needs <span class="hljs-keyword">package</span> <span class="hljs-title">net-tools</span>
</code></pre>
<p><a href="http://PUBLIC-IP:8080/">http://PUBLIC-IP:8080/</a></p>
<p><a name="conf_shell"></a></p>
<h4 id="step-1-configure-shell">Step 1: Configure Shell</h4>
<p>Go to Dashboard / Manage Jenkins / Configure System / Shell / Shell Executable and type &#39;/bin/bash&#39;</p>
<p><a name="webhooks"></a></p>
<h4 id="step-2-add-webhooks-to-system-repository">Step 2: Add webhooks to system repository</h4>
<p><a href="https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/duplicating-a-repository">Dublicate</a> repositories for easier configuration.</p>
<ul>
<li><a href="https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project">Add Webhooks - see until Step 4</a></li>
</ul>
<p><a name="credentials"></a></p>
<h4 id="step-3-add-the-credentials-needed">Step 3: Add the credentials needed</h4>
<ul>
<li><a href="https://plugins.jenkins.io/ssh-agent/">Add SSH keys &amp; SSH Agent plugin</a> with id &#39;ssh-docker-vm&#39; to access docker-vm</li>
<li><a href="https://www.jenkins.io/doc/book/using/using-credentials/">Add Secret Texts</a> for every environmental variable we
need to define in our projects during deployment, like below</li>
</ul>
<pre><code class="lang-nano"><span class="hljs-comment"># ID                            What is the value?</span>
app-psql-user                   The backend database user
app-psql-pass                   The password <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> <span class="hljs-keyword">above</span> user
app-psql-db                     The database we have <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> backend functionality
auth-psql-user                  The keycloak database user
auth-psql-pass                  The password <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> <span class="hljs-keyword">above</span> user
auth-psql-db                    The database we have users' credentials <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> system
docker-db-url                   The database url <span class="hljs-keyword">where</span> our postgres db <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> using docker
docker-keycloak-server-url      The url <span class="hljs-keyword">where</span> keycloak <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> using docker
docker-keycloak-client-<span class="hljs-built_in">id</span>       The client <span class="hljs-built_in">id</span> we need <span class="hljs-keyword">to</span> connect <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> docker
docker-keycloak-realm           The realm we connect <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> docker  
docker-keycloak-client-secret   The client secret we use <span class="hljs-keyword">for</span> authentication <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> docker
docker-vue-backend-url          The url <span class="hljs-keyword">where</span> backend <span class="hljs-built_in">application</span> <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> <span class="hljs-keyword">in</span> docker
docker-username                 The username we have <span class="hljs-keyword">in</span> <span class="hljs-keyword">the</span> container registry we use <span class="hljs-keyword">to</span> push images
docker-push-secret              The secret we have <span class="hljs-keyword">in</span> <span class="hljs-keyword">the</span> container registry we use <span class="hljs-keyword">to</span> push images
docker-container-registry       The container registry you use (e.g. ghcr.io <span class="hljs-keyword">for</span> Github Container Registry). If you use DockerHub, create <span class="hljs-keyword">it</span> <span class="hljs-keyword">with</span> no value
docker-backend-prefix-image     The docker image <span class="hljs-built_in">name</span> <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> backend <span class="hljs-built_in">application</span>
docker-frontend-prefix-image    The docker image <span class="hljs-built_in">name</span> <span class="hljs-keyword">for</span> <span class="hljs-keyword">the</span> frontend <span class="hljs-built_in">application</span>
k8s-db-url                      The database url <span class="hljs-keyword">where</span> our postgres db <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> using kubernetes
k8s-keycloak-server-url         The url <span class="hljs-keyword">where</span> keycloak <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> using kubernetes
k8s-keycloak-client-<span class="hljs-built_in">id</span>          The client <span class="hljs-built_in">id</span> we need <span class="hljs-keyword">to</span> connect <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> kubernetes  
k8s-keycloak-realm              The realm we connect <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> kubernetes  
k8s-keycloak-client-secret      The client secret we use <span class="hljs-keyword">for</span> authentication <span class="hljs-keyword">with</span> keycloak <span class="hljs-keyword">in</span> kubernetes 
k8s-vue-backend-url             The url <span class="hljs-keyword">where</span> backend <span class="hljs-built_in">application</span> <span class="hljs-keyword">is</span> <span class="hljs-built_in">running</span> <span class="hljs-keyword">in</span> kubernetes
</code></pre>
<p><a name="job"></a></p>
<h4 id="create-job">Create Job</h4>
<ul>
<li><a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code">More for Ansible</a></li>
<li><a href="https://www.jenkins.io/doc/pipeline/tour/hello-world/">Create Pipeline project</a></li>
<li><a href="https://www.blazemeter.com/blog/how-to-integrate-your-github-repository-to-your-jenkins-project">Add Webhooks to job - see until Step 9</a></li>
</ul>
<p>In the job the pipeline will be the <a href="fastapi.vue.Jenkinsfile">fastapi.vue.Jenkinsfile</a></p>
<p><a name="build"></a></p>
<h5 id="build-stage">Build stage</h5>
<p>Takes the code from the git repository and its submodules</p>
<p><a name="unit-test"></a></p>
<h5 id="unit-testing-stage">Unit Testing stage</h5>
<p>For the backend application activates a virtual environment, installs the requirements, copies the .env.example to use it as .env with some
demo values for testing and uses pytest so the application can be tested before goes on production.
For the frontend application installs the requirements, executes the tests so the application can be tested before goes on production.</p>
<p>NOTE: connect to your jenkins vm and do the below line so the test stage can run</p>
<pre><code class="lang-bash">&lt;username&gt;@&lt;vm-name&gt;:~$ sudo apt-<span class="hljs-built_in">get</span> install libpcap-<span class="hljs-built_in">dev</span> libpq-<span class="hljs-built_in">dev</span>
</code></pre>
<p><a name="integration-test"></a></p>
<h5 id="integration-testing-stage">Integration Testing stage</h5>
<p>...</p>
<p><a name="ansible-prerequisites"></a></p>
<h5 id="ansible-prerequisites-stage">Ansible Prerequisites stage</h5>
<pre><code class="lang-bash">sudo su
sudo apt update
sudo apt install software-properties-common
sudo<span class="hljs-built_in"> add-apt-repository </span>--yes --update ppa:ansible/ansible
sudo apt install ansible
ansible-galaxy collection install community.docker
</code></pre>
<p><a name="j-docker"></a></p>
<h5 id="docker-deployment">Docker Deployment</h5>
<p>Ansible connects to the docker-vm through ssh and runs a playbook that it will define the sensitive parameters and 
will use docker-compose module to do docker-compose up the containers according to <a href="docker-compose.yml">docker-compose.yml</a></p>
<p>So, to deploy our app we need a docker image updated. So we build the images according to <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-fastapi-server/blob/main/nonroot.Dockerfile">nonroot.Dockerfile</a> and <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-vuejs-client/blob/master/Dockerfile">Dockerfile</a>, we are logging in Github Container Registry (we will talk about it later) and push the image there to be public available.</p>
<p><a name="j-k8s"></a></p>
<h5 id="kubernetes-deployment">Kubernetes Deployment</h5>
<p>After we have <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#connect-kubernetes-cluster-with-local-pc-orand-jenkins-server">configure connection</a>
between jenkins user and our k8s cluster, we update secrets and configmaps using also some Ansible to populate ~/.env values and create all the needed entities such as persistent volume claims, deployments, cluster IPs, ingress,
services.</p>
<p>Secrets and ConfigMaps could be just prepared from earlier. This is applied to the https ingress, we will see
later in <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#in-kubernetes-environment">SSL configuration</a></p>
<p><a name="docker"></a></p>
<h3 id="deployment-with-docker-and-docker-compose-using-ansible">Deployment with Docker and docker-compose using Ansible</h3>
<p>In order to be able to use Ansible for automation, there is the <a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code">ansible-reference-letter-project</a>. There is installation and usage guide.</p>
<p>Now, In order to deploy our project in Docker environment, we use a playbook that uses an Ansible role to run the application
with docker-compose according to the <a href="docker-compose.yml">docker-compose.yml</a>. In that file, we have defined three
services, the postgres container with its volume in order to be able to store data, the fastapi container and the vuejs container for our
system taking environmental variables from local .env files (it&#39;s ready when we run the playbook from jenkins-server
where the sensitive values from environmental variables are parametric). The fastapi container is built according
to the <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-fastapi-server/blob/main/nonroot.Dockerfile">nonroot.Dockerfile</a> as a nonroot process for safety reasons.
The vuejs container is built according
to the <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-vuejs-client/blob/master/Dockerfile">Dockerfile</a>.</p>
<p>For the HTTPS part we will talk about <a href="https://github.com/panagiotis-bellias-it21871/reference-letters-system#in-docker-environment">later</a>.</p>
<ul>
<li><a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code#docker">More Details</a></li>
</ul>
<p><a name="k8s"></a></p>
<h3 id="deployment-with-kubernetes-using-a-piece-of-ansible">Deployment with Kubernetes using a piece of Ansible</h3>
<p>In order to deploy our project in Kubernetes cluster, we first need to connect to that VM so as to configure a better connection between local PC or jenkins server and deployment vm&#39;s:</p>
<ul>
<li><a href="https://ubuntu.com/tutorials/install-a-local-kubernetes-with-microk8s#2-deploying-microk8s">Installing microk8s</a></li>
<li>Do this trick to write less in terminal<pre><code class="lang-bash"><span class="hljs-keyword">echo</span> <span class="hljs-string">"alias k='microk8s.kubectl' "</span> &gt;&gt; ~/.<span class="hljs-keyword">profile</span>
</code></pre>
The permanent alias will be applied only if you reconnect to your VM.</li>
</ul>
<h4 id="cluster-configuration-enable-addons">Cluster Configuration &amp; Enable Addons</h4>
<pre><code class="lang-bash">sudo usermod -<span class="hljs-selector-tag">a</span> -G microk8s &lt;your-username&gt;
sudo chown -f -R &lt;your-username&gt; ~/<span class="hljs-selector-class">.kube</span>
microk8s enable dns dashboard storage ingress
microk8s status
</code></pre>
<h4 id="connect-kubernetes-cluster-with-local-pc-or-and-jenkins-server">Connect Kubernetes Cluster with Local PC or/and Jenkins server</h4>
<pre><code class="lang-bash"><span class="hljs-comment"># VM's terminal</span>
k config view --raw &gt; kube-config
cat kube-config

<span class="hljs-comment"># Local terminal</span>
mkdir ~<span class="hljs-regexp">/.kube
scp &lt;vm-name&gt;:/home</span><span class="hljs-regexp">/&lt;vm-username&gt;/kube</span>-config ~<span class="hljs-regexp">/.kube/config</span>
</code></pre>
<p>Edit ~/.kube/config to replace the 127.0.0.1 with the VM&#39;s public ip and the certificate line in clusters section 
with the below line (not used this way in a real production environment)</p>
<pre><code class="lang-bash">insecure-skip-tls-<span class="hljs-string">verify:</span> <span class="hljs-literal">true</span>
</code></pre>
<ul>
<li>Don&#39;t forget to add a firewall rule for the port specified in the ~/.kube/config file
With<pre><code class="lang-bash">kubectl <span class="hljs-keyword">get</span> pods
</code></pre>
you can ensure that the connection is established.</li>
</ul>
<p>If you use CI/CD tool and mostly Jenkins do the following (for better deployment fork the repository to be able to 
change code where needed):</p>
<pre><code class="lang-bash"><span class="hljs-comment"># Jenkins terminal</span>
sudo su
curl -LO <span class="hljs-string">"https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"</span>
sudo install -o root -g root -m <span class="hljs-number">0755</span> kubectl <span class="hljs-regexp">/usr/</span>local<span class="hljs-regexp">/bin/</span>kubectl
su jenkins
cd

<span class="hljs-comment"># Local terminal</span>
scp ~<span class="hljs-regexp">/.kube/</span>config &lt;jenkins-vm-name&gt;:<span class="hljs-regexp">/tmp/</span>config

<span class="hljs-comment"># Jenkins terminal</span>
mkdir -p .kube
cp <span class="hljs-regexp">/tmp/</span>config ~<span class="hljs-regexp">/.kube/</span>
</code></pre>
<p>With</p>
<pre><code class="lang-bash">kubectl <span class="hljs-keyword">get</span> pods
</code></pre>
<p>you can ensure that the connection is established.</p>
<h3 id="kubernetes-entities">Kubernetes Entities</h3>
<p>Either manually or via jenkins server using Jenkinsfile and secret texts the following will do the trick! The code is located in the k8s folder of each project, so every time we must change directory to be located in the correct application folder. The code is in the <code>.yaml</code> format.</p>
<ul>
<li>Don&#39;t forget to have the docker images in Github Container Registry because the deployment entities use them. You can follow the logic located in <a href="fastapi.vue.Jenkinsfile">fastapi.vue.Jenkinsfile</a> in the &#39;Docker Deployment&#39; stage. You must have docker installed in your local machine (or jenkins server)</li>
<li>In projects&#39; README.md files you will find information about the docker image each application is dockerized in.</li>
</ul>
<pre><code class="lang-bash"><span class="hljs-comment"># Secret (for the postgresql database)</span>
kubectl create secret generic pg-users \
--<span class="hljs-keyword">from</span>-literal=PGUSER=&lt;put <span class="hljs-keyword">user</span> name here&gt; \
--<span class="hljs-keyword">from</span>-literal=PGPASSWORD=&lt;put password here&gt; \
--<span class="hljs-keyword">from</span>-literal=FAUSER=&lt;put backend username here&gt; \
--<span class="hljs-keyword">from</span>-literal=FAPASSWORD=&lt;put backend password here&gt; \
--<span class="hljs-keyword">from</span>-literal=FADBNAME=&lt;put backend database name here&gt;

<span class="hljs-comment"># Config Map (for database initialization)</span>
kubectl create configmap pg-init-script \
--<span class="hljs-keyword">from</span>-literal=fastapi.sh=assets/init_db/fastapi.sh

<span class="hljs-comment">## If you want keycloak service (for now it isn't integrated) run this instead</span>
kubectl create configmap pg-init-script \
--<span class="hljs-keyword">from</span>-literal=fastapi.sh=assets/init_db/fastapi.sh \
--<span class="hljs-keyword">from</span>-literal=keycloak.sh=assets/init_db/keycloak.sh

!<span class="hljs-comment"># ISSUE with database initialization for now</span>

<span class="hljs-comment"># Continue from here</span>
cd reference-letters-fastapi-server

<span class="hljs-comment"># Config Map (for .env variables)</span>
cp ref_letters/.<span class="hljs-keyword">env</span>.k8s.example ref_letters/.<span class="hljs-keyword">env</span>
nano ref_letters/.<span class="hljs-keyword">env</span> <span class="hljs-comment"># change to the correct values</span>
kubectl create configmap fastapi-config --<span class="hljs-keyword">from</span>-<span class="hljs-keyword">env</span>-file=ref_letters/.<span class="hljs-keyword">env</span>

cd k8s
<span class="hljs-comment"># Persistent Volume Claim</span>
kubectl apply -f db/postgres-pvc.yaml
<span class="hljs-comment"># Deployments</span>
kubectl apply -f db/postgres-deployment.yaml
kubectl apply -f fastapi/fastapi-deployment.yaml
<span class="hljs-comment"># Services (Cluster IPs)</span>
kubectl apply -f db/postgres-clip.yaml
kubectl apply -f fastapi/fastapi-clip.yaml

cd ../..
cd reference-letters-vuejs-client

<span class="hljs-comment"># Config Map (for .env variables)</span>
cp .<span class="hljs-keyword">env</span>.k8s.example .<span class="hljs-keyword">env</span>
nano .<span class="hljs-keyword">env</span> <span class="hljs-comment"># change to the correct values</span>
kubectl create configmap vuejs-config --<span class="hljs-keyword">from</span>-<span class="hljs-keyword">env</span>-file=.<span class="hljs-keyword">env</span>

cd k8s
<span class="hljs-comment"># Deployments</span>
kubectl apply -f vuejs/vuejs-deployment.yaml
<span class="hljs-comment"># Services (Cluster IPs)</span>
kubectl apply -f vuejs/vuejs-clip.yaml
<span class="hljs-comment"># Ingress (For just HTTP - Edit file changing host to your own dns name)</span>
kubectl apply -f vuejs/vuejs-ingress.yaml
</code></pre>
<p>To change to the correct values the .env file we use some Ansible running <a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code/blob/main/playbooks/populate-k8s-dotenv.yml">this playbook</a>. This is also used by Jenkins server and Jenkinsfile. See more <a href="https://github.com/panagiotis-bellias-it21871/ansible-reference-letter-code#k8s">here</a>.
*</p>
<p><a name="multiple-namespaces"></a></p>
<h4 id="using-multiple-namespaces">Using Multiple Namespaces</h4>
<p>A Kubernetes cluster will instantiate a default namespace when provisioning the cluster to hold the default set of Pods, Services, and Deployments used by the cluster.</p>
<p>You can introspect the available namespaces by doing the following:</p>
<pre><code class="lang-bash">kubectl <span class="hljs-keyword">get</span> namespaces
</code></pre>
<p>Using a Kubernetes cluster for development and production use cases:</p>
<p>The development team would like to maintain a space in the cluster where they can get a view on the list of Pods, Services, and Deployments they use to build and run their application. In this space, Kubernetes resources come and go, and the restrictions on who can or cannot modify resources are relaxed to enable agile development.</p>
<p>The operations team would like to maintain a space in the cluster where they can enforce strict procedures on who can or cannot manipulate the set of Pods, Services, and Deployments that run the production site.</p>
<p>One pattern we will follow is to partition the Kubernetes cluster into two namespaces: development and production.</p>
<p>Let&#39;s create two new namespaces to hold our work.</p>
<p>Create the development namespace using kubectl:</p>
<pre><code class="lang-bash">kubectl create -f https:<span class="hljs-regexp">//</span>k8s.io<span class="hljs-regexp">/examples/</span>admin<span class="hljs-regexp">/namespace-dev.json</span>
</code></pre>
<p><a href="https://kubernetes.io/docs/tasks/administer-cluster/namespaces/#subdividing-your-cluster-using-kubernetes-namespaces">link</a></p>
<p><a name="helm"></a></p>
<h3 id="deployment-with-helm-charts">Deployment with Helm Charts</h3>
<h4 id="how-to-install-helm">How to install Helm</h4>
<pre><code class="lang-bash"><span class="hljs-string">curl </span>-<span class="hljs-string">fsSL </span>-i <span class="hljs-string">get_helm.</span><span class="hljs-string">sh </span>\
<span class="hljs-string">https:</span>//<span class="hljs-string">raw.</span><span class="hljs-string">githubusercontent.</span><span class="hljs-string">com/</span><span class="hljs-string">helm/</span><span class="hljs-string">helm/</span><span class="hljs-string">master/</span><span class="hljs-string">scripts/</span><span class="hljs-built_in">get-helm-3</span> <span class="hljs-comment"># alternatively, use it from this repo</span>
<span class="hljs-string">chmod </span><span class="hljs-string">700 </span><span class="hljs-string">get_helm.</span><span class="hljs-string">sh
</span>./<span class="hljs-string">get_helm.</span><span class="hljs-string">sh
</span><span class="hljs-string">helm </span><span class="hljs-string">version</span>
</code></pre>
<h4 id="how-to-create-the-helm-chart">How to create the helm chart</h4>
<pre><code class="lang-bash"><span class="hljs-attribute">helm create referenceLettersSystem</span>
</code></pre>
<h4 id="create-postgresql-secret">Create postgresql secret</h4>
<p>You first have to encrypt your sensitive values like postgres&#39;s user and password and application&#39;s user and password that accesses our database.</p>
<pre><code class="lang-bash">echo -n <span class="hljs-symbol">'postgres</span>' | base64 # <span class="hljs-keyword">for</span> db<span class="hljs-symbol">'s</span> user <span class="hljs-keyword">and</span> password
echo -n <span class="hljs-symbol">'bellias</span>' | base64 # <span class="hljs-keyword">for</span> app<span class="hljs-symbol">'s</span> user
echo -n <span class="hljs-symbol">'pass123</span>' | base64 # <span class="hljs-keyword">for</span> app<span class="hljs-symbol">'s</span> password
echo -n <span class="hljs-symbol">'reference_letters_data</span>' | base64 # <span class="hljs-keyword">for</span> app<span class="hljs-symbol">'s</span> database name
</code></pre>
<p>The output is similar to:</p>
<pre><code class="lang-vim"><span class="hljs-attr">cG9zdGdyZXM</span>=
<span class="hljs-attr">YmVsbGlhcw</span>==
<span class="hljs-attr">cGFzczEyMw</span>==
<span class="hljs-attr">cmVmZXJlbmNlX2xldHRlcnNfZGF0YQ</span>==
</code></pre>
<p>So the related file we must create is <a href="referenceLettersSystem/templates/secret.yaml">secret.yaml</a></p>
<h4 id="create-system-configmap">Create system configmap</h4>
<p>Here we have the <a href="configmap.yaml">configmap.yaml</a> that must be configured with your sensitive values both for fastapi and vuejs project</p>
<p>Now the chart can be installed like this:</p>
<pre><code class="lang-bash">helm <span class="hljs-keyword">install</span> &lt;<span class="hljs-keyword">some</span>-<span class="hljs-keyword">name</span>&gt; referenceLettersSystem
# e.g. helm <span class="hljs-keyword">install</span> rl-<span class="hljs-keyword">system</span> referenceLettersSystem
</code></pre>

  </div>
</template>

<style scoped>
h1 {
  color: #fff;
  padding: 0 15px;
  display: block;
}
</style>