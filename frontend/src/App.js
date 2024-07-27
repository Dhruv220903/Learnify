import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact'; // Make sure to import Contact
// import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Course from './components/Course';
import Nav2 from './components/Nav2';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
  
      <Nav2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/course' element={<Course/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
