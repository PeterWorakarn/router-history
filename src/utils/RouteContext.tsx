import { useRouter } from "next/router"
import {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useState
} from "react"
import { getParentPath } from "./route"
import { usePathname } from "next/navigation"

type NavigationState = {
	hasNativeHistory?: boolean
}

const useInternalHook = () => {
	const router = useRouter()
	const pathname = usePathname();
	const [navigationState, setNavigationState] = useState<NavigationState>({
		hasNativeHistory: undefined
	})

	useEffect(() => {
		console.info(window.history)
		if (window.history.length > 2) {
			setNavigationState({
				...navigationState,
				hasNativeHistory: true
			})
		} else {
			setNavigationState({
				...navigationState,
				hasNativeHistory: false,
			})
		}
	}, [
		pathname
		// track change in next.js route
	])

	const goBack = () => {
		if (navigationState.hasNativeHistory) {
			router.back()
		} else {
			router.replace(getParentPath(router.asPath) ?? "")
		}
	}

	return {
		backAble: router.asPath !== "/",
		goBack,
		navigationState,
	}
}

export const RouteContext = createContext<
	ReturnType<typeof useInternalHook> | undefined
>(undefined)

export const useRouteContext = () => {
	const context = useContext(RouteContext)
	if (!context)
		throw new Error("useRouteContext must be used within a RouteContextProvider")
	return context
}

export const RouteContextProvider = (p: PropsWithChildren) => {
	const h = useInternalHook()
	return (
		<RouteContext.Provider value={h}>{p.children}</RouteContext.Provider>
	)
}
