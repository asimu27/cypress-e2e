const { inRange } = require("cypress/types/lodash")

describe('feedback test', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click()
    })

    it('should load feedback form', () =>{
        cy.get('form').should('be.visible')
    })

    it('should fill feedback form', () =>{
        cy.get('#name').type('name')
        cy.get('#email').type('email@email.com')
        cy.get('#subject').type('some subject')
        cy.get('#comment').type('some comment')
    })

    it('should submit feedback form', () => {
        cy.get('.btn-signin').click()
    })

    it('should submit feedback message', () => {
        cy.get('#feedback-title').contains('Feedback')
    })
})