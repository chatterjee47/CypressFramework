const HomePage = require('../page-objects/HomePage');


describe('Login to OrangeHRM website', function () {

    beforeEach(function() {
        HomePage.open();
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })
    });

    it('Validate Successful Login', function () {
        HomePage.enterUsername(this.testdata.username)
        HomePage.enterPassword(this.testdata.password)
        HomePage.clickOnLoginButton()
        HomePage.getTitle()
        HomePage.getText()
       
    })

    

    
});