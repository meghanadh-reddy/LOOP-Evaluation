const { test , expect} = require('@playwright/test');
const { login } = require('../login');

test.describe('test case 3 ', () => {
test('test case 3', async ({ page }) => {

    await login(page);
 
    //Navigate to "Web Application."
    await page.locator("//h2[normalize-space()='Web Application']").click();

    //Verify "Design system updates" is in the "In Progress" column
    const inprog = page.locator('div:has(h2:text("In Progress"))');
    const SDupdates = inprog.locator("//h3[normalize-space()='Design system updates']");
    await expect(SDupdates).toBeVisible();

    //Confirm tags: "Design”
    await page.locator("//h3[normalize-space()='Design system updates']").locator('text="Design"').isVisible();

});

});
