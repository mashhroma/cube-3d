import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const CanvasBlock = ({ children }: { children: React.ReactNode }) => {
	return (
		<div style={{ width: "50vw", height: "50vh", border: "1px solid grey" }}>
			<Canvas shadows camera={{ position: [0.2, 0.2, 0.3], fov: 1 }}>
				<OrbitControls />
				<Stage>{children}</Stage>
			</Canvas>
		</div>
	);
};

export default CanvasBlock;
