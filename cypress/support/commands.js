// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login_homologação', (
  
    username = Cypress.env('User_login'),
    password = Cypress.env('Password_login')
    ) => {
    cy.session([username, password], () => {
      cy.visit('https://kubolms.com.br/homologacao/admin/')
      cy.get('.uname').type(username)
      cy.get('.pword').type(password, { log: false })
      cy.get('.btn[type="submit"]').click()
    })
  })

import 'cypress-file-upload'