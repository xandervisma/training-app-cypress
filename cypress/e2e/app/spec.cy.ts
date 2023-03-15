describe('template spec', () => {
    it('passes', () => {
        cy.visit('')
        cy.get('[data-test="nav-contact"]').click()

        cy.get('h3').should('contain.text', 'Contact')
    })
})