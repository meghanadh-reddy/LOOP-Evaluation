const { test, expect } = require('@playwright/test');
const { login } = require('../login');

test.describe('test case 4 ', () => {
test('test case 4', async ({ page }) => {

    await login(page);

    //Navigate to "Mobile Application."
    await page.locator("//h2[normalize-space()='Mobile Application']").click();

    //Verify "Push notification system" is in the "To Do" column.
    const todo1 = page.locator('div:has(h2:text("To Do"))');
    const PNSystem = todo1.locator("//h3[normalize-space()='Push notification system']");
    await expect(PNSystem).toBeVisible();

    //Confirm tags: "Feature”
    await page.locator("//h3[normalize-space()='Push notification system']").locator('text="Feature"').isVisible();


});
});