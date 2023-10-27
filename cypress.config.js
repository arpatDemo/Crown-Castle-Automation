const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    checker_game_url: 'https://www.gamesforthebrain.com/game/checkers/',
    products_url: '/products',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
