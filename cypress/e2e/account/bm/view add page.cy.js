describe('view add page', () => {
it ('login', () => {
    //view add
    cy.contains('Add').click()
    cy.get('h1').should('contain.text', 'Add Branch Manager')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Branch Manager')
    cy.get('ul').should('contain.text', 'Add Branch Manager')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Branch Manager').should('have.attr', 'href', '#')
    cy.get('ul').contains('Add Branch Manager').should('have.attr', 'href', '#')
    cy.get('.portlet-body form').should('contain.text', 'BranchId')
    cy.get('.portlet-body form').should('contain.text', 'Username')
    cy.get('.portlet-body form').should('contain.text', 'Email')
    cy.get('.portlet-body form').should('contain.text', 'Save')
  })
})