class Headers {

    forums(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(0)
        .click()
        cy.frameLoaded('[id="iFrameResizer0"]')
        cy.iframe().contains('No notifications')
    }

    feed(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]').eq(1).click()
        // cy.frameLoaded('[id="iFrameResizer1"]')
        // cy.iframe().contains('No notifications')
        cy.get('[id="iFrameResizer0"]').its('0.contentDocument.body')
        cy.get('[id="iFrameResizer0"]').its('0.contentDocument.body').find('[class="feed_dropdown-item feed_dropdown-item--active"]').contains('No notifications')
    }

    me(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(2)
        .click()
        cy.frameLoaded('[id="iFrameResizer0"]')
        cy.iframe().contains('You added a photo').click()
        // cy.get('[id="iFrameResizer1"]').its('0.contentDocument.body')
        // cy.get('[id="iFrameResizer1"]').its('0.contentDocument.body').find('[class="inbox_line_item"]').contains('You added a photo')
    }

    messages(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(3)
        .click()
        // cy.get('#iFrameResizer0')
        // cy.frameLoaded('[id="iFrameResizer0"]') 
        // cy.iframe().contains('Send a new message').click()

        // cy.frameLoaded('[id="iFrameResizer1"]') 
        // cy.iframe().contains('Send a new message').click().find('#frameinput')

        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[class="feed_dropdown-header_action"]').click()
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[ng-model="message.recipient"]').type('Genius')
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[ng-hide="ctrl.showing_markdown_preview"]').type('Just a test')
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[class="modal_window-close_button-svg"]').click()

        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[class="feed_dropdown-header_action"]').click()
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[ng-model="message.recipient"]').type('Genius')
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[ng-hide="ctrl.showing_markdown_preview"]').type('Just a test')
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[type="submit"]').click()
        cy.get('#iFrameResizer0').its('0.contentDocument.body').find('[class="modal_window-close_button-svg"]').click()

    }

    earnIQ(){
        cy.get('[class="PageHeaderLoggedIn__Item-on81eb-0 gHwbnY"]')
        .eq(4)
        .click()
        cy.frameLoaded('[id="iFrameResizer0"]')
        cy.iframe().contains('No IQ opportunities')
    }

}

export default Headers;