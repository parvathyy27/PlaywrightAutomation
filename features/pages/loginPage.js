class LoginPage {

    constructor(page)
    {
        this.page = page;

        this.userName = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByLabel('Password');
        this.signInBtn = page.getByRole('button', {name:'Submit'});
        // this.errorMessage = page.getByText('Logged In Successfully');
        // /** @type {import('@playwright/test').Locator} */
        this.homePage = page.locator('.post-title');
        this.practiceBtn=page.locator('//a[text()="Practice"]');
        //this.practicPage=page.locator('.post-title');
        this.testTable = page.getByRole('link', {name:'Test Table'});
        this.testTablePageCheck=page.getByRole('heading', {name:'Test Table'});
        this.javaRadioBtn=page.getByRole('radio', {name:'Java'});
        this.langHeader=page.locator('//tr[not(contains(@style,"display: none"))]//td[@headers="col_lang"]');
        this.scrollPoint=page.locator('//h5[contains(text(), "Test case 1")]');
        this.allCheckBoxOptions=page.locator('input[name="level"]');
        // this.desiredLevel=page.locator(`input[value='${level}']`);
        this.desiredLevel=page.locator(`//tr[not(contains(@style,"display: none"))]//td[@data-col="level"]`);
    }

    async goToLoginPage()
    {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }

    async enterUserName(username)
    {
        await this.userName.fill(username);
    }

    async enterPassword(password)
    {
        await this.password.fill(password);
    }

    async clickSignIn()
    {
        await this.signInBtn.click();
    }

    async getErrorMessage()
    {
        return await this.errorMessage.textContent();
    }

    async homePageDisplayed(){
        return await this.homePage.isVisible();
    }

    async clickPracticeButton(){
        await this.practiceBtn.click();
        // return await this.practicPage.textContent();
    }

    async clickTestTable(){
        await this.testTable.click();
    }

    async testTablePage(){
        return this.testTablePageCheck;
    }

    async javaRadioBtnClick(){
        await this.javaRadioBtn.click();
    }
    
    async getLanguageColumn(){
        // return this.scrollPoint;
        return this.langHeader;
    }

    async uncheckBoxesAndCheckLevel(level){
        const count=await this.allCheckBoxOptions.count();
        for(let i=0; i<count; i++){
            await this.allCheckBoxOptions.nth(i).uncheck();
        }
        await this.page.locator(`input[value='${level}']`).check();
        return this.desiredLevel;
    }
    
}

module.exports = { LoginPage };