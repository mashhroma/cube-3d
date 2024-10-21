import { prepareScene, loadGlb } from "js-3d-model-viewer";
import { useEffect, useRef } from "react";

const JSViewer = () => {
	const viewerRef = useRef(null);

	useEffect(() => {
		if (viewerRef.current) {
			const opts = {
				grid: true,
				background: "#fff",
			};

			const scene = prepareScene(viewerRef.current, opts);
			loadGlb(scene, "./assets/pl.glb");
		}
	}, []);

	return (
		<div
			ref={viewerRef}
			id="viewer"
			style={{ width: "48vw", height: "48vh", border: "1px solid grey" }}
		></div>
	);
};

export default JSViewer;
