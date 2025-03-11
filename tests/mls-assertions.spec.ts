import { test, expect } from '@playwright/test';

test (`MLS page test and assertions`, async ({ page }) => {
    await page.goto(`http://perchwell.com/`);
    await expect(page).toHaveTitle(/Perchwell/);

    const mlsLink = page.getByRole(`navigation`).getByRole(`link`, { name : `For MLS` });
    await expect(mlsLink).toBeVisible(); 
    await mlsLink.click(); 
    await expect(page).toHaveURL(`https://www.perchwell.com/mls`);

    const firstNameInput = page.getByRole(`textbox`, { name : `First name` });
    await expect(firstNameInput).toBeVisible();  // apparently PW automatically detects if element is visible in viewport
    await expect(firstNameInput).toBeEnabled();  
    await firstNameInput.click(); 
    await firstNameInput.fill(`Ezra`); 
    await expect(firstNameInput).toHaveValue(`Ezra`); 

    const lastNameInput = page.getByRole(`textbox`, { name : `Last name` });
    await expect(lastNameInput).toBeVisible(); 
    await expect(lastNameInput).toBeEnabled(); 
    await lastNameInput.click(); 
    await lastNameInput.fill(`Kim`); 
    await expect(lastNameInput).toHaveValue(`Kim`); 

    const companyNameInput = page.getByRole(`textbox`, { name : `Company name` });
    await expect(companyNameInput).toBeVisible(); 
    await expect(companyNameInput).toBeEnabled(); 
    await companyNameInput.click(); 
    await companyNameInput.fill(`Georgia Tech`);
    await expect(companyNameInput).toHaveValue(`Georgia Tech`); 

    const roleInput = page.getByLabel(`I am a...`);
    await expect(roleInput).toBeVisible(); 
    await expect(roleInput).toBeEnabled(); 
    await roleInput.selectOption(`Agent/Broker`);

    const stateInput = page.getByRole(`textbox`, { name : `State` });
    await expect(stateInput).toBeVisible(); 
    await expect(stateInput).toBeEnabled(); 
    await stateInput.click(); 
    await stateInput.fill(`GA`); 
    await expect(stateInput).toHaveValue(`GA`); 

    const emailInput = page.getByRole(`textbox`, { name : `Email` });
    await expect(emailInput).toBeVisible(); 
    await expect(emailInput).toBeEnabled(); 
    await emailInput.click(); 
    await emailInput.fill(`asdf`); // purposely want to format the email wrong 
    await expect(emailInput).toHaveValue(`asdf`); 
    
    const submitButton = page.getByRole('button', { name: /submit/i });
    await expect(submitButton).toBeVisible();
    await submitButton.click();

    await expect(page).toHaveURL(`https://www.perchwell.com/mls`); 
    // definitely not the best way to check if the form was submitted 
    // because I dont want to actually submit the form, I don't know if the submit button redirects to a new URL or not 
    

    
});