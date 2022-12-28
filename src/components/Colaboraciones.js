import React from 'react'
import Sisi from '../images/sisi.jpg'

const Colaboraciones = () => {
  return (
    <div className='colaboraciones_wrapper'>
        <h2>Colaboraciones</h2>
        <div className='colaboraciones_wrapper__section'>
            <figure>
                <img src={Sisi} alt="Sisi" />
                <figcaption>Sisi</figcaption>
            </figure>
            <div className='datos'>
                <h3>Desarrollador front-end</h3>
                <p className='puesto'>Freenlance</p>
                <p>Parte del equipo de programadores de front para la elaboración y entrega de maquetación de las vistas e integración back end.</p>
            </div>
        </div>

    </div>
  )
}

export default Colaboraciones