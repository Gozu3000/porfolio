import React from 'react'
import Carrusel from './Carrusel'
// MdClose
import { MdClose } from 'react-icons/md';


const Modal = ({isopen, closeModal, datos}) => {

    const handleModalContainer = (e) => { if(e.target.className == 'modal_wrapper open') closeModal()}

  return (
    <div className={`modal_wrapper ${isopen && 'open'}` } onClick={handleModalContainer} >
        <div className='modal' >

            <div className='modal__container_slider section'>
                <Carrusel datos={datos} />
            </div>

            <div className='section section_datos'>
                <h4>{datos && datos.name} </h4>
                <p>{datos && datos.description}</p>

                <div>
                    <a href={datos && datos.link} target='_blank' className='button_visit'>Visitar sitio</a>
                    
                    <button className='button_close' onClick={closeModal}><MdClose size='2rem' /></button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Modal