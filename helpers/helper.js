//Could further modularize by giving functions parameters, not hardcoded urls/css elements/XPaths etc
//However since this is just for a single website under 2 conditions, this should suffice
module.exports = function(browser){
    this.navToSite = function(){
        browser
        .url('http://testing-ground.scraping.pro/login') // Go to the url
        .waitForElementVisible('body', 1000) // Wait till page loads
    };
    this.assertFieldsPresent = function(){
        browser
        .assert.elementPresent('#usr') //Make sure input field present
        .assert.elementPresent('#pwd') //Password field present
    };
    this.validLogin = function(){
        browser
        .setValue('#usr', 'admin') // send values
        .setValue('#pwd', '12345') // send values
        .click('#case_login > form > input[type="submit"]:nth-child(5)') // click on login
    };
    this.inValidLogin = function(){
        browser
        .setValue('#usr', 'wrong') // send values
        .setValue('#pwd', 'wrong') // send values
        .click('#case_login > form > input[type="submit"]:nth-child(5)') // click on login -- for i.e, had to set nativeEvents:false and in windows display settings, size of texts and apps to 100% ?? now works
    };
    this.pageReloadCheck = function(){
        browser
        .waitForElementVisible('body', 1000) // wait till page loads
    };
    this.checkForSuccessText = function(){
        browser
        .assert.cssClassPresent('#case_login > h3',"success") //ensure that the text states "success" for successful login
    };
    this.checkForFailureText = function(){
        browser
        .assert.cssClassPresent('#case_login > h3',"error") //ensure that the text states "ACCESS DENIED" for failure login
    };
    this.compareSuccessfulScreenshot = function(){
        browser
        .compareScreenshot('success.png') //compare screenshots
    };
    this.compareFailureScreenshot = function(){
        browser
        .compareScreenshot('failure.png') //compare screenshots
    };
    return this;
}