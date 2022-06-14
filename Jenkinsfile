pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubkey', url: 'https://github.com/letpapatype/gatsbytester']]])}
        }
        stage('Building New changes') {
            steps {
                nodejs('Gatsby for Jenkins') {
                    sh 'npm install'
                    sh 'npx gatsby build'
            }
        }
        stage('Packaging Up Da Work') {
            steps {
                sh 'zip gatsby-${JOB_NAME}-${BUILD_NUMBER}.zip ./public/*'
            }
        }
        stage('Cleaning Up'){
            steps {
                nodejs('Gatsby for Jenkins') {
                    sh 'gatsby clean'
            }
        }
        stage('Deploy') {
            steps {
                azureUpload containerName: 'jenkinsbuilds', filesPath: '**/*.zip', storageCredentialId: 'azuresartifactstorage', storageType: 'blobstorage'
            }
        }
    }
}