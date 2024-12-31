import React, { useEffect } from 'react';

import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import CarouselLeft from './CarouselLeft/CarouselLeft';
import CarouselRight from "./CarouselRight/CarouselRight";
import { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "./Carousel.module.css";

const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        swiper.slideTo(0,1)
    },[data])

    return <>
    
    </>
}

const Carousel = ({data,renderCardComponent}) => {
  return (

    <div className={styles.wrapper}>
    <Swiper
        initialSlide={0}
        spaceBetween={40}
        slidesPerView={"auto"}
         modules={[Navigation]}
         allowTouchMove
        >
        <Controls data={data}/>
            <CarouselLeft />
         <CarouselRight />
      {data.map((item, index) => (
        <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
      ))}
       
    </Swiper>
    </div>
  )
}

export default Carousel;