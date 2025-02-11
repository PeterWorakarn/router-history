import { getParentPath } from './route';

describe('getParentPath', () => {
	// Test basic functionality
	it('should return parent path for nested paths', () => {
		expect(getParentPath('/settings/product-settings')).toBe('/settings');
		expect(getParentPath('/settings/product-settings/me')).toBe('/settings/product-settings');
	});

	// Test handling of trailing slashes
	it('should handle trailing slashes correctly', () => {
		expect(getParentPath('/settings/product-settings/')).toBe('/settings');
		expect(getParentPath('/settings/product-settings/me/')).toBe('/settings/product-settings');
	});

	// Test root and near-root cases
	it('should handle root and near-root paths correctly', () => {
		expect(getParentPath('/settings')).toBe('/');
		expect(getParentPath('/settings/')).toBe('/');
		expect(getParentPath('/')).toBe('/');
	});

	// Test edge cases
	it('should handle edge cases properly', () => {
		expect(getParentPath('')).toBe('/');
		expect(getParentPath('/settings')).toBe('/');
		expect(getParentPath('/settings/products')).toBe('/settings');
	});

	// Test path with query param
	it('should handle path with query param properly', () => {
		expect(getParentPath('/settings/product/123456')).toBe('/settings');
		expect(getParentPath('/notifications/product/123456')).toBe('/notifications');
		expect(getParentPath('/notifications/123456/product/123456')).toBe('/notifications/123456');
		expect(getParentPath('/notifications/123456')).toBe('/');
	});

	// Test multiple nested levels
	it('should handle deeply nested paths correctly', () => {
		expect(getParentPath('/a/b/c/d')).toBe('/a/b/c');
		expect(getParentPath('/a/b/c/d/')).toBe('/a/b/c');
	});

	// Test paths with special characters
	it('should handle paths with special characters', () => {
		expect(getParentPath('/user-settings/profile-info')).toBe('/user-settings');
		expect(getParentPath('/settings/2023/12')).toBe('/settings/2023');
		expect(getParentPath('/users/@me/settings')).toBe('/users/@me');
	});
});