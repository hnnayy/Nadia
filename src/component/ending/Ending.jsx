// Ending.jsx

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './Ending.module.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";




const Ending = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Form Submitted');

    emailjs
      .sendForm('service_35revoj', 'template_w83ni4l', form.current, 'vMycWK1Q-1clTHAZa')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        window.alert('Email sent successfully!');
        // You can reset the form if needed: form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        window.alert('Failed to send email. Please try again.');
      });
  };

  return (
    <div className= {styles.utama}>
      <section className={styles.section} id='contact'>
        <h3>Contact</h3>
        <h2>Don't Be a Stranger, Say Hi!</h2>
        <p>
          Ready to rock and roll? I'm all ears for your cool ideas, exciting projects, or even if you just want to chat
          about the latest cat memes. Don't hesitate to reach out!
        </p>
      </section>

      <section className={styles.email}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </section>

      <ul className={styles.skillsList}>
        <li className={styles.skillItem}>
          <a href='https://github.com/hnnayy' target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className={styles.skillItem}>
          <a href='https://www.linkedin.com/in/nadia-mutia-hanin-537823230' target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.skillItem}>
          <a href='https://www.instagram.com/haninayy_' target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare />
          </a>
        </li>
    </ul>
     


    </div>
  );
};

export default Ending;
