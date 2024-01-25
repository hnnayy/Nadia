import React, { useState } from 'react';
import styles from "./App.module.css";
import Navbar from './component/Navbar';
import Hero from './component/Hero/Hero';
import Project from './component/Projects/Project';
import Skills from './component/Skills/skills';
import Ending from './component/ending/Ending';


const App = () => {
  
  return (
    <div className={styles.App}  >
      <Navbar />
      <Hero />
      <Project/>
      <Skills/>
      <Ending/>
      
    </div>
  );
};

export default App;
