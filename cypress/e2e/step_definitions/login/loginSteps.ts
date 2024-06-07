import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
import {loginPage} from "../../pages/login/loginPage"

const login = new loginPage();

Given('a user navigates to login page', () => {
  login.navigateTo("/login");
});

When('user clicks on submit', () => {
    login.clickSubmit();
});

When('user clicks on Logout', () => {
  login.clickLogout();
});

Then('the page contains text {string}', (text:string) =>{
    login.checkText(text)
})

Then('user enter a valid {string} and {string}', (email:string,password:string) =>{
  login.submitLogin(email, password)
})

Then('user should be redirected to the contact list {string} page', (url: string) => {
  login.validateurl(url);
});





