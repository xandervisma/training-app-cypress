import { faker } from "@faker-js/faker"

describe('login', () => {
    it('Locate signin page', () => {
        cy.visit("")
            .get('[data-test="nav-contact"]').click()
            .get('[data-test="first-name"]').type(faker.name.firstName())
            .get('[data-test="last-name"]').type(faker.name.lastName())
            .get('[data-test="email"]').type(faker.internet.email())
            .get('[data-test="subject"]').select('Webmaster').should('have.value', 'webmaster')
            .get('[data-test="message"]').type(faker.random.words(50))
            .get('[data-test="contact-submit"]').click()
            .get('.alert')
                .should('be.visible')
                .should('contain.text', 'Thanks for your message! We will contact you shortly.')
    })
})