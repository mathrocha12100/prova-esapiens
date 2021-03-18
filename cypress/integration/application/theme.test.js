describe('application theme', () => {
  it('should change the application theme to dark theme', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#change-theme-switch').click({ force: true });

    cy.get('#search-input-submit-button').should(
      'have.css',
      'background-color',
      'rgb(14, 22, 45)'
    );
  });

  it('should change the application theme to light', () => {
    cy.get('#change-theme-switch').click({ force: true });

    cy.get('#search-input-submit-button').should(
      'have.css',
      'background-color',
      'rgb(255, 82, 86)'
    );
  });
});
