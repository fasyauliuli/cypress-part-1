
describe('view list bm', () => {
    it ('view login', () => {
    //menu bm
    cy.contains('Account').click()
    cy.contains('Branch Manager').click()

    //view list
    cy.get('h1').should('contain.text', 'List Branch Manager')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Branch Manager')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Branch Manager').should('have.attr', 'href', '#')
    cy.get('.page-content').should('contain.text', 'Add')
    cy.get('.page-content').contains('Add').should('have.attr', 'href', '#')
    cy.get('#TableAccountBranchManager_wrapper').should('contain.text', 'Show 102550100 entries')
    cy.get('#TableAccountBranchManager_wrapper').should('contain.text', 'Search')
    cy.get('#TableAccountBranchManager').should('contain.text', 'Details')
    cy.get('#TableAccountBranchManager').should('contain.text', 'Branch')
    cy.get('#TableAccountBranchManager').should('contain.text', 'Username')
    cy.get('#TableAccountBranchManager').should('contain.text', 'Email')
    cy.get('#TableAccountBranchManager_info').should('be.visible')
    cy.get('#TableAccountBranchManager_wrapper').should('contain.text', 'Previous')
    cy.get('#TableAccountBranchManager_wrapper').should('contain.text', 'Next')
    cy.get('.page-footer').should('contain.text', '2019 © CMS APL All Rights Reserved')
  })
})