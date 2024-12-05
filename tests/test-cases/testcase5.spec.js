const { test , expect } = require('@playwright/test');
const { login } = require('../login');

test.describe('test case 5 ', () => {
test('test case 5', async ({ page }) => {

    await login(page);

    //Navigate to "Mobile Application."
    await page.locator("//h2[normalize-space()='Mobile Application']").click();

    //Verify "Offline mode" is in the "In Progress" column.
    const inprog1 = page.locator('div:has(h2:text("In Progress"))');
    const offmode = inprog1.locator("//h3[normalize-space()='Offline mode']");
    await expect(offmode).toBeVisible();


    //Confirm tags: "Feature" & "High Priority”
    await page.locator("//h3[normalize-space()='Offline mode']").locator('text="Feature"').isVisible();
    await page.locator("//h3[normalize-space()='Offline mode']").locator('text="High Priority"').isVisible();

});
});