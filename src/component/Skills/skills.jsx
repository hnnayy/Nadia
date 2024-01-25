import React from 'react';
import styles from './skills.module.css'; // Import CSS module
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiPython } from "react-icons/si";





const Skills = () => {
  return (
    <div className={styles.container} >
    <h1 className={styles.title} >TOOLS</h1>
    <ul className={styles.skillsList}>
      <li className={styles.skillItem}><AiOutlineHtml5 /></li>
      <li className={styles.skillItem}><TbBrandCss3 /></li>
      <li className={styles.skillItem}><TbBrandJavascript /></li>
      <li className={styles.skillItem}><SiReact /></li>
      <li className={styles.skillItem}><SiPython /></li>

      


    </ul>
    </div>
  );
};

export default Skills;
