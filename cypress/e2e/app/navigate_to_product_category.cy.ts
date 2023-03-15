describe('Navigate to product category', () => {
    it('navigate', () => {
        cy.visit('')
            .get('[data-test="nav-categories"]').click()
            .get('[data-test="nav-power-tools"]').click()
            .get('.col-md-9 > .container')
                .children().should('have.length', 8)
    })
})