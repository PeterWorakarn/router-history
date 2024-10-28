import "@/styles/globals.css";
import { RouteContextProvider } from "@/utils/RouteContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {

	return (
		<RouteContextProvider>
			<Component {...pageProps} />
		</RouteContextProvider>
	);
}
