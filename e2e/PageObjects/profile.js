import 'cypress-file-upload';


let random = Date.now();
let biotxt = 'This is the test, number: ' + random;
let newEmail = 'Mukhammad' + random + '@gmail.com';

class Profile {

    prof(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(5)
        .click()
        cy.get('a[href="https://genius.com/Seersucker"]').click()
    }

    featuredSec(){
        cy.get('[class="text_label text_label--pink u-clickable"]').should('be.visible').click() // All Contirbutions
        cy.get('[class="tooltip-list_item"]').should('be.visible').eq(0).click() // Annotations
        cy.get('[class="text_label text_label--gray u-clickable"]').should('be.visible').click() // Popular
        cy.get('[class="tooltip-list_item"]').should('be.visible').eq(0).click() // Recent
        cy.contains('Looks like Seersucker doesn\'t have any annotations.')

        cy.get('[class="text_label text_label--pink u-clickable"]').should('be.visible').click() 
        cy.get('[class="tooltip tooltip--tiny tooltip--no_padding tooltip--dock_top_right"]').should('be.visible').contains('Pyongs')
        
    }

    followers(){
        cy.get('[class="profile_tabs-tab-count"]').eq(0).should('be.visible').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]').contains('Nothing here')
    }

    following(){
        cy.get('[class="profile_tabs-tab-count"]').eq(1).should('be.visible').click() 
        // cy.get('[class="u-float_left"]').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://genius.com/eminem')
        // })
        cy.url().should('include', '/artists/Eminem')
        cy.go('back')
    }

    editProf(){
        cy.get('[class="profile_identity_and_description-action_row"]').within(() => {
            cy.get('.square_button').click()
        })
        
        cy.get('[class="modal_window"]').should('be.visible')
    }

    changeUsername(){
        cy.get('[class="modal_window"]').should('be.visible')
        cy.get(':nth-child(1) > .square_input').should('be.visible').clear().type('Seersucker')
        cy.get('.square_button--green').click()
    }

    changeAvatar() {

        cy.get('[class="image_upload_button image_upload_button--avatar clipped_background_image"]').click()

        cy.get('#filepicker_dialog').its('0.contentDocument.body')   
        cy.get('#filepicker_dialog').its('0.contentDocument.body').find('input[class="hide-this ng-scope"]')     //.attachFile('test1.jpg', {subjectType: 'drag-n-drop'})

        // cy.iframe('#filepicker_dialog').then($iframe => {
        //     $iframe.find('input[type="file"]').attachFile('test1.jpg')       // DID NOT WORK
        // })

        // cy.frameLoaded('#filepicker_dialog')         // DID NOT WORK
        // cy.iframe().find('input[type="file"]')

        // cy.get('#filepicker_dialog').then($iframe => {
        //     const iframeBody = $iframe.contents().find('body')       
        //     iframeBody.find('input[type="text"]').attachFile('test1.jpg')        // DID NOT WORK
        // }) 
        
        // cy.get('#filepicker_dialog').then($iframe => {
        //     const iframeBody = $iframe.contents().find('[class="hide-this ng-scope"]')
        // })

        // cy.frameLoaded('#filepicker_dialog')         
        // cy.iframe().within(() => {
        //     cy.get('[class="hide-this ng-scope"]').attachFile('test1.jpg', {subjectType: 'drag-n-drop'})
        // })
    }

    changeCoverArt() {
        cy.get(':nth-child(3) > image-upload-button > .image_upload_button-container > .image_upload_button').click()
        cy.get('#filepicker_dialog').then($iframe => {
            const iframeBody = $iframe.contents().find('body')
        })
    }

    changeBio() {
        cy.get('.wysiwyg_input').click().clear().type(biotxt)
        cy.get('.square_button--green').click()
        cy.get('[class="white_container"]').contains(biotxt)
    }

    tools() {
        cy.get('[ng-click="ctrl.pick_image()"]').click()
        cy.get('#filepicker_dialog').should('be.visible')

        cy.get('#filepicker_dialog').its('0.contentDocument.body').should('be.visible')

        cy.get('[class="fp__close"]').click()

        cy.log('CLICKING THE FORMATTING HELP BUTTON')
        cy.get('[class="text_label editable_markdown-text_label text_label--purple"]').click()
        cy.contains('Add an image, video, or tweet by pasting the URL')
        cy.contains('http://genius.com/logo.png')
        cy.get('.square_button--green').click()

        cy.log('CLICKING THE HOW TO ANNOTIATE BUTTON')
        // cy.get('a.text_label').invoke('removeAttr', 'target').click()        // DID NOT WORK

        cy.get('a.text_label').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Genius-how-genius-works-annotated')
        })
        cy.url().should('include', '/Genius-how-genius-works-annotated')
        cy.contains('How Genius Works')
        cy.go('back')
    }

    changeEmail(){
        cy.get('input[placeholder = "Email"]').clear().type(newEmail)
        cy.get('.square_button--green').click()
    }

    changePassword() {
        cy.get(':nth-child(6) > .square_input').type('952557700')
        cy.get(':nth-child(7) > .square_input').type('952557700')
        cy.get('.square_button--green').click()
    }

    linkFacebook(){
        cy.get('.square_button--facebook').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://www.facebook.com/login')
        })
    }

    linkTwitter(){
        cy.get(cy.get('.square_button--twitter')).then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://api.twitter.com/oauth/authenticate?oauth_token=bvMrQQAAAAAABwN7AAABiHq3-ps')
            // cy.get('input[id="username_or_email"]').click()          // DID NOT WORK
        })
    }

    linkGoogle(){
        cy.get('.square_button--google').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S-2112961996%3A1685687230737032&access_type=offline&client_id=218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fgenius.com%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=email+profile&service=lso&state=8f9db3ecfe732812c31e6993649af60e7ac9aa7013e5eea3&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOr800NK8VtNspWLPxui-JJgBejizAcDtmmD9YziifGeCgajbuhkY7PhJCMxKDWCGqsD2a0m5h7PSLKFcbUrMHvqO6xKOLQnYKx9-_oB8YGS5DUa4VZjs70ewVad4OPLhofbwUg-zI8rNIPwbQi2N-MIIVAXvh5jJzRe1nEbuHQJpasi4K406GK3y2CWYmAW61IYJJur4CD0hWRYkNug04H63Q8OKh-HVMyPV2Imfu6rXOzZEB9cLn2VaoloE1S7An1UQU7RaY91muN6mmJSFLpXlbwWukU79oMwHNpZ8dLX1pk-vTACcjiyMg4LvpFHIMhuYIL1hfeg4HuDszVA35OtiMaY6cozorXUVUT1CqXu9Hk5k5F7FtJXdvxUSEXSgV762sllFoM7CEtbyTP6Xts-7Xh-S3xaqzGgmWcfdvoahpM5NwU8G0cHPcuzi-nlUGjZdZPW7dgmhOE2XEzqBK0ebxHRw%26as%3DS-2112961996%253A1685687230737032%26client_id%3D218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fgenius.com&rart=ANgoxcfLp_JBWuo4e_w_nm1sT6r8DAOwDxAG7CbCcJYX6yur5Np192-e1rIVbjDzAhklA3i0XQ_Bu0cyv7Ti4lPM_mgkKbfgHg')
            // cy.get('input[type = "email"]').click()          // DID NOT WORK
        })
    }

    stats(){
        cy.log('ANNOTATIONS')
        cy.get('[class="statistic_and_label-subtext"]').eq(0).should('have.text', 'Annotations').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]')
        .contains('Watch Dogs Soundtrack').should('be.visible')
        
        cy.log('SUGGESTIONS')
        cy.get('[class="statistic_and_label-subtext"]').eq(1).should('have.text', 'Suggestions').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]')

        cy.log('TRANSCRIPTIONS')
        cy.get('[class="statistic_and_label-primary"]').eq(2).invoke('text').then((text) => {
            const value = parseInt(text, 10); // convert text to integer
            // const incrementedValue = value + 1; // increment the value by 1
            cy.log(`Original value: ${value}`);
        });
          
        cy.get('[class="statistic_and_label-subtext"]').eq(2).should('have.text', 'Transcriptions').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]').contains('You Zed by Basilint')

        cy.log('QUESTIONS')
        cy.get('[class="statistic_and_label-subtext"]').eq(3).should('have.text', 'Questions').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]').contains('Watch Dogs Soundtrack')

        cy.log('ANSWERS')
        cy.get('[class="statistic_and_label-subtext"]').eq(4).should('have.text', 'Answers').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]').contains('Looks like Seersucker doesn\'t have any q+a')

        cy.log('PYONGS')
        cy.get('[class="statistic_and_label-subtext"]').eq(5).should('have.text', 'Pyongs').click()
        cy.get('[class="column_layout-column_span column_layout-column_span--primary"]').contains('Looks like Seersucker doesn\'t have any pyongs')
    }

    topAccomplish(){
        cy.get('ng-transclude > div').scrollIntoView()
        cy.get('.text_label--button').click()
        cy.get('.leaderboard-actions').contains('Actions')

        cy.contains('Seersucker')
        cy.get('.top_accomplishments > .u-horizontal_margins').click()
        cy.get('[ng-href="https://genius.com/artists/Seersucker"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/artists/Seersucker')
            cy.contains('Seersucker')
        }) 

        cy.go('back')

        cy.get('ng-transclude > div').scrollIntoView()
        cy.get('.text_label--button').click()
        cy.get('.leaderboard-actions').contains('Actions')

        cy.get('.u-horizontal_margins > select-dropdown > .tooltip > :nth-child(2)').click()
        cy.contains('Brian Mann').click()
        cy.get('[href="https://genius.com/artists/Brian-mann"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/artists/Brian-mann')
            cy.contains('Brian Mann')
        }) 

        cy.go('back')

        cy.get('.u-horizontal_margins > select-dropdown > .text_label').click()
        cy.get('.u-horizontal_margins > select-dropdown > .tooltip > :nth-child(3)').click()
        cy.contains('Nothing here')
        cy.get('.text_label--button').click()

    }

    report(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(5)
        .click()
        cy.get('a[href="/feedback/new"]').eq(0).click()

        cy.contains('Contact Us')
        cy.get('textarea[id="feedback_body"]').type('Just a test, no reply')
        cy.get('[id="feedback_submit"]').should('be.visible')

    }

    logout(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(5)
        .click()
        cy.get('div[class="PageHeaderMenu__Title-sc-13myo8l-2 PageHeaderMenu__Item-sc-13myo8l-3 jCecTX"]').click()
    }
}


export default Profile;