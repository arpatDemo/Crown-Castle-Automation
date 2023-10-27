
import { slowCypressDown } from 'cypress-slow-down';
slowCypressDown(500);

before(() => {
  slowCypressDown();
  // Navigate to the website
  cy.visit(Cypress.env('checker_game_url'));
  // Confirm site is up
  cy.url().should('eq', Cypress.env('checker_game_url'));
});

describe('Checkers Game Automation', () => {
    slowCypressDown(500);
  it('Automate the Checkers Game', () => {
    // Making five legal moves as orange
    performCheckerMove('[name="space62"]', '[name="space53"]');
    performCheckerMove('[name="space42"]', '[name="space33"]');
    //This step is taking a blue piece
    performCheckerMove('[name="space51"]', '[name="space33"]');
    performCheckerMove('[name="space22"]', '[name="space13"]');
    performCheckerMove('[name="space11"]', '[name="space22"]');

    // Restart the game
    cy.get('[href="./"]').click();
    // Confirm that the restarting had been successful
    cy.get('#message').should('have.text', 'Select an orange piece to move.');
  });
});

function performCheckerMove(source, destination) {
  cy.get(source).click();
  cy.get(destination).click();
  cy.get('#message').should('have.text', 'Make a move.');
}
