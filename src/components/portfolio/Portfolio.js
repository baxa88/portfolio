import React from 'react';
import './Portfolio.css';
import IMG2 from '../../pages/portfolio2.jpg';
import IMG3 from '../../pages/portfolio3.jpg';
import IMG4 from '../../pages/portfolio4.jpg';
import IMG5 from '../../pages/portfolio5.png';
import IMG6 from '../../pages/portfolio6.jpg';
import IMG1 from '../../pages/portfolio1.jpg';

const data=[
    {
        id:1,
        image:IMG1,
        title:`Agro Olam o'simliklar haqida`,
        github:'https://github.com/baxa88/loyiha.git',
        demo:'https://agro-olam.netlify.app'
    },
    {
        id:2,
        image:IMG2,
        title:'Internet magazin ',
        github:'https://github.com/baxa88/Xcolor.git',
        demo:'https://xcolor-1.netlify.app'
    },
    {
        id:3,
        image:IMG3,
        title:'Youtube clone API',
        github:'https://github.com/baxa88/youtube-clone.git',
        demo:'https://youtube-clone-55.netlify.app'
    },
    {
        id:4,
        image:IMG4,
        title:'Matnni QR kodga aylantirish',
        github:'https://github.com/baxa88/QR-code.git',
        demo:'https://qr-kodni-skaner.netlify.app'
    },
    {
        id:5,
        image:IMG5,
        title:'Kino katalog API',
        github:'https://github.com/baxa88/kino-katalog.git',
        demo:'https://kino-katalog.netlify.app'
    },
    {
        id:6,
        image:IMG6,
        title:'Online chat ',
        github:'https://github.com/baxa88/realtime-chat.git',
        demo:'https://online-chatt.netlify.app'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
          <h5>Mening ishlarim</h5>
          <h2>Portfolio</h2>

          <div className='container portfolio__container'>
            {
           data.map(({id,image,title,github,demo})=>{
                    return(
                        <article key={id} className='portfolio__item'>
                        <div className='port'>
                            <div className='portfolio__item-image'>
                            <img src={image} alt={title}/>
                             </div>
                        </div>
                          <h3>{title}</h3>
                            <div className='portfolio__item-cta'>
                                 <a href={github} className='btn' >Github</a>
                      <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Hozir Ko'rish</a>
                            </div>                     
                   </article>
                    )                 
              })
             }  
          </div>
        </section>
    );
};

export default Portfolio;