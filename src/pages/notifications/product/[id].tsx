import { useRouteContext } from "@/utils/RouteContext";
import { useRouter } from "next/router";
import React from "react";

export default function ProductPage() {
	const { goBack, navigationState } = useRouteContext()

	const router = useRouter()
	return (
		<div>
			<button type="button" onClick={() => goBack()}>
				Click here to go back
			</button>
			<h1>
				ProductPage: {router.query.id} : {navigationState.hasNativeHistory ? "Has history" : "Empty history"}
			</h1>
		</div>
	);
};
