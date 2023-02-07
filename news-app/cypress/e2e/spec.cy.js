describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
})

// These tests were generated with Experimental Cypress Studio, as an added layer of testing
// In the cypress.config file I added the experimentalStudio: true line which allowed me to interact with the app in the Cypress UI and generate these tests
// I also added the baseUrl: 'http://localhost:3000' line to the cypress.config file so that I could run the tests without having to type the url in the browser
// All I had to do is use the app as a user would and Cypress Studio would generate the tests for me
// see the cypress.config.js file for more details

/* ==== Generated with Cypress Studio ==== */
cy.visit('http://localhost:3000');
cy.get('.input').clear('G');
cy.get('.input').type('Google');
cy.get('.button').click();
cy.get('.input').click();
cy.get('.input').click();
cy.get('.input').clear('A');
cy.get('.input').type('Apple');
cy.get('.button').click();
cy.get('.input').click();
/* ==== End Cypress Studio ==== */

