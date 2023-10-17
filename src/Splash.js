import React, { useEffect, useState } from "react";
import  App  from './App';
import {motion} from "framer-motion"




export default function Splash() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            // fetch("https://jsonplaceholder.typicode.com/posts")
            // .then((response)=>response.json())
            // .then((json)=>{
            //     setData(json);
            //     setDone(true);
            // })
            setIsLoading(false);
        }, 5000);
    }, []);


    // function onStart(){
    //     c=20
    //     c=c+20
    // }
    return isLoading ?
        <>
            <div className="App">
                <motion.h1
                    animate={{
                        x: [50, 150, 50],
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 2,
                        delay: 0.1,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}

                >
                    Welcome
                </motion.h1>
            </div>
            <div className="App">
                <motion.b
                    animate={{
                        x: [50, 150, 50],
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 3,
                        delay: 0.1,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}

                >
                    Welcome
                </motion.b>
            </div>
            <div className="App">
                <motion.p
                    animate={{
                        x: [50, 150, 50],
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 3,
                        delay: 0.1,
                        ease: [0.5, 0.71, 1, 1.5],
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}

                >
                    We
                </motion.p>
            </div>
            {/* <motion.div
            animate={{x:c}}
            onAnimationStart={onStart}>
            
            <PacmanLoader color={'#36D7B7'} isLoading={isLoading}
                   size={150}
                   motion
                   />
                     <span id="s1" isLoading={isLoading}
                        >Loading.....</span>
            
                <div src={img1} alt="img"></div>
                </motion.div> */}
        </>
        :
        <App />;


}
//export default Splash;