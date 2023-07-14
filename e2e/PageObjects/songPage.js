import 'cypress-iframe';
import Login from './login';
import 'cypress-file-upload';

class SongP{
    searchSong(){
        const ln = new Login()
        ln.signIn()

        cy.get('input[placeholder="Search lyrics & more"]').type('One Mic')

        // cy.wait(6000)
        // cy.get('[frameborder="0"]').its('0.contentDocument.body')
        // cy.get('[frameborder="0"]').then($iframe => {
        //     const iframeBody = $iframe.contents().find('body')       
        //     iframeBody.find('[ng-repeat="section in $ctrl.sections"]').contains('Top Results')          
        // }) 

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        cy.iframe().find('[class="u-quarter_vertical_margins u-clickable"]').eq(2).then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Nas-one-mic-lyrics ')
        })
        
    }

    songHeader(){
        cy.log('Accessing the page of the author of the chosen song')
        cy.get('[href="https://genius.com/artists/Nas"]').eq(0).click()

        cy.go('back')

        cy.log('Checking the album in which the song is released')
        cy.get('a[href="#primary-album"]').contains('Stillmatic').click()

        cy.get('[id="primary-album"]').scrollIntoView()

        cy.log('Checking the producers\' page')
        cy.get('[href="https://genius.com/artists/Chucky-thompson"]').contains('Chucky Thompson').click()

        cy.go('back')
        
        cy.log('Checking the Read More')
        cy.get('[class="HeaderBio__ViewBio-oaxemt-2 dggIzN"]').click()

        cy.log('Editing lyrics')
        cy.get('[type="button"]').contains('Edit Lyrics').click()
        cy.get('[type="button"]').contains('Cancel').click()

        cy.log('View Old Song Page')
        cy.get('[href="https://genius.com/Nas-one-mic-lyrics?bagon=1"]').click()
        cy.contains('One Mic')

        cy.go('back')

        cy.log('Notice Button')
        cy.get('.MetadataTooltip__Container-sc-435euq-0').should('be.visible').click()

        cy.log('Contributors')
        cy.get('[class="LabelWithIcon__Label-hjli77-1 dXeauY"]').click()
        cy.contains('Contributors') //cy.get('[class="Modaldesktop__Contents-sc-1lnigiq-3 cwmzrz"]')

    }

    // player(){

    //     // cy.frameLoaded('.AppleMusicPlayer__Iframe-uavgzr-3')
    //     // cy.iframe().find('[ng-click="$ctrl.toggle_dismiss()"]').click()

    //     // cy.get('.AppleMusicPlayer__Iframe-uavgzr-3').should('be.visible')
    //     // cy.get('[ng-click="$ctrl.toggle_dismiss()"]').click()
    //     // cy.get('[src="left_arrow.svg"]').click()

    // }

    firstVerse(){
        cy.get('[href="/2167916/Nas-one-mic/Verse-1-yo-all-i-need-is-one-mic-one-beat-one-stage"]').click()
        cy.wait(2000)
        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').should('be.visible').contains('Genius Annotation')
    }

    annotation(){
        cy.get('[href="/2167916/Nas-one-mic/Verse-1-yo-all-i-need-is-one-mic-one-beat-one-stage"]').click()
        cy.wait(2000)
        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').should('be.visible').contains('Genius Annotation')

        cy.get('button[text-decoration="underline"]').eq(0).should('be.visible').click()
        cy.get('button[text-decoration="underline"]').eq(0).should('be.visible').click()

        cy.get('[href="https://genius.com/artists/Jungle"]').click()
        cy.contains('Jungle')

        cy.go('back')

        cy.get('[href="https://genius.com/Cormega-one-love-lyrics"]').click()
        cy.contains('One Love')

        cy.go('back')

        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').should('be.visible').contains('Genius Annotation')

        // Edit Annotation

        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').within(() => {
            cy.get('[class="SmallButton__Container-mg33hl-0 kviCal"]').click() 
        })

        cy.get('[class="BaseAnnotationdesktop__Container-sc-1l72s1l-0 dajaGM"]').within(() => { 
            cy.get('.mJOzf').click()
        })
        
        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').within(() => {
            cy.get('[aria-label="downvote"]').click()

        })

        cy.get('button[class="VotingActions__Button-sc-1w1brao-1 VotingActions__VotingModalButton-sc-1w1brao-2 hPgYeJ"]') //.contains('34')     *BUG*

        // cy.get('svg[class="VotingActions__ThumbsDown-sc-1w1brao-4 hKZXIk"]').eq(0).click().wait(2000)
        // cy.get('[class="VotingActions__Button-sc-1w1brao-1 VotingActions__VotingModalButton-sc-1w1brao-2 hPgYeJ"]').contains('+34')
        // cy.wait(1000)

        // cy.get('svg[class="VotingActions__ThumbsUp-sc-1w1brao-3 hEQpIA"]').click().wait(2000)
        // cy.get('[class="VotingActions__Button-sc-1w1brao-1 VotingActions__VotingModalButton-sc-1w1brao-2 hPgYeJ"]').contains('+35')

        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').within(() => {
            cy.get('[aria-label="upvote"]').click()

        })

        cy.get('button[class="VotingActions__Button-sc-1w1brao-1 VotingActions__VotingModalButton-sc-1w1brao-2 hPgYeJ"]')  //.contains('36')    *BUG*

        cy.get('[class="BaseAnnotationdesktop__InnerContainer-sc-1l72s1l-1 dYVBIL"]').within(() => {
            cy.get('[class="Tooltip__Container-sc-1uvy5c2-0 cRrFdP"]').click()
            cy.contains('You pyonged this recently! You\'ll be able to pyong it again in a bit').should('be.visible')

            // Share

            cy.get('[class="LabelWithIcon__Container-hjli77-0 iPAGmA"]').eq(1).click()
            cy.contains('Share this annotation')
            cy.get('[class="ShareButtons__Root-jws18q-0 dyewdM"]').should('be.visible')

            // Suggest an improvement

            cy.get(':nth-child(6) > .Button__Container-rtu9rw-0').click()
            cy.contains('Help us improve this annotation')
            cy.get('[class="TextLabel-sc-8kw9oj-0 cINNOf"]').click()            

        })

        cy.wait(2000)
        cy.contains('How Genius Works')
        cy.go('back')

        cy.get('[class="BaseAnnotationdesktop__InnerContainer-sc-1l72s1l-1 dYVBIL"]').within(() => {
            cy.contains('Suggest an improvement to earn IQ').click()
            cy.get('[class="RadioButtons__Button-sc-1m2sz3s-3 pBeGy"]').eq(0).click()
            cy.get('[class="RadioButtons__Button-sc-1m2sz3s-3 pBeGy"]').eq(1).click()
            cy.get('[class="RadioButtons__Button-sc-1m2sz3s-3 pBeGy"]').eq(2).click()
            cy.get('[class="RadioButtons__Button-sc-1m2sz3s-3 pBeGy"]').eq(3).click()

            cy.get('textarea[placeholder="Enter a suggestion"]').type('Just a test, nothing serious')
            cy.get('button[type="submit"]')
        })

    }

    secondVerse(){
        cy.get('a[href="/23655/Nas-one-mic/Everybody-gotta-die-sometime-hope-your-funeral-never-gets-shot-up-bullets-tear-through-the-innocent"]').should('be.visible').click()
        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]')
        .should('be.visible')
        .scrollIntoView()
        .within(() => {
            cy.contains('Genius Annotation')
        })
        cy.get('button[class="BaseAnnotationdesktop__Control-sc-1l72s1l-3 clhndN"]').click()
    }

    thirdVerse(){
        cy.get('a[href="/2167949/Nas-one-mic/What-i-stand-for-speaks-for-itself-they-dont-understand-dont-wanna-see-me-on-top-too-egotistical"]').should('be.visible').click()
        cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]')
        .should('be.visible')
        .scrollIntoView()
        .within(() => {
            cy.contains('Genius Annotation')
        })
        cy.get('button[class="BaseAnnotationdesktop__Control-sc-1l72s1l-3 clhndN"]').click()
    }

    links(){
        cy.get('[aria-label="facebook"]').scrollIntoView().should('be.visible')
        cy.get('[aria-label="twitter"]').should('be.visible')
        cy.get('[class="ShareButtons__ButtonWrapper-jws18q-3 ueUKD"]').eq(2).should('be.visible').click()
        cy.contains('You pyonged this recently! You\'ll be able to pyong it again in a bit').should('be.visible')
        cy.get('[class="ShareButtons__ButtonWrapper-jws18q-3 ueUKD"]').eq(3).click()
        cy.contains('Share URL')
        cy.contains('Embed')

    }

    aboutSection(){
        cy.get('div[id="about"]').scrollIntoView()
        cy.get('[class="About__Container-ut4i9m-1 eSiFpi"]').contains('About')

        cy.get('[class="TextButton-sc-192nsqv-0 ixMmYX"]').eq(0).click()

        cy.get('[href="https://genius.com/albums/Nas/Stillmatic"]').eq(0).click()

        cy.contains('Stillmatic')

        cy.go('back')

        // Like and Dislike

        cy.get('[class="VotingActions__Container-sc-1w1brao-0 eQBXrC"]').eq(0).within(() => {
            cy.get('[aria-label="downvote"]').click()
            cy.get('[aria-label="upvote"]').click()

        })

    }

    editAbout(){
        cy.get('div[id="about"]').scrollIntoView()
        cy.get('[class="About__Container-ut4i9m-1 eSiFpi"]').contains('About')

        // Uncomment starts here after the Proposed Edits passed successfully

        cy.get('[class="SmallButton__Container-mg33hl-0 jQxCxg"]').eq(0).click()

        cy.get('[class="TextEditor__Toolbar-sc-128gj0x-0 kwhZdz"]').within(() => {
            cy.get('[type="button"]').click()
            cy.wait(5000)

        })

        // Photo Search

        cy.get('[class="fsp-source-list__icon fsp-icon fsp-icon--imagesearch"]').click() 
        cy.get('[placeholder="Search images..."]').type('One Mic')
        cy.get('.fsp-url-source__form > .fsp-button').click()

        cy.get('[class="fsp-image-search__results"]').within(() => {
            cy.get('[tabindex="0"]').eq(0).click()
        })
        
        // Photo Edit, picking an image from the internet

        cy.wait(6000)
        cy.get('[class="fst-sidebar__option"]').eq(0).click()
        cy.get('[class="fsp-button fsp-button--outline"]').click() 

        cy.get('[class="fst-sidebar__option"]').eq(1).click()  

       
        cy.get('[class="fsp-transformer__rotate-right"]').click()
        cy.get('[class="fsp-transformer__rotate-left"]').click() 
        cy.get('[class="fsp-footer__nav--left"]').eq(0).click()
        

        // cy.get('[class="fsp-button fsp-button--outline"]').click() 
        cy.get('[class="fsp-button fsp-button--primary"]').click()

        // Photo Edit, picking an image from the local storage

        cy.get('div[id="about"]').scrollIntoView()
        cy.get('[class="About__Container-ut4i9m-1 eSiFpi"]').contains('About')

        cy.get('[class="SmallButton__Container-mg33hl-0 jQxCxg"]').eq(0).click()

        cy.get('[class="TextEditor__Toolbar-sc-128gj0x-0 kwhZdz"]').within(() => {
            cy.get('[type="button"]').click()
            cy.wait(5000)

        })

        cy.get('[class="fsp-drop-area"]').attachFile('test3.png', {subjectType: 'drag-n-drop'})
        cy.get('[class="fsp-picker__close-button fsp-icon--close-modal"]').click()

        // Show Proposed Edits

        cy.get('div[id="about"]').scrollIntoView()
        cy.get('[class="About__Container-ut4i9m-1 eSiFpi"]').contains('About')

        cy.get('[class="SmallButton__Container-mg33hl-0 jQxCxg"]').contains('Show Proposed Edit').click()

        cy.get('[class="Modaldesktop__Contents-sc-1lnigiq-3 cwmzrz"]').contains('Proposed Edits:').should('be.visible')
        cy.get('[class="IconButton__Button-sc-1x3cgjs-0 kBvKRj"]').click()

    }

    askQuestion(){

        // Testing the cancel button

        cy.get('div[id="about"]').scrollIntoView()
        cy.get('[class="About__Container-ut4i9m-1 eSiFpi"]').contains('About')
        cy.get('textarea[placeholder=" "]')
        .click()
        .type('Just a test nothing serious')
        cy.get('[class="QuestionList__Container-sc-1a58vti-1 gatDgA"]').within(() => {
            cy.get('[type="button"]').eq(0).scrollIntoView().click()
        })

        // Testing the submit button

        cy.get('textarea[placeholder=" "]')
        .click()
        .type('Just a test nothing serious')
        cy.get('[class="QuestionList__Container-sc-1a58vti-1 gatDgA"]').within(() => {
            cy.get('[type="submit"]').eq(0).scrollIntoView().click()
        })
        cy.get('.ToastManager__Container-sc-19bw7bl-0').should('be.visible').contains('Thanks for the question!')
        cy.get('[class="QuestionTemplate__Container-sc-1is5n1p-1 jKZGgD"]')
        .contains('Just a test nothing serious')
        .should('be.visible')

    }

    questionList(){
        cy.get('[fill="currentColor"]').eq(0).scrollIntoView().click()
        cy.contains('Who produced “One Mic” by Nas?')
        // cy.go('back')

        cy.get('[fill="currentColor"]').eq(1).click()
        cy.contains('When did Nas release “One Mic”?')
        // cy.go('back')

        cy.get('[fill="currentColor"]').eq(2).click()
        cy.contains('Who wrote “One Mic” by Nas?')
        // cy.go('back')
    }

    albumSection(){
        cy.get('[class="PrimaryAlbum__Container-cuci8p-0 kqeVkf"]').within(() => {
            cy.contains('Stillmatic')
            
            cy.get('[href="https://genius.com/Nas-ether-lyrics"]').click()
            cy.contains('Ether')

            cy.go('back')

            cy.get('[href="https://genius.com/Nas-my-country-lyrics"]').click()
            cy.contains('My Country')

            cy.go('back')

            cy.get('[type="button"]').click()

            cy.get('[href="https://genius.com/albums/Various-artists/Watch-dogs-soundtrack"]').eq(0).click()
            
        })

        cy.contains('Watch Dogs Soundtrack')

        cy.go('back')
    }

    credits(){
        cy.get('[class="ExpandableContent__Container-sc-1165iv-0 ikywhQ"]').eq(1).scrollIntoView().within(() => {
            cy.get('[type="button"]').click()

            cy.get('[class="SongInfo__Columns-nekw6x-2 dWcYSx"]').within(() => {
                cy.get('[class="SongInfo__Credit-nekw6x-3 fognin"]').eq(0).within(() => {
                    cy.get('[href="https://genius.com/artists/Chucky-thompson"]').click()

                })
            })

            cy.contains('Chucky Thompson')
            cy.go('back')

        })

        cy.get('[class="ExpandableContent__Container-sc-1165iv-0 ikywhQ"]').eq(1).scrollIntoView().within(() => {
            cy.get('[type="button"]').click()

            cy.get('[class="SongInfo__Columns-nekw6x-2 dWcYSx"]').within(() => {
                cy.get('[class="SongInfo__Credit-nekw6x-3 fognin"]').eq(0).within(() => {

                    cy.get('[href="https://genius.com/artists/Nas"]').click()

                })
            })

            cy.contains('Nas')
            cy.go('back')
        })
    }

    comments(){
        cy.get('[class="SongComments__Container-sc-131p4fy-1 lgbAKX"]').within(() => {

            cy.wait(15000)
            cy.contains('Comments')
            cy.get('[placeholder="Add a comment"]').type('Just a test', '{ enter }')
        })
    }

    // editAnnotation(){
    //     cy.get('[href="/2167916/Nas-one-mic/Verse-1-yo-all-i-need-is-one-mic-one-beat-one-stage"]').click()
    //     cy.wait(2000)
    //     cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').should('be.visible').contains('Genius Annotation')

    //     cy.get('[class="Annotation__Container-l76qjh-0 cNCMgo"]').within(() => {
    //         cy.get('[class="SmallButton__Container-mg33hl-0 kviCal"]').click() 

    //     })

    //     //Add an image

    //     cy.get('[class="TextEditor__Toolbar-sc-128gj0x-0 gosKuJ"]').within(() => {
    //         cy.get('[class="SmallButton__Container-mg33hl-0 kviCal"]').click() 
    //         cy.get('button[type="button"]').click()
    //         cy.wait(2000)

    //     })

    //     cy.get('.fsp-picker').within(() => {
    //         cy.get('[class="fsp-drop-area"]').attachFile('test3.png', {subjectType: 'drag-n-drop'})
    //         cy.wait(1000)

    //         cy.get('.fsp-dropzone-overlay').click().within(() => {
    //             cy.get('[class="fsp-source-list__item"]').eq(1).click()
    //             cy.get('[class="fsp-source-list"]').click()
    //             // cy.get('[title="Web Search"] > .fsp-source-list__icon').click()
    //         })
    //     })
    // }
}

export default SongP; 