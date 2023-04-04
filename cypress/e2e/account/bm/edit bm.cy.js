describe('edit bm', () => {
    it ('edit bm', () => {
    cy.wait(500)
    cy.get('[type="search"]').type('bm dari cypress')
    cy.wait(3000)
    cy.contains('Lihat Detail').click()
    cy.contains('Edit').click()

    //edit success
    cy.get('#Username').type('{selectAll}')
    cy.get('#Username').type('{del}')
    cy.get('#Username').type('bm edit cypress')
    cy.contains('Save').click()
    
    cy.wait(5000)
    cy.get('#successDiv').should('contain.text', '"Success Update Data Account Role With Username : bm edit cypress"')
    cy.get('h1').should('contain.text', 'List Branch Manager')
    })
})