import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';


  Given('I make a POST request to {string}', (url: string) => {
    cy.request('POST', url,{
      
        "name": "morpheusTest",
        "job": "leaderTest"
    }).as('response')
});


Then('the response should be {int}', (status: number) => {
  cy.get('@response').its('status').should('eq', status);
});

Then('the response should contain name {string}', (text: string) => {
  cy.get('@response').its('body.name').should('include', text);
});

  