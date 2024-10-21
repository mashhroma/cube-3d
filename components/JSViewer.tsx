import { prepareScene, loadGlb } from "js-3d-model-viewer";
import { useEffect, useRef } from "react";

const JSViewer = () => {
	const viewerRef = useRef(null);
	var opts = {
		grid: true,
		background: "#fff",
	};

	useEffect(() => {
		if (viewerRef.current) {
			const scene = prepareScene(viewerRef.current, opts);
			loadGlb(scene, "./assets/pl.glb");
		}
	}, [viewerRef.current]);

	return (
		<div
			ref={viewerRef}
			id="viewer"
			style={{ width: "50vw", height: "50vh", border: "1px solid grey" }}
		></div>
	);
};

export default JSViewer;
