import React from "react";

const linked = "www.linkedin.com/in/philbert-fontenelle/";
let mEmail = "ordell_p@hotmail.com";
let number = 4165090163;



function Contact(){

	const contact =  <h1> Contact info   </h1>
	

	const git = "https://github.com/PhilFontenelle?tab=repositories"

	return(
	<div> 
		<h1>{contact}</h1>
	<h3>
		< a href={git} target="_blank">GitHub</a>
	</h3>
	</div>
	)
}

export default Contact;