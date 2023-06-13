const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: 'https://b25f-93-171-242-167.ngrok-free.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
