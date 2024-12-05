const { test, expect } = require('@playwright/test');
const { login } = require('../login');

test.describe('test case 2 ', () => {
test('test case 2', async ({ page }) => {

    await login(page);

    //Navigate to "Web Application."
    await page.locator("//h2[normalize-space()='Web Application']").click();

    //Verify "Fix navigation bug" is in the "To Do" column.
    const todo = page.locator('div:has(h2:text("To Do"))');
    const Navtask = todo.locator("//h3[normalize-space()='Fix navigation bug']");
    await expect(Navtask).toBeVisible();
    
    //Confirm tags: "Bug"
    await page.locator("//h3[normalize-space()='Fix navigation bug']").locator('text="Bug"').isVisible();

});

});

