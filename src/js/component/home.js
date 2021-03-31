import React, { useCallback, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "./home.css";
//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	return (
		<div>
			<div id="trafficlight">
				<div
					id="redlight"
					className={color == "red" ? "redLight active" : "redLight"}
					onMouseOver={e => setColor("red")}></div>
				<div
					id="yellowlight"
					className={
						color == "yellow" ? "yellowLight active" : "yellowLight"
					}
					onMouseOver={e => setColor("yellow")}></div>
				<div
					id="greenlight"
					className={
						color == "green" ? "greenLight active" : "greenLight"
					}
					onMouseOver={e => setColor("green")}></div>
			</div>
		</div>
	);
}
