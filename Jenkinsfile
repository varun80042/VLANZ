pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker images for each microservice
                    docker.build("Dockerfile", "microservices/authentication/Dockerfile")
                    docker.build("Dockerfile", "microservices/customer/Dockerfile")
                    docker.build("Dockerfile", "microservices/freelancer/Dockerfile")
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests for each microservice
                sh 'docker run authentication-service'
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
    }
}
