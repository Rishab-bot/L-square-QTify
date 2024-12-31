import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as RightArrow } from "../../../assets/RightArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselRight.module.css";

const CarouselRight = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd); 
  
  useEffect(() => {
    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd); 
    };
    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]); 
  
  return (
    <div className={styles.rightNavigation}>
      {/* Only render the RightArrow if we're not at the end of the slides */}
      {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
  );
};

export default CarouselRight;
