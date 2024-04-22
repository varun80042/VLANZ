pipeline {
    agent any
    
    stages {
       stage('Checkout SCM') {
            steps {
                script {
                    // Clone the repository
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/main']], 
                              doGenerateSubmoduleConfigurations: false, 
                              extensions: [], 
                              submoduleCfg: [], 
                              userRemoteConfigs: [[url: 'https://github.com/varun80042/253_265_284_309_Building-an-E-commerce-Microservices-Application-on-Cloud.git']]])
                }
            }
        }

        stage('Build') {
        steps {
            script {
                // Build Docker images for each microservice
                docker.build("microservices/authentication", "-f microservices/authentication/Dockerfile .")
                docker.build("microservices/customer", "-f microservices/customer/Dockerfile .")
                docker.build("microservices/freelancer", "-f microservices/freelancer/Dockerfile .")
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests for each microservice
                sh 'docker run authentication-service'
                sh 'docker run customer-service'
                sh 'docker run freelancer-service'
            }
        }

        stage('Test') {
            steps {
                // Run tests for each microservice
                sh 'curl -i http://127.0.0.1:5001/'

            }
        }

        stage('Deploy') {
            steps {
                // Deploy Docker containers to Kubernetes cluster
                sh 'kubectl apply -f kubernetes/authentication-deployment.yaml'
                sh 'kubectl apply -f kubernetes/customer-deployment.yaml'
                sh 'kubectl apply -f kubernetes/freelancer-deployment.yaml'
            }
        }

        stage('Stop Docker Container') {
            steps {
                script {
                    // Stop and remove Docker container
                    sh 'docker stop myapp_container'
                    sh 'docker rm myapp_container'
                }
            }
        }

        stage('Print Changes') {
            steps {
                script {
                    // Check for changes
                    def changes = sh(script: 'git diff --name-only HEAD HEAD^', returnStdout: true).trim()
                    if (changes) {
                        echo "Changes made in this commit:"
                        echo changes
                    } else {
                        echo "No changes detected."
                    }
                }
            }
        }
    }
}
