import { $ } from '@wdio/globals'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class UKTVScreen {
    /**
     * define selectors using getter methods
     */
    get ukTvLogo() {
        return $('//android.widget.ImageView[@resource-id="uk.co.uktv.dave:id/splash_logo"]')
    }
    get acceptAllCookies() {
        return $('//android.widget.Button[@resource-id="uk.co.uktv.dave:id/accept_all_button"]')
    }

    get signInButton() {
        return $('//android.widget.Button[@resource-id="uk.co.uktv.dave:id/sign_in_button"]')
    }
    get emailAddressTextbox() {
        return $('//android.widget.EditText[@resource-id="uk.co.uktv.dave:id/sign_in_email_field"]')
    }
    get passwordTextbox() {
        return $('//android.widget.EditText[@resource-id="uk.co.uktv.dave:id/sign_in_password_field"]')
    }
    get nextSignInButton() {
        return $('//android.widget.Button[@content-desc="signinButtonElement"]')
    }
    get laterButton() {
        return $('//android.widget.Button[@content-desc="notification_LaterButtonElement"]')
    }
    get searchButton() {
        return $('//android.widget.FrameLayout[@content-desc="Search"]')
    }

    get searchTextField() {
        return $('//android.view.View[@resource-id="uk.co.uktv.dave:id/background"]')
    }

    get searchTextFieldAutoSuggest() {
        return $('//android.widget.EditText[@resource-id="uk.co.uktv.dave:id/searchInput"]')
    }

    
    
    get madamSecretaryImage() {
        return $('//android.widget.ImageView[@resource-id="uk.co.uktv.dave:id/coverImageView"]')
    }
    get madamSecretaryImageTitle() {
        return $('//android.widget.TextView[@resource-id="uk.co.uktv.dave:id/title"]')
    }
    


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    

    /**
     * overwrite specific options to adapt it to page object
     */
    
}

export default new UKTVScreen();