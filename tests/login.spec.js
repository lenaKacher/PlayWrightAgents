const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Open saucedemo.com', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // check the presence of an element inventory_list on the page after login
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
  await page.pause();
});