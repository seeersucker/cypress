/// <reference types = 'Cypress' /> 

import Login from "../PageObjects/login";
import Headers from "../PageObjects/headers";
import 'cypress-iframe';

describe('Testing Headers', () => {

    beforeEach(() => {
        cy.visit('https://genius.com')
        cy.viewport('macbook-13')
        cy.wait(3000)
        const ln = new Login()
        ln.signIn()
    })
    
    it('Forums', () => {
        const ln = new Headers()
        ln.forums()
    })

    it('Feed', () => {
        const ln = new Headers()
        ln.feed()
    })

    it('Me Page', () => {
        const ln = new Headers()
        ln.me()
    })

    it('Messages/Send a new message', () => {
        const ln = new Headers()
        ln.messages()
    })

    it('Earn IQ', () => {
        const ln = new Headers()
        ln.earnIQ()
    })

})