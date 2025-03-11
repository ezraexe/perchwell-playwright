import { test, expect } from '@playwright/test';

test('mls interaction test', async ({ page }) => {
  await page.goto('https://www.perchwell.com/');
  await page.getByRole('navigation').getByRole('link', { name: 'For MLS' }).click();
  await page.getByRole('textbox', { name: 'First name' }).click();
  await page.getByRole('textbox', { name: 'Last name' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Company name' }).click();
  await page.getByLabel('I am a...').selectOption('Agent/Broker');
  await page.getByRole('textbox', { name: 'State' }).click();
});