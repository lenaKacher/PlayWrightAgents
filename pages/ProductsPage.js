class ProductsPage {
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sortContainer = page.locator('.product_sort_container');
    this.priceElements = page.locator('.inventory_item_price');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addToTheBasket(productName) {
    await this.page.locator(`[data-test="add-to-cart-sauce-labs-${productName}"]`).click();
  }

  async selectSort(typeOfSort) {
    await this.sortContainer.selectOption(typeOfSort);
  }

  async getAllProductPrices() {
    const count = await this.priceElements.count();

    if (count === 0) {
      throw new Error('No price elements found on the page');
  }

    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await priceElements.nth(i).textContent(); 
      const number = parseFloat(text.replace('$', ''));
      if (isNaN(number)) {
        throw new Error(`Invalid price format at index ${i}: ${text}`);
      }
      prices.push(number);
    }

    return prices;
}
}
module.exports = { ProductsPage };