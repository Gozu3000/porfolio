import {useState} from 'react'
import { HiMenu } from 'react-icons/hi';
import AcercaDe from './components/AcercaDe';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';
import Hero from './components/Hero';
import Colaboraciones from './components/Colaboraciones';

const App = () => {

    const [isOpen, setIsOpen] = useState(false)
    function openMenu(){ setIsOpen(!isOpen)}
    function closeMenu(){ setIsOpen(false)}

  return (
 
    <div className='home_wrapper'>

        <div className='navbar_wrapper' data-aos="fade-down" data-aos-duration="1500">
            <div className='navbar_wrapper__container_span_icon'>
                <div className= 'container_icon' onClick={openMenu} >   <HiMenu    size='2rem' />   </div>
                <div className={`container_span ${isOpen && 'open'}`} >
                    <a href='#acerca'           onClick={closeMenu}>Acerca de</a>
                    <a href='#portfolio'        onClick={closeMenu}>Portafolio</a>
                    <a href='#colaboraciones'   onClick={closeMenu}>Colaboraciones</a>
                    <a href='#contacto'         onClick={closeMenu}>Contacto</a>
                </div>
            </div>
        </div>

        <div id='acerca' data-aos="fade-right" data-aos-duration="1000">
            <AcercaDe />
        </div>

        <section id='portfolio' data-aos="fade-right" data-aos-duration="1000">
            <Portafolio />
        </section>


        <section id='colaboraciones' data-aos="fade-right" data-aos-duration="1000">
            <Colaboraciones />
        </section>


        <section id='contacto' data-aos="fade-right" data-aos-duration="1000">
            <Contacto />
        </section>

        <section  data-aos="fade-right" data-aos-duration="1000">
            <Hero />
        </section>

    </div>
  )
}

export default App