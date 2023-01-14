username = process.env.BROWSERSTACK_USERNAME
accessKey = process.env.BROWSERSTACK_ACCESS_KEY
buildName = process.env.JENKINS_LABEL

var capabilities = {
  'bstack:options' : {
    "os" : "Windows",
    "osVersion" : "10",
    "sessionName" : "BStack Build Name: " + buildName,
    "userName" : username,
    "accessKey" : accessKey,
    "seleniumVersion" : "4.0.0",
  },
    "browserName" : "Chrome",
    "browserVersion" : "100.0",
}

var driver = new webdriver.Builder().
  usingServer("https://hub-cloud.browserstack.com/wd/hub").
  withCapabilities(capabilities).
  build();
