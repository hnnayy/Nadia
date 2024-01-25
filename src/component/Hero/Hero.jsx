import React from 'react';
import { PiHandWaving } from 'react-icons/pi';
import hanin from './hanin.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div>
      <section className={styles.heroWrapper} id='about'>
        <div className={styles.backgroundLayer} />
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              <PiHandWaving className={styles.handIcon} /> HELLO THERE
            </h2>
            <p className={styles.description}>
              My name is Nadia Mutia Hanin, a 21-year-old computer engineering student at Telkom University, Indonesia. Currently in my fourth semester of studies, I am passionate about technology. I constantly strive to stay updated on the latest developments and identify as a data science enthusiast. Proficient in languages like JavaScript, C, and Python, I actively seek opportunities to enhance my skills and tackle new challenges, fostering my growth as a programmer. Looking ahead, I aspire to continue learning and developing my programming skills, exploring new technologies and industries. Open to new opportunities, I am eager to connect with like-minded individuals in the tech industry who share my passion. Thank you for taking the time to learn more about me; I am excited about the ongoing journey of growth and learning as a programmer and look forward to connecting with others in the field.
            </p>
            <img className={styles.image} src={hanin} alt="Nadia Mutia Hanin" />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <h1 className={styles.nadia} >Nadia's</h1>
          <h3 className= {styles.hanin}>portfolio website</h3>
        </div>
      </footer>
    </div>
  );
}
