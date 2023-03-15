Cypress.Commands.add('login', (username: string, password: string) => {
    cy
        .get('[data-test="nav-sign-in"]').click()
        .get('[data-test="email"]').type(username)
        .get('[data-test="password"]').type(password)
        .get('[data-test="login-submit"]').click()
})