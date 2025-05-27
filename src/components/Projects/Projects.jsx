import React from 'react'

import projects from "../../data/projects.json";
import styles from "./projects.module.css";

import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className={styles.container} id="Projects">
        <h2  className={styles.title} >Key Projects</h2>

        <div className={styles.projects}>
            {
            projects.map((project, id) => {                      // Iterate over the 'projects' array using the map function.
                                                                  
                return (
                    <ProjectCard key={id} project={project}/>
                )
            })}
            
        </div>
    </section>
  )
}

export default Projects
