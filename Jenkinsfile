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
                script {
                    sh """
                        # Install dependencies
                        pip install pytest requests
                        
                        # Run unit tests
                        pytest tests/unit/test_authentication.py
                        
                        # Run integration tests
                        pytest tests/integration/test_authentication_integration.py
                    """
                }
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
                script {
                    sh """
                        # Navigate to the directory containing the test files
                        cd microservices/freelancer
        
                        # Install dependencies
                        pip install pytest requests
                        
                        # Run unit tests
                        pytest tests/unit/test_freelancer.py
                        
                        # Run integration tests
                        pytest tests/integration/test_freelancer_integration.py
                    """
                }
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
                script {
                    sh """
                        # Navigate to the directory containing the test files
                        cd microservices/customer
        
                        # Install necessary dependencies
                        pip install pytest requests
        
                        # Run unit tests
                        pytest tests/unit/test_customer.py
        
                        # Run integration tests
                        pytest tests/integration/test_customer_integration.py
                    """
                }
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
