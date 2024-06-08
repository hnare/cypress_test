import Cypress from "cypress";

export function makeGetRequest(url: string): Cypress.Chainable {
    return cy.request('GET', url);
  }
  
  Cypress.Commands.add("compareFixtureWithApiResponse", (fixtureName: string, apiUrl: string) => {
    // Load fixture
    cy.fixture(fixtureName).then((fixtureData) => {
      // Make API request
      cy.request(apiUrl).then((response) => {
        // Compare fixture with API response
        expect(response.body).to.deep.equal(fixtureData);
      });
    });
  });