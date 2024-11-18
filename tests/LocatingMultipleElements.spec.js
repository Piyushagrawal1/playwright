const { test, expect } = require('@playwright/test');

test('LocatingMultipleElements', async ({ page }) => {
    await page.goto("http://www.demoblaze.com/index.html")

    // const linkd = await page.$$('a')

    // for (const link of linkd) {
    //     const linktext = await link.textContent()
    //     console.log(linktext)
    // }

    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    for (const product of products) {
        const productname = await product.textContent()
        console.log(productname) //assertion
    }

    await page.close()
})
