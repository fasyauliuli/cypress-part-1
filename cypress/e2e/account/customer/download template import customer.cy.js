describe('view reset password admin', () => {
    it ('view reset password admin', () => {
    cy.get('[type="search"]').type('admin_cypress')
    cy.wait(3000)
    cy.contains('Lihat Detail').click()
    
    //view reset password
    cy.get('#btnReset').click()

    cy.get('.modal-header').should('contain.text', 'Reset Password')
    cy.get('.modal-header').should('contain.text', 'Apakah Anda Yakin Akan Mereset Password Untuk Akun Dibawah Ini ?')
    cy.get('.form-group').should('contain.text', 'Username')
    cy.get('#Username').should('have.attr', 'readonly')
    cy.get('.modal-footer').should('contain.text', 'Yes')
    cy.get('.modal-footer').should('contain.text', 'No')
    })
})