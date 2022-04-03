import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {FaTwitter} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
     

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='#'><FaFacebook/></a>
        <a href='#'><FiInstagram/></a>
        <a href='#'><FaTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;Copyright 2022 Tashkent</small>
      </div>
    </footer>
  )
}

export default Footer