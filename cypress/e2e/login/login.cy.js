const { beforeEach } = require("mocha")

describe('login', () => {
  it ('login', () => {
      //cy.visit(Cypress.env('baseUrl'))
      cy.get('[name="username"]').type(Cypress.env('username'))
      cy.get('[name="password"]').type(Cypress.env('password'))
      cy.contains('Login').click()
      cy.title().should('eq', 'CMS APL')
      cy.get('body').should('contain.text', 'Welcome')
  })
})