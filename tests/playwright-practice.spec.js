import {test, expect} from '@playwright/test';

test('google practice', async ({page}) => {
    page.goto("https://www.google.com/");

    // pause for 3 seconds
    await page.waitForTimeout(3000);
});