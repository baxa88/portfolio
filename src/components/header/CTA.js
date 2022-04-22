import React from 'react';
import CV from '../../pages/cv.pdf';

const CTA = () => {
    return (
        <div className='cta' >
            <a href={CV} download className='btn'>Yuklash CV</a>
            <a href='#contact' className='btn btn-primary'>Keling gaplashamiz</a>
        </div>
    );
};

export default CTA;