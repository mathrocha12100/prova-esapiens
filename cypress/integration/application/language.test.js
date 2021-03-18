import ptBr from '../../../src/languages/ptBr';
import enUs from '../../../src/languages/enUs';

import testConfig from '../../../testConfig';

describe('should change the application language', () => {
  it('should change the application language to english', () => {
    cy.visit(testConfig.localhost);

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
