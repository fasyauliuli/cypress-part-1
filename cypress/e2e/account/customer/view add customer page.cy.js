describe('view add admin', () => {
it ('view add admin', () => {
    //view add
    cy.contains('Add').click()
    cy.get('h1').should('contain.text', 'Add Administrator')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Admin')
    cy.get('ul').should('contain.text', 'Add Administrator')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Admin').should('have.attr', 'href', '#')
    cy.get('ul').contains('Add Administrator').should('have.attr', 'href', '#')
    cy.get('.portlet-body form').should('contain.text', 'Username')
    cy.get('.portlet-body form').should('contain.text', 'Email')
    cy.get('.portlet-body form').should('contain.text', 'Save')
    cy.get('.btn btn-padd2 grey-cascade').should('have.attr', 'value', 'Cancel')
  })
})