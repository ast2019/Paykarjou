import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image'; 
import Mass from '../mass';

export default function Carousel() {
  return (
<div className="h-full bg-secondary font-sans relative">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate:30,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="my-12"
      >
      
        {[...Array(4).keys()].map(i => (
           <SwiperSlide key={i} style={{ width: '500px', height: '500px' }}>
         <Image 
  src={`/assets/images/${i + 1}.png`}  
  alt={`Nature ${i + 1}`} 
  width={300} 
  height={300} 
  className="block w-full"
/>
         </SwiperSlide>
        ))}
      </Swiper>
      <Mass className='absolute  z-10'/>
    </div>
  );
}