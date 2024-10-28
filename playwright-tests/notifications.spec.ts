import { expect, test } from '@playwright/test';

test('navigate from / with button', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #2: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/notifications")
	await page.getByRole('link', { name: 'Product Settings' }).click();
	await expect(page).toHaveURL("/notifications/product/123456")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/notifications")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});

test('navigate from / with back browser', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #2: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/notifications")
	await page.getByRole('link', { name: 'Product Settings' }).click();
	await expect(page).toHaveURL("/notifications/product/123456")
	await page.goBack()
	await expect(page).toHaveURL("/notifications")
	await page.goBack()
	await expect(page).toHaveURL("/")
});

test.skip('navigate from /notifications/product/123456 with button', async ({ page }) => {
	await page.goto('/notifications/product/123456');
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/notifications")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});