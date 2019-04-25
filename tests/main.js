module.exports = {
  before : function (browser){
    browser.deleteCookies();
  },
  after : function (browser){
    browser.end();
  },
  tags: ['main'],
  'GIVEN I am on the web page' : function (browser) {
       browser 
       .url('http://testing-ground.scraping.pro/login') // Go to the url
       .waitForElementVisible('body', 1000) // Wait till page loads
  },
  'AND the input fields are present' : function (browser){
    browser
       .assert.elementPresent('#usr') //Make sure input field present
       .assert.elementPresent('#pwd') //Password field present
  },
 'WHEN I input the correct values and login' : function (browser){
   browser
       .setValue('#usr', 'admin') // send values
       .setValue('#pwd', '12345') // send values
       .click('#case_login > form > input[type="submit"]:nth-child(5)') // click on login
 },
 'THEN the page will re load' : function (browser){
  browser
       .waitForElementVisible('body', 1000) // wait till page loads
 },
 'AND the text class will be "success"' : function (browser){
  browser
       .assert.cssClassPresent('#case_login > h3',"success") //ensure that the text states "success" for successful login
     },
  'AND we compare screenshots' : function(browser){
    browser
          .compareScreenshot('success.png') //compare screenshots
  }
};