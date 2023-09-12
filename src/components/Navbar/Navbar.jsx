import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <h3 className={styles.name}>Ryun Shim</h3>
      </div>
      <div className={styles.right}>
        <nav className={styles.nav}>
          <NavLink to="/" className={({isActive}) => (isActive ? styles.active : null)}>Work</NavLink>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : null)}>About</NavLink>
          <NavLink to="/art" className={({isActive}) => (isActive ? styles.active : null)}>Art</NavLink>
          <NavLink to="/resume" className={({isActive}) => (isActive ? styles.active : null)}>Resume/CV</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;