import { test, expect } from '@playwright/test';

test('verifica se o toggle-theme adiciona a classe no html', async ({ page }) => {
    await page.route(
        'https://mempool.space/api/v1/lightning/nodes/rankings/connectivity',
        async (route) => {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify([
                    {
                        publicKey: '03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f',
                        alias: 'ACINQ',
                        channels: 2908,
                        capacity: 36010516297,
                        firstSeen: 1522941222,
                        updatedAt: 1661274935,
                        "country": {
                            "en": "United States",
                            //"pt-BR": "EUA",
                        },
                        "iso_code": "US",
                    },
                ]),
            });
        }
    );

    await page.goto('/');

    let themeValue = await page.getAttribute('#toggle-theme', 'data-value');

    // invert the theme to get the nextclick value
    if (themeValue == 'dark') {
        themeValue = 'light';
    } else {
        themeValue = 'dark';
    }

    await page.click('#toggle-theme');

    await page.waitForTimeout(100);
    const htmlClass = await page.evaluate(() => {
        return document.documentElement.className;
    });

    expect(htmlClass).toContain(themeValue || '');

    themeValue = await page.getAttribute('#toggle-theme', 'data-value');

    // invert the theme to get the nextclick value
    if (themeValue == 'dark') {
        themeValue = 'light';
    } else {
        themeValue = 'dark';
    }

    await page.click('#toggle-theme');

    await page.waitForTimeout(100);
    const htmlClass2 = await page.evaluate(() => {
        return document.documentElement.className;
    });

    expect(htmlClass2).toContain(themeValue || '');
});