import { expect, test } from '@playwright/test';

test('renders complete node card information from mocked API', async ({ page }) => {
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

  await expect(page.getByText('03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8')).toBeVisible(); // public key
  await expect(page.getByText('ACINQ')).toBeVisible(); // alias
  await expect(page.getByText('Canais: 2.908')).toBeVisible(); // channels
  await expect(page.getByText('360,10516297')).toBeVisible(); // capacity
  await page.pause();
  await expect(page.getByText('United States')).toBeVisible(); // country
  await expect(page.getByText('05/04/2018 às 12:13')).toBeVisible(); // firstSeen
  await expect(page.getByText('23/08/2022 às 14:15')).toBeVisible(); // updatedAt
});
