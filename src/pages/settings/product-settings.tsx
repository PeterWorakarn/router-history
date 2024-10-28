"use client"
import { useRouteContext } from "@/utils/RouteContext";
import { useRouter } from "next/router";
import React, { } from "react";

const ProductSettings = () => {
	const { goBack, navigationState } = useRouteContext()
	const router = useRouter()

	return (
		<div>
			<button type="button" onClick={() => goBack()}>
				Click here to go back
			</button>
			<h1>
				ProductSettings: {navigationState.hasNativeHistory ? "Has history" : "Empty history"}
			</h1>
			<button type="button" onClick={() => window.open(router.asPath, "_blank")}>
				Open new Tab
			</button>
		</div >
	);
};

export default ProductSettings;
