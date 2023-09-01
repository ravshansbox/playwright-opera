import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Desktop',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile',
      use: { ...devices['iPhone 13 Pro'] },
    },
  ],
});
