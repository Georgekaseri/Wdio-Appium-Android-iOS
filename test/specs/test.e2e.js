import { expect } from '@wdio/globals'
import UKTVScreen from '../pageobjects/uktv-screen.js'

describe('Demo Application', () => {

    it("Sample Test", async () => {
        await expect(UKTVScreen.ukTvLogo).toBeDisplayed();
        await UKTVScreen.acceptAllCookies.click();
        await UKTVScreen.signInButton.click();
        await driver.pause(2000);
        await UKTVScreen.emailAddressTextbox.setValue('ryan.short@planittesting.com');
        await driver.pause(2000);
        await UKTVScreen.passwordTextbox.setValue('pl4nit!QA25');
        await driver.pause(2000);
        await UKTVScreen.nextSignInButton.click();
        await UKTVScreen.laterButton.click();
        await driver.pause(2000);
        await UKTVScreen.searchButton.click();
        await driver.pause(2000);
        await UKTVScreen.searchTextField.click();
        await UKTVScreen.searchTextFieldAutoSuggest.setValue('Madam Secretary');
        await expect(UKTVScreen.madamSecretaryImage).toBeDisplayed();
        console.log('The Title is :' + ' ' + await UKTVScreen.madamSecretaryImageTitle.getText());
    })
})
