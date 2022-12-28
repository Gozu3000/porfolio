import React from 'react'
import { FaMobileAlt, FaSass } from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { AiFillThunderbolt } from 'react-icons/ai';
import { SiMysql, SiMaterialui, SiRedux } from 'react-icons/si';
import { IoIosRocket, IoLogoNodejs } from 'react-icons/io';

import useMediaQuery from './useMediaQuery.js'

const AcercaDe = () => {

    const matches = useMediaQuery("(max-width: 630px)");

  return (
    <section className='acerca_wrapper' >

        <h2>Acerca de mí</h2>

        <div className='acerca_wrapper__quien_soy'>
            <h3>¿Quién soy?</h3>
            <div className='perfil_container'>
                <img src="https://scontent.flim19-1.fna.fbcdn.net/v/t1.18169-9/17626384_100229067192303_828325239471773154_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U_7XZCP5Er4AX9nGUVR&_nc_ht=scontent.flim19-1.fna&oh=00_AfBImp5mE4CdoDLXqZmFyxT65LZzzu0gVbSCl7PaY_-Axw&oe=63D03D25" alt="img" />
                <p>Soy desarrollador front-end. Tengo una gran pasión por seguir aprendiendo tecnologías. Me gusta hacer aplicaciones web dinámicas e intuitivas como esta.<br />¡Hagamos algo especial 😃!</p>
            </div>
        </div>

        <div className='acerca_wrapper__preferencias'>
            <h3>Preferencias</h3>
            <div className='icon_container'>

                {
                    matches ?
                    <> 
                        <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="0" >
                            <span>
                                <FaMobileAlt size='5rem' color='#434244'/>
                            </span>
                            <p>Mi código funcionarán en cualquier dispositivo, grande o pequeño.</p>

                        </div>

                        <div data-aos="flip-right" data-aos-duration="1500" >
                            <span>
                                <IoIosRocket size='5rem' color='#C0392B'/>
                            </span>
                            <p>Hagamos páginas web dinámicas.</p>
        
                        </div>
        
                        <div data-aos="flip-right" data-aos-duration="1500" >
                            <span>
                                <AiFillThunderbolt size='5rem' color='#F4D03F'/>
                            </span>
                            <p>Tiempos de carga rápidos e interacción sin demoras.</p>
                        </div>
                    </>
                    :
                    (
                        <> 
                            <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="0" >
                                <span>
                                    <FaMobileAlt size='5rem' color='#434244'/>
                                </span>
                                <p>Mi código funcionarán en cualquier dispositivo, grande o pequeño.</p>
        
                            </div>
        
                            <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="500">
                                <span>
                                    <IoIosRocket size='5rem' color='#C0392B'/>
                                </span>
                                <p>Hagamos páginas web dinámicas.</p>
            
                            </div>
            
                            <div data-aos="flip-right" data-aos-duration="1000" data-aos-delay="1000">
                                <span>
                                    <AiFillThunderbolt size='5rem' color='#F4D03F'/>
                                </span>
                                <p>Tiempos de carga rápidos e interacción sin demoras.</p>
                            </div>
                        </>
                    )
                }


            </div>
        </div>



        <div className='acerca_wrapper__tecnologias' data-aos="fade-right" data-aos-duration="1000">   
            <h3>Tecnologías</h3>
            <div className='icon_container'>
                <DiReact          size='5rem' color='#61DBFB'/>
                <FaSass           size='5rem' color='#CD6799'/>
                <IoLogoNodejs     size='5rem' color='#3c873a'/>
                <SiMysql          size='5rem' color='#00758F'/>
                <SiMaterialui     size='5rem' color='blue'/>
                <SiRedux          size='5rem' color='#764abc'/>
            </div>
        </div>

    </section>
  )
}

export default AcercaDe