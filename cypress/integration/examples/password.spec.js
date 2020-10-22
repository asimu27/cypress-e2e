describe('Password Scenarios', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on signin button', () => {
        cy.get('#signin_button').click()
    })

    it('should click on forgotten password link', () => {
        cy.get('.offset3 > a').click()
    })

    it('should fill email form', ()=>{
        cy.get('#user_email').type('test@email.com')
    })

    it('should submit the form', () => {
        cy.contains('Send Password').click()
    })
})