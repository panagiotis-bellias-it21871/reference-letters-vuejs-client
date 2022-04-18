pipeline {
    agent any

    environment {
        HOME = '.'
    }

    stages {

        stage('Build-Checkout') {
            steps {
                // Get the code from the github repository
                git branch: 'main', url: 'https://github.com/pan-bellias/Reference-Letter-Client.git'
            }
        }
        
        stage('Unit Testing') {
            steps {
                sh '''
		            npm install
		            npm build
                '''
            }
        }

        stage('E2E Testing') {
            steps {
                sh '''
                    echo "Unit test ready! E2E Testing awaits"
                   '''
            }
        }

        stage('Integration Testing') {
            steps {
                sh '''
                    echo "Integration testing awaits"
                   '''
            }
        }

        stage('UI Testing') {
            steps {
                sh '''
                    echo "UI testing awaits"
                   '''
            }
        }

        stage('Ansible Deployment') {

            steps {
                sshagent (credentials: ['ssh-ansible-vm']){
                sh '''
                    echo "Deployment with pure ansible needs testing"

                    cd ~/workspace/Ansible-Reference-Letter-Code
                    ansible-playbook -l ansible_group playbooks/minio-install.yml
                    ansible-playbook -l ansible_group playbooks/vuejs-install.yml
                   '''
                }
            }
        }
        
        stage('Docker Deployment') {

            environment {
                DOCKER_PASSWORD=credentials('docker-push-secret')
                DOCKER_USER=credentials('docker-user')
                DOCKER_PREFIX=credentials('docker-prefix-image-vue')
            }
            steps {
                sh '''
                    cd ~/workspace/Ansible-Reference-Letter-Code
                    ansible-playbook -l docker_group docker/install-docker.yml
                    ansible-playbook -l docker_group docker/vuejs-install.yml
                   '''
                sh '''
                    cd ~/workspace/Reference-Letter-Client
                    HEAD_COMMIT=$(git rev-parse --short HEAD)
                    TAG=$HEAD_COMMIT-$BUILD_ID
                    docker build --rm -t $DOCKER_PREFIX:$TAG -t $DOCKER_PREFIX:latest -f Dockerfile . 
                   '''
                sh '''
                    echo $DOCKER_PASSWORD | docker login -u $DOCKER_USER --password-stdin
                    docker push $DOCKER_PREFIX --all-tags
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
