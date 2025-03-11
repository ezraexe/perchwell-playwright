import { test, expect } from '@playwright/test';
// IMPORTANT: this test only performs clicks and navigations and doesn't necessarily verify anything 
// This is what we call an "interaction only test"
// When the tests pass, it means that the clicks and navigations worked, but it doesn't mean that the content is correct

// pipeline of this test: 
// goes to perchwell.com 
// clicks on For Brokers 
// Clicks through each tab on the For Brokers page 
// Opens message button 
// Clicks back home

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