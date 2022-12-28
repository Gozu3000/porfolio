import React, {useState} from 'react'
import { HiMenu } from 'react-icons/hi';
import AcercaDe from './AcercaDe';
import Portafolio from './Portafolio';
import Contacto from './Contacto';
import Hero from './Hero';


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    function openMenu(){ setIsOpen(!isOpen)}

  return (
    
    <div className='home_wrapper'>

        <div className='navbar_wrapper'>
            <div className='navbar_wrapper__container_span_icon'>
                <div className= 'container_icon' onClick={openMenu} >   <HiMenu    size='2rem' />   </div>
                <div className={`container_span ${isOpen && 'open'}`} >
                    <a href='#acerca'>Acerca de</a>
                    <a href='#portfolio'>Portafolio</a>
                    <a href='#contacto'>Contacto</a>
                </div>
            </div>
        </div>

        <div id='acerca'>
            <AcercaDe />
        </div>

        <section id='portfolio'>
            <Portafolio />
        </section>


        <section id='contacto'>
            <Contacto />
        </section>

        <Hero />

    </div>
  )
}

export default Home