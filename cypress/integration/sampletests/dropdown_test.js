describe('dropdown test',() => {

    it.skip('dropdown',() => {
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country').
        select('Andorra').
        should('have.value','Andorra')

        cy.get('#Form_submitForm_Industry').
        select('Automotive').
        should('have.value','Automotive')
    })

    it.skip('google search',() => {
        cy.visit('https://www.google.com')
        cy.get("[name='q']").type('cypress')

        // cy.get('.erkvQe').
        // find('li span').
        // contains('cypress tutorial').click()

        cy.get('.erkvQe li span').contains('cypress tutorial').click()
    })

    it('automation ecom search',() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('#search_query_top').type('dress')

        cy.get('.ac_results').
        find('li').
        contains('T-shirts').
        click()
    })

})