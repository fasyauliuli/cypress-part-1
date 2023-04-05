describe('delete bm', () => {
    it ('delete bm', () => {
    //cancel delete bm
    cy.xpath('//*[@id="confirmDelete"]/div/div/div/div/div[2]/div/div[2]/button').click()
    cy.get('h1').should('contain.text', 'Detail Administrator')
    
    //delete bm
    cy.get('#btnDelete').click()
    cy.get('#btnConfirmDelete').click()
    //cy.wait(5000)
    cy.get('#successDiv').should('contain.text', '"Success Delete Data Account Role With Username : admin dari cypress"')
    cy.get('h1').should('contain.text', 'List Administrator')

    //search bm after deleted
    cy.get('[type="search"]').type('admin dari cypress')
    cy.wait(2000)
    cy.get('#TableAccountBranchManager').should('contain.text', 'No data available in table')
    })
})