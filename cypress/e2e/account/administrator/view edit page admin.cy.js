describe('view edit admin', () => {
    it ('view edit', () => {
    //view edit
    cy.contains('Edit').click()

    cy.get('h1').should('contain.text', 'Edit Administrator')
    cy.get('ul').should('contain.text', 'Dashboard')
    cy.get('ul').should('contain.text', 'List Administrator')
    cy.get('ul').should('contain.text', 'Detail Administrator')
    cy.get('ul').should('contain.text', 'Edit Administrator')
    cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
    cy.get('ul').contains('List Administrator').should('have.attr', 'href', '#')
    cy.get('ul').contains('Detail Administrator').should('have.attr', 'href', '#')
    cy.get('ul').contains('Edit Administrator').should('have.attr', 'href', '#')
    cy.get('.portlet-body form').should('contain.text', 'Username')
    cy.get('.portlet-body form').should('contain.text', 'Email')
    cy.get('.portlet-body form').should('contain.text', 'Save')
    cy.get('#Username').should('have.attr', 'readonly')
    })
})