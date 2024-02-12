import { link } from 'fs';
import {test} from 'playwright/test';

test.skip('Basic Navigation', async ({page}) => {
    await page.goto('https://gitlab.com');
    await page.waitForTimeout(1000);
    await page.reload();

})

test.skip ('Interraction with Web Elements on GitLab', async ({page}) => {
    await page.goto('https://gitlab.com');
    await page.locator('#be-navigation-desktop').getByRole('link', {name: 'Get free trial'}).click();

    // await page.locator('[data-testid="new-user-first-name-field"]').fill('First_Name');
    // await page.locator('[data-testid="new-user-last-name-field"]').fill('Last_Name');

    // alternative way to identify element by TestId
    await page.getByTestId('new-user-first-name-field').fill('First_Name');
    await page.getByTestId('new-user-last-name-field').fill('Last_Name');
})

test ('Using Various Locator Method', async ({page}) =>{
    await page.goto('https://gitlab.com');

    // search button          aria-label="Search"
    // await page.getByRole('button', {name: 'Search'}).click();
    // await page.getByRole('link', {name: 'Sign in'}).click();
    // await page.waitForTimeout(5000);
    await page.locator('a:has-text("Sign in")').click();
    await page.waitForTimeout(10000);
}) 