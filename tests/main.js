var helper = require('C:/Users/musta/OneDrive/Documents/GitHub/NightwatchJS_Haivision/helpers/helper.js')
module.exports = {
  before : function (browser){
    browser.deleteCookies();
  },
  after : function (browser){
    browser.end();
  },
  tags: ['main'],
  'GIVEN I am on the web page' : function (browser) {
      helper(browser).navToSite();
  },
  'AND the input fields are present' : function (browser){
      helper(browser).assertFieldsPresent();
  },
 'WHEN I input the correct values and login' : function (browser){
      helper(browser).validLogin();
 },
 'THEN the page will re load' : function (browser){
      helper(browser).pageReloadCheck();
 },
 'AND the text class will be "success"' : function (browser){
      helper(browser).checkForSuccessText();
     },
  'AND we compare screenshots' : function(browser){
      helper(browser).compareSuccessfulScreenshot();
  }
};