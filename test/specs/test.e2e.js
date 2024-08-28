import { expect } from '@wdio/globals';

let platform = process.env.PLATFORM;
console.log(platform);

let UKTVScreen;

before(async () => {
    if (platform === "android") {
        UKTVScreen = await import('../screenObjects/android/uktv-screen.js').then(module => module.default);
    } else if (platform === "ios") {
        UKTVScreen = await import('../screenObjects/ios/uktv-screen.js');
    } else {
        throw new Error('Unsupported platform');
    }
    console.log("BAKR",UKTVScreen);

});



describe('Demo Application', () => {

    it("Sample Test", async () => {
        await UKTVScreen.ukTvLogo.waitForDisplayed({ timeout: 10000 }); // Wait up to 10 seconds
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
