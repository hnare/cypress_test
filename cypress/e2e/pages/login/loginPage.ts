import {Page} from "../page";

export class loginPage extends Page{
    constructor() {
        const elements = {
            inputFirstName: '#firstName',
            inputLastName: '#lastName',
            inputEmailName: '#email',
            inputPassword: '#password',
            submitBtn: '#submit',
            logout:'#logout',
            errorMessage: '#error',
            title: 'h1'
        }
        super(elements);
    }

    public goTo(url)  {
        this.navigateTo(url)
    }

    public validateurl(url: String)
     {
        this.validateurl(url)
    }

    public checkText(text : string) {
        this.validateText(this.elements.title, text)
    }

    public checkErrorMessage(text : string) {
        this.validateText(this.elements.errorMessage, text)
    }
  
    public fillFirstName(userName){
        this.type(this.elements.inputFirstName, userName)
    }

    public fillLastName(userName){
        this.type(this.elements.inputLastName, userName)
    }

    public fillEmail(userName){
        this.type(this.elements.inputEmailName, userName)
    }

    public fillPassword(password) {
        this.type(this.elements.inputPassword, password)
    }
    
    public clickSubmit(){
        this.clickOn(this.elements.submitBtn)
    }

    public clickLogin(){
        this.clickOn(this.elements.submitBtn)
    }

    public clickLogout(){
        this.clickOn(this.elements.logout)
    }

    public submitLogin(email: string,password: string){
        this.type(this.elements.inputEmailName, email)
        this.type(this.elements.inputPassword, password)
      }
    

}