// test checks the functionality of the "For Brokers" page 
// clicks through the tabs 
// then clicks on the perchwell logo to go back to the homepage 
import { test, expect } from '@playwright/test';

test (`Broker page test and assertions`, async ({page}) => {
    await page.goto(`https://www.perchwell.com/`);
    await expect(page).toHaveTitle(/Perchwell/);

    const brokersLink = page.getByRole('navigation').getByRole('link', { name: 'For Brokers' });
    await brokersLink.scrollIntoViewIfNeeded(); // scrolls the link into view
    await expect(brokersLink).toBeVisible(); // PW automatically detects if element is visible in viewport
    await brokersLink.click();
    await expect(page).toHaveURL(`https://www.perchwell.com/professionals`);

    const richPropertyDataTab = page.getByRole('tab', { name: 'Rich Property Data' });
    await richPropertyDataTab.scrollIntoViewIfNeeded();
    await expect(richPropertyDataTab).toBeVisible(); 
    await richPropertyDataTab.click();

    // not sure how to test this change in context because there is no change in the URL
    // my thought process was that maybe just the change in the content of the page is enough
    // not 100% sure if this is the best way or the most efficient way to do this 
    // const richPropertyDataContent = page.getByText('Perchwell brings everything together');
    // await expect(richPropertyDataContent).toBeVisible();

    // ALTERNATIVE TO DO THE SAME THING 
    // checked inspect element and i saw that the "aria-selected" when a tab is clicked is set to true 
    await expect(richPropertyDataTab).toHaveAttribute('aria-selected', 'true');


    const trendsTab = page.getByRole(`tab`, { name : "Market Trends & Insights" });
    await trendsTab.scrollIntoViewIfNeeded();
    await expect(trendsTab).toBeVisible();
    await trendsTab.click();
    // const trendsContent = page.getByText('Market Trends & Insights');
    // await expect(trendsContent).toBeVisible();
    await expect(trendsTab).toHaveAttribute('aria-selected', 'true');


    const clientTab = page.getByRole(`tab`, { name : "Client Collaboration" }); 
    await clientTab.scrollIntoViewIfNeeded(); 
    await expect(clientTab).toBeVisible(); 
    await clientTab.click(); 
    await expect(clientTab).toHaveAttribute('aria-selected', 'true');
    
    const backHome = page.getByRole(`link`, {name : `home`});
    await expect(backHome).toBeVisible();
    await backHome.click(); 

    await expect(page).toHaveURL("https://www.perchwell.com/");
}); 