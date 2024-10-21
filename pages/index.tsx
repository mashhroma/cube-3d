import CanvasBlock from "@/components/CanvasBlock";
import { Cube3D } from "@/components/Cube3D";
import JSViewer from "@/components/JSViewer";

export default function Home() {
	return (
		<div>
			<CanvasBlock>
				<Cube3D />
			</CanvasBlock>

			<JSViewer />
		</div>
	);
}
