describe('Search box test', () => {
    
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should type into searchbox and submit by pressing enter', () =>{
        cy.get('#searchTerm').type('some text {enter}')
    })

    it('should show search result page', () =>{
        cy.get('h2').contains('Search Results:')
    })
})