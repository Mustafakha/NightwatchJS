module.exports = {
    before : function (browser){
      browser.deleteCookies();
    },
    after : function (browser){
      browser.end();
    },
    tags: ['fail'],
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
   'WHEN I input the wrong values and login' : function (browser){
     browser
         .setValue('#usr', 'wrong') // send values
         .setValue('#pwd', 'wrong') // send values
         .click('#case_login > form > input[type="submit"]:nth-child(5)') // click on login
   },
   'THEN the page will re load' : function (browser){
    browser
         .waitForElementVisible('body', 1000) // wait till page loads
   },
   'AND the text class will be "error" ' : function (browser){
    browser
         .assert.cssClassPresent('#case_login > h3',"error") //ensure that the text states "ACCESS DENIED" for failure login
       },
  };