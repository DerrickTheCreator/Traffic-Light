import React, { useCallback, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import "./home.css";
//create your first component
export function Home() {
	const [trafficStatus, setTrafficStatus] = useState({
		redLight: "",
		yellowLight: "",
		greenLight: ""
	});
	const onMouseOver = useCallback(e => {
		console.log("onMouseOver");
        console.log(e.target.id);
        let redlight='';
        let yellowlight='';
        let greenlight='';

        switch(e.target.id) {
        case "redLight":
            redLight = "selected"
            break
        case "yellowLight":
            yellowLight= "selected"
            break
        case "greenLight":
            greenLight = "selected"
            break
        default:
        break

	};
	const redLight = `red light ${trafficStatus.redLight}`;
	const yellowLight = `yellow light ${trafficStatus.yellowLight}`;
	const greenLight = `green light ${trafficStatus.greenLight}`;
	return (
		<div>
			<div id="trafficlight"></div>
			<div id="container">
				<div
					id="redlight"
					className={redLight}
					onMouseOver={e => onMouseOver(e)}></div>
				<div
					id="yellowlight"
					className={yellowLight}
					onMouseOver={e => onMouseOver(e)}></div>
				<div
					id="greenlight"
					className={greenLight}
					onMouseOver={e => onMouseOver(e)}></div>
			</div>
		</div>
	);
}
