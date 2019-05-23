var helper = require('../helpers/helpers.js')
const url = 'https://10.65.194.130/login'
const passID = '#password'
const usrCSS = '#login-box > div > div.info-box-content > div.control-group.mb-20 > div > input[type=text]'
const loginBtnID = '#login'
const logoutBtnXPath = '//*[@id="navbar-selection"]/ul[2]/li[1]/div/a'
const logoutBtnCss = 'ul.toolbar-dropdowns.nav.pull-right > li:nth-child(1) > div > a'
module.exports = {
  tags : ['Authentication1'],
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
      'WHEN I click on the logout button' : function(browser){
        browser
        .click(logoutBtnCss)
      },
      'THEN I will be back at the login page' : function (browser){
        browser
        .pause(1000) // Wait one second so that the URL goes from 10.65.194.130/ to 10.65.194.130/login
        .assert.urlEquals(url)
      }
};