const { expect } = require("chai")

describe('login gagal', () => {
  it ('login gagal', () => {
    cy.contains('Login').click()
    cy.get('.login-form').should('contain.text', 'Username Required.')
    cy.get('.login-form').should('contain.text', 'Password Required.')
    cy.get('[name="username"]').type('ace')
    cy.get('[name="password"]').type('1')
    cy.contains('Login').click()
    cy.get('body').should('contain.text', 'Invalid username or password')
  })
})