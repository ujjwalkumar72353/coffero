import React from 'react'
import chef1 from '../../assets/team-1.jpg'
import chef2 from '../../assets/team-2.jpg'
import chef3 from '../../assets/team-3.jpg'
import chef4 from '../../assets/team-4.jpg'

import{
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
}
from 'react-icons/fa';
import './team.css';
const Team = () => {
  return (
  <section className='team section' id='team'>
      <h2 className='section__title' data-title='Chefs'>
          Meet Our Experts
      </h2>
      <div className='team__grid grid container'>
      <div className='team__item'>
         <img src={chef1} alt='' className='team__img'/>

         <div className='team__data'>
           <h3 className='team__title'>Saurav Kumar</h3>
           <p className='team__Job'>Senior Chef</p>
         </div>

         <div className='team__socials'>
           <a href='/' className='team__social-link'>
             <FaFacebookF/>
           </a>
           <a href='/' className='team__social-link'>
             <FaTwitter/>
           </a>
           <a href='/' className='team__social-link'>
             <FaLinkedinIn/>
           </a>
           <a href='/' className='team__social-link'>
             <FaYoutube/>
           </a>
         </div>
      </div>
      <div className='team__item'>
         <img src={chef2} alt='' className='team__img'/>

         <div className='team__data'>
           <h3 className='team__title'>Ujjwal kumar</h3>
           <p className='team__Job'>Senior Chef</p>
         </div>

         <div className='team__socials'>
           <a href='/' className='team__social-link'>
             <FaFacebookF/>
           </a>
           <a href='/' className='team__social-link'>
             <FaTwitter/>
           </a>
           <a href='/' className='team__social-link'>
             <FaLinkedinIn/>
           </a>
           <a href='/' className='team__social-link'>
             <FaYoutube/>
           </a>
         </div>
      </div>
      <div className='team__item'>
         <img src={chef3} alt='' className='team__img'/>

         <div className='team__data'>
           <h3 className='team__title'>Anish Raj</h3>
           <p className='team__Job'>Senior Chef</p>
         </div>

         <div className='team__socials'>
           <a href='/' className='team__social-link'>
             <FaFacebookF/>
           </a>
           <a href='/' className='team__social-link'>
             <FaTwitter/>
           </a>
           <a href='/' className='team__social-link'>
             <FaLinkedinIn/>
           </a>
           <a href='/' className='team__social-link'>
             <FaYoutube/>
           </a>
         </div>
      </div>
      <div className='team__item'>
         <img src={chef4} alt='' className='team__img'/>

         <div className='team__data'>
           <h3 className='team__title'>Priyanshu Jayant</h3>
           <p className='team__Job'>Senior Chef</p>
         </div>

         <div className='team__socials'>
           <a href='/' className='team__social-link'>
             <FaFacebookF/>
           </a>
           <a href='/' className='team__social-link'>
             <FaTwitter/>
           </a>
           <a href='/' className='team__social-link'>
             <FaLinkedinIn/>
           </a>
           <a href='/' className='team__social-link'>
             <FaYoutube/>
           </a>
         </div>
      </div>
      </div>
  </section>
  )
}

export default Team