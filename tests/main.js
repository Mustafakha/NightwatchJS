module.exports = {
  tags: ['main'],
  'Login Test' : function (browser) {
       browser 
       .url('http://testing-ground.scraping.pro/login') // Go to a url
       .waitForElementVisible('body', 1000) // wait till page loads
       //.assert.title('Google') // Make sure Site title matches
       .assert.elementPresent('#usr') 
       .setValue('#usr', 'admin') // send values
       .assert.elementPresent('#pwd') 
       .setValue('#pwd', '12345') // send values
       .click('#case_login > form > input[type="submit"]:nth-child(5)') // click on search box
       .waitForElementVisible('body', 1000) // wait till page loads
       .assert.cssClassPresent('#case_login > h3',"success")
       .pause(1000)
       .end();
     }
};