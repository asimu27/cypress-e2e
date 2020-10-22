const { util } = require("chai")
const { iteratee } = require("cypress/types/lodash")

describe('login - logout flow', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.userid
            const password = user.password
            cy.login(username,password)
        })
    })

    it('should send new payment', () =>{
        cy.get('#pay__bills_tab').click()
        cy.contains('Pay Savaed Payee').click()
        cy.get('#sp_payee').select('wellsfargo')
        cy.get('#ps_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2020-10-10 {enter}')
        cy.get('#pay_saved_payees').click()
    })

    it('should show success message', () => {
        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'the payment was successfully submitted')
    })
})