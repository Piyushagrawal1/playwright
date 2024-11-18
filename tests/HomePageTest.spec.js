const { test, expect } = require('@playwright/test');

test('Home Page', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html'); //launch our application

    const pageTitle = await page.title()
    console.log('page title: ' + pageTitle);

    await expect(page).toHaveTitle('STORE'); //assertion
    const pageUrl = page.url();
    console.log('page url is: ' + pageUrl);
    
    
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    page.close(); 
})