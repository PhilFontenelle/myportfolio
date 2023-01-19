import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"

function RandomQuotes(quotes){
    return quotes[Math.floor(Math.random()*quotes.length)];
    }

export default function Home () {
   

    const [quotes,SetQuotes]=useState([]);
    const [quote,SetQuote]=useState(null);  
    
    useEffect(()=>{
        ShowQuote()
    },[quotes])
    

    
 
    useEffect(()=>{

        fetch("../quotes.json")
        .then((res)=>res.json())
        .then((json)=>{
            SetQuotes(json);
            SetQuote(json[1]);
        });
     },[])

     function ShowQuote(){

        SetQuote(RandomQuotes(quotes))
    }


return(   
    
<div>
        

 <h1>My Portfolio </h1>
 <h2>Philbert Fontenelle </h2>    
<motion.div
//animate={{x:0, y:0, scale:1}}
drag //="x||y"
>
<section>
<button onClick={ShowQuote}>Random</button>
<h3 onClick={ShowQuote}>
    
    "{quote?.text}"
</h3>
<i>-{quote?.author}</i>
</section>
</motion.div>







</div>)
}

