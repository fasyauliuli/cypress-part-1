describe('add admin fail', () => {
    it ('add admin fail', () => {    
        //add bm fail
        cy.wait(500)
        cy.get('#btnCreate').click()
        cy.get('#btnCreate').click()

        cy.wait(500)
        cy.get('.portlet-body form').should('contain.text', 'Username Required.')
        cy.get('.portlet-body form').should('contain.text', 'Email Required.')
    
        cy.get('#Username').type('admin_cypress')
        cy.get('#Email').type('sisi')
        cy.contains('Save').click()
        cy.get('.portlet-body form').should('contain.text', 'Please enter valid email address')
    
        cy.get('#Email').type('{selectAll}')
        cy.get('#Email').type('{del}')
        cy.get('#Email').type('admintestrl@dispostable.com')
        cy.contains('Save').click()
        cy.get('#errorMsgDiv').should('contain.text', '"Error Create Data Account Role With Error : Email already registered for user admintestrl in Role ADM"')
    
        cy.get('[value="Cancel"]').click()
        cy.get('h1').should('contain.text', 'List Administrator')
      })
})