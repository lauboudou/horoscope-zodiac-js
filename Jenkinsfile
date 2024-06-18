
pipeline {
    agent {
        label 'agent_node'
    }
    environment{
        DOCKER_HUB_PAT = credentials('docker_hub_pat')
    }
    stages {
        stage('Clone') {
            steps {
                git branch: 'main', credentialsId: 'zodiacJS-private-repo', url: 'https://github.com/lauboudou/zodiacJS.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install && npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Delivery') {
            steps {
                sh 'docker login -u dlaubo -p ${DOCKER_HUB_PAT}'
                sh 'docker build . -t dlaubo/horoscope-zodiac-js:${BUILD_ID}'
                sh 'docker push dlaubo/horoscope-zodiac-js:${BUILD_ID}'
            }
        }
    }
    post {
      success { 
       echo 'This will run only if successful'
        mail bcc: 'admin2@admin.com', body: '''Bonjour, Si vous recevez ce mail, c\'est OK pour moi ! from zodiacJS Cdt ''', cc: 'admin1@admin.com', from: '', replyTo: '', subject: 'Jenkins Test Email', to: 'admin@admin.com'
      }
      failure {
        mail bcc: '', body: "<b>Failure Example</b><br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER} <br> URL de build: ${env.BUILD_URL}", cc: '', charset: 'UTF-8', from: '', mimeType: 'text/html', replyTo: '', subject: "ERROR CI: Project name -> ${env.JOB_NAME}", to: "admin@admin.com"
      } 
    }
}