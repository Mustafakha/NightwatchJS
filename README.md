# NightwatchJS_Haivision
## Prerequisites
For a **Windows** Environment:
* Running Windows 10
* Nightwatch Installed
* Node + NPM installed
* Chrome v74 installed
* Java 8 atleast required
* **IMPORTANT** In order for I.E tests to be able to click, change local Display Settings to **100%**, otherwise tests fail
* Also for I.E 11, drivers are out of date so several bugs, in order for it to work, the above step must be done as well as following the configuration here : (https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver#required-configuration) 

All remaining dependencies *should* be included in project :)

For a **Linux** Environment:
* All tests done on Ubuntu 18.04
* Nightwatch installed
* Node + NPM installed
* Chrome v74 installed
* Java 8 atleast required

On both environments tests ran on VSCode.

## Reproduce Tests
Pull or Clone repository and open using VSCode *(or other preferred IDE/Text editor)* , cd into project directory and:

For **WINDOWS** run the following commands
* For both Chrome and I.E 11 running all tests input the following:
* `node nightwatch -e chrome,selenium_server`
* For a specific test, replaces tests with ` -a [TAG NAME] ` i.e:
* `node nightwatch -e chrome,selenium_server -a main`

For **UBUNTU** run the following commands
* `node nightwatch -e chrome`
* Similarly, add `-a [TAG NAME] ` for running specific tests.
