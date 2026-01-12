const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/ProductPage');

test('add item to the basket', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

});