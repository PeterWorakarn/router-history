import { useRouteContext } from "@/utils/RouteContext";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export default function Home() {
	const { goBack, navigationState, backAble } = useRouteContext()

	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
		>
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				{backAble && (
					<button type="button" onClick={() => goBack()}>
						Click here to go back
					</button>
				)}
				<h1>Router History: {navigationState.hasNativeHistory ? "Has history" : "Empty history"}</h1>
				<ol className="list-disc">
					<li>Case #1: <Link href={"/settings"}>Link</Link></li>
					<li>Case #2 <Link href={"/notifications"}>Link</Link></li>
				</ol>
			</main>
		</div>
	);
}
