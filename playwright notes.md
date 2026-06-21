* 1st it was test('First Playwright test', async function()

&#x09;{

&#x09;});



* "function" is an anonymous function so instead of that we can just write

&#x09;async ()=>

&#x09;{

&#x09;});



* then we added fixture

**test('First Playwright test', async ({browser})=>**

&#x20;   //which browser-u have to give in config.js

{

&#x20;   **const context=await browser.newContext();**

&#x20;   //creates new instance of browser which doesnt have any default cookies/plugins

&#x20;   //we can also inject parameters/existing cookies using newContext(options?:BrowserContextOptions)

&#x20;   //in js return type of variable can be let or const

&#x20;   **const page=await context.newPage();**

&#x20;   **await page.goto("https://rahulshettyacademy.com/practice");**

});



* now instead of writing **browser.newContext(); and context.newPage();** explicitly we can just declare it as a fixture-page(we can remove the browser fixture)



test('Page Playwright test', async ({page})=>

{

&#x20;   await page.goto("https://rahulshettyacademy.com/practice");

});





IF YOU HAVE MULTIPLE TEST FILES, THEY WILL GET EXECUTED PARALLELY

BUT TESTS PRESENT IN THE SAME FILE WILL RUN SEQUENTIALLY-ONE AFTER THE OTHER



* if u give test.only , only that test will run

test.only('Page Playwright test', async ({page})=>

{

&#x20;   await page.goto("https://google.com");

});





QUESTIONS

Clearly explain at least two key advantages of using Playwright (e.g., auto-waits for reliability, cross-browser compatibility).

Describe the relationship between Browser, Browser Context, and Page in Playwright's architecture.

Explain the purpose of a key Playwright feature like the Codegen tool or Network Interception.

Mention at least one built-in Playwright feature that helps with debugging a failing test (e.g., Tracing, automatic screenshots/videos).

Communicate your answers confidently and professionally throughout the interview.





HOW TO LOCATE ELEMENT USING CSS

id: tagname#id or #id

class: tagname.class or .class

any attribute: \[attribute='value']

parent to child: parenttagname>>childtagname

text: text=''

partial element: \[attribute\*='value']

