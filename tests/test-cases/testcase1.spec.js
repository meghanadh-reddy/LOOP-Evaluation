const { test, expect } = require('@playwright/test');
const { login } = require('../login');   //importing login.js

test.describe('test case 1 ', () => {
test('test case 1', async ({ page }) => {

    await login(page);

    //navigating to web application
    await page.locator("//h2[normalize-space()='Web Application']").click();

    //Verify "Implement user authentication" is in the "To Do" column.
    const todo = page.locator('div:has(h2:text("To Do"))');
    const task = todo.locator('h3:text("Implement user authentication")');
    await expect(task).toBeVisible();


    //confirm tags High Priority and Feature
    await page.locator("//h3[normalize-space()='Implement user authentication']").locator('text="Feature"').isVisible();

    await page.locator("//h3[normalize-space()='Implement user authentication']").locator('text="High Priority"').isVisible();

   });
});
