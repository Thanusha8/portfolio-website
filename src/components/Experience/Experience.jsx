import React from "react";

import styles from "./Experience.module.css";


import { getImageUrl } from "../../utils";



const Experience = () => {
  return (
    <section className={styles.container} id="Testimolinals">
      <h2 className={styles.title}>Testimolinals</h2>
      <p className={styles.description}>People I’ve worked with have shared some nice things...</p>

      

        <div className={styles.testimonials}>                                         
          
               <div  className={styles.testimonial}>
                <div className={styles.testimonialImageContainer}>
                 <img src={getImageUrl("skills/html.png")}></img>
                 </div>
                <p className={styles.testimonialName}>Somapala - ABC company</p>
                <p className={styles.testimonialDescription}>"This is a project made to learn the latest languages by building an app."</p>
              </div>

              <div  className={styles.testimonial}>
              <div className={styles.testimonialImageContainer}>
                 <img src={getImageUrl("skills/html.png")}></img>
                 </div>
                <p className={styles.testimonialName}>Siripala - BDD company</p>
                <p className={styles.testimonialDescription}>"This is a project made to learn the latest languages by building an app."</p>
              </div>
          
        </div>
      
    </section>
  );
};

export default Experience