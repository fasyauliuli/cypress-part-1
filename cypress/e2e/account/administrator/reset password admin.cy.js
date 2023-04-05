describe('reset password admin', () => {
    it ('reset password admin', () => {
    //reset password
    cy.wait(500)
    cy.get('#btnConfirmReset').click()
    cy.get('#btnConfirmReset').click()
    //cy.get('#btnConfirmReset').click()
    cy.get('#successDivResetPassword').should('contain.text', '"Success Reset Password Data Account Role With Username : admin dari cypress"')
    
    //cancel reset password
    cy.xpath('//*[@id="confirmResetPassword"]/div/div/div/div[3]/div/div[2]/a').click()
    cy.get('h1').should('contain.text', 'Detail Administrator')
    })
})