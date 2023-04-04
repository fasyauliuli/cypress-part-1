describe('reset password bm', () => {
    it ('reset password bm', () => {
    //reset password
    cy.wait(500)
    cy.get('#btnConfirmReset').click()
    cy.get('#btnConfirmReset').click()
    //cy.get('#btnConfirmReset').click()
    cy.get('#successDivResetPassword').should('contain.text', '"Success Reset Password Data Account Role With Username : bm edit cypress"')
    cy.xpath('//*[@id="confirmResetPassword"]/div/div/div/div[3]/div/div[2]/a').click()
    })
})