
class LoginPage {
 
    get inputUsername() { return $('#email'); }
    get inputPassword() { return $('#pass'); }
    get btnLogin() { return $('#loginbutton'); }
    get errorMessage() { return $('._9ay7'); }

    async open() {
        await browser.url('https://www.facebook.com/login/');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }
    async clickLoginButton(){
        await this.btnLogin.click();
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 10000 });
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
