/// <reference types = 'Cypress' />

import Artist from "../PageObjects/artistPage";
import Login from "../PageObjects/login";
import 'cypress-iframe';

describe('Testing Search', () => {

    beforeEach(() => {
        cy.visit('https://genius.com')
        const ln = new Login()
        ln.signIn()
    })

    it('Eminem\'s Profile', () => {
        const ln = new Artist
        ln.eminem()
    })

    // it('Expanding the bio and unfollowing the artist', () => {
    //     const ln = new Artist
    //     ln.bioUnfollow()
    // })

    it('Checking the Follow and Unfollow', () => {
        const ln = new Artist
        ln.biofollow()
    })

    it('Verified Annotations', () => {
        const ln = new Artist
        ln.eminem()
        ln.verifiedAnnos()
    })

    it('About artist section', () => {
        const ln = new Artist
        ln.eminem()
        ln.about()
    })

    it('Contributors page', () => {
        const ln = new Artist
        ln.eminem()
        ln.contributors()
    })

})