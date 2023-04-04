describe('delete bm', () => {
    it ('delete bm', () => {
    //cancel delete bm
    cy.xpath('//*[@id="confirmDelete"]/div/div/div/div/div[2]/div/div[2]/button').click()
    
    //delete bm
    cy.get('#btnDelete').click()
    cy.get('#btnConfirmDelete').click()
    cy.wait(5000)
    cy.get('#successDiv').should('contain.text', '"Success Delete Data Account Role With Username : bm edit cypress"')
    cy.get('h1').should('contain.text', 'List Branch Manager')

    //search bm after deleted
    cy.get('[type="search"]').type('bm edit cypress')
    cy.wait(3000)
    cy.get('#TableAccountBranchManager').should('contain.text', 'No data available in table')
    })
})