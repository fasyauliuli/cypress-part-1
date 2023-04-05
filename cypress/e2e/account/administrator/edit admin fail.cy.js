describe('edit admin fail', () => {
    it ('edit admin fail', () => {
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
    cy.get('#Email').type('admintestrl@dispostable.com')
    cy.contains('Save').click()
    cy.get('#errorMsgDiv').should('contain.text', '"Error Update Data Account Role With Username : admin dari cypress Email already registered for user admintestrl in Role ADM"')

    cy.get('[value="Cancel"]').click()
    cy.get('h1').should('contain.text', 'List Administrator')
    })
})