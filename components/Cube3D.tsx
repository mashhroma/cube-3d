import React from "react";
import { useGLTF } from "@react-three/drei";

export const Cube3D = () => {
	const cube = useGLTF("./assets/pl.gltf");

	return (
		<mesh rotation={[0, 180, 0]}>
			<spotLight position={[-20, 50, 10]} />
			<pointLight intensity={1} />
			<primitive object={cube.scene} scale={0.5} position={[0, -3.25, -1.5]} />
		</mesh>
	);
};
