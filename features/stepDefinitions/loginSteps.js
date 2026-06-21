const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const assert = require("assert");

const { LoginPage } = require("../pages/LoginPage");


Given('User navigates to login page', async function () {

    this.loginPage = new LoginPage(this.page);

    await this.loginPage.goToLoginPage();
});

When('User enters username {string}', async function (username) {

    await this.loginPage.enterUserName(username);
});

When('User enters password {string}', async function (password) {

    await this.loginPage.enterPassword(password);
});

When('User clicks on login button', async function () {

    await this.loginPage.clickSignIn();
});

Then('Login error message should be displayed', async function () {

    const message = await this.loginPage.getErrorMessage();

    console.log(message);

    expect(message.toHaveText("Incorrect"));
});

Then('User lands in the Homepage', async function(){
    console.log(await this.page.url());

    const text = await this.loginPage.homePage.textContent();

    console.log("Home page text:", text);

    expect(text.trim()).toBe("Logged In Successfully");
});

Then('user clicks on practice button', async function () {
    await this.loginPage.clickPracticeButton();
});

Then('user clicks on test table', async function () {
    await this.loginPage.clickTestTable();
});

Then('user lands on test table page', async function () {
    console.log(await this.loginPage.testTablePageCheck.textContent());
});

When('clicked on java radio button', async function () {
    await this.loginPage.javaRadioBtnClick();
    console.log(await this.loginPage.javaRadioBtn.getAttribute('value'));
});

Then('check if all language in the table is java', async function () {
    //languages is not an array, it is a locator object which represents all the matching elements.
    const languages=await this.loginPage.getLanguageColumn();
    const size=await languages.count();
    console.log("Java occurences are", size);
    await this.loginPage.scrollPoint.scrollIntoViewIfNeeded();
    for(let i=0;i<size;i++){
        await expect(languages.nth(i)).toHaveText('Java');
    }
});

When('clicked on specific {string} checkbox', async function (level) {
    await this.loginPage.uncheckBoxesAndCheckLevel(level);
    await this.loginPage.scrollPoint.scrollIntoViewIfNeeded();
    const levels=await this.loginPage.uncheckBoxesAndCheckLevel(level);;
    const size=await levels.count();
    console.log(level, "occurences are", size);
    for (let i=0;i<size;i++){
        await expect(levels.nth(i)).toHaveText(level);
    }
});