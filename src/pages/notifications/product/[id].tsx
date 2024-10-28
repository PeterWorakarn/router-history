import { useRouter } from "next/router";
import React from "react";

export default function ProductPage() {
	const router = useRouter()
	return <div>ProductPage: {router.query.id}</div>;
};
