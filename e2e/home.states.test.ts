import { expect, test } from '@playwright/test';

test('renders node cards after successful API response', async ({ page }) => {
    await page.goto('/');

    // Verifica se renderizou 100 elementos com a classe cardnode
    await expect(page.locator('.cardnode')).toHaveCount(100);
});

test('displays loading skeleton while waiting for API response', async ({ page }) => {
    await page.route('https://mempool.space/api/v1/lightning/nodes/rankings/connectivity', async (route) => {
        await new Promise(resolve => setTimeout(resolve, 300000));
        await route.fulfill({ status: 400 });
    });

    await page.goto('/');

    await expect(page.getByTestId('skeleton').first()).toBeVisible();
});


test('shows error message when API returns an error', async ({ page }) => {
    await page.route('https://mempool.space/api/v1/lightning/nodes/rankings/connectivity', async (route) => {
        await route.fulfill({
            status: 400,
        })
    })

    await page.goto('/');

    const h2 = page.locator('h2', {
        hasText: 'Ocorreu um erro inesperado, recarregue a página.'
    })

    await expect(h2).toBeVisible();
});