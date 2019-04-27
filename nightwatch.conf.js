//Get Drivers
var chromedriver = require('chromedriver');
var selenium = require('selenium-server');
var iedriver = require('iedriver');

var config = {
        src_folders: ["tests"],
        custom_commands_path : "commands",
        custom_assertions_path : "assertions",
        test_workers:{
          enabled : true,
          workers : "auto"
        },
      
        webdriver : {
          start_process : true
        },
      
        test_settings : {

            default :{  //Defaults to Chrome
                browserName : 'chrome',
                javascriptEnabled : true,
                acceptSslCerts : true,
                nativeEvents : true
            },

            chrome: {
              webdriver : {
                host : "localhost",
                port : 9515,
                server_path : chromedriver.path,
                silent: true,
              },
                desiredCapabilities: {
                  browserName: "chrome",
                  chromeOptions: {
                    args: [
                      "start-maximized",
                      "disable-web-security",
                     "ignore-certificate-errors",
                     "--test-type"
                    ]
                  }
                }
              },
              selenium_server : {
                selenium : {
                  start_process: true,
                  host: "localhost",
                  server_path: selenium.path,
                  cli_args: {
                    server_path : iedriver.path //or "webdriver.blah"
                  }
                },
                desiredCapabilities: {
                    nativeEvents : false,
                    javascriptEnabled: true,
                    acceptSslCerts: true,
                    browserName: "internet explorer",
                    ignoreProtectedModeSettings : true
                }
            }
          }
}
module.exports = config;