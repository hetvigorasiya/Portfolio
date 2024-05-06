import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Component/Global/Navbar/Navbar';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/Home/AboutUs';
import Projects from './Pages/Home/Projects';
import Blog from './Pages/Home/Blog';
import Resume from './Pages/Home/Resume';
import Contact from './Pages/Home/Contact';
import Services from './Pages/Home/Services';
import Footer from './Component/Global/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/about' element={<AboutUs />} />
             <Route path='/resume' element={<Resume />} />
             <Route path='/services' element={<Services />} />
             <Route path='/projects' element={<Projects />} />
             <Route path='/myblogs' element={<Blog />} />
             <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
