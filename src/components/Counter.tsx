"use client";

import { useState } from "react";

export default function Counter() {
	console.log("coucou from counter");
	const [nb, setNb] = useState(0);
	return (
		<button
			type="button"
			onClick={() => {
				setNb(nb + 1);
			}}
		>
			{nb} ❤️
		</button>
	);
}
