import {Element} from './interface';

export abstract class Page {
    protected readonly elements: Element;

    protected constructor(elements: Element) {
        this.elements = elements;
    }

    protected navigateTo(url: string) {
        cy.visit(url);
    }

    protected clickOn(selector: string) {
        cy.get(selector).click();
    }

    protected type(selector: string, text: string){
        cy.get(selector).type(text);
    }
    
    protected validateText(selector: string, text: string) {
        cy.get(selector).should('have.text', text);
    }

    protected validateurl(text: string) {
        cy.url().should('contains', text);
    }

}

