Cypress.Commands.add('logout', () => {
    cy
        .get('[data-test="nav-user-menu"]').click()
        .get('[data-test="nav-sign-out"]').click()
})