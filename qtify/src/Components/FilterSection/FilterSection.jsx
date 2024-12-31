import React, { useEffect } from 'react'
import styles from "./FilterSection.module.css";
import Section from '../Section/Section.jsx';
import BasicTabs from '../BasicTabs/BasicTabs';
import Carousel from '../Carousel/Carousel.jsx';
import Card from '../Card/Card.jsx';
import { CircularProgress } from '@mui/material';

const FilterSection = ({type, title, value, filteredData, handleChangeIndex}) => {


  return (
    <div className={styles.wrapper}>
       
            <div className={styles.heading}>
               <h3>{title}</h3> 
            </div>
            <BasicTabs handleChangeIndex={handleChangeIndex}/>
        {filteredData.length?(
                <div className={styles.cardsWrapper}>
                    <Carousel data={filteredData} renderCardComponent={(filteredData)=><Card data={filteredData} type={type}/>}/>
                </div>
        ):(
            <div  className={styles.progressBar}>
                <CircularProgress/>
            </div>
        )}

    </div>
  )
}

export default FilterSection