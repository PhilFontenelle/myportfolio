import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Collapse } from "react";
import {FiChevronDown as DownArrow,
	FiChevronUp as UpArrow} from 'react-icons/fi';
import { useToggle } from "react";



function BasicExample() {
	// const [expanded, , , toggle] = useToggle(false);
	const [expnd, setExpnd] = useState('false')	

	useEffect(()=>{
	
		if(expnd==='true'){
			

			const text=document.getElementById("hidText").hidden = false;
			//setExpnd('true')
			
		}
		else if(expnd==='false'){
			document.getElementById("hidText").hidden = true;
		//	setExpnd('false')
		}

	//	setExpnd('false')
	});
function handdleClick(icon){
	
	if(expnd==='true'){
			<icon/>
		document.getElementById("hidText").hidden = false;
		setExpnd('false');
		const d = document.getElementById("dowarrow").UpArrow ;

	}
	else if(expnd==='false'){
		document.getElementById("hidText").hidden = true;
		setExpnd('true')
	}
}
	return (



    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title><h1>Humber College</h1></Card.Title>
        <Card.Subtitle className="subHeading"><em><b>Sept 2017-2021</b></em></Card.Subtitle>
		{/* <Collapse collapsed={expnd} >
		<Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>	  
		  </Collapse> */}
		
		<Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
		<DownArrow id="dowarrow"
		
		onClick={()=> handdleClick()} //(expnd)?setExpnd('true'):setExpnd('fasle')}
		
		
		></DownArrow>
        
		<Button onClick={()=>setExpnd('false',<UpArrow/>)} 
		variant="primary">  <UpArrow rotation={45} />
		
		</Button>
		<Card.Text id="hidText"
			 >
          Testing
        </Card.Text>
		
      </Card.Body>
    
	
	</Card>
  );
}

const Education = () => (

<div>
	<BasicExample/>

	<h4>Humber College <em>Sept 2017-2021</em></h4>
	<p>Graduated from Advanced Diploma Course Computer Engineering Technology from Humber College, North Campus, Toronto, Ontario</p>
	<h4>Corinth Secondary School <em>Sept 2004 - Apr 2009</em></h4>
	<p>Completed CXC Certificate</p>
	</div>
	

);

export default Education;