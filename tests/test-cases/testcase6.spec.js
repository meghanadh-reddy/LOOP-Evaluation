const { test, expect } = require('@playwright/test');
const { login } = require('../login');

test.describe('test case 6 ', () => {
test('test case 6', async ({ page }) => {

    await login(page);
     
    //Navigate to "Mobile Application."
    await page.locator("//h2[normalize-space()='Mobile Application']").click();

    //Verify "App icon design" is in the "Done" column.
    const inprog1 = page.locator('div:has(h2:text("Done"))');
    const offmode = inprog1.locator("//h3[normalize-space()='App icon design']");
    await expect(offmode).toBeVisible();
    
    //Confirm tags: "Design”
    await page.locator("//h3[normalize-space()='App icon design']").locator('text="Design"').isVisible();

});
});