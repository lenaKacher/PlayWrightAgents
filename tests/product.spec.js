const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { LoginPage } = require('../pages/LoginPage');
const { VALID_USER, PRODUCTS, EXPECTED_CART_COUNTS } = require('./testData');

test.describe('Product Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(VALID_USER.username, VALID_USER.password);
  });

  test('add items to the basket', async ({ page }) => {
    const productPage = new ProductsPage(page);
    await productPage.addToTheBasket(PRODUCTS.BACKPACK);
    await expect(page.locator('.shopping_cart_badge')).toBeVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText(EXPECTED_CART_COUNTS.ONE_ITEM);

    await productPage.addToTheBasket(PRODUCTS.BIKE_LIGHT);
    await expect(page.locator('.shopping_cart_badge')).toHaveText(EXPECTED_CART_COUNTS.TWO_ITEMS);
  });

  test('sort products by price: low to high', async ({ page }) => {
    const productPage = new ProductsPage(page);
    await productPage.selectSort('Price (low to high)');

    const prices = await productPage.getAllProductPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);
  });
});