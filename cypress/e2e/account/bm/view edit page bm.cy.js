describe('view edit page', () => {
    it ('view edit page', () => {
    //view edit
    cy.contains('Edit').click()

    cy.get('h1').should('contain.text', 'Edit Branch Manager')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Branch Manager')
    cy.get('ul').should('contain.text', 'Detail Branch Manager')
    cy.get('ul').should('contain.text', 'Edit Branch Manager')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Branch Manager').should('have.attr', 'href', '#')
    cy.get('ul').contains('Detail Branch Manager').should('have.attr', 'href', '#')
    cy.get('ul').contains('Edit Branch Manager').should('have.attr', 'href', '#')
    cy.get('.portlet-body form').should('contain.text', 'BranchId')
    cy.get('.portlet-body form').should('contain.text', 'Username')
    cy.get('.portlet-body form').should('contain.text', 'Email')
    cy.get('.portlet-body form').should('contain.text', 'Save')
    cy.get('#BranchId').should('be.disabled')
    })
})