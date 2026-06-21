const { Before, After, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

setDefaultTimeout(60 * 1000);

Before(async function () {

    console.log("Launching browser...");

    this.browser = await chromium.launch({
        headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
});

After(async function () {

    await this.page.waitForTimeout(5000);

    await this.browser.close();
});