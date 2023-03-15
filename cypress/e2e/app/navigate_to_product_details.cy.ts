// 1. On the homepage click on a product
// 2. Verify that the product name is displayed

describe('Navigate to product category', () => {
    it('navigate', () => {
        cy.visit('')
            .get('[data-test="product-1"]').click()
            .get('[data-test="product-name"]').should("contain.text", "Combination Pliers")
    })
})