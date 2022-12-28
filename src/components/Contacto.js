import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

const Contacto = () => {
  return (
    <section className='contacto_wrapper'>
        <h2>Mis redes</h2>

        <div>
            <a href='https://www.linkedin.com/in/erick-s%C3%A1nchez-correa/' target='_blank'>
                <span><BsLinkedin  color='#0e76a8'   size='3rem' /> </span>
                <span>LinkedIn</span>
            </a>
                
            <a href='https://github.com/Gozu3000' target='_blank'>
                <span><BsGithub   color='black'  size='3rem' /> </span> 
                <span>GitHub</span>
            </a>
            
            <a>
                <span><SiGmail    color='#BB001B'  size='3rem' /> </span> 
                <span>erick.sanchezcorrea@gmail.com</span>
            </a>
        </div>
            
    </section>
  )
}

export default Contacto