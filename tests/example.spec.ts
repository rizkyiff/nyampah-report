import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await test.step('Navigate to example.com', async () => {
    await page.goto('https://example.com');
  });

  await test.step('Verify title', async () => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });
}); 