// test checks the functionality of the "Book a Demo" buttons on the Perchwell homepage
import { test, expect } from '@playwright/test';

test(`demo test and assertions`, async ({page}) => {
    await page.goto(`https://www.perchwell.com/`);
    await expect(page).toHaveTitle(/Perchwell/);

    await page.getByRole(`navigation`).getByRole(`link`, { name : `Book a  Demo` }).click(); 
    await expect(page).toHaveURL(`https://www.perchwell.com/#demo-form`);
    await expect(page.getByRole('heading', { name: 'Book a demo today.' })).toBeVisible(); 
    // we use heading because it looks for h1 and h2 elements, if we go into inspect element
    // we see that there is an h2 element with the text "Book a demo today."



    await page.goto(`https://www.perchwell.com/`);

    await page.getByRole(`link`, { name : `Book a Demo`}).nth(1).click(); 
    await expect(page).toHaveURL(`https://www.perchwell.com/#demo-form`);
    await expect(page.getByRole('heading', { name: 'Book a demo today.' })).toBeVisible(); 
    // we use heading because it looks for h1 and h2 elements, if we go into inspect element
    // we see that there is an h2 element with the text "Book a demo today."
    
})