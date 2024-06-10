import { defineConfig } from "cypress";

const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default;
const resolve = require('resolve');

export default defineConfig({
  watchForFileChanges: true,
  requestTimeout: 10000,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 15000,
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  modifyObstructiveCode: true,

  viewportHeight: 1080,
  viewportWidth: 1920,
  video: true,

  env:{
    baseUri:"https://reqres.in",
  },
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    retries: {
      runMode: 2,
    },
    setupNodeEvents(on, config) {
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      };
      on('file:preprocessor', cucumber(options));

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    fixturesFolder: "cypress/fixtures",
    projectId: "q55yj7",  
  },
});
