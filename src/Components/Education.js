import React,{ useState } from "react";
import Card from 'react-bootstrap/Card';
import { FiChevronDown as DownArrow } from 'react-icons/fi';
import img1 from './humber.jpg';
import img2 from './corinth.jpg';



function BasicExample() {
	// const [expanded, , , toggle] = useToggle(false);
	const [expnd, setExpnd] = useState("true")

	function handleCor() {
		if (expnd === 'true') {
			//	<icon/>
			document.getElementById("cortext").hidden = false;
			setExpnd('false');
			document.getElementById("dowarrow1")
				.style.transform = 'rotate(180deg)';
			// document.getElementById("dowarrow").innerHTML=<UpArrow/>;

		}
		else if (expnd === 'false') {
			document.getElementById("cortext").hidden = true;
			setExpnd('true')
			document.getElementById("dowarrow1")
				.style.transform = 'rotate(0deg)';
		}
	}
	function handleHumb() {

		if (expnd === 'true') {
			//<icon/>
			document.getElementById("humbertext").hidden = false;
			setExpnd('false');
			document.getElementById("dowarrow")
				.style.transform = 'rotate(180deg)';
			// document.getElementById("dowarrow").innerHTML=<UpArrow/>;

		}
		else if (expnd === 'false') {
			document.getElementById("humbertext").hidden = true;
			setExpnd('true')
			document.getElementById("dowarrow")
				.style.transform = 'rotate(0deg)';
		}
	}
	return (
		<>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={img1} alt="humber image" />
				<Card.Body>
					<Card.Title><h1>Humber College</h1></Card.Title>
					<Card.Subtitle className="subHeading"><em><b>Sept 2017- Sept 2021</b></em></Card.Subtitle>
					<Card.Text>
						Some quick text
					</Card.Text>
					<DownArrow id="dowarrow"
						onClick={() => handleHumb()}
					></DownArrow>
					<Card.Text id="humbertext"
						hidden>
						<p>Graduated from Advanced Diploma Course
							Computer Engineering Technology from Humber College,
							North Campus, Toronto, Ontario
						</p>
					</Card.Text>
				</Card.Body>
			</Card>

			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={img2} />
				<Card.Body>
					<Card.Title><h1>Corinth Secondary School</h1></Card.Title>
					<Card.Subtitle className="subHeading"><em><b>Sept 2004 - Apr 2009</b></em></Card.Subtitle>
					<DownArrow id="dowarrow1"
						onClick={() => handleCor()}
					></DownArrow>
					<Card.Text id="cortext"
						hidden>
						<p>Completed CXC Certificate</p>
					</Card.Text>
				</Card.Body>
			</Card>
		</>);
}

const Education = () => (

	<div>
		<BasicExample />


		<h4> <em></em></h4>

	</div>


);

export default Education;