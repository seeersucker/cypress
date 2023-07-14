import 'cypress-iframe';

class Search {

    inputArtist(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

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
            cy.visit('https://genius.com/Eminem')

        })
        
    }

    inputSong(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

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
            cy.visit('https://genius.com/Eminem-killshot-lyrics')
        })
        
    }

    expandResults(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')

        // cy.wait(6000)
        // cy.get('[frameborder="0"]').its('0.contentDocument.body')
        // cy.get('[frameborder="0"]').then($iframe => {
        //     const iframeBody = $iframe.contents().find('body')       
        //     iframeBody.find('[ng-repeat="section in $ctrl.sections"]').contains('Top Results')       
        // }) 

        cy.frameLoaded('[frameborder="0"]')       
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').contains('Top Result')
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').find('[tracking-event="Search More Results Page View"]').eq(0).click()
        // cy.wait(3000)
        // cy.iframe().find('[ng-repeat="section in $ctrl.sections"]')
        // .find('[class="act-embed cont-searches snarly"]').contains('All Song Results')        // DID NOT WORK
        cy.iframe().find('[ng-repeat="section in $ctrl.sections"]').find('[class="mini_card"]').eq(2).then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/Eminem-killshot-lyrics')
        }) 
        
    }

    searchIcon(){
        cy.get('input[placeholder="Search lyrics & more"]').type('Eminem')
        cy.get('[class="PageHeaderSearchdesktop__Icon-eom9vk-1 irpyXK"]').click()
        cy.contains('Eminem')
        cy.contains('All Results')

    }

}

export default Search;