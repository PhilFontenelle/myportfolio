import React from "react";

const linked = "www.linkedin.com/in/philbert-fontenelle/";
let mEmail = "ordell_p@hotmail.com";
let number = 4165090163;



function Contact(){
	const contact = () => {
		<div>
		<h1> Contact info   </h1>
		</div>
	}
	const git = "https://github.com/PhilFontenelle?tab=repositories";


	return(<div> 
<h3>
< a href='{git}' >GitHub</a>

</h3>
	</div>
	)
}

export default Contact;