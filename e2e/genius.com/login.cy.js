/// <reference types = 'Cypress' /> 

import Login from "../PageObjects/login";
import Headers from "../PageObjects/headers";
import 'cypress-iframe';

describe('Testing the login process', () => {

    beforeEach(() => {
        cy.visit('https://genius.com')
        cy.viewport('macbook-13')
        cy.wait(3000)
    })

    it('Sign in with Facebook', () => {
        const ln = new Login()
        ln.loginWithFB()
    })

    it('Sign in with Twitter', () => {
        const ln = new Login()
        ln.loginWithTWT()
    })

    it('Sign in with Google', () => {
        const ln = new Login()
        ln.loginWithGoogle()
    })

    it('Forgot Password?', () => {
        const ln = new Login()
        ln.forgotPassword()
    })

    it('Sign in with Genius account', () => {
        const ln = new Login()
        ln.signIn()
    })

    // it('Headers', () => {
    //     const ln = new Headers()
    //     ln.forums()
    //     ln.feed()
    //     ln.me()
    //     ln.messages()
    //     ln.earnIQ()
    // })
})