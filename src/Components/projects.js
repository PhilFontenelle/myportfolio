import React,{ useState } from 'react';
import ReactCardFlip from "react-card-flip";



function Proj() {
    const [flip, setFlip] = useState(false);
    const [flip1, setFlip1] = useState(false);
    const [flip2, setFlip2] = useState(false);

    const one_proj_front = (
        <>
            <h3>Attendance Application</h3>
            <h6>Technologies used:</h6>
            <p className='techHeading'>Java in Eclipse and Oracle11g </p>
        </>
    )
    const one_proj_back = (
        <>
            <p>Developed a Desktop Application for employees where they can view/apply or manage leaves, and the company can monitor the data in two different ways.
                Admin, Employees and Managers can log in to their respective accounts and manage the overall dataflow within the system which are handled by the CRUD operations working behind the scenes.
                <br /><br /><b><a href='https://github.com/PhilFontenelle/Attendance' target='_blank' >Github Link</a></b>
            </p>
        </>
    )
    const two_proj_front = (
        <>
            <h3>TicTacToe App</h3>
            <h6>Technology used:</h6>
            <p className='techHeading'>Java in Android Studio</p>
        </>
    )
    const two_proj_back = (
        <>
            <p>A fully functional basic Tic-tac-Toe App prepared in my initial Java learning days. This app boosted my Java coding skills enabling me to continue working on more complex projects.
                <br /><br /><b><a href='https://github.com/PhilFontenelle/TicTacToe' target='_blank' >Github Link</a></b>
            </p>
        </>
    )

    return (
        <>
            <ReactCardFlip isFlipped={flip}
                flipDirection="horizontal">
                <div style={{
                    width: '40%',
                    height: '40%',
                    background: '#d7fbda',
                    fontSize: '200%',
                    color: 'green',
                    margin: '10%',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    {one_proj_front}
                    <br />
                    <button style={{
                        // width: '150px',
                        // padding: '10px',
                        // fontSize: '20px',
                        // background: '#f5d9fa',
                        // fontWeight: 'bold',
                        // borderRadius: '5px'
                    }} onClick={() => setFlip(!flip)}>
                        See more</button>
                </div>
                <div style={{
                    width: '40%',
                    height: '40%',
                    background: '#fbd7f8',
                    fontSize: '150%',
                    color: 'blue',
                    margin: '10%',
                    borderRadius: '4px',
                    textAlign: 'center',
                    padding: '20px'
                }}>
                    {one_proj_back}
                    <br />
                    <button style={{
                        // width: '150px',
                        // padding: '10px',
                        //fontSize: '20%',
                        // background: '#f5d9fa',
                        // fontWeight: 'bold',
                        // borderRadius: '5px'
                    }} onClick={() => setFlip(!flip)}>
                        See Less</button>
                </div>
            </ReactCardFlip>
            <br /><br />
            <ReactCardFlip isFlipped={flip1}
                flipDirection="vertical">
                <div  //onClick={() => setFlip1(!flip1)}
                    style={{
                        width: '60%',
                        height: '40%',
                        background: '#d7fbda',
                        fontSize: '40px',
                        color: 'green',
                        margin: '20px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: '20px'
                    }}>
                    {two_proj_front}
                    <br />
                    <br />
                    <button style={{
                        // width: '150px',
                        // padding: '10px',
                        // fontSize: '20px',
                        // background: '#f5d9fa',
                        // fontWeight: 'bold',
                        // borderRadius: '5px'
                    }} onClick={() => setFlip1(!flip1)}>
                        See More</button>
                </div>
                <div  //onClick={() => setFlip1(!flip1)} 
                    style={{
                        width: '60%',
                        height: '40%',
                        background: '#d7fbda',
                        fontSize: '90%',
                        color: 'blue',
                        margin: '20px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: '20px'
                    }}>
                    {two_proj_back}
                    <br />
                    <button style={{
                        // width: '150px',
                        // padding: '10px',
                        // fontSize: '20px',
                        // background: '#f5d9fa',
                        // fontWeight: 'bold',
                        // borderRadius: '5px'
                    }} onClick={() => setFlip1(!flip1)}>
                        See Less</button>
                </div>
            </ReactCardFlip>
            <ReactCardFlip isFlipped={flip2}
                flipDirection="vertical">
                <div onClick={() => setFlip2(!flip2)}
                    style={{
                        width: '300px',
                        height: '200px',
                        background: '#d7fbda',
                        fontSize: '40px',
                        color: 'green',
                        margin: '20px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: '20px'
                    }}>
                    <em>hi</em>
                    <br />
                    <br />
                    {/* <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }}  onClick={() => setFlip1(!flip1)}>
                    Flip</button> */}
                </div>
                <div onClick={() => setFlip2(!flip2)}
                    style={{
                        width: '300px',
                        height: '200px',
                        background: '#fbd7f8',
                        fontSize: '40px',
                        color: 'blue',
                        margin: '20px',
                        borderRadius: '4px',
                        textAlign: 'center',
                        padding: '20px'
                    }}>
                    Computer Science Portal.
                    <br />
                    {/* <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => setFlip1(!flip1)}>
                    Flip</button> */}
                </div>
            </ReactCardFlip>


        </>
    );
}

export default Proj;