import './App.css';
import React from 'react';
import { Link } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { BrowserRouter as Router,
  Route,
  Routes } from 'react-router-dom';
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Professional from "./Components/Professional";
import Skills from "./Components/Skills";
import Home from './Components/Home';
import Footer from './Footer';
import Header from './Header';
import Proj from './Components/projects';


export  const App = () =>{


return(
  <HashRouter>   
      <Header />


      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>
        <Link to='/'>Home</Link></p>

      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>
        <Link to='/contact'>Contact</Link></p>

      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>      <Link to='/education'>Education</Link></p>
      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>
        <Link to='/professional'>Professional</Link>
      </p>

      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>    <Link to='/skills'>Skills</Link>

      </p>

      <p style={{
        position: "center",
        display: "inline-block",
        paddingLeft: "10%"
      }}>
        <Link to='/proj'>Proj</Link>
      </p>


      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='/professional' element={<Professional />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/Proj' element={<Proj />}></Route>
      </Routes>
   
    <Footer />
  </HashRouter>
    
);
}


export default App () ;
