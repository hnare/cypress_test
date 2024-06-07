import {Page} from "../Page";

export class loginPage extends Page{
    constructor() {
        const elements = {
            inputFirstName: '#firstName',
            inputLastName: '#lastName',
            inputEmailName: '#email',
            inputPassword: '#password',
            submitBtn: '#submit',
            title: '#logout'
        }
        super(elements);
    }

    public goTo(url)  {
        this.navigateTo(url)
    }

    public validateurl(text: String)
     {
        this.validateurl(text)
    }

    public checkText(text : string) {
        this.validateText(this.elements.title, text)
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

    public submitUserDetails(firstName: string,lastName: string,email: string,password: string){
        this.type(this.elements.inputFirstName, firstName)
        this.type(this.elements.inputLastName, lastName)
        this.type(this.elements.inputEmailName, email)
        this.type(this.elements.inputPassword, password)
      }
    

}