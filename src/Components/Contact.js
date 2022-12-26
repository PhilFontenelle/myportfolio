import React from "react";

const git = "https://github.com/PhilFontenelle?tab=repositories"
const linked = "https://www.linkedin.com/in/philbert-fontenelle"

let mEmail = "ordell_p@hotmail.com";
let number = 4165090163;



function Contact(){

	const contact = (
		<>
		<h1> Contact info   </h1>
		<b><i>{mEmail}</i> </b>
		<em>{number}</em>
		</>
	)


	return(
	<div> 
		<h6>{contact}</h6>
	<h3>
		< a href={git} target="_blank">GitHub</a>
	</h3>

	<h3>
		<a href={linked} target="_blank">Linkedin</a>
	</h3>
	</div>
	)
}

export default Contact;