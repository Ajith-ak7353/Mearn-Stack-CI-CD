pipeline {
    agent any

    environment {
        FRONTEND_IMAGE  = "ajith7353/frontend"
        BACKEND_IMAGE   = "ajith7353/backend"
        IMAGE_TAG       = "${BUILD_NUMBER}"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/Ajith-ak7353/Mearn-Stack-CI-CD.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh "docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} ./frontend"
                    sh "docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} ./backend"

                    sh "docker tag ${FRONTEND_IMAGE}:${IMAGE_TAG} ${FRONTEND_IMAGE}:latest"
                    sh "docker tag ${BACKEND_IMAGE}:${IMAGE_TAG} ${BACKEND_IMAGE}:latest"
                }
            }
        }

        stage('Push Images to Docker Hub') {
            
           steps {
                // This step should not normally be used in your script. Consult the inline help for details.
withDockerRegistry(credentialsId: '9d20ed66-1fd5-4279-9693-344caa1db38a', url: 'https://index.docker.io/v1/') {
    // some block
                   sh "docker push ${FRONTEND_IMAGE}:${IMAGE_TAG}"
                    sh "docker push ${BACKEND_IMAGE}:${IMAGE_TAG}"

                    sh "docker push ${FRONTEND_IMAGE}:latest"
                    sh "docker push ${BACKEND_IMAGE}:latest"
                }
            }
        }

        stage('Deploy on APK Server') {
            steps {
                sh """
                    docker pull ${FRONTEND_IMAGE}:latest
                    docker pull ${BACKEND_IMAGE}:latest

                    docker-compose down
                    docker-compose up -d
                """
            }
        }
    }

    post {
        success {
            echo " Deployment Successful!"
        }
        failure {
            echo " Deployment Failed!"
        }
    }
}
