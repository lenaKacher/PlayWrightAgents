const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    trace: 'on',
    screenshot: 'on'
  },
});