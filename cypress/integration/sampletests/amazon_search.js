describe('check amazon search', () => {

    it('amazon search test', () => {
        cy.visit('https://www.amazon.in')
        cy.get('.nav-search-field ').within(() => {
            cy.get('#twotabsearchtextbox').
            type('Apple Mac Book Laptop').click()
        })

    })
})