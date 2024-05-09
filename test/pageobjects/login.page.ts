import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';


 // sub page containing specific selectors and methods for the login page

class LoginPage extends Page {
    
    public get inputUsername () {
        return $('#email');
    }

    public get inputPassword () {
        return $('#pass');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
