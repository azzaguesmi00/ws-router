import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Contact from './pages/Contact'; 
import Home from './pages/Home';
import Admin from './pages/Admin';
import Error from './pages/Error';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
  <div className='app'>
    <NavBar/>
 <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} /> {/* Example route */}
        <Route path="/*" element={<Error/>}/>
      </Routes>
    </Router>
    <Footer/>
   </div> 
   
  );
}

export default App;
