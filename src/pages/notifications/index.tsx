import { useRouteContext } from "@/utils/RouteContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NotificationsPage = () => {
	const { goBack, navigationState } = useRouteContext()
	const router = useRouter()

	return (
		<div>
			<button type="button" onClick={() => goBack()}>
				Click here to go back
			</button>

			<h1>
				SettingsPage: {navigationState.hasNativeHistory ? "Has history" : "Empty history"}
			</h1>

			<Link href={`${router.asPath}/product/123456`}>Product Settings</Link>
		</div>
	);
};

export default NotificationsPage;
