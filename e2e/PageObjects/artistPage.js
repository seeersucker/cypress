import 'cypress-iframe';
import Profile from './profile';

class Artist {

    eminem(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

        // cy.wait(6000)
        // cy.get('[frameborder="0"]').its('0.contentDocument.body')
        // cy.get('[frameborder="0"]').then($iframe => {
        //     const iframeBody = $iframe.contents().find('body')       
        //     iframeBody.find('[ng-repeat="section in $ctrl.sections"]').contains('Top Results')       
        // }) 

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        // cy.iframe().find('[class="mini_card-thumbnail"]').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://genius.com/eminem')
        // }) 

        cy.iframe().find('[class="mini_card-thumbnail"]').eq(0).invoke('removeAttr', 'target').click()
    }

    bioUnfollow(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        cy.iframe().find('[class="mini_card-thumbnail"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/eminem')
            cy.get('[class="profile_identity-alternate_names-see_all u-clickable"]').click()
            cy.get('[src="down_arrow.svg"]').eq(0).click()
            cy.get('[class="drop-content"]').should('be.visible')
            cy.contains('Verified Artist')
            cy.contains('Contributor')

            // cy.get('[class="square_button square_button--active"]')
            // .scrollIntoView()
            // .click();
            cy.get('[src="down_arrow.svg"]').eq(0).click()
            cy.get('follow-button > .square_button').click()

        })

        cy.get('header-admin > .header-action').click()
        cy.get('a[href="https://genius.com/Seersucker"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Seersucker')

        })
        
        cy.get('[class="profile_tabs-tab-count"]').eq(1).should('be.visible').click() 

        cy.get('.profile_tabs-tab--selected').contains('0')

    }

    // biofollow(){
    //     cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

    //     cy.frameLoaded('[frameborder="0"]')       
    //     cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
    //     cy.iframe().find('[class="mini_card-thumbnail"]').then(function(el) {
    //         const url = el.prop('href')
    //         // cy.log(url)
    //         // cy.visit('https://genius.com/eminem')
    //         // cy.get('[class="profile_identity-alternate_names-see_all u-clickable"]').click()
    //         // cy.get('[src="down_arrow.svg"]').eq(0).click()
    //         // cy.get('[class="drop-content"]').should('be.visible')
    //         // cy.contains('Verified Artist')
    //         // cy.contains('Contributor')

    //         // cy.get('[class="square_button square_button--active"]')
    //         // .scrollIntoView()
    //         // .click();

            
    //         cy.get('[src="down_arrow.svg"]').eq(0).click()
    //         cy.get('follow-button > .square_button').click()

    //     })

    //     cy.get('header-admin > .header-action').click()
    //     cy.get('a[href="https://genius.com/Seersucker"]').then(function(el) {
    //         const url = el.prop('href')
    //         cy.log(url)
    //         cy.visit('https://genius.com/Seersucker')

    //     })
        
    //     cy.get('[class="profile_tabs-tab-count"]').eq(1).should('be.visible').click() 
    //     cy.get('[class="u-float_left"]')

    //     cy.get('.profile_list_item').should('be.visible')
    //     cy.contains('Eminem')


    // }


    biofollow(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        cy.iframe().find('[class="mini_card-thumbnail"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/eminem')
            cy.get('[class="profile_identity-alternate_names-see_all u-clickable"]').click()
            cy.get('[src="down_arrow.svg"]').eq(0).click()
            cy.get('[class="drop-content"]').should('be.visible')
            cy.contains('Verified Artist')
            cy.contains('Contributor')

            // cy.get('[class="square_button square_button--active"]')
            // .scrollIntoView()
            // .click();
            cy.get('[src="down_arrow.svg"]').eq(0).click()
            cy.get('follow-button > .square_button').click()

        })

        cy.get('header-admin > .header-action').click()
        cy.get('a[href="https://genius.com/Seersucker"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Seersucker')

        })
        
        cy.get('[class="profile_tabs-tab-count"]').eq(1).should('be.visible').click() 

        cy.get('.profile_tabs-tab--selected').contains('1')

        // Follow again

        cy.visit('https://genius.com/eminem')
        cy.get('[class="profile_identity-alternate_names-see_all u-clickable"]').click()
        cy.get('[src="down_arrow.svg"]').eq(0).click()
        cy.get('[class="drop-content"]').should('be.visible')

        // cy.get('[class="square_button square_button--active"]')
        // .scrollIntoView()
        // .click();
        cy.get('[src="down_arrow.svg"]').eq(0).click()
        cy.get('follow-button > .square_button').click()

        cy.get('header-admin > .header-action').click()
        cy.get('a[href="https://genius.com/Seersucker"]').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Seersucker')

        })
    
        cy.get('[class="profile_tabs-tab-count"]').eq(1).should('be.visible').click() 

        cy.get('.profile_tabs-tab--selected').contains('0')

    }

    verifiedAnnos(){
        cy.get('[class="text_label text_label--button text_label--verified text_label--x_small_text_size"]').click()
        cy.get('[class="u-large_bottom_margin"]').eq(0).scrollIntoView()
        cy.get('[class="referent referent--accent_font referent--line_break referent--green"]').should('be.visible')

        // Dislike button
        cy.get(':nth-child(1) > profile-contributions-group > .profile_contributions_group > profile-contributions-annotations > .profile_contributions_group-rollup_content > profile-annotation > .standalone_annotation > .standalone_annotation-annotation > annotation > [ng-if="!ctrl.annotation_is_unwritten() && !variants.hide_social"] > voting > .voting > .voting-downvote').click()
        cy.get('[ng-click="voteTotalClicked()"]').eq(1).should('be.visible')  //.should('have.text', '+1664')
        // Like button
        cy.get(':nth-child(1) > profile-contributions-group > .profile_contributions_group > profile-contributions-annotations > .profile_contributions_group-rollup_content > profile-annotation > .standalone_annotation > .standalone_annotation-annotation > annotation > [ng-if="!ctrl.annotation_is_unwritten() && !variants.hide_social"] > voting > .voting > .voting-upvote').click()
        cy.get('[ng-click="voteTotalClicked()"]').eq(1).should('be.visible') //.should('have.text', '+1666')
    }

    about(){

        cy.get('[class="profile_identity_and_description"]').scrollIntoView()
        cy.get('[class="white_container"]').eq(0).should('be.visible')
         
    }

    contributors(){

        cy.get('[class="annotation_label-underline"]').click()

        cy.get('[collection="annotation.authors"]').should('be.visible')

        cy.get('leaderboard > .leaderboard > :nth-child(1)').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Maboo')
            cy.contains('Maboo').should('be.visible')
        })

        cy.go('back')
    }

    featured(){
        cy.get('[src="star.svg"]').click()
        cy.contains('Popular Eminem songs')
        
        cy.get('[class="mini_card_grid"]').within(() => {
            cy.get('[class="mini_card_grid-song"]').eq(2).click()
        })
        cy.contains('Lose Yourself')
        cy.go('back')
    }

}

export default Artist;