const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    headless: false, // Открывает браузер
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
  },
});