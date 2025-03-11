import { test, expect } from '@playwright/test';

test (`link assertions`, async ({page, browserName}) => {
    await page.goto(`https://www.perchwell.com/`);
    await expect(page).toHaveTitle(/Perchwell/);

    // tests brokers link at bottom of page
    await page.getByRole('listitem').filter({ hasText: 'For Brokers' }).getByRole('link').click();
    await expect(page).toHaveURL('https://www.perchwell.com/professionals');
    await page.goto('https://www.perchwell.com/');
  
    // Test For MLSs link
    await page.getByRole('link', { name: 'For MLSs' }).click();
    await expect(page).toHaveURL('https://www.perchwell.com/mls');
    await page.goto('https://www.perchwell.com/');


    // Check API documentation link 
    const apiPagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'API Documentation' }).click();
    const apiPage = await apiPagePromise;
    // checks url of the popup 
    await expect(apiPage).toHaveURL('https://docs.perchwell.com/#/');
    // Close the API docs tab
    await apiPage.close();
    // Verify we're still on the main page
    await expect(page).toHaveURL('https://www.perchwell.com/');

    // Check Support Link 
    const supportPagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Support' }).click();
    const supportPage = await supportPagePromise;
    await expect(supportPage).toHaveURL('https://intercom.help/perchwell/en/');
    await supportPage.close();
    await expect(page).toHaveURL('https://www.perchwell.com/');

    // Check Careers Link(no popup, just redirects)
    await page.getByRole('link', { name: 'Careers' }).click();
    await expect(page).toHaveURL('https://www.perchwell.com/careers');
    await page.goto('https://www.perchwell.com/');

    // Check Download for IOS link
    if (browserName === 'webkit') {
        // For WebKit, just verify the link exists and has correct attributes
        const iosLink = page.getByRole('link', { name: 'Download for iOS' });
        await expect(iosLink).toBeVisible();
        await expect(iosLink).toHaveAttribute('href', 'https://apps.apple.com/us/app/real-estate-by-perchwell/id1090535139');
    } else {
        // For Chrome and Firefox, check the popup behavior
        const iosPagePromise = page.waitForEvent('popup');
        await page.getByRole('link', { name: 'Download for iOS' }).click();
        const iosPage = await iosPagePromise;
        await expect(iosPage).toHaveURL('https://apps.apple.com/us/app/real-estate-by-perchwell/id1090535139');
        await iosPage.close();
    }
    await expect(page).toHaveURL('https://www.perchwell.com/');

    // Check Download for Android link 
    const androidPagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Download for Android' }).click();
    const androidPage = await androidPagePromise;
    await expect(androidPage).toHaveURL('https://play.google.com/store/apps/details?id=com.perchwell.re');
    await androidPage.close();
    await expect(page).toHaveURL('https://www.perchwell.com/');

    // Check LinkedIn Link 
    const linkedinPagePromise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'LinkedIn' }).click();
    const linkedinPage = await linkedinPagePromise;
    await expect(linkedinPage).toHaveURL('https://www.linkedin.com/company/perchwell/');
    await linkedinPage.close();
    await expect(page).toHaveURL('https://www.perchwell.com/');

    
    



})
