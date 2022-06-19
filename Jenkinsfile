pipeline {
    agent any

    stages {
        stage('Building New changes') {
            steps {
                nodejs('Gatsby for Jenkins') {
                    sh 'npm install'
                    sh 'npx gatsby build'
                }
            }
        }
        stage('Packaging Up Da Work') {
            steps {
                sh 'zip gatsby-${JOB_NAME}-${BUILD_NUMBER}.zip ./public/*'
            }
        }
        stage('Deploy') {
            steps {
                azureUpload containerName: 'jenkinsbuilds', filesPath: '**/*.zip', storageCredentialId: 'azuresartifactstorage', storageType: 'blobstorage'
            }
        }
        stage('Cleaning Up Gatsby'){
            steps {
                nodejs('Gatsby for Jenkins') {
                    sh 'gatsby clean'
                }
            }
        }
        stage('Storage Clean Up') {
            steps {
                sh 'rm -rf /home/jovannewland/node_modules/'
            }
        }
    }
}