import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
  <footer className={styles.container} id='Contact'>
    
    <div  className={styles.text}>
        <h2>Send me a message!</h2>
        <p>Got a question or proposal, or just want
           to say hello? Go ahead.</p>
    </div>

    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon"></img>
            <a href='mailto:thanushaudara8@gmail.com'>gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="github icon"></img>
            <a href='https://github.com/Thanusha8'>github.com</a>
        </li>
        <li  className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="linkedin icon"></img>
            <a href='https://www.linkedin.com/in/thanusha-udara/'>linkedin.com</a>
        </li>
    </ul>
    
  </footer>
)}

export default Contact
