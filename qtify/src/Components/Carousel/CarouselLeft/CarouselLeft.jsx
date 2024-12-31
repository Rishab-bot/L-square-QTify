import React, { useEffect, useState, useRef } from 'react';
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselLeft.module.css";

const CarouselLeft = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning); 
  
  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning); 
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]); 
  
  return (
    <div className={styles.leftNavigation}>
      {/* Only render the LeftArrow if we're not at the beginning of the slides */}
      {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeft;
