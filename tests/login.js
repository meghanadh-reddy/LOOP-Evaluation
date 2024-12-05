const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');

const testDataPath = path.join(__dirname, 'data', 'logindata.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf-8'));


  async function login(page) {

    // retrieve URL from logindata.json 
    await page.goto(testData.url);

    // retrieve email from logindata.json 
    await page.fill("xpath=//input[@id='username']", testData.email);


    // retrieve password from logindata.json 
     await page.fill("xpath=//input[@id='password']", testData.password);

    // Click the login button
     await page.click("//button[normalize-space()='Sign in']");

}
module.exports = {
  login,
};