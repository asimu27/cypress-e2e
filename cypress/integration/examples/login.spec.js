describe('login - logout flow', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })

    it('should try to login with invalid data', () =>{
        cy.get('#login_form').should('be.visible')
        
    })

    it('shoud display error message', () =>{
        cy.get('.alert-error').should('be.visible').and('contains','Login and/or password are wrong.')
    })

    it('should login with correct credentials', () => {
        cy.fixture('user').then(user => {
            const username = user.userid          
            const password = user.password

          cy.login(username, password)
        })
        cy.get('ul.nav-tabs').should('be.visible')
    })

    it('should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })
})