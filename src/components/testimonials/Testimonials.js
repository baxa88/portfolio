import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../pages/avatar1.jpg';
import AVTR2 from '../../pages/avatar2.jpg';
import AVTR3 from '../../pages/avatar3.jpg';
import AVTR4 from '../../pages/avatar4.jpg';


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const data=[
  {
    avatar:AVTR1,
    name:'Tine Snow',
    review: `In this practical react js project tutorial, 
    I'm going to teach you, step-by-step, how 
    to create and deploy a fully responsive 
    personal portfolio website from scratch!
     By the end of this video, you will know how
      to create a react app from scratch`
  },
  {
    avatar:AVTR2,
    name:'Tine Snow',
    review: `In this practical react js project tutorial, 
    I'm going to teach you, step-by-step, how 
    to create and deploy a fully responsive 
    personal portfolio website from scratch!
     By the end of this video, you will know how
      to create a react app from scratch`
  },
  {
    avatar:AVTR3,
    name:'Tine Snow',
    review: `In this practical react js project tutorial, 
    I'm going to teach you, step-by-step, how 
    to create and deploy a fully responsive 
    personal portfolio website from scratch!
     By the end of this video, you will know how
      to create a react app from scratch`
  },
  {
    avatar:AVTR4,
    name:'Tine Snow',
    review: `In this practical react js project tutorial, 
    I'm going to teach you, step-by-step, how 
    to create and deploy a fully responsive 
    personal portfolio website from scratch!
     By the end of this video, you will know how
      to create a react app from scratch`
  },
]

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper id='testimonial' className='container testimonials_container'
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
      pagination={{ clickable: true }}>
    {
  data.map(({avatar,name,review},index)=>{
    return(
 <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
            <img src={avatar} alt={name}/>
           </div>
            <h5 className='client__name'>{name}</h5>
           <small className='client__review'>
           {review}
            </small>
        </SwiperSlide>
    )
  })
}
     </Swiper>
    </section>
  )
}

export default Testimonials