describe('add bm fail', () => {
    it ('add bm fail', () => {    
        //add bm fail
        cy.wait(500)
        cy.get('#btnCreate').click()
        cy.get('#btnCreate').click()

        cy.wait(500)
        cy.get('.portlet-body form').should('contain.text', 'Branch Required.')
        cy.get('.portlet-body form').should('contain.text', 'Username Required.')
        cy.get('.portlet-body form').should('contain.text', 'Email Required.')
    
        cy.get('#select2-chosen-1').click()
        cy.get('#s2id_autogen1_search').type('tangerang')
        cy.get('#s2id_autogen1_search').type('{enter}')
        cy.get('#Username').type('bm dari cypress')
        cy.get('#Email').type('sisi')
        cy.contains('Save').click()
        cy.get('.portlet-body form').should('contain.text', 'Please enter valid email address')
    
        cy.get('#Email').type('{selectAll}')
        cy.get('#Email').type('{del}')
        cy.get('#Email').type('bm3@dispostable.com')
        cy.contains('Save').click()
        cy.get('#errorMsgDiv').should('contain.text', '"Error Create Data Account Role With Error : Email already registered for user abc123 in Role BM"')
    
        cy.get('[value="Cancel"]').click()
        cy.get('h1').should('contain.text', 'List Branch Manager')
      })
})