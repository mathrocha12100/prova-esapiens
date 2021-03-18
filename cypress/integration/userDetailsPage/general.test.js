import ptBr from '../../../src/languages/ptBr';
const { followers, following, repositories } = ptBr.userDetailsPage.cardsText;
import { getGithubUserData, getRepositoriesData } from './data';

describe('repositories', () => {
  it('should load data', () => {
    cy.visit('http://localhost:3001/user/filipedeschamps');

    cy.intercept('GET', `https://api.github.com/users/filipedeschamps`, {
      statusCode: 200,
      body: getGithubUserData,
    });
  });

  it('should select repositories card', () => {
    cy.get('#repositories-card').click();
    cy.get('.list-repos-title').contains(repositories);
  });

  it('should go to next page', async () => {
    await cy.intercept(
      'GET',
      `https://api.github.com/users/filipedeschamps/repos?page=1&order=desc&per_page=10`,
      {
        statusCode: 200,
        body: getRepositoriesData,
        delayMs: 2000,
      }
    );

    cy.get('#next-page-button').click();

    await cy.intercept(
      'GET',
      `https://api.github.com/users/filipedeschamps/repos?page=2&order=desc&per_page=10`,
      {
        statusCode: 200,
        body: getRepositoriesData,
        delayMs: 2000,
      }
    );

    cy.get('#actual-page').contains('5');
  });

  it('should go to previous page', async () => {
    cy.get('#before-page-button').click();

    await cy.intercept(
      'GET',
      `https://api.github.com/users/filipedeschamps/repos?page=1&order=desc&per_page=10`,
      {
        statusCode: 200,
        body: getRepositoriesData,
      }
    );

    cy.get('#actual-page').contains('4');
  });
});

// describe('repositories', () => {
//   it('should go to next page', () => {
//     cy.get('#next-page-button').click();
//     cy.get('#actual-page').contains('2');

//     cy.intercept({
//       method: 'GET', // Route all GET requests
//       url: '/user/user/filipedeschamps', // that have a URL that matches '/users/*'
//     });
//   });

//   it('should go to previous page', () => {
//     cy.intercept({
//       method: 'GET', // Route all GET requests
//       url: '/user/user/filipedeschamps', // that have a URL that matches '/users/*'
//     });

//     cy.get('#before-page-button').click();
//     cy.get('#actual-page').contains('1');
//   });
// });

/**
 * it('should select followers card', () => {
    cy.get('#followers-card').click();
    cy.get('.list-followers-title').contains(followers);
  });

  
 */

/**
   * cy.get('#following-card').click();
    cy.get('.list-followers-title').contains(following);
   */
