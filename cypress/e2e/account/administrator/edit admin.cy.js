describe('edit admin', () => {
    it ('edit admin', () => {
    cy.wait(500)
    cy.get('[type="search"]').type('admin dari cypress')
    cy.wait(3000)
    cy.contains('Lihat Detail').click()
    cy.contains('Edit').click()

    //edit success
    cy.get('#Email').type('{selectAll}')
    cy.get('#Email').type('{del}')
    cy.get('#Email').type('adm_cy2@dispostable.com')
    cy.contains('Save').click()
    
    //cy.wait(5000)
    cy.get('#successDiv').should('contain.text', '"Success Update Data Account Role With Username : admin dari cypress"')
    cy.get('h1').should('contain.text', 'List Administrator')
    })
})