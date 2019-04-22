# NightwatchJS_Haivision
## Prerequisites
For a **Windows** Environment:
* Running Windows 10
* Nightwatch Installed
* Node + NPM installed
* Java 8 atleast required
* **IMPORTANT** In order for I.E tests to be able to click, change local Display Settings to **100%**, otherwise tests fail

All remaining dependencies *should* be included in project :)

For a **Liux** Environment:
* All tests done on Ubuntu 18.04
* Nightwatch installed
* Node + NPM installed
* Java 8 atleast required
* Selenium-server-standalone must be running *(or if you can get Docker Container to work, that must be running)*
* `cd drivers`
* `java -jar selenium-server-standalone-3.141.59.jar `

On both environments tests ran on VSCode.

## Reproduce Tests
Pull or Clone repository and open using VSCode *(or other preferred IDE/Text editor)* , cd into project directory and:

For **WINDOWS** run the following commands
* For both Chrome and I.E 11 running all tests input the following:
* `nightwatch -e chrome,ie tests`
* For a specific test, replaces tests with ` -a [TAG NAME] ` i.e:
* `nightwatch -e chrome,ie -a main`

For **UBUNTU** run the following commands
* `node nightwatch -e chrome tests`
* Similarly, replace tests with `-a [TAG NAME] ` for running specific tests.
