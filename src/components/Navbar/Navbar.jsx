import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Resume from '../../assets/Resume.pdf';

const Navbar = () => {

  const location = useLocation();
  const artPage = location.pathname === '/art';
  const pili = location.pathname === '/pili';
  const mind = location.pathname === '/mindfulness-magic-machines';
  const merlin = location.pathname === '/merlin-bird-id';

  return (
    <div className={`${styles.navbar} ${artPage ? styles.artPage : ''} ${pili ? styles.pili : ''}`}>
      <div className={styles.left}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.5C16.97 22.5 21 18.47 21 13.5C16.03 13.5 12 17.53 12 22.5ZM5.6 10.75C5.6 12.13 6.72 13.25 8.1 13.25C8.63 13.25 9.11 13.09 9.52 12.81L9.5 13C9.5 14.38 10.62 15.5 12 15.5C13.38 15.5 14.5 14.38 14.5 13L14.48 12.81C14.88 13.09 15.37 13.25 15.9 13.25C17.28 13.25 18.4 12.13 18.4 10.75C18.4 9.75 17.81 8.9 16.97 8.5C17.81 8.1 18.4 7.25 18.4 6.25C18.4 4.87 17.28 3.75 15.9 3.75C15.37 3.75 14.89 3.91 14.48 4.19L14.5 4C14.5 2.62 13.38 1.5 12 1.5C10.62 1.5 9.5 2.62 9.5 4L9.52 4.19C9.12 3.91 8.63 3.75 8.1 3.75C6.72 3.75 5.6 4.87 5.6 6.25C5.6 7.25 6.19 8.1 7.03 8.5C6.19 8.9 5.6 9.75 5.6 10.75ZM12 6C13.38 6 14.5 7.12 14.5 8.5C14.5 9.88 13.38 11 12 11C10.62 11 9.5 9.88 9.5 8.5C9.5 7.12 10.62 6 12 6ZM3 13.5C3 18.47 7.03 22.5 12 22.5C12 17.53 7.97 13.5 3 13.5Z" fill="#EC5A5A" />
        </svg>
        <p onClick={() => window.location.href = "/"} className={styles.name}>Ryun Shim</p>
      </div>
      <div className={styles.right}>
        <div className={styles.nav}>
          <NavLink to="/" className={({ isActive }) => `${isActive ? styles.active : ''} ${artPage && isActive ? styles.artActive : ''} ${pili || mind || merlin ? styles.active : ''}`}>Work</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${isActive ? styles.active : ''} ${artPage && isActive ? styles.artActive : ''}`}>About</NavLink>
          <NavLink to="/art" className={({ isActive }) => `${isActive ? styles.active : ''} ${artPage && isActive ? styles.artActive : ''}`}>Art</NavLink>
          <NavLink className={({ artPage }) => `${artPage ? styles.artActive : ''}`} onClick={() => window.open(Resume, '_blank')}>Resume</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;