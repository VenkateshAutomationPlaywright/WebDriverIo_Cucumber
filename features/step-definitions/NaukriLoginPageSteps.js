const { Given, When, Then } = require('@wdio/cucumber-framework');
const naukrilogin = require('../pageobjects/naukrilogin');

Given(/^user should be in naukri login page$/, async() => {
    await browser.url('https://www.naukri.com/')
});

When(/^user enter (.*) and (.*)$/,async (username,password) => {
    await naukrilogin.enterUsernameAndPassword(username,password)
});

Then(/^user clicks on naukri login button$/,async () => {
    await naukrilogin.clickloginBtn()
});

Then(/^user should able to view (.*)$/,async (errorMessage) => {
    const errorText = await naukrilogin.getErrorMessageOfInvalid();
    expect(errorText).toContain(errorMessage)
});




