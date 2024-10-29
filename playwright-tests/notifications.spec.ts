import { expect, test } from '@playwright/test';

test('navigate from / with button', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #2: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/notifications/123456")
	await page.getByRole('link', { name: 'go to product ID' }).click();
	await expect(page).toHaveURL("/notifications/123456/product/123456")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/notifications/123456")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});

test('navigate from / with back browser', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #2: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/notifications/123456")
	await page.getByRole('link', { name: 'go to product ID' }).click();
	await expect(page).toHaveURL("/notifications/123456/product/123456")
	await page.goBack()
	await expect(page).toHaveURL("/notifications/123456")
	await page.goBack()
	await expect(page).toHaveURL("/")
});

test('navigate from /notifications/product/123456 with button', async ({ page }) => {
	await page.goto('/notifications/123456/product/123456');
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/notifications/123456")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});