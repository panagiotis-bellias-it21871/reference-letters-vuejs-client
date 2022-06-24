pipeline {
    agent any

    environment {
        HOME = '.'
    }

    stages {

        stage('Build'){
            steps {
                // Get the code from the github repository and its submodules
                git branch: 'master', url: 'https://github.com/panagiotis-bellias-it21871/reference-letters-vuejs-client.git'
            }
        }
        
        stage('Unit Testing') {
            steps {
                sh '''
		            npm install
                    cp .env.example .env

                    echo $PWD
                    echo "Here we have to run unit tests about frontend"
                '''
            }
        }

        stage('Integration Testing') {
            steps {
                sh '''
                    echo "Here we have to run integration tests"
                   '''
            }
        }

        stage('Install Ansible and Docker Prerequisites') {
            steps {
                sh '''
                    sudo apt update
                    sudo apt install software-properties-common
                    sudo add-apt-repository --yes --update ppa:ansible/ansible
                    sudo apt install ansible
                    ansible-galaxy collection install community.docker
                  '''
            }
        }
        
        stage('Docker Deployment') {

            environment {
                KC_SERVER_URL=credentials('docker-keycloak-server-url')
                KC_CLIENT_ID=credentials('docker-keycloak-client-id')
                KC_REALM=credentials('docker-keycloak-realm')
                KC_CLIENT_SECRET=credentials('docker-keycloak-client-secret')
                VUE_APP_BACKEND_URL=credentials('docker-vue-backend-url')
                VUE_APP_KEYCLOAK_URL=credentials('docker-keycloak-server-url')

                DOCKER_USER=credentials('docker-username')
                DOCKER_PASSWORD=credentials('docker-push-secret')
                DOCKER_FRONTEND_PREFIX=credentials('docker-frontend-prefix-image')
            }

            // stopped here the check
            steps {
                sshagent (credentials: ['ssh-docker-vm']) {
                    sh '''
                        cd ~/workspace/reference-letters-system/ansible-reference-letter-code
                        ansible-playbook playbooks/reference-letters-system-install.yml \
                        -e BACKEND_DIR='reference-letters-fastapi-server' \
                        -e FRONTEND_DIR='reference-letters-vuejs-client' \
                        -e DATABASE_URL=$DB_URL \
                        -e KC_SERVER_URL=$KC_SERVER_URL \
                        -e KC_CLIENT_ID=$KC_CLIENT_ID \
                        -e KC_REALM=$KC_REALM \
                        -e KC_CLIENT_SECRET=$KC_CLIENT_SECRET \
                        -e VUE_APP_BACKEND_URL=$VUE_APP_BACKEND_URL \
                        -e VUE_APP_KEYCLOAK_URL=$VUE_APP_KEYCLOAK_URL
                    '''
                }
                sh '''
                    HEAD_COMMIT=$(git rev-parse --short HEAD)
                    TAG=$HEAD_COMMIT-$BUILD_ID
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin

                    cd ~/workspace/reference-letters-system/reference-letters-fastapi-server
                    docker build --rm -t $DOCKER_BACKEND_PREFIX -t $DOCKER_BACKEND_PREFIX:$TAG -f nonroot.Dockerfile .
                    docker push $DOCKER_BACKEND_PREFIX --all-tags

                    cd ~/workspace/reference-letters-system/reference-letters-vuejs-client
                    docker build --rm -t $DOCKER_FRONTEND_PREFIX:latest -t $DOCKER_FRONTEND_PREFIX:$TAG .
                    docker push $DOCKER_FRONTEND_PREFIX --all-tags
                   '''
            }
        }

        stage('Helm Deployment') {
            steps {
                sh '''
                    echo "Deployment with helm chart awaits"
                   '''
            }
        }

        stage('Kubernetes Deployment') {
            steps {
                sh '''
                    echo "Deployment with kubernetes awaits"
                   '''
            }
        }

    }
}
