const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    specPattern: 'C:/Users/fasya/OneDrive/Documents/Radya Labs/ACPBUS/cypress-part-1/cypress/e2e/allTestCase.cy.js',
    env: {
    baseUrl: 'https://apq.ezrx.id/CMS/Account/Login',
    username: 'ace',
    password: 'Qwerty@123'
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }},
  });
