/// <reference types = 'Cypress'/>

import 'cypress-iframe';
import Login from "../PageObjects/login";
import Profile from '../PageObjects/profile';


describe('Testing the whole account page', () => {

    beforeEach(() => {
        cy.visit('https://genius.com')
        const ln = new Login()
        ln.signIn()
    })

    it('View the account', () => {
        const ln = new Profile()
        ln.prof()
        // ln.featuredSec()
        // ln.followers()
        // ln.following()
        // ln.editProf()
        // ln.changeAvatar()
    })

    it('Featured Section Test', () => {
        const ln = new Profile()
        ln.prof()
        ln.featuredSec()
    })

    it('Followers Section Test', () => {
        const ln = new Profile()
        ln.prof()
        ln.followers()
    })

    it.skip('Following Section Test', () => {
        const ln = new Profile()
        ln.prof()
        ln.following()
    })

    it('Edit Profile Page', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
    })

    it('Changing the username', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changeUsername()
    })

    it('Changing the avatar', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changeAvatar()
    })

    it('Changing the cover art', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changeCoverArt()
    })

    it('Changing the bio', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changeBio()
    })

    it('Testing tools', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.tools()
    })

    it('Change email', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changeEmail()
    })

    it('Change password', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.changePassword()
    })

    it('Link your Facebook account', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.linkFacebook()
    })

    it('Link your Twitter account', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.linkTwitter()
    })

    it('Link your Google account', () => {
        const ln = new Profile()
        ln.prof()
        ln.editProf()
        ln.linkGoogle()
    })

    it('Stats section', () => {
        const ln = new Profile()
        ln.prof()
        ln.stats()
    })

    it.only('Top Accomplishments', () => {
        const ln = new Profile()
        ln.prof()
        ln.topAccomplish()
    })

    it('Report a problem', () => {
        const ln = new Profile()
        ln.report()
    })

    it('Logging Out', () => {
        const ln = new Profile()
        ln.logout()
    })

})

