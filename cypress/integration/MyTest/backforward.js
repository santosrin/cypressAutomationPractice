describe('back forward navigation', () => {

    it('navigation test',() => {
        cy.visit('https://www.freshworks.com')
        cy.contains('Platform').click().
        go('back').
        go('forward')

       // cy.visit('http://www.google.com').
       

        // cy.go('back')
        // cy.wait(200)
        // cy.go('forward')       
    })
})