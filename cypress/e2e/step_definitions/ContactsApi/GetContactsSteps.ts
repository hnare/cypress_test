import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import cypress from 'cypress';

Given('I make a GET request to {string}', (url: string) => {
    cy.request('GET', url).as('response');
});

Then('the response status should be {int}', (status: number) => {
    cy.get('@response').its('status').should('eq', status);
  });
  
  Then('the response should contain {string}', (text: string) => {
    cy.get('@response').its('body.data.email').should('include', text);
  });

  Given('I make a POST request to {string}', (url: string) => {
    cy.request('POST', url).as('response');
});
  