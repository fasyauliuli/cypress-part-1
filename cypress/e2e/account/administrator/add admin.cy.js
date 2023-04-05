describe('add admin', () => {
    it ('add admin', () => {
        //add bm
        cy.contains('Add').click()
        cy.get('#Username').type('admin_cypress')
        cy.get('#Email').type('adm_cy@dispostable.com')
        cy.contains('Save').click()
    
        //cy.wait(5000)
        cy.get('#successDiv').should('contain.text', '"Success Create Data Account Role With Username : admin dari cypress"')
        cy.get('h1').should('contain.text', 'List Administrator')
      })
})