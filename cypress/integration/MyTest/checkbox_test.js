describe('Category page tests', () => {

    it('Category page - checkbox', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').first().click()
        cy.get('.checkbox').check().parent().should('have.class','checked')

        //uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().
        should('not.have.class','checked')
    })

    it.only('Snapdeal page - filter checkbox', () => {
       cy.visit('https://www.snapdeal.com/')
       cy.get('#inputValEnter').type('laptop')
       cy.contains('Search').click()

       //check
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').
       check({force: true})
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').
       should('have.checked','checked')

       //uncheck
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').
       uncheck({force: true})
       cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').
       should('not.have.checked','checked')
       
    })
})