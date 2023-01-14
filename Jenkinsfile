 pipeline {
   agent any
   stages {
       stage('setup') {
         steps {
              browserstack(credentialsId: '9eac742f-4d0f-46cc-b3a0-6a897afd97d1', localConfig: [localOptions: '--parallel-runs 1']){
               username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
buildName = process.env.BROWSERSTACK_BUILD_NAME
local = process.env.BROWSERSTACK_LOCAL
localIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER

var capabilities = {
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "10",
    "sessionName" : "BStack Build Name: " + buildName,
    "local" : local,
    "localIdentifier" : localIdentifier,
    "userName" : username,
    "accessKey" : accessKey,
    "seleniumVersion" : "4.0.0",
  },
    "browserName" : "Chrome",
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();
              }
             }
         }
       }
     }
