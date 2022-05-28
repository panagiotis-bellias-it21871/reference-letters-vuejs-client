// https://docs.cypress.io/api/introduction/api.html
describe('Test Main Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080')
    })
    it('check link', () => (
        cy
            .get('[data-cy=link]')
            .children()
            .should('have.length', 2)
    ))
})