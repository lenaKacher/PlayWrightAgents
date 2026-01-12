class ProductPage {
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

  }

  async addToTheBasket(productName) {
      await this.page.locator('[data-test="add-to-cart-' + productName + '"]').click();
      
  }

  async selectSort(username, password) {

  }
}
module.exports = { LoginPage };