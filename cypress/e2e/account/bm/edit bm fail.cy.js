describe('edit bm fail', () => {
    it ('edit bm fail', () => {
    //edit fail
    cy.get('#Email').type('{selectAll}')
    cy.get('#Email').type('{del}')
    cy.wait(500)
    cy.contains('Save').click()
    cy.contains('Save').click()
    cy.wait(500)
    cy.get('.portlet-body form').should('contain.text', 'Email Required.')

    cy.get('#Email').type('{selectAll}')
    cy.get('#Email').type('{del}')
    cy.get('#Email').type('lulu')
    cy.get('.portlet-body form').should('contain.text', 'Please enter valid email address')

    cy.get('#Email').type('{selectAll}')
    cy.get('#Email').type('{del}')
    cy.get('#Email').type('bm3@dispostable.com')
    cy.contains('Save').click()
    cy.get('#errorMsgDiv').should('contain.text', '"Error Update Data Account Role With Username : bm dari cypress Email already registered for user abc123 in Role BM"')

    cy.get('#Username').type('{selectAll}')
    cy.get('#Username').type('{del}')
    cy.get('#Username').type('abc123')
    cy.contains('Save').click()
    cy.get('#errorMsgDiv').should('contain.text', '"Error Update Data Account Role With Username : abc123 That username is taken in Role BM. Try another."')

    cy.get('[value="Cancel"]').click()
    cy.get('h1').should('contain.text', 'List Branch Manager')
    })
})