pipeline {
agent any
stages {
    stage('setup') {
        steps {
            browserstack('9eac742f-4d0f-46cc-b3a0-6a897afd97d1') {
                sh 'npm run sample-test'
            }
        }
    }
    }
}
