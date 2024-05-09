import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

beforeEach( async function(){
    await LoginPage.open();
}) 

 /*describe('My Login application', () => {
   it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });*/

    describe('Login ', () => {

    it('should not login if there are no credentials', async () => {
        await LoginPage.login('', '');
        expect(SecurePage.errorMessage) || (SecurePage.emailErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();
    
    });

   /*it('should not login with empty username', async () => {
        await LoginPage.login('', 'testing');
        await expect(SecurePage.errorMessage) || (SecurePage.emailErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();
    });


      it('should not login with empty password', async () => {
        await LoginPage.login('standard_user@mail.com', '');
        await expect(SecurePage.errorMessage) || (SecurePage.passErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();
    });

    it('should not login with invalid username', async () => {
         //The email address is incorrect.
        await LoginPage.login('standarduser@testing.com', 'Testing1!');
        await expect(SecurePage.errorMessage) || (SecurePage.emailErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();

        //Invalid email address
        await LoginPage.login('standarduser@testing.com', 'Testing1!');
        await expect(SecurePage.errorMessage) || (SecurePage.emailErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();
    });

   it('should not login with invalid password', async () => {
       // await LoginPage.open();
        await LoginPage.login('aguiara@mail.com', 'secret');
        await expect(SecurePage.errorMessage) || (SecurePage.passErrorMessage).toBeExisting();
        expect(await SecurePage.checkUrl("login")).toBeTruthy;
        await expect (LoginPage.inputUsername).toBeExisting();
    });

  it('should login with valid credentials', async () => {
       // await LoginPage.open();
        await LoginPage.login('aguiara@mail.com', 'Testing1!');
        expect(await SecurePage.errorMessage) || (await SecurePage.passErrorMessage).toBeExisting();
        expect (await SecurePage.checkUrl("login")).toBeFalsy;
        await expect (LoginPage.inputUsername).not.toBeExisting();    */

});


