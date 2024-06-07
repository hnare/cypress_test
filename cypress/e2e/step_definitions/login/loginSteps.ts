import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {loginPage} from "../../pages/login/loginPage"

const login = new loginPage();

Given('a user navigates to login page', () => {
  login.goTo("/");
});

When("user submits the below details", (dataTable: any) => {
  const data = dataTable.hashes()[0]; 
  login.fillFirstName(data['First Name']);
  login.fillLastName(data['Last Name']);
  login.fillEmail(data['email']);
  login.fillPassword(data['password']);
  login.clickSubmit();
});


When('user clicks on submit', () => {
    login.clickSubmit();
});

Then('the page contains text {string}', (text:string) =>{
    login.checkText(text)
})



