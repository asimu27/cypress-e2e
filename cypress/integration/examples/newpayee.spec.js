describe('New Payee test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#signin_button').click()
        cy.fixture('user').then(user => {
            const username = user.userid          
            const password = user.password

            cy.login(username, password)
            //cy.get('#user_login').type(username)
            //cy.get("#user_password").type(password)
            //cy.get('#user_remember_me').click()
         //   cy.contains('Sign in').click()
        })
    })

    it('should add new payee to the list',() => {
        cy.get('#pay_bills_tab').click()
        cy.contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('name')
        cy.get('#np_new_payee_account').type('12345566')
        cy.get('#np_new_payee_address').type('address')
        cy.get('#np_new_payee_details').type('details')
        cy.get('#add_new_payee').click()

    })

    it('should show success message', () =>{
        cy.get('#alert_content')
					.should('be.visible')
					.and('contain', 'The new payee name was successfully created');
    })
})