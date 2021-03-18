import ptBr from '../../../src/languages/ptBr';
import enUs from '../../../src/languages/enUs';


describe('should change the application language', () => {
  it('should change the application language to english', () => {
    cy.visit('http://localhost:3001');

    cy.get('#change-language-button').click();

    cy.get('.english-menu-item').click();
    cy.get('.title').contains(enUs.mainPage.title);
  });

  it('should change the application language to portuguese', () => {
    cy.get('#change-language-button').click();

    cy.get('.portuguese-menu-item').click();
    cy.get('.title').contains(ptBr.mainPage.title);
  });
});
