describe('Navigate to product category unhappy', () => {
    it('navigate', () => {
        cy.visit('')
            .get('[data-test="nav-categories"]').click()
            .get('[data-test="nav-special-tools"]').click()
            .get('[data-test="category-empty"]').should('contain.text', 'There are no products available yet')
    })
})