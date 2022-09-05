import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import { AnimatePresence } from 'framer-motion';


const AnimatedRoute = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/process' element={<Process />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/team' element={<Team />} />
                <Route path='/product' element={<Product />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoute