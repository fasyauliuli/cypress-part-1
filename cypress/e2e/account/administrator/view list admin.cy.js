
describe('view list admin', () => {
    it ('view list admin', () => {
    //menu admin
    //cy.contains('Account').click()
    cy.contains('Administrator').click()

    //view list
    cy.get('h1').should('contain.text', 'List Administrator')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Administrator')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Administrator').should('have.attr', 'href', '#')
    cy.get('.page-content').should('contain.text', 'Add')
    cy.get('.page-content').contains('Add').should('have.attr', 'href', '#')
    cy.get('#TableAccountAdmin_wrapper').should('contain.text', 'Show 102550100 entries')
    cy.get('#TableAccountAdmin_wrapper').should('contain.text', 'Search')
    cy.get('#TableAccountAdmin').should('contain.text', 'Details')
    cy.get('#TableAccountAdmin').should('contain.text', 'Username')
    cy.get('#TableAccountAdmin').should('contain.text', 'Email')
    cy.get('#TableAccountAdmin_info').should('be.visible')
    cy.get('#TableAccountAdmin_wrapper').should('contain.text', 'Previous')
    cy.get('#TableAccountAdmin_wrapper').should('contain.text', 'Next')
    cy.get('.page-footer').should('contain.text', '2019 © CMS APL All Rights Reserved')
  })
})