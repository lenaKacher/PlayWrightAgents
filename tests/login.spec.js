const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Успешный вход на saucedemo.com', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  // Проверяем, что мы попали на страницу с товарами
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.inventory_list')).toBeVisible();
});