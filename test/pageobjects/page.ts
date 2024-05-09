
export default class Page {

    //Opens a sub page of the page

    public open (path: string) {
        return browser.url(`https://magento.softwaretestingboard.com/customer/account/login/${path}`)
    }
}
