import React from 'react';
import projectData from '../../data/Project.json';
import styles from './Projects.module.css'; // Import CSS module
import PetaImage from './Peta.jpeg'; // Import the image

export default function Project() {
  return (
    <section className={styles.section} id='project'>
      <div className={styles.container}>
        {projectData.map((projectItem, id) => (
          <div key={id} className={styles.projectItem}>
            <img src={PetaImage} alt={`Project ${id}`} className={styles.image} />
            <h3 className={styles.name}>{projectItem.title}</h3>
            <p className={styles.description}>{projectItem.description}</p>
            <ul className={styles.skillsList}>
              {projectItem.skills.map((skill, id) => (
                <li key={id} className={styles.skillsItem}>
                  {skill}
                </li>
              ))}
            </ul>
            <div className={styles['project-links']}>
              <a href={projectItem.demo} className={styles['demo-link']} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
              <a href={projectItem.source} className={styles['source-link']} target="_blank" rel="noopener noreferrer">
                Source
              </a>
            </div>
          </div>
        ))}
      </div>
      <h2 className={styles.title}>MY PROJECTS</h2>
    </section>
  );
}
