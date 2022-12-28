import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Carrusel({datos}){

  return (

    <Swiper className='swiper'  
        // install Swiper modules
        modules={[Navigation, Pagination, ]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >

        {datos && datos.images.map((el, index)=>( 
            <SwiperSlide className='slide' key={index}>
                <img src={el} alt="imagen" />
            </SwiperSlide>
        ))}

    </Swiper>
  )
}









