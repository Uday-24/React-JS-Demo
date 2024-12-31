import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar/>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
