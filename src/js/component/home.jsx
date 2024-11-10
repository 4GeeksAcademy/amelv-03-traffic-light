import React, {useState} from "react";

//create your first component
const Home = () => {
	const [active, setActive] = useState("red")
	return (
		<div className="text-center">
			<div className={active == "red"?"red light glowRed":"red light"} onClick={() => setActive("red")}></div>
			<div className={active == "yellow"?"yellow light glowYellow":"yellow light"} onClick={() => setActive("yellow")}></div>
			<div className={active == "green"?"green light glowGreen":"green light"} onClick={() => setActive("green")}></div>

		</div>
	);
};

export default Home;
