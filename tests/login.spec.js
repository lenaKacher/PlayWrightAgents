const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { VALID_USER, PRODUCTS, EXPECTED_CART_COUNTS } = require('./testData');

test('Open saucedemo.com', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(VALID_USER.username, VALID_USER.password);

  // check the presence of an element inventory_list on the page after login
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
  await expect(page.locator('.product_sort_container')).toBeVisible();
});