import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import { signupPage } from '../../pages/signup/signUpPage';

const signup = new signupPage();

Given('a user navigates to signup page', () => {
  signup.goTo("/addUser");
});

When("user submits the below details", (dataTable: any) => {
  const data = dataTable.hashes()[0]; 
  signup.fillFirstName(data['First Name']);
  signup.fillLastName(data['Last Name']);
  signup.fillEmail(data['email']);
  signup.fillPassword(data['password']);
  signup.clickSubmit();
});

When('user clicks on submit', () => {
  signup.clickSubmit();
});

When('user clicks on Logout', () => {
  signup.clickLogout();
});

Then('the page contains text {string}', (text:string) =>{
  signup.checkText(text)
})

Then('user should be redirected to the contact list {string} page', (url: string) => {
  signup.validateurl(url);
});





