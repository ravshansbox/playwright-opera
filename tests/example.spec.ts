import {
  chromium,
  expect,
  test as testBase,
  type Page,
  type Browser,
} from '@playwright/test';

const test = testBase.extend<{ browser: Browser; page: Page }>({
  browser: async ({}, use) => {
    const browser = await chromium.launch({
      executablePath: '/Applications/Opera.app/Contents/MacOS/Opera',
      headless: false,
    });
    await use(browser);
  },
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    await use(page);
  },
});

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
