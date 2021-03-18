import testConfig from '../../../testConfig';

describe('Find github user', () => {
  it('should find a github user and redirect to list page', () => {
    cy.visit(testConfig.localhost)
    cy.get('#search-input').type('filipedeschamps');
    cy.get('#search-input-submit-button').click()
    cy.location().should((loc) => {
      expect(loc.pathname.toString()).to.contain('/user/filipedeschamps');
    })
  });
});
