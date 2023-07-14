import 'cypress-iframe';
import 'cypress-file-upload';
import Profile from './profile';

let son = Date.now()

class AddSong{

    info(){

        // Primary Info

        cy.get('[id="song_primary_artist"]').type('Seersucker' + son)

        cy.get('[id="song_title"]').type('Just a Test' + son)

        cy.get('[class="primary_tag_chooser"]').within(() => {
            cy.get('[type="radio"]').eq(0).check()
            cy.get('[type="radio"]').eq(1).check()
            cy.get('[type="radio"]').eq(2).check()
            cy.get('[type="radio"]').eq(3).check()
            cy.get('[type="radio"]').eq(4).check()
            cy.get('[type="radio"]').eq(5).check()

            cy.get('[type="radio"]').eq(0).should('not.be.checked')
            cy.get('[type="radio"]').eq(1).should('not.be.checked')
            cy.get('[type="radio"]').eq(2).should('not.be.checked')
            cy.get('[type="radio"]').eq(3).should('not.be.checked')
            cy.get('[type="radio"]').eq(4).should('not.be.checked')

        })

        cy.get('[id="song_lyrics"]').type('This is neither a song nor a lyric, this is just ' + son + ' th test, haha')

        // Secondary Metadata

        cy.get('[id="song_featured_artists"]').type('Cypress.Tool')

        cy.get('[name="song[producer_artists]"]').type('Brian Mann') 
        cy.get('[class="ac_results"]').should('be.visible').within(() => {
            cy.contains('Brian Mann').click()
        })

        cy.get('[id="song_writer_artists"]').type('Seersucker') 
        cy.get('[class="ac_results"]').should('be.visible').eq(1).within(() => {
            cy.contains('Seersucker').click()
        })

        cy.get('[class="text_input"]').eq(0)
        .type('https://soundcloud.com/jesperkyd/ezios-family-assassins-creed-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing "')

        cy.get('[class="text_input"]').eq(1)
        .type('https://youtu.be/FSVHx23ByhM ')

        // Release dates, albums, and additional tags

        cy.get('[name="song[release_date(1i)]"]').select('2023')
        cy.get('[name="song[release_date(2i)]"]').select('April')
        cy.get('[name="song[release_date(3i)]"]').select('1')

        cy.get('[id="add_album_name"]').click()
        cy.get('[id="album_appearances"]').within(() => {
            cy.get('[type="text"]').type('End-to-End')
        })

        cy.get('[id="song_submit"]').should('be.visible').click()

        // cy.get('ul[class="chzn-choices"]').type('Non-Music')

    }

    firstTime(){
        cy.get('[class="lyrics_style_guide"]').scrollIntoView()
        cy.contains('First time transcribing?')

        cy.get('[href="https://genius.com/9250687/Genius-how-to-add-songs-to-genius/Use-section-headers-above-different-song-parts"]').click()
        cy.contains('How to Add Songs to Genius')

        cy.go('back')

        cy.get('[href="https://genius.com/14134676/Genius-how-to-add-songs-to-genius/A-snippet-full-song-has-been-teased-by-the-artist"]').click()
        cy.contains('How to add snippets')

        cy.go('back')

        cy.get('[href="https://genius.com/Genius-community-policy-and-moderation-guidelines-annotated"]').click()
        cy.contains('Community Policy & Moderation Guidelines')

        cy.go('back')

        cy.get('[href="https://genius.com/Genius-how-to-add-songs-to-genius-annotated"]').click()
        cy.contains('How to Add Songs to Genius')

        cy.go('back')

    }

    checkTheProf(){
        const ln = new Profile()
        ln.prof()

        cy.log('TRANSCRIPTIONS')
        cy.get('[class="statistic_and_label-primary"]').eq(2).scrollIntoView()
        cy.get('[class="statistic_and_label-primary"]').eq(2).invoke('text').then((text) => {
            const value = parseInt(text, 10); // convert text to integer
            // const incrementedValue = value + 1; // increment the value by 1
            cy.log(`Original value: ${value}`);

        });
    }
}

export default AddSong;