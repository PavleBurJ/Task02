pipeline {
agent any
stages {
    stage('setup') {
        steps {
            browserstack(credentialsId: '9eac742f-4d0f-46cc-b3a0-6a897afd97d1') {
                // For Linux-based systems, add the following commands in the given console to download the binary, run it, and stop its execution after the test has been executed.
                sh 'wget "https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-x64.zip"'
                sh 'unzip BrowserStackLocal-linux-x64.zip'
                sh './BrowserStackLocal --key $BROWSERSTACK_ACCESS_KEY --daemon start'
                sh 'npm run sample1.js'
                sh './BrowserStackLocal --key $BROWSERSTACK_ACCESS_KEY --daemon stop'

                // For macOS-based systems, add the following commands in the given console to download the binary, run it, and stop its execution after the test has been executed.
                sh 'wget "https://www.browserstack.com/browserstack-local/BrowserStackLocal-darwin-x64.zip"'
                sh 'unzip BrowserStackLocal-darwin-x64.zip'
                sh './BrowserStackLocal --key $BROWSERSTACK_ACCESS_KEY --daemon start'
                sh 'npm run sample1.js'
                sh './BrowserStackLocal --key $BROWSERSTACK_ACCESS_KEY --daemon stop'
            }
        }
    }
    }
}

