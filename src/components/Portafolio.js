import React, {useState} from 'react'
import Modal from './Modal'
import { proyectos } from './proyectos'


const Portafolio = () => {

    const [isopen, setIsOpen] = useState(false)
    const [datos, setDatos] = useState(null)

    const openModal = () => {setIsOpen(!isopen)}
    const closeModal = () => {setIsOpen(false)}

  return (
    <div className='portafolio_wrapper'>

        <Modal isopen={isopen} closeModal={closeModal} datos={datos}/>

        <h2>Portafolio</h2>
        <div className='portafolio_container'>

        {proyectos.map((el,index)=>(
            <div key={index} className='carta_proyecto' style={{backgroundImage:`url(${el.images[0]})`}} >
                <div className='covertor'>
                    <h4>{el.name}</h4>
                    <p>{el.tecnology.join(' / ')}</p>  
                    <button onClick={()=>{openModal(); setDatos(el)}}>Ver más</button>
                </div>
            </div>
        ))}

        </div>
    </div>
  )
}

export default Portafolio