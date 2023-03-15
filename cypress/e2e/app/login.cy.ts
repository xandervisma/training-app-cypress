describe('login', () => {
    it('Locate signin page', () => {
        cy.visit("")

        cy.login('customer@practicesoftwaretesting.com', 'welcome01')

        cy.get('[data-test="page-title"]').should('contain.text', 'My account')

        cy.logout()
    })
})