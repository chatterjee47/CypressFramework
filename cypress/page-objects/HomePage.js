import BasePage from "./BasePage";

class HomePage extends BasePage{

    get accountLink() { return cy.get('#nav-link-accountList'); }
    get searchDropdown() { return cy.get('#searchDropdownBox'); }
    get searchBox() { return cy.get('#twotabsearchtextbox'); }
    get searchButton() { return cy.get('#nav-search-submit-button'); }
    get signOutLink() { return cy.get('#nav-item-signout'); }

    get UserNameTxt() { return cy.get('#txtUsername'); }
    get PasswordTxt() { return cy.get('#txtPassword'); }
    get LoginBtn() { return cy.get('#btnLogin'); }
    get NameTxt() { return cy.get('#welcome'); }
  

    enterUsername(strUserName) {
        this.UserNameTxt
            .clear()
            .type(strUserName);
    }

    enterPassword(strPassword) {
        this.PasswordTxt
            .clear()
            .type(strPassword);
    }

    clickOnLoginButton() {
        this.LoginBtn.click();
    }

    getText(){
        this.NameTxt.then((theElement) => {
            const article = theElement.text();
            cy.log(article)
          });
    }

    getTitle(){
        cy.title().should('eq', 'OrangeHRM');
    }

    open(){
        cy.visit('/');
    }

    logintoApplication(){
        this.UserNameTxt
            .clear()
            .type('Admin');
            this.PasswordTxt
            .clear()
            .type('admin123');
            this.LoginBtn.click();
    }

    clickSignInLink() {
        this.accountLink.click();
    }

    selectDepartment(department) {
        return this.searchDropdown.select(department, {force: true});
    }

    inputSearchKeyword(keyword) {
        return this.searchBox
            .clear()
            .type(keyword);
    }

    clickSearchButton() {
        return this.searchButton.click();
    }

    isSignedIn() {
        return this.signOutLink.should('exist');
    }
}

module.exports = new HomePage();