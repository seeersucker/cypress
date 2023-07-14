/// <reference types = 'Cypress' /> 

import Login from "../PageObjects/login"
import SongP from "../PageObjects/songPage"

describe('Testing the Song page', () => {
    beforeEach(() => {
        cy.visit('https://genius.com')
        // const ln = new Login()
        // ln.signIn()

        const ln = new SongP()
        ln.searchSong()
    })

    it('Song Header', () => {
        const ln = new SongP()
        ln.songHeader()
    })

    // it.only('Player', () => {
    //     const ln = new SongP()
    //     ln.player()
    // })

    it('First Verse', () => {
        const ln = new SongP()
        ln.firstVerse()
    })

    it('Annotation', () => {
        const ln = new SongP()
        ln.annotation()
    })

    // it('Editing the annotation', () => {
    //     const ln = new SongP()
    //     ln.editAnnotation()
    // })

    it('Second Verse', () => {
        const ln = new SongP()
        ln.secondVerse()
    })

    it('Third Verse', () => {
        const ln = new SongP()
        ln.thirdVerse()
    })

    it('Links', () => {
        const ln = new SongP()
        ln.links()
    })

    it('About Section', () => {
        const ln = new SongP()
        ln.aboutSection()
    })

    it('Editing the About Section', () => {
        const ln = new SongP()
        ln.editAbout()
    })

    it('Ask Question', () => {
        const ln = new SongP()
        ln.askQuestion()
    })

    it('Question List', () => {
        const ln = new SongP()
        ln.questionList()
    })

    it('Album Section', () => {
        const ln = new SongP()
        ln.albumSection()
    })

    it('Credits Section', () => {
        const ln = new SongP()
        ln.credits()
    })

    // it('YouTube Player', () => {
    //     const ln = new SongP()
    //     ln.player()
    // })

    it('Footer Comments', () => {
        const ln = new SongP()
        ln.comments()
    })

})

