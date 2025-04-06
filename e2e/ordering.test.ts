import { expect, test, chromium  } from '@playwright/test';

test('renders complete node card information from mocked API', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    permissions: ['clipboard-read', 'clipboard-write'],
  });
  const page = await context.newPage();

  await page.route(
    'https://mempool.space/api/v1/lightning/nodes/rankings/connectivity',
    async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          {
            publicKey: '01864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f',
            alias: 'Item 1',
            channels: 10,
            capacity: 36010516297,
            firstSeen: 1522941222,
            updatedAt: 1661274935,
            "country": {
              "en": "United States",
              //"pt-BR": "EUA",
            },
            "iso_code": "US",
          },
          {
            publicKey: '01864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f',
            alias: 'Item 2',
            channels: 1,
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
  await expect(page.getByText('United States')).toBeVisible(); // country
  await expect(page.getByText('05/04/2018 às 12:13')).toBeVisible(); // firstSeen
  await expect(page.getByText('23/08/2022 às 14:15')).toBeVisible(); // updatedAt
  
  // testar clicar no botão de copiar
  await page.click('button.copy');
  await page.waitForTimeout(100);
  const clipboard = await page.evaluate(async () => {
    return await navigator.clipboard.readText();
  });
  expect(clipboard).toBe('03864ef025fde8fb587d989186ce6a4a186895ee44a926bfc370e2c366597a3f8f');
});
