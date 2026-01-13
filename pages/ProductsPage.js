class ProductsPage {
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

  }

  async addToTheBasket(productName) {
      await this.page.locator('[data-test="add-to-cart-sauce-labs-' + productName + '"]').click();
  }

  async selectSort(typeOfSort) {
    await this.page.locator('.product_sort_container').selectOption(typeOfSort);
  }

  async getAllProductPrices() {
    const priceElements = this.page.locator('.inventory_item_price');
    const count = await priceElements.count();

    const prices = [];
    for (let i = 0; i < count; i++) {
      const text = await priceElements.nth(i).textContent(); 
      const number = parseFloat(text.replace('$', ''));
      prices.push(number);
    }

    return prices;
}
}
module.exports = { ProductsPage };