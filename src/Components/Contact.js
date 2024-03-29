import React from "react";
import '../App.css';
import {
	FiGithub as Gits,
	FiPhone as Fone,
	FiLinkedin as Lkin,
	FiMail as Mail,
	FiHome as Mhome
} from "react-icons/fi";






function Contact() {

	const git = "https://github.com/PhilFontenelle?tab=repositories"
	const linked = "https://www.linkedin.com/in/philbert-fontenelle"
	let number = 4165090163;

	return (
		<div>


			<div id="container">
				<div className="Dot">
					<span id="dot"><Mail />

					</span>

					<b id="deco">Hotmail</b>
					<p><a id="deco" href="mailto:ordell_p@hotmail.com" >Hotmail</a></p>
				</div>

				<div className="Dot">
					<span id="dot"> <Lkin />
					</span>
					<b id="deco">LinkedIn</b>
					<p><a id=""
						href={linked}
						rel="noopener"
						target="_blank">Linkedin</a></p>
				</div>


				<div className="Dot">
					<span id="dot"> <Fone />
					</span>
					<div className="circle">

					</div>
					<b id="deco">Phone#</b>
					<p id="">{number}</p>
				</div>


				<div className="Dot">
					<span id="dot"> <Gits />
					</span>
					<b id="deco">Github</b>
					<p><a id=""
						href={git}
						rel="noopener"
						target="_blank">Github</a></p>
				</div>

				<div className="Dot">
					<span id="dot"><Mhome />
					</span>
					<b id="deco">Address</b>
					<p id="">Toronto</p>
				</div>



			</div>




		</div>
	)
}

export default Contact;