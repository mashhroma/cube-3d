import CanvasBlock from "@/components/CanvasBlock";
import { Cube3D } from "@/components/Cube3D";
import JSViewer from "@/components/JSViewer";

export default function Home() {
	return (
		<div className="container">
			<div>
				<h3>Библиотеки fiber для react</h3>
				<CanvasBlock>
					<Cube3D />
				</CanvasBlock>
			</div>

			<div>
				<h3>Библиотеки js-3d-model-viewer</h3>
				<JSViewer />
			</div>
		</div>
	);
}
