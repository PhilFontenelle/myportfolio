import React from "react";


function Header (props) {

return (

<div>

    <svg
 
        style={{width:'100%',
                transform : 'rotate(180deg)',
                zIndex:'1'}} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320">

        <defs>

         <linearGradient id="grad1"
         >

         <p id="footer"> <em><b>Copyright {'\u00A9'}  Philbert</b></em> </p>

         <stop offset="0%" 
        style={{stopColor:('#a7e9faed'),
        }} />

        <stop offset="100%" 
        style={{stopColor:('#0d98ba'),
        }} />

         </linearGradient>

        </defs>    

        <path fill="url(#grad1)"  
         d="M0,256L48,261.3C96,267,192,277,288,245.3C384,213,480,139,576,112C672,85,768,107,864,138.7C960,171,1056,213,1152,197.3C1248,181,1344,107,1392,69.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>

    </svg>

</div>
)}



export default Header;