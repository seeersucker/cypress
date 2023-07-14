let logpassword;
let logusername;
let loggmail;
let password = Date.now();
let gmail = 'boburtoshpulatov' + password + '@gmail.com';
let username = 'Shady' + password;



class signUp {

    logpassword = password;
    logusername = username;
    loggmail = gmail;

    signUpbutton = '[class="PageHeaderAuthLinksdesktop__Link-sc-10sr9hk-0 dQuVkD"]'

    signUpWithFB(){
        cy.get(this.signUpbutton).eq(0).click()

        // cy.get('.facebook_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://www.facebook.com/login.php?skip_api_login=1&api_key=265539304824&kid_directed_site=0&app_id=265539304824&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D265539304824%26redirect_uri%3Dhttps%253A%252F%252Fgenius.com%252Foauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3D7b05e6d17371fc182c61f7439f02925f6683253bd9d3afb2%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D5acca23b-e673-40e6-bf27-0d9969496008%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fgenius.com%2Foauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D7b05e6d17371fc182c61f7439f02925f6683253bd9d3afb2%23_%3D_&display=page&locale=ru_RU&pl_dbl=0')
        // })

        cy.get('.facebook_button').invoke('removeAttr', 'target').click()
    }

    signUpwithTWT(){
        cy.visit('https://genius.com')
        cy.get(this.signUpbutton).eq(0).click()

        // cy.get('.twitter_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://api.twitter.com/oauth/authenticate?oauth_token=UQy4lQAAAAAABwN7AAABiIu8ot0')
        // })

        cy.get('.twitter_button').invoke('removeAttr', 'target').click()
    }

    signUpWithGoogle(){
        cy.get(this.signUpbutton).eq(0).click()

        // cy.get('.google_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S1661009530%3A1685958106902554&access_type=offline&client_id=218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fgenius.com%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=email+profile&service=lso&state=22614057675566e72c77452a946b93501bad0098155c2213&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hANS3w_45Ub579YFxX1YKh4lBq2Zhoewj2DL8fOConkTbRSe4NfbM9TuGOjMExURnKegGZrFXU6lf4ejrp59Zi8LVt9etz8PHSnOx13stVFRE0iMnogmfTWUUvHLJVcHCvzrt0aZHW_YsF_JXPOcjzNrvq9DCccuyVpQPHIAUHLOEXYlWu0v7yvWipvWhDZOyGfIQo3ixkLA_q_9XFX5P3pDiqEbzRkLJmP3643GsgthEfuwRnngPMzRC1FxX4uiGlgfbV7zEEeQ8ybQHLfjjypocl4-PS7wV92aEnsDq6rixQWlc5ePdploPrdiTZzTqFfuqHHJbUdCsJgkxiXKYCoSLmeSyEwSGL3goptZEwi9mPgvMXuBDFXu_Cjz4sjGKs8lce75SH-3IIgJiFFVP1edSiVbLXTehe8MGreAhBVenqsXdtL3ImRDV6us-LIXDMbwhKmltsXjHlfGH4tdlYuOA2QPYw%26as%3DS1661009530%253A1685958106902554%26client_id%3D218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fgenius.com&rart=ANgoxcfpnKedSHrk1l-jT3h1hyM_YBfVZEQPJ3xxI5IL0NgE3uv2IPSqzVfsItMmOsM6gU2__1xxpdPCNRxYCNJDyWhcwIreMQ')
        // })

        cy.get('.google_button').invoke('removeAttr', 'target').click()
    }

    signUpbtn(){

        cy.get(this.signUpbutton).eq(0).click()

        cy.get('.callout > .facebox').click()
        cy.get('[id="facebox"]').should('be.visible')
        cy.wait(6000)
        cy.get('.close').click()

        // cy.get('.facebook_button').should('be.visible')

        // cy.get('.facebook_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://www.facebook.com/login.php?skip_api_login=1&api_key=265539304824&kid_directed_site=0&app_id=265539304824&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv7.0%2Fdialog%2Foauth%3Fclient_id%3D265539304824%26redirect_uri%3Dhttps%253A%252F%252Fgenius.com%252Foauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%26state%3D7b05e6d17371fc182c61f7439f02925f6683253bd9d3afb2%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D5acca23b-e673-40e6-bf27-0d9969496008%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fgenius.com%2Foauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D7b05e6d17371fc182c61f7439f02925f6683253bd9d3afb2%23_%3D_&display=page&locale=ru_RU&pl_dbl=0')
        // })

        // cy.go('back')

        // cy.get('.twitter_button').should('be.visible')

        // cy.get('.twitter_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://api.twitter.com/oauth/authenticate?oauth_token=RwGshAAAAAAABwN7AAABiIrsnD0')
        // })

        // cy.go('back')

        // cy.get('.google_button').should('be.visible')

        // cy.get('.google_button').then(function(el) {
        //     const url = el.prop('href')
        //     cy.log(url)
        //     cy.visit('https://accounts.google.com/v3/signin/identifier?dsh=S1661009530%3A1685958106902554&access_type=offline&client_id=218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com&o2v=1&redirect_uri=https%3A%2F%2Fgenius.com%2Fauth%2Fgoogle%2Fcallback&response_type=code&scope=email+profile&service=lso&state=22614057675566e72c77452a946b93501bad0098155c2213&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hANS3w_45Ub579YFxX1YKh4lBq2Zhoewj2DL8fOConkTbRSe4NfbM9TuGOjMExURnKegGZrFXU6lf4ejrp59Zi8LVt9etz8PHSnOx13stVFRE0iMnogmfTWUUvHLJVcHCvzrt0aZHW_YsF_JXPOcjzNrvq9DCccuyVpQPHIAUHLOEXYlWu0v7yvWipvWhDZOyGfIQo3ixkLA_q_9XFX5P3pDiqEbzRkLJmP3643GsgthEfuwRnngPMzRC1FxX4uiGlgfbV7zEEeQ8ybQHLfjjypocl4-PS7wV92aEnsDq6rixQWlc5ePdploPrdiTZzTqFfuqHHJbUdCsJgkxiXKYCoSLmeSyEwSGL3goptZEwi9mPgvMXuBDFXu_Cjz4sjGKs8lce75SH-3IIgJiFFVP1edSiVbLXTehe8MGreAhBVenqsXdtL3ImRDV6us-LIXDMbwhKmltsXjHlfGH4tdlYuOA2QPYw%26as%3DS1661009530%253A1685958106902554%26client_id%3D218203036663-q3k2c5okc8vvcpr12rd30g0ifas9s2ha.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fgenius.com&rart=ANgoxcfpnKedSHrk1l-jT3h1hyM_YBfVZEQPJ3xxI5IL0NgE3uv2IPSqzVfsItMmOsM6gU2__1xxpdPCNRxYCNJDyWhcwIreMQ')
        // })
        
        cy.get('.sign_in_with_email').should('be.visible').click()

        cy.get('#new_user').should('be.visible')

        cy.get('#user_login').click().type(this.logusername)
        cy.get('#user_email').click().type(this.loggmail)
        cy.get('#user_password').click().type(this.loggmail)
        cy.get('#user_submit').click()
    }
}

export default signUp;