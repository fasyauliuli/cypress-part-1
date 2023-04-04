const { expect } = require("chai")

describe('view login', () => {
  //before(function() {
  it ('view login', () => {
    cy.visit(Cypress.env('baseUrl'))

    cy.title().should('eq', 'eZRX | Login page')
    cy.get('body').should('contain.text', 'Content Management System')
    cy.get('.login-form').should('contain.text', 'Login')
    cy.get('body').should('contain.text', '2019 © CMS APL All Rights Reserved')
  })
})