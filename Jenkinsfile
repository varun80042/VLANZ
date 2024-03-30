pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = "your_docker_registry"
        KUBE_NAMESPACE = "your_kubernetes_namespace"
        AUTHENTICATION_MICROSERVICE_URL = "http://127.0.0.1:5001"
        CUSTOMER_MICROSERVICE_URL = "http://127.0.0.1:5002"
        FREELANCER_MICROSERVICE_URL = "http://127.0.0.1:5003"
    }
    
    stages {
        stage('Authentication Build') {
            steps {
                script {
                    dir('authentication') {
                        sh "docker build -t ${DOCKER_REGISTRY}/authentication-service ."
                    }
                }
            }
        }
        
        stage('Authentication Test') {
            steps {
                // Run tests for the authentication microservice
                // Add your testing commands here
            }
        }
        
        stage('Authentication Deploy') {
            steps {
                script {
                    dir('kubernetes') {
                        sh "kubectl apply -f authentication-deployment.yaml --namespace=${KUBE_NAMESPACE}"
                        sh "kubectl apply -f authentication-service.yaml --namespace=${KUBE_NAMESPACE}"
                    }
                    sh "kubectl rollout status deployment/authentication --namespace=${KUBE_NAMESPACE}"
                }
            }
        }
        
        stage('Freelancer Build') {
            steps {
                script {
                    dir('freelancer') {
                        sh "docker build -t ${DOCKER_REGISTRY}/freelancer-service ."
                    }
                }
            }
        }
        
        stage('Freelancer Test') {
            steps {
                // Run tests for the freelancer microservice
                // Add your testing commands here
            }
        }
        
        stage('Freelancer Deploy') {
            steps {
                script {
                    dir('kubernetes') {
                        sh "kubectl apply -f freelancer-deployment.yaml --namespace=${KUBE_NAMESPACE}"
                        sh "kubectl apply -f freelancer-service.yaml --namespace=${KUBE_NAMESPACE}"
                    }
                    sh "kubectl rollout status deployment/freelancer --namespace=${KUBE_NAMESPACE}"
                }
            }
        }
        
        stage('Customer Build') {
            steps {
                script {
                    dir('customer') {
                        sh "docker build -t ${DOCKER_REGISTRY}/customer-service ."
                    }
                }
            }
        }
        
        stage('Customer Test') {
            steps {
                // Run tests for the customer microservice
                // Add your testing commands here
            }
        }
        
        stage('Customer Deploy') {
            steps {
                script {
                    dir('kubernetes') {
                        sh "kubectl apply -f customer-deployment.yaml --namespace=${KUBE_NAMESPACE}"
                        sh "kubectl apply -f customer-service.yaml --namespace=${KUBE_NAMESPACE}"
                    }
                    sh "kubectl rollout status deployment/customer --namespace=${KUBE_NAMESPACE}"
                }
            }
        }
    }
    
    post {
        success {
            // Clean up Docker images after successful deployment
            script {
                sh "docker rmi ${DOCKER_REGISTRY}/authentication-service"
                sh "docker rmi ${DOCKER_REGISTRY}/freelancer-service"
                sh "docker rmi ${DOCKER_REGISTRY}/customer-service"
            }
        }
        failure {
            echo "Pipeline failed"
        }
    }
}
