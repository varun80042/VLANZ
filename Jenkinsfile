pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the repository
                    git 'https://github.com/varun80042/253_265_284_309_Building-an-E-commerce-Microservices-Application-on-Cloud.git'
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
