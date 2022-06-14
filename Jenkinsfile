pipeline {
    agent any

    stages {
        stage('Build Prep') {
            steps {
                nodejs('Gatsby for Jenkins') {
                    sh 'npm install'
                    sh 'npx gatsby build'
            }
        }
        stage('Packaging Up') {
            steps {
                sh 'zip gatsby-${JOB_NAME}-${BUILD_NUMBER}.zip ./public/*'
            }
        }
        stage('Deploy') {
            steps {
                azureUpload containerName: 'jenkinsbuilds', filesPath: '**/*.zip', storageCredentialId: 'azuresartifactstorage', storageType: 'blobstorage'
            }
        }
    }
}