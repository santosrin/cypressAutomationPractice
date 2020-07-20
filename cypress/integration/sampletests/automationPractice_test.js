describe('automation practice features testing',() => {

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.login('santoshauto31@gmail.com','Ragh_1234')
    });

    // beforeEach(() => {
    //     cy.visit('http://automationpractice.com/index.php')
    //     cy.login('santoshauto31@gmail.com','Ragh_1234')
    // });

    it('should login', () => {
        cy.url().should('include','controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length',5)
    });

    it('should go to HomePage',() => {
        cy.get('.icon-chevron-left').last().click().
        url().should('include','index.php')
    });

    it('should search' ,() => {
        cy.search('Dress')
        cy.get('.lighter').contains('Dress')
    });


})