import React from 'react';
import './App.css';
import Nav from './Nav.js';
import Hero from './Hero.js';
import Foot from './Foot.js';
import Price from './Price.js';
import Contact from './Contact.js';
import About from './About.js';
import ReactGA from 'react-ga';
// import { Helmet } from 'react-helmet';
// import Product from './Product.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  ReactGA.initialize('G-B0R7EGFP4D');

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Hero/>}></Route>
          <Route exact path='/pricing' element={<Price/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          {/* <Route exact path='/product' element={<Product/>}></Route> */}
        </Routes>
        <Foot/>
      </BrowserRouter>
    </>
  )
}

export default App;
