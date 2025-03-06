import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.perchwell.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'For Brokers' }).click();
  await page.getByRole('tab', { name: 'Rich Property Data' }).click();
  await page.getByRole('tab', { name: 'Market Trends & Insights' }).click();
  await page.getByRole('tab', { name: 'Client Collaboration' }).click();
  await page.getByRole('button', { name: 'Open Intercom Messenger' }).click();
  await page.locator('iframe[name="intercom-launcher-frame"]').contentFrame().getByTestId('launcher-with-badge-cutout-none').click();
  await page.getByRole('link', { name: 'home' }).click();
});