it.only("test login", function () {
  cy.visit("http://localhost:8080/");
  cy.get('.bg-positive').click();
  cy.get('.mailInput').type('test@tests.com');
  cy.get('.passwordInput').type('12345');
  cy.get('.confirmInput').type('12345');
  cy.get('.q-btn--standard').click();
  cy.go('back');
  cy.get('.bg-primary').click();
  cy.get('.mailInput').type('test@tests.com');
  cy.get('.passwordInput').type('12345');
  cy.get('.q-btn--standard').click();
});
