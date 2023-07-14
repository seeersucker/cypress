/// <reference types = 'Cypress' />

import Search from "../PageObjects/search";
import Login from "../PageObjects/login";
import 'cypress-iframe';

describe('Testing Search', () => {

    beforeEach(() => {
        cy.visit('https://genius.com')
        const ln = new Login()
        ln.signIn()
    })

    it('Testing search with the input(Artist)', () => {
        const ln = new Search
        ln.inputArtist()
    })

    it('Testing search with the input(Song)', () => {
        const ln = new Search
        ln.inputSong()
    })

    it('Expand the results', () => {
        const ln = new Search
        ln.expandResults()
    })

    it('Testing the search icon ', () => {
        const ln = new Search
        ln.searchIcon()
    })
})