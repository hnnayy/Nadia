// Navbar.jsx

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdMenuOpen, MdOutlineCloseFullscreen } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    // Only toggle menu if not in fullscreen
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  useEffect(() => {
    const toggleMenuIcon = () => {
      const menuIcon = document.querySelector(`.${styles.menuIcon}`);
      if (window.scrollY > 0 || window.innerWidth > 768) {
        menuIcon.classList.add(styles.hidden);
      } else {
        menuIcon.classList.remove(styles.hidden);
      }
    };

    window.addEventListener('scroll', toggleMenuIcon);
    window.addEventListener('resize', toggleMenuIcon);
    toggleMenuIcon();

    return () => {
      window.removeEventListener('scroll', toggleMenuIcon);
      window.removeEventListener('resize', toggleMenuIcon);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.titleContainer}>
        <a className={styles.title} href="/">Nadia`s</a>
      </div>
      <div className={styles.menu}>
        <div className={`${styles.menuIcon} ${menuOpen ? '' : styles.hidden}`} onClick={toggleMenu}>
          {menuOpen ? <MdOutlineCloseFullscreen /> : <MdMenuOpen />}
        </div>
        <ul className={`${styles.menuList} ${menuOpen ? styles.menuListOpen : ''}`}>
          <li>
            <a href='#about' onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href='#project' onClick={toggleMenu}>
              Project
            </a>
          </li>
          <li>
            <a href='#contact' onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li className={styles.mycv}>
            <a
              href='https://drive.google.com/file/d/11j4heIOEqKp4XAUV1C9k1i8t8MKTid-_/view?usp=drivesdk'
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={toggleMenu}
            >
              <IoCloudDownloadOutline /> MyCV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
