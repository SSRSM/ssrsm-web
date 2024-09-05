import { useEffect, useState } from "react";

import { ReactFlowProps } from "@xyflow/react";

import useWindowDimensions from "@/hooks/use-window-dimensions";

function getZoomLevel(width: number) {
	if (width > 700)
		return 1;
	else if (width > 600)
		return 0.9;
	else if (width > 500)
		return 0.8;
	else
		return 0.6;
}

function getXY(width: number) {
	let xy = { x: 0, y: 0 };
	if (width > 700)
		xy = { x: 350, y: 200 };
	else if (width > 600)
		xy = { x: 300, y: 200 };
	else if (width > 500)
		xy = { x: 250, y: 200 };
	else
		xy = { x: 180, y: 200 };

	if (width < 640) {
		xy = { x: xy.x, y: xy.y - 50 };
	}

	return xy;
}

export function useStructureViewport(): {
	viewport: ReactFlowProps['viewport'];
	setViewport: React.Dispatch<React.SetStateAction<ReactFlowProps['viewport']>>;
} {
	const windowDimensions = useWindowDimensions();

	const [viewport, setViewport] = useState<ReactFlowProps['viewport']>({
		zoom: getZoomLevel(windowDimensions.width),
		...getXY(windowDimensions.width),
	});

	useEffect(() => {
		setViewport({
			zoom: getZoomLevel(windowDimensions.width),
			...getXY(windowDimensions.width),
		});
	}, [windowDimensions]);

	return {
		viewport,
		setViewport,
	};
}