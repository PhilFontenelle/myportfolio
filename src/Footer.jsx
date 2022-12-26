import React from "react";


function Footer () {
    let date = new Date();
    const year = date.getFullYear()

    // const footer = (
    //   <em>Copyright {'\u00A9'} {year} Philbert</em> )

return (
    <p style={{
        position: 'absolute',
        textAlign: 'center',
        paddingbottom: 2,
        width: '100%',
        height: '2',
        top: 'auto'
  
      }}> <em>Copyright {'\u00A9'} {year} Philbert</em> </p>

)}



export default Footer;