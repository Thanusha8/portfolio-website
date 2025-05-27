import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="About">
        <h2 className={styles.title} >About Me</h2>
        <div className={styles.content}>
            
            <ul className={styles.aboutItems}>
               

                <li className={styles.aboutItem}>
                    
                    <div className={styles.aboutItemText}>
                        <h3>Hi, I’m Thanusha. Nice to meet you.</h3>
                        <p>As a Data Science student at ICBT Campus (Cardiff Metropolitan University, UK), I’ve always loved how math and science explain the world. 
                            Now I use that curiosity to find meaning in data, where every pattern tells a story.</p>
                    </div>
                </li>

               
            </ul>

        </div>
    </section>
  )
}

export default About
