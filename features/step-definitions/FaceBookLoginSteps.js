const { Given, When, Then } = require('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/facebooklogin')

Given(/^user should be in login page$/,async () => {
await loginPage.open()
});


When(/^user enter invalid (.*) and (.*)$/,async (username,password) => {
 await loginPage.login(username,password)
});


When(/^user clicks on login button$/, async() => {
await loginPage.clickLoginButton()
});


Then(/^user able to view (.*)$/, async(error_message) => {
    const errorMessageText = await loginPage.getErrorMessage();
    expect(errorMessageText).toContain(error_message);
});

