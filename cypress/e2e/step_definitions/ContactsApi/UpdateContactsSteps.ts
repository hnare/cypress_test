import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';


  Given('I make a PUT request to {string}', (endpoint: string) => {
    let baseUri: string  = Cypress.env("baseUri");
    let uri : string = `${baseUri}${endpoint}`;
    cy.request('PUT', uri,{
        "name": "morpheusTestUpdated",
        "job": "leaderTest"
    }).as('response')
});


Then('the response should be {int}', (status: number) => {
  cy.get('@response').its('status').should('eq', status);
});

Then('the response should contain name {string}', (text: string) => {
  cy.get('@response').its('body.name').should('include', text);
});

  