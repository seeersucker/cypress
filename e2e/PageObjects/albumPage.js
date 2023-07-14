import 'cypress-iframe';
import 'cypress-file-upload';

class AlbumP{
    search(){
        cy.get('[action="/search"]').type('Watch Dogs Sountrack')

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]')
        .find('[href="https://genius.com/albums/Various-artists/Watch-dogs-soundtrack"]').eq(0).click()

    }

    albumHeader(){
        // cy.visit('https://genius.com/albums/Various-artists/Watch-dogs-soundtrack')

        cy.contains('Watch Dogs Soundtrack')

        cy.get('[src="lightning.svg"]').eq(0).click()
        cy.contains('You pyonged this album recently! You\'ll be able to pyong it again in a bit')

        cy.get('[ng-if="$ctrl.cover_arts.length"]').click()

        // cy.get('[class="square_button"]').click()

        cy.contains('This is the official cover art of Watch Dogs')

        cy.get('[class="modal_window-close_button-svg"]').click()

        // cy.get('[class="cover_art_annotation"]').within(() => {

        //     cy.get('[class="square_item_and_iq square_item_and_iq--full_width"]')
        //     .type( '{selectAll}')

        // })

        // cy.get('[class="cover_art_annotation"]').within(() => {

        //     cy.get('[placeholder="Say something interesting"]').eq(0).type('This is the official cover art of Watch Dogs')

        //     cy.get('[ng-click="ctrl.pick_image()"]').click()

        // })

        // cy.get('.fp__close > a').click()

        // cy.get('[class="cover_art_annotation"]').within(() => {
        //     cy.get('[type="submit"]').click()
        // })

        // cy.get('[class="chart_row-expand u-increase_tap_area_full_space"]').eq(0).click()

    }

    tracklist(){
        cy.get('[class="chart_row-content"]').eq(1)

        cy.get('[class="chart_row-content"]').eq(1).then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Curtis-mayfield-move-on-up-lyrics')
        }) 

        cy.contains('Move On Up')

        cy.go('back')

        cy.get('[class="chart_row-expand u-increase_tap_area_full_space"]').eq(8).click()

        cy.get('[class="chart_row-content"]').eq(8).click()

        cy.get('[class="chart_row-content"]').eq(1).then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Wu-tang-clan-cream-lyrics')
        }) 

        cy.contains('C.R.E.A.M')

        cy.go('back')
    }

    bio(){
        cy.get('[class="white_container u-x_large_top_margin"]').eq(0).within(() => {
            cy.get('[class="square_button"]').eq(0).click()

            cy.get('[placeholder="Briefly describe your edit"]').type('Just a test')
            cy.get('[type="submit"]').click()

            cy.get('[src="thumbs_down.svg"]').click()
            cy.get('[src="thumbs_up.svg"]').click()
        })
    }

    ask(){

        cy.get('[class="white_container"]').eq(0).scrollIntoView().within(() => {
            cy.wait(10000)
            cy.get('[placeholder="Ask a question"]').click().type('Test')
            cy.get('[type="submit"]').click()
            cy.contains('Thanks! Your question has been posted.')
        })

        cy.get('[class="header-action"]').eq(5).within(() => {

            cy.get('.header-action-label').invoke('text').then((text) => {
                const value = parseInt(text, 10); // convert text to integer
                const incrementedValue = value + 1; // increment the value by 1
                cy.log(`Original value: ${value}, Incremented value: ${incrementedValue}`);
            });
        })

        cy.get('[class="white_container"]').eq(0).scrollIntoView().within(() => {
            cy.get('[class="question-inline_voting"]').eq(0).click()
        })
    }

    schoolars(){
        cy.contains('Top “Watch Dogs Soundtrack” scholars')
        cy.get('[class="white_container"]').eq(1).scrollIntoView().within(() => {
            cy.get('[href="https://genius.com/Maboo"]').then(function(el) {
                const url = el.prop('href')
                cy.log(url)
                cy.visit('https://genius.com/Maboo')
            }) 
        })
        cy.contains('Maboo')

        cy.go('back')

        cy.get('[class="white_container"]').eq(1).scrollIntoView().within(() => {
            cy.get('[href="https://genius.com/Raekwon"]').then(function(el) {
                const url = el.prop('href')
                cy.log(url)
                cy.visit('https://genius.com/Raekwon')
            }) 
        })
        cy.contains('Raekwon')
    }

    credits(){
        cy.get('[class="white_container u-x_large_top_margin"]').eq(1).within(() => {
            cy.get('[src="down_arrow.svg"]').click()

            cy.contains('Primary Artists')
            cy.get('[href="https://genius.com/artists/2-chainz"]').eq(0).then(function(el) {
                const url = el.prop('href')
                cy.log(url)
                cy.visit('https://genius.com/artists/2-chainz')
                // cy.contains('2 Chainz')
            }) 

            

            cy.go('back')

            cy.contains('Producers')
            cy.get('[href="https://genius.com/artists/Alex-da-kid"]').then(function(el) {
                const url = el.prop('href')
                cy.log(url)
                cy.visit('https://genius.com/artists/Alex-da-kid')
                // cy.contains('Alexa da Kid')
            })  
        
            cy.go('back')

        })
    }

    moreAlbums(){
        cy.get('[class="full_width_button u-clickable u-quarter_top_margin"]').click()
        cy.get('[class="modal_window-close_button-svg"]').click()
        cy.get('[class="thumbnail_grid white_container"]').within(() => {
            cy.get('[href="https://genius.com/albums/Various-artists/The-best-braai-album-in-the-world-ever"]').click()
        })
        cy.go('back')
    }

    bottomComment(){
        cy.get('comments[type="albums"]').within(() => {
            cy.get('form[name="form"]').type('Just a test')
        })
        cy.get('[ng-show="ctrl.showing_full_form"] > .square_button').should('be.visible').click()
    }
}

export default AlbumP;