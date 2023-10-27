describe('Card Game Automation', () => {

  before(() => {
    // Navigate to the website
    cy.request('GET', 'https://deckofcardsapi.com/')
      .should((response) => {
        expect(response.status).to.equal(200);
      });

    // Confirm the site is up 
    cy.request('GET', 'https://deckofcardsapi.com/')
      .should((response) => {
        expect(response.status).to.equal(200);
      });
  });

  it('Automate the Card Game', () => {
    // Get a new deck
    cy.request('GET', 'https://deckofcardsapi.com/api/deck/new/shuffle/')
      .then((response) => {
        expect(response.status).to.equal(200);
        const respArray = [response.body];
        cy.writeFile('cypress/fixtures/NewDeck.json', respArray);
      });
    // Shuffle the deck
    cy.readFile('cypress/fixtures/NewDeck.json').then((jsonData) => {
      const deckId = jsonData[0].deck_id;
      cy.request('GET', `https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
        .should((response) => {
          expect(response.status).to.equal(200);
        });

      // Deal three cards to each of two players
      cy.request(`GET`, `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=6`)
      .then((response) => {
        expect(response.status).to.equal(200);
        const cards = response.body.cards;

        // Distribute the cards to players as needed
        const player1Cards = cards.slice(0, 3);
        const player2Cards = cards.slice(3, 6);
        // Write out the cards for each player
        cy.log('Player 1 Cards: ', player1Cards);
        cy.log('Player 2 Cards: ', player2Cards);
      });

    // Check whether either has blackjack

      /* Outline: I would check if either player's hand contains
       an ACE and a 10-point card (10, Jack, Queen, King).*/

    // If either has, write out which one does

      /* Outline: I would print out message indicating 
      which player has blackjack or indicating no player has blackjack*/
    })
  });
});
