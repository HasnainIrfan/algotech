import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Components/Navbar/Navbar';
import Process from './Pages/Process/Process';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import Product from './Pages/Products/Product';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import ColorChange from './Components/ColorChnage/ColorChange';
import Testimonial from './Pages/Testimonial/Testimonial';


function MyRouter() {
  const location = useLocation();
  const [color, setColor] = useState('');



  return (
    <>
      <AnimatePresence>
      <ColorChange color={color} setColor={setColor} />
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home color={color} setColor={setColor} />} />
          <Route path='/about' element={<About color={color} setColor={setColor}/>} />
          <Route path='/process' element={<Process color={color} setColor={setColor}/>} />
          <Route path='/contact' element={<Contact color={color} setColor={setColor}/>} />
          <Route path='/team' element={<Team color={color} setColor={setColor}/>} />
          <Route path='/product' element={<Product color={color} setColor={setColor}/>} />
          <Route path='/testimonial' element={<Testimonial color={color} setColor={setColor}/>} />
        </Routes>
        <Navbar color={color} setColor={setColor}/>
      </AnimatePresence>
    </>
  );
}

export default MyRouter;
