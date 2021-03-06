import React from 'react';
import Header from './components/header/Header.js';
import Nav from './components/nav/Nav.js';
import Experience from './components/experience/Experience.js';
import Portfolio from './components/portfolio/Portfolio.js';
import Testimonials from './components/testimonials/Testimonials.js';
import Contact from './components/contact/Contact.js';
import Footer from './components/footer/Footer.js';
import Animation from './components/animation/Animation';


const App = () => {

 
    return (
      <>
      
      <Animation/>
      <Header/>
      <Nav/>
      <Portfolio/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
       
 </>
         
    );
};
 

export default App;


// https://myportfolio-55.netlify.app