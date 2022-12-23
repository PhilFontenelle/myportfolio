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


function App() {
  
  
  return (

    <Router> 
      <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/education'>Education</Link></li>
      <li><Link to='/professional'>Professional</Link></li>
      <li><Link to='/skills'>Skills</Link></li>
      </ul>

      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/professional' element={<Professional/>}></Route>
      <Route path='/skills' element={<Skills/>} ></Route> 
      </Routes>

    </Router>
  
  
  );
}

export default App;
