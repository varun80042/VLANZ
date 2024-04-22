pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from GitHub
                git 'https://github.com/varun80042/253_265_284_309_Building-an-E-commerce-Microservices-Application-on-Cloud.git'
            }
        }

        stage('Run tests') {
            steps {
                // Hit the URLs of your microservices
                sh 'curl -i http://127.0.0.1:5001/' // Hit authentication microservice endpoint
                sh 'curl -i http://127.0.0.1:5002/' // Hit customer microservice endpoint
                sh 'curl -i http://127.0.0.1:5003/' // Hit freelancer microservice endpoint
            }
        }
    }

    post {
        always {
            // Cleanup or final steps
        }
    }
}
