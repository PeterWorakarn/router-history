const stackPath = [
	"product",
	"notifications"
]


const extractDynamicRoute = (pathArr: string[]) => {
	// Check if last segment matches the pattern "product/:id"
	const isDynamicRoute = pathArr.length >= 2 ? (stackPath.includes(pathArr[pathArr.length - 2])) : false

	if (isDynamicRoute) {
		// If it matches, remove the last segment and return the parent path
		return true
	}
	return false
}

export const getParentPath = (path: string) => {
	if (!path || path === '/') return '/';

	// Remove trailing slash and get parent path
	const normalizedPath = path.replace(/\/$/, '');
	const pathInArray = normalizedPath.split("/")

	if (extractDynamicRoute(pathInArray)) {
		// If it matches, remove the last segment and return the parent path
		return pathInArray.slice(0, -2).join("/") || "/"
	}


	// Get parentPath
	const parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('/'));

	return parentPath || '/';
}