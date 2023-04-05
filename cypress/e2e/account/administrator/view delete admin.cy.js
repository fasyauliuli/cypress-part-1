describe('view delete admin', () => {
    it ('view delete admin', () => {
    //view edit
    cy.get('#btnDelete').click()

    cy.get('.modal-header').should('contain.text', 'Are You Sure Want To Delete This Data?')
    cy.get('.form-group').should('contain.text', 'Username')
    cy.get('.form-group').should('contain.text', 'Email')
    cy.get('#Username').should('have.attr', 'readonly')
    cy.get('#Email').should('have.attr', 'readonly')
    cy.get('.modal-footer').should('contain.text', 'Yes')
    cy.get('.modal-footer').should('contain.text', 'No')
    })
})