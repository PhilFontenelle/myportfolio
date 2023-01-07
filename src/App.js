import './App.css';
import { Link } from "react-router-dom";
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

function App() {
 
  
  return (
 

    <Router > 
      
      <>put inline and keep at top
      <Header/>
      <p style={{
      textAlign: "center"
    }}><Link to='/'>Home</Link></p>

      <p style={{
      textAlign: "center"
    }}

      ><Link to='/contact'>Contact</Link></p>

      <p style={{
      textAlign: "center"
    
    }}><Link to='/education'>Education</Link></p>

      <p style={{
      textAlign: "center"
    }}><Link to='/professional'>Professional</Link></p>
      <p style={{
      textAlign: "center"
      
    }}><Link to='/skills'>Skills</Link></p>
      

      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/professional' element={<Professional/>}></Route>
      <Route path='/skills' element={<Skills/>} ></Route> 
      </Routes>
</>
<Footer/>
    </Router>
);
}

export default App;
