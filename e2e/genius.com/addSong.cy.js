/// <reference types = 'Cypress' /> 

import Login from "../PageObjects/login"
import AddSong from "../PageObjects/addSong"

describe('Adding a new song', () => {
    beforeEach(() => {
        cy.visit('https://genius.com')
        const ln = new Login
        ln.signIn()
    })

    it('Filling the new song forms', () => {
        cy.get('[href="/new"]').click()
        const ln = new AddSong
        ln.firstTime()
        ln.info()
    })

    it('Checking if the number of Transciptions changed', () => {
        const ln = new AddSong
        ln.checkTheProf()
    })

})