import React from 'react';
import styles from "./Hero.module.css";

import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>

      <div className={styles.content}>

        <div className={styles.description1} >
             <p >Data into visual stories</p> 
             <p1>--I give them a voice </p1>
        </div>

         <div className={styles.heroImgLeft}>
            <img src={getImageUrl("hero/heroImageLeft.png")}  alt='My hero image' ></img> 
        </div>

             
          <div className={styles.heroImgRight}>
            <img src={getImageUrl("hero/heroImageRight.png")} alt='My hero image' ></img> 
          </div>

          <div className={styles.description2}>
            <p>Solutions through logic</p>
            <p1>--patterns lead my way.</p1>
          </div>
     </div>
    </section>
  );
};
