import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <svg onClick={() => window.open("mailto:rs2279@cornell.edu", "_blank")} width="16" height="15" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#757575" />
          </svg>
          <svg onClick={() => window.open("https://www.linkedin.com/in/ryunshim/", "_blank")} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.63269 15V4.87953H0.202386V15H3.63269ZM1.91798 3.49692C3.11419 3.49692 3.85877 2.71978 3.85877 1.74862C3.83648 0.755565 3.11423 0 1.94068 0C0.767312 0 0 0.75558 0 1.74862C0 2.71983 0.744398 3.49692 1.89559 3.49692H1.91787H1.91798ZM5.53135 15H8.96165V9.34824C8.96165 9.04576 8.98394 8.7436 9.07452 8.52738C9.32251 7.92304 9.88693 7.29712 10.8345 7.29712C12.0758 7.29712 12.5724 8.2252 12.5724 9.5857V14.9999H16.0025V9.19695C16.0025 6.08834 14.3101 4.64193 12.0532 4.64193C10.2027 4.64193 9.39021 5.65626 8.93883 6.34712H8.96173V4.87932H5.53143C5.57644 5.82897 5.53143 14.9998 5.53143 14.9998L5.53135 15Z" fill="#757575" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_938_11667)">
              <rect x="6.35938" width="17.338" height="20.6616" rx="3" transform="rotate(15.1957 6.35938 0)" fill="#757575" />
              <mask id="mask0_938_11667" maskUnits="userSpaceOnUse" x="1" y="0" width="22" height="24">
                <rect x="6.41553" width="17.338" height="20.6616" rx="3" transform="rotate(15.1957 6.41553 0)" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_938_11667)">
                <path d="M8.60034 5.86958C8.70304 5.48633 9.09697 5.25888 9.48024 5.36157L17.8076 7.59289C18.1909 7.69557 18.4184 8.08951 18.3156 8.47278C18.213 8.85603 17.819 9.08348 17.4357 8.98078L9.10836 6.74946C8.72509 6.64678 8.49766 6.25283 8.60034 5.86958Z" fill="#FBFBFB" />
                <path d="M7.66968 9.3393C7.77238 8.95605 8.16632 8.7286 8.54957 8.8313L16.877 11.0626C17.2602 11.1653 17.4876 11.5593 17.3849 11.9425C17.2823 12.3258 16.8883 12.5532 16.5051 12.4505L8.17768 10.2192C7.79443 10.1165 7.56698 9.72255 7.66968 9.3393Z" fill="#FBFBFB" />
                <path d="M6.74097 12.809C6.84365 12.4258 7.2376 12.1983 7.62085 12.301L12.4785 13.6026C12.8618 13.7054 13.0892 14.0992 12.9865 14.4824C12.8838 14.8659 12.4899 15.0932 12.1066 14.9906L7.24897 13.689C6.86572 13.5862 6.63827 13.1923 6.74097 12.809Z" fill="#FBFBFB" />
              </g>
            </g>
            <defs>
              <clipPath id="clip0_938_11667">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 9.5L12 0V11L17.5 15L24 9.5Z" fill="#757575" />
            <path d="M12 0V10L7 15.5L0 9.5L12 0Z" fill="#95A0B1" />
            <circle cx="12" cy="17" r="7" fill="#D2DAE8" />
            <mask id="mask0_938_11676" maskUnits="userSpaceOnUse" x="5" y="10" width="14" height="14">
              <circle cx="12" cy="17" r="7" fill="#858D9C" />
            </mask>
            <g mask="url(#mask0_938_11676)">
              <rect x="1" y="9" width="26" height="5" fill="#AAB4C5" />
            </g>
          </svg>


        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>Work</NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : null)}>About</NavLink>
            <NavLink to="/art" className={({ isActive }) => (isActive ? styles.active : null)}>Art</NavLink>
            <NavLink to="/resume" className={({ isActive }) => (isActive ? styles.active : null)}>Resume/CV</NavLink>
          </nav>
          <p className={styles.copyright}>© 2023 Ryun Shim</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;