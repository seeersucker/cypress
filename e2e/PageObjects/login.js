let userdata;

before(() => {
    cy.fixture('userLogin.json').then((data) => {
        userdata = data
    })
})

class Login {

    signInbutton = '[class="TextLabel-sc-8kw9oj-0 knRXtG"]' 
    userNameField = '[name="user_session[login]"]'
    passcodeField = '[id="user_session_password"]'
    loginButton = '#user_session_submit'

    loginWithFB(){
        cy.get(this.signInbutton).eq(1).click()

        // cy.get('.login_unit > .facebook_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://www.facebook.com/login.php?skip_api_login=1&api_key=265539304824&kid_directed_site=0&app_id=265539304824&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D265539304824%26redirect_uri%3Dhttps%253A%252F%252Fgenius.com%252Foauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3D01b8461c4114cb540f7b9fdd8122abdf4a48de72f2b48479%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Dd492e98c-ed7b-4abd-aa40-1aace73416a6%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fgenius.com%2Foauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D01b8461c4114cb540f7b9fdd8122abdf4a48de72f2b48479%23_%3D_&display=page&locale=ru_RU&pl_dbl=0')
        // })
        
        cy.get('.login_unit > .facebook_button').invoke('removeAttr', 'target').click()  
    }

    loginWithTWT(){
        cy.visit('https://genius.com')
        cy.get(this.signInbutton).eq(1).click()

        // cy.get('.twitter_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://api.twitter.com/oauth/authenticate?oauth_token=U5eWMAAAAAAABwN7AAABiIu0cxk')
        // })

        cy.get('.login_unit > .twitter_button').invoke('removeAttr', 'target').click()
    }

    loginWithGoogle(){
        cy.get(this.signInbutton).eq(1).click()

        // cy.get('.login_unit > .google_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S-1090234859%3A1685970111436229&access_type=offline&client_id=218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fgenius.com%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=email+profile&service=lso&state=87cf452f7416ea08d1dbb36e35efcf449d1f53ab7c3e236c&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAP5PS63ZNbPtMdS7xfXp9CQBjuQ3xXm9wGkBrQQVvU7QMTgb8h6nEEmDGhmz-kfp7pLNkA8B9vI6q3PxXHT4KPupW9JEbzV24nGljMUkR_3wz8UOfnxTz7A7N858E5is7FZxlY-PHHkW1RBp1S4n_bGFm_KkfmjrnBkl0ffYjK5z_o4OXi4tomugMge8RD9hs5THhBIVe1s-cLivLyOFUuGW8SMajfAT6iXqiwN75X8jxax5GmRlFpjC_kbm5pEQnwJ3qWnNOdRNX3rwya0aHnva6xcbekwmqAmk3CW82R9wbRYxtGSE3-NTmm2Hg93xCVhU3LayHv4Bt0Mz0By34U4HxgyMqL_0IPUvrg_hXqXu4NRmm00m4cKYVcaa8UR5QmZXSbpJGHlHToGGO4U3tgdUD_rW8kGzqzz7I3kBL0xrSuHYYJKgCwtRFMQuOw3y_2U0u4J1HL8iAsvoNAP8wNTQGuWEQ%26as%3DS-1090234859%253A1685970111436229%26client_id%3D218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fgenius.com&rart=ANgoxceQPV74a_IoSPzeTcm0th6lYG2yGDNVkDnzJE6CgcBGj4Gab9GSheDg0uDB-udSwGeKTlwEG5pBdI61BHHnATW_0vSPqQ')
        // })

        cy.get('.login_unit > .google_button').invoke('removeAttr', 'target').click()
    }

    forgotPassword(){
        cy.get(this.signInbutton).eq(1).click()

        cy.get(this.userNameField).should('be.visible').clear().click().type('seersucker')
        cy.get(this.passcodeField).should('be.visible').clear().click().type('nonuna')
        cy.get(this.loginButton).click()

        cy.contains('Incorrect password.')

        cy.get('.i_forgot_my_password').then(function(el) {
            const url = el.prop('href')
            cy.log(url)
            cy.visit('https://genius.com/password_resets/new')
            cy.get('input[id="email"]').type('Seersucker') 
            cy.get('input[type="submit"]').click()
        })

        cy.get(this.signInbutton).eq(1).click()
        cy.contains('Check your email for password reset instructions')

    }

    signIn(){
        cy.get(this.signInbutton).eq(1).click()

        cy.get('.callout > .facebox').click()
        cy.get('[id="facebox"]').should('be.visible')
        cy.wait(2000)
        cy.get('.close').click()

        cy.fixture('userLogin.json').then((data) => {
            cy.get(this.userNameField).should('be.visible').clear().click().type('seersucker')
            cy.get(this.passcodeField).should('be.visible').clear().click().type('952557700')
            cy.get(this.loginButton).click()
            // data.forEach((userdata) => {
            //     cy.get(this.userNameField).should('be.visible').clear().click().type(userdata.username)
            //     cy.get(this.passcodeField).should('be.visible').clear().click().type(userdata.password)
            //     cy.get(this.loginButton).click()
            //     if(userdata.username == 'seersucker' && userdata.password == '952557700') {              
            //         cy.get('.PageHeaderLoggedIn__Container-on81eb-1').should('be.visible') 
            //     }               
            // });
        })
    }
}

export default Login;