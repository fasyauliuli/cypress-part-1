describe('add bm', () => {
    it ('add bm', () => {
        //add bm
        cy.contains('Add').click()
        cy.get('.select2-chosen').click()
        cy.get('#s2id_autogen73_search').type('jambi')
        cy.get('#s2id_autogen73_search').type('{enter}')
        cy.get('#Username').type('bm dari cypress')
        cy.get('#Email').type('cy@press.com')
        cy.contains('Save').click()
    
        cy.wait(5000)
        cy.get('#successDiv').should('contain.text', '"Success Create Data Account Role With Username : bm dari cypress"')
        cy.get('h1').should('contain.text', 'List Branch Manager')
      })
})