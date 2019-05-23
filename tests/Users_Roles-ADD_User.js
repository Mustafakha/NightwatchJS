var helper = require('../helpers/helpers.js')
const url = 'https://10.65.194.130/login'
const passID = '#password'
const usrCSS = '#login-box > div > div.info-box-content > div.control-group.mb-20 > div > input[type=text]'
const loginBtnID = '#login'
const dropdownXPath = '//*[@id="navbar-selection"]/ul[2]/li[3]/a/i'
const administrationXPath = '//*[@id="navbar-selection"]/ul[2]/li[3]/ul/li[1]/a'
const accessControlsCss = '#admin-access-control'
const addUserBtnID = '#add-user'
const nameID = '#name'
const usernameID = '#username'
const pwdID = '#password'
const pwdVerifyID = '#password-verify'
const emailID = '#email'
const roleSelectorCSS = '#role-select > span.filter-option.pull-left.ellipsis'
const roleXPath = '//*[@id="edit-user-modal"]/div[3]/form/div[5]/div/div/ul/li[6]/a'
const saveUserBtnID = '#save-user'

module.exports = {
  tags : ['Calypso'],
    before : function (browser){
        browser.deleteCookies();
      },
      after : function (browser){
        browser.end();
      },
      'GIVEN I am logged in on 10.65.194.130' : function(browser){
        helper(browser).navToSite(url)
        helper(browser).assertFieldsPresent(usrCSS,passID)
        helper(browser).login(usrCSS,'haiadmin')
        helper(browser).login(passID,'manager')
        browser
        .click(loginBtnID)
        .assert.containsText('body','Welcome Administrator')            
      },
      'WHEN I click the dropdown on the top right and click Administration' : function(browser){
        browser
        .useXpath().click(dropdownXPath)
        .click(administrationXPath)
      },
      'THEN I will be at the "Access Controls" tab' : function (browser){
        browser
        .useCss()
        .assert.elementPresent(accessControlsCss)
        .click(accessControlsCss)
      },
      'WHEN I add a user by clicking the plus button and inputing valid fields' : function(browser){
        browser
        .waitForElementVisible(addUserBtnID,1000)
        .click(addUserBtnID)
        .waitForElementVisible(nameID,1000)
        .setValue(nameID,'Automated')
        .setValue(usernameID,'Testing')
        .setValue(pwdID,'isFun')
        .setValue(pwdVerifyID,'isFun')
        .setValue(emailID,'automationfan@mail.com')
        .click(roleSelectorCSS)
        .useXpath()
        .click(roleXPath)
        .useCss()
        .click(saveUserBtnID)
      }
};