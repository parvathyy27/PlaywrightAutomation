const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');

//browser-global fixture to invoke browser-put inside {} to mark as a playwright fixture
//global fixture are global variable which are available across your project
test('Browser context Playwright test', async ({browser})=>
    //which browser-u have to give in config.js
{
    const context=await browser.newContext();
    //creates new instance of browser which doesnt have any default cookies/plugins
    //we can also inject parameters/existing cookies using newContext(options?:BrowserContextOptions)
    //in js return type of variable can be let or const
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/practice");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});

test.only('Page Playwright test', async ({page})=>
{
    const userName=page.locator("#username");
    const passWord=page.locator("#password");
    const signIn=page.locator("#signInBtn");
    const cardTitles=page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //playwright predomninantly uses css
    await userName.type("rahulshetty");
    await passWord.type("Learning@830$3mK2");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
    //erasing whats already there in userName and entering new username
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await passWord.fill("");
    await passWord.type("Learning@830$3mK2");
    await signIn.click();
    //to get the 1st element from the 4 elements, we can either use console.log(await page.locator(".card-body a").first().textContent()) OR
    console.log(await cardTitles.nth(0).textContent());
    //to get all the element texts
    const allTitles=await cardTitles.allTextContents();
    console.log(allTitles);
});