describe('view detail bm', () => {
    it('view detail', () => {
        //view detail
        cy.get('[type="search"]').type('bm dari cypress')
        cy.wait(3000)
        cy.contains('Lihat Detail').click()
    
        cy.get('h1').should('contain.text', 'Detail Branch Manager')
        cy.get('ul').should('contain.text', 'Dashboard')
        cy.get('ul').should('contain.text', 'List Branch Manager')
        cy.get('ul').should('contain.text', 'Detail Branch Manager')
        cy.get('ul').contains('Dashboard').should('have.attr', 'href', '#')
        cy.get('ul').contains('List Branch Manager').should('have.attr', 'href', '#')
        cy.get('ul').contains('Detail Branch Manager').should('have.attr', 'href', '#')
        cy.get('#sticky-panel').should('contain.text', 'Edit')
        cy.get('#sticky-panel').should('contain.text', 'Reset Password')
        cy.get('#sticky-panel').should('contain.text', 'Delete')
        cy.get('#sticky-panel').should('contain.text', 'Created by :')
        cy.get('#sticky-panel').should('contain.text', 'Modified by :')
        cy.get('.content-detail').should('contain.text', 'Data Branch Manager')
        cy.get('.content-detail').should('contain.text', 'BranchId')
        cy.get('.content-detail').should('contain.text', 'Username')
        cy.get('.content-detail').should('contain.text', 'Email')
        cy.get('#BranchId').should('have.attr', 'readonly')
        cy.get('#Username').should('have.attr', 'readonly')
        cy.get('#Email').should('have.attr', 'readonly')
    })
})