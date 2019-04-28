var helper = require('../helpers/helpers.js')
module.exports = {
    before : function (browser){
      browser.deleteCookies();
    },
    after : function (browser){
      browser.end();
    },
    tags: ['fail'],
    'GIVEN I am on the web page' : function (browser) {
      helper(browser).navToSite();
    },
    'AND the input fields are present' : function (browser){
      helper(browser).assertFieldsPresent();
    },
   'WHEN I input the wrong values and login' : function (browser){
      helper(browser).inValidLogin();
   },
   'THEN the page will re load' : function (browser){
      helper(browser).pageReloadCheck();
   },
   'AND the text class will be "error" ' : function (browser){
      helper(browser).checkForFailureText();
       },
   'AND we compare screenshots' : function(browser){
      helper(browser).compareFailureScreenshot();
      }
  };