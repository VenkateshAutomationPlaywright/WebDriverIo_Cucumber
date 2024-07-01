class NaukriLogin{
    get naukriLoginBtn(){ return $('//*[@id="login_Layer"]'); }
    get usernameField(){ return $('//*[@placeholder="Enter your active Email ID / Username"]'); }
    get passwordField(){ return $('//*[@placeholder="Enter your password"]'); }
    get loginBtn(){ return $('//button[@type="submit"]'); }
    get errormessage(){ return $('//div[@class="server-err"]'); }

    async launchNaukriPage(){
        await browser.url("https://www.naukri.com/");
    }
    
    async enterUsernameAndPassword(username,password){
        await this.naukriLoginBtn.waitForDisplayed({ timeout: 10000 });
        await this.naukriLoginBtn.click();
       await browser.pause(5000);
        await this.usernameField.waitForDisplayed({ timeout: 10000 });
        await browser.pause(5000);
        await this.usernameField.setValue(username);
        await this.passwordField.waitForDisplayed({ timeout: 10000 });
        await browser.pause(5000);
        await this.passwordField.setValue(password);
    }

    async clickloginBtn(){
        await browser.pause(4000);
        await this.loginBtn.waitForDisplayed({ timeout: 10000 });
        await this.loginBtn.click();
    }

    async getErrorMessageOfInvalid(){
        await browser.pause(5000);
        await this.errormessage.waitForDisplayed({timeout:10000});
        return await this.errormessage.getText();
    }

}
module.exports = new NaukriLogin();