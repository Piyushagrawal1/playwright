
import { test, expect } from '@playwright/test';

test('Locators', async ({ page }) => {
    await page.goto("http://www.demoblaze.com/index.html")

    //click on login button - property
    await page.click("id=login2")

    //provide username - css
    await page.fill("#loginusername", "poiu")

    //provide password - CSS
    await page.fill("input[id='loginpassword']", "poiu")

    //click on login button - xpath
    await page.click("//a[normalize-space()='Log in']")

    //verify logout link - xpath
    const logoutLink = await page.locator("//a[normalize-space()='Log out']")
    await expect(logoutLink).toBeVisible() //assertion

    await page.close()


})