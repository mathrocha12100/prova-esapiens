import ptBr from '../../../src/languages/ptBr';
const { followers, following, repositories } = ptBr.userDetailsPage.cardsText;
import {
  getGithubUserData,
  getRepositoriesData,
  getUserFollowersData,
} from '../../fixtures/userDetailsPage';
import testConfig from '../../../testConfig';
import { sortArray } from '../../../src/functions/arrayFunctions';

describe('repositories', () => {
  it('should load the application', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: `https://api.github.com/users/filipedeschamps`,
      status: 200,
      response: getGithubUserData,
    }).as('userdata');
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/repos?page=1&order=desc&per_page=10',
      status: 200,
      response: getRepositoriesData,
    }).as('repositories');

    cy.visit(`${testConfig.localhost}/user/filipedeschamps`);
    cy.wait('@userdata');
    cy.wait('@repositories');
  });

  it('should select repositories card and order to asc and desc', () => {
    cy.get('#repositories-card').click();
    cy.get('.list-repos-title').contains(repositories);

    const sorted = getRepositoriesData.sort((a, b) =>
      sortArray(b, a, 'stargazers_count')
    );
    const maxStars = sorted[0].stargazers_count;
    const minStars = sorted[9].stargazers_count;

    cy.get('.repository-stars').contains(maxStars);

    cy.get('.filter-button').click();

    cy.get('.repository-stars').contains(minStars);
  });

  it('should paginate to next page and previous', () => {
    cy.server();

    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/repos?page=2&order=asc&per_page=10',
      status: 200,
      response: getRepositoriesData,
    }).as('repositoriesPage2');

    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/repos?page=1&order=asc&per_page=10',
      status: 200,
      response: getRepositoriesData,
    }).as('repositoriesPage1');

    cy.get('#next-page-button').click();

    cy.wait('@repositoriesPage2');

    cy.get('#actual-page').contains('2');

    cy.get('#before-page-button').click();
    cy.wait('@repositoriesPage1');

    cy.get('#actual-page').contains('1');
  });
});

describe('followers', () => {
  it('should select followers tab', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/followers?page=1&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('followers');

    cy.get('#followers-card').click();
    cy.wait('@followers');

    cy.get('.list-followers-title').contains(followers);
  });

  it('should paginate to next and previous page', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/followers?page=2&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('followersPage2');
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/followers?page=1&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('followersPage1');

    cy.get('#next-page-button').click();

    cy.wait('@followersPage2');

    cy.get('#actual-page').contains('2');

    cy.get('#before-page-button').click();
    cy.wait('@followersPage1');

    cy.get('#actual-page').contains('1');
  });
});

describe('following', () => {
  it('should select following tab', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/following?page=1&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('following');

    cy.get('#following-card').click();
    cy.wait('@following');

    cy.get('.list-followers-title').contains(following);
  });

  it('should paginate to next and previous page', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/following?page=2&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('followingPage2');
    cy.route({
      method: 'GET',
      url:
        'https://api.github.com/users/filipedeschamps/following?page=1&per_page=10',
      status: 200,
      response: getUserFollowersData,
    }).as('followingPage1');

    cy.get('#next-page-button').click();

    cy.wait('@followingPage2');

    cy.get('#actual-page').contains('2');

    cy.get('#before-page-button').click();
    cy.wait('@followingPage1');

    cy.get('#actual-page').contains('1');
  });
});
