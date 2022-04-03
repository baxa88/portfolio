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
        github:'',
        demo:'https://agro-olam.netlify.app'
    },
    {
        id:2,
        image:IMG2,
        title:'Internet magazin ',
        github:'',
        demo:'https://xcolor-1.netlify.app'
    },
    {
        id:3,
        image:IMG3,
        title:'Youtube clone api',
        github:'',
        demo:'https://polite-haupia-e40cf2.netlify.app'
    },
    {
        id:4,
        image:IMG4,
        title:'Tayyorlanmoqda...',
        github:'',
        demo:''
    },
    {
        id:5,
        image:IMG5,
        title:'Tayyorlanmoqda...',
        github:'',
        demo:''
    },
    {
        id:6,
        image:IMG6,
        title:'Tayyorlanmoqda...',
        github:'',
        demo:''
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
          <h5>My Recent Work </h5>
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
                      <a href={demo} className='btn btn-primary' >Live Demo</a>
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