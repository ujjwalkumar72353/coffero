import React from 'react'
import aboutImg from '../../assets/about-img.jpg'
import {FiCheckSquare} from "react-icons/fi"
import './about.css'
const About = () => {
  return (
    <section className='about section' id='about'>
        <div className='about__grid container grid'>
          <div className='about__img-wrapper'>
             <img src={aboutImg} alt='' className='about__img'/>
          </div>
          <div className='about__content'>
              <h2 className='section__title title-left' data-title='About Us'>
                  Fresh Quality And Organic Tasty Coffee House For
                  You
              </h2>
              <p className='about__description'>
                There are many variations of passages of Lorem
                Ipsum available,but
                the majority have suffered alteration in some
                form,by injected
                humour, or randomised words which dont even look
                slightly
                believable.
              </p>
              <div className='about__details grid'>
                <p className='about__details-description'>
                    <FiCheckSquare className='about__details-icon'/>
                    At very good quality of coffee we have to provide.
                </p>
                <p className='about__details-description'>
                    <FiCheckSquare className='about__details-icon'/>
                    I take care of everything about the customer.
                </p>
                <p className='about__details-description'>
                    <FiCheckSquare className='about__details-icon'/>
                    I have to provide every type of coffee i amke sure.
                </p>
              </div>
               <a href='#team' className='btn'>
                Our Experts
               </a>
          </div>
        </div>
    </section>
  )
}

export default About