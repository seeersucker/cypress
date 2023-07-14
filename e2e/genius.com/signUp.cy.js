/// <reference types = 'Cypress'/>

import signUp from "../PageObjects/signUp"

describe('Testing the Sign Up process', () => {
    beforeEach(() => {
        cy.visit('https://genius.com')
        cy.viewport('macbook-13')
    })

    it('Sign up with Facebook', () => {
        const ln = new signUp
        ln.signUpWithFB()
    })

    it('Sign up with Twitter', () => {
        const ln = new signUp
        ln.signUpwithTWT()
    })

    it('Sign up with Google', () => {
        const ln = new signUp
        ln.signUpWithGoogle()
    })

    it('Register a new user', () => {
        const ln = new signUp
        ln.signUpbtn()
    })
})