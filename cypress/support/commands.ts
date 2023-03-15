declare namespace Cypress {
    interface Chainable {
        login (username: string, password: string)
        logout ()
    }
}