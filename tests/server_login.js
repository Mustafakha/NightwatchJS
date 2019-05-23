var helper = require('../helpers/helpers.js')
const passID = '#password'
const usrCSS = '#login-box > div > div.info-box-content > div.control-group.mb-20 > div > input[type=text]'
const loginBtnID = '#login'
module.exports = {
  tags : ['Authentication'],
    before : function (browser){
        browser.deleteCookies();
      },
      after : function (browser){
        browser.end();
      },
      'GIVEN I am on 10.65.194.130' : function(browser){
        helper(browser).navToSite('https://10.65.194.130/login');            
      },
      'WHEN I input the wrong details' : function(browser){
          helper(browser).assertFieldsPresent(usrCSS,passID)
          helper(browser).login(usrCSS,'invalid')
          helper(browser).login(passID,'credentials')
      },
      'AND I click login' : function (browser){
          browser.click(loginBtnID)
      },
      'THEN I will be notified of the invalid credentials' : function(browser){
          browser.assert.containsText('body','username or password you entered is incorrect')
      }
};