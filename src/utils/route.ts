export const getParentPath = (path: string) => {
	if (!path || path === '/') return '/';

	// Remove trailing slash and get parent path
	const normalizedPath = path.replace(/\/$/, '');
	const parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('/'));

	return parentPath || '/';
}