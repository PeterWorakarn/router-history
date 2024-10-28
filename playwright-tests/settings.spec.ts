import { expect, test } from '@playwright/test';

test('navigate from / with button', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #1: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/settings")
	await page.getByRole('link', { name: 'Product Settings' }).click();
	await expect(page).toHaveURL("/settings/product-settings")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/settings")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});

test('navigate from / with back browser', async ({ page }) => {
	await page.goto('/');
	await page.locator('li').filter({ hasText: 'Case #1: Link' }).getByRole('link').click();
	await expect(page).toHaveURL("/settings")
	await page.getByRole('link', { name: 'Product Settings' }).click();
	await expect(page).toHaveURL("/settings/product-settings")
	await page.goBack()
	await expect(page).toHaveURL("/settings")
	await page.goBack()
	await expect(page).toHaveURL("/")
});

test('navigate from /settings/product-settings with button', async ({ page }) => {
	await page.goto('/settings/product-settings');
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/settings")
	await page.getByRole('button', { name: 'Click here to go back' }).click();
	await expect(page).toHaveURL("/")
});