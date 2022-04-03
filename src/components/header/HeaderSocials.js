import React from 'react';
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='/'><BsLinkedin/></a>
            <a href='/' ><FaGithub/></a>
            <a href='/'><FiDribbble/></a>
        </div>
    );
};

export default HeaderSocials;