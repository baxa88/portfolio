import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiTelegramLine} from 'react-icons/ri';

import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form=useRef();

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_kuxfe9o','template_eetneyn',form.current,'4kEDLQF5nVK_MyADh')
       e.target.reset()
    }
    return (
        <section id='contact'>
           <h5>Aloqaga chiqish</h5>
           <h2>Mening kontaktim</h2>

           <div className='container contact__container'>
               <div className='contact__options'>
                   <article className='contact__option'>
                       <MdOutlineEmail className='contact__option-icon'/>
                       <h4>Email</h4>
                       <h5>mamasolibaxromjon@gmail.com</h5>
                       <a href='https://mail.google.com/'>Habar yuborish</a>
                   </article>
                   <article className='contact__option'>
                       <RiTelegramLine className='contact__option-icon'/>
                       <h4>Messenger</h4>
                       <h5>@baxrom_88_55</h5>
                       <a href='/#' >Habar yuborish</a>
                   </article>
                  
               </div>
               <form ref={form} onSubmit={sendEmail}>
                   <input type='text' name='name' placeholder='Sizning ismingiz' required/>
                   <input type='email' name='email' placeholder='Sizning email pochtangiz' required/>
                   <textarea name='message' rows='7' placeholder='Habarni yozing' required></textarea>
                   <button type='submit' className='btn btn-primary'>Habar yuborish</button>
               </form>
           </div>
        </section>
    );
};

export default Contact;