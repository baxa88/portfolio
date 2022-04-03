import React from 'react';
import './Header.css';
import CTA from './CTA';

import HeaderSocials from './HeaderSocials';


const Header = () => {
    return (
       <header>
           <div className='container header__container'>
               <h5>Salom men </h5>
               <h1>Baxrom Mamasoliyev</h1>
               <h5 className='text-light'>Frontend Developerman</h5>
               <CTA/>
               <HeaderSocials/>
               <div className='me'>
                  
               </div>
               <a href='#contact' className='scroll__down'>Scroll Down</a>
           </div>
       </header>
    );
};

export default Header;