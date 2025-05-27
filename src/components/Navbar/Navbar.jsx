import React, {useState} from 'react'

import styles from "./Navbar.module.css";
import { getImageUrl } from '../../utils';


const Navbar = () => {

  const[menuopen,setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href='https://github.com/Thanusha8'>Portfolio</a>

      <div className={styles.menu}>

        <img className={styles.menuBtn} 
        src={
          menuopen
          ? getImageUrl("nav/closeIcon.png")      /*if menuOpne true*/
          : getImageUrl("nav/menuIcon.png")       /*if menuOpne false*/
        } 
        alt="menu-button"
        onClick={()=>setMenuOpen(!menuopen)}       /*when clicking the image occcur the oppersite of the openmenu*/
        />


        <ul 
          className={`${styles.menuItems} ${menuopen && styles.menuopen}`}  /*always includes menuItems class name, and conditionally adds menuOpen if menuOpen is true, */
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href='#About'>About</a>
          </li>
          <li>
            <a href='#Projects'>Projects</a>
          </li>
          <li>
            <a href='#Contact'>Contact</a>
          </li>
          
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
