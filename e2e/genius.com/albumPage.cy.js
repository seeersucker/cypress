/// <reference types = 'Cypress' />
import Login from "../PageObjects/login"
import AlbumP from "../PageObjects/albumPage"

describe('Testing the Album Section', () => {
    beforeEach(() => {
        cy.visit('https://genius.com')
        const ln = new Login
        ln.signIn()
        cy.visit('https://genius.com/albums/Various-artists/Watch-dogs-soundtrack')
    })

    it('Watch Dogs Album', () => {
        const ln = new AlbumP
        ln.searchAlbum()
    })

    it('Album Header', () => {
        const ln = new AlbumP
        ln.albumHeader()
    })

    it('Tracklist', () => {
        const ln = new AlbumP
        ln.tracklist()
    })

    it('Album Bio', () => {
        const ln = new AlbumP
        ln.bio()
    })

    it('Asking a question', () => {
        const ln = new AlbumP
        ln.ask()
    })

    it('Album Schoolars', () => {
        const ln = new AlbumP
        ln.schoolars()
    })

    it('Credits', () => {
        const ln = new AlbumP
        ln.credits()
    })

    it('More Albums', () => {
        const ln = new AlbumP
        ln.moreAlbums()
    })

    it('Leave a comment', () => {
        const ln = new AlbumP
        ln.bottomComment()
    })
})

