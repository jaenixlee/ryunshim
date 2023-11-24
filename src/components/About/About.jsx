import styles from './About.module.css';
import about from '../../assets/About_photo.png';
import a from "../../assets/Polaroids/1.png";
import b from "../../assets/Polaroids/2.png";
import c from "../../assets/Polaroids/3.png";
import d from "../../assets/Polaroids/4.png";
import e from "../../assets/Polaroids/5.png";
import f from "../../assets/Polaroids/6.png";
import g from "../../assets/Polaroids/7.png";
import h from "../../assets/Polaroids/8.png";
import i from "../../assets/Polaroids/9.png";
import j from "../../assets/Polaroids/10.png";
import k from "../../assets/Polaroids/11.png";
import l from "../../assets/Polaroids/12.png";
import m from "../../assets/Polaroids/13.png";
import n from "../../assets/Polaroids/14.png";
import o from "../../assets/Polaroids/15.png";
import p from "../../assets/Polaroids/16.png";
import CV from '../../assets/CV.pdf';
import Resume from '../../assets/Resume.pdf';

const About = () => {

  return (
    <div className={styles.container}>
      <span className={styles.greeting}>Hey there!</span>

      <div className={styles.top}>
        <div className={styles.topCard}>
          <img src={about}></img>
          <div className={styles.topRight}>
            <p className={styles.name}><span>Ryun Shim</span> (“ry-uhn”, she/her) 🍰</p>
            <p className={styles.intro}>Product Designer <span>@Cornell Lab of Ornithology</span></p>
            <p className={styles.intro}>Researcher <span>@DesignAI Group</span> under <a href="https://qianyang.co/">Qian Yang</a></p>
            <div className={styles.svgs}>
              <svg onClick={() => window.open("mailto:rs2279@cornell.edu", "_blank")} width="16" height="15" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 4L10 9L2 4V2L10 7L18 2V4Z" fill="#757575" />
              </svg>
              <svg onClick={() => window.open("https://www.linkedin.com/in/ryunshim/", "_blank")} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.63269 15V4.87953H0.202386V15H3.63269ZM1.91798 3.49692C3.11419 3.49692 3.85877 2.71978 3.85877 1.74862C3.83648 0.755565 3.11423 0 1.94068 0C0.767312 0 0 0.75558 0 1.74862C0 2.71983 0.744398 3.49692 1.89559 3.49692H1.91787H1.91798ZM5.53135 15H8.96165V9.34824C8.96165 9.04576 8.98394 8.7436 9.07452 8.52738C9.32251 7.92304 9.88693 7.29712 10.8345 7.29712C12.0758 7.29712 12.5724 8.2252 12.5724 9.5857V14.9999H16.0025V9.19695C16.0025 6.08834 14.3101 4.64193 12.0532 4.64193C10.2027 4.64193 9.39021 5.65626 8.93883 6.34712H8.96173V4.87932H5.53143C5.57644 5.82897 5.53143 14.9998 5.53143 14.9998L5.53135 15Z" fill="#757575" />
              </svg>
            </div>
            <div className={styles.buttons}>
              <div className={styles.button1} onClick={() => window.open(Resume, '_blank')}>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.315 0.820312H2.315C1.215 0.820312 0.315002 1.72031 0.315002 2.82031V18.8203C0.315002 19.9203 1.205 20.8203 2.305 20.8203H11.315V12.8203H16.315V6.82031L10.315 0.820312ZM9.315 7.82031V2.32031L14.815 7.82031H9.315ZM13.315 20.4803V14.8203H18.975V16.8203H16.735L19.685 19.7703L18.275 21.1803L15.315 18.2303V20.4703H13.315V20.4803Z" fill="#FBFBFB" />
                </svg>
                <span>Resume</span>
              </div>
              <div className={styles.button2} onClick={() => window.open(CV, '_blank')}>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.315 0.820312H2.315C1.215 0.820312 0.315002 1.72031 0.315002 2.82031V18.8203C0.315002 19.9203 1.205 20.8203 2.305 20.8203H11.315V12.8203H16.315V6.82031L10.315 0.820312ZM9.315 7.82031V2.32031L14.815 7.82031H9.315ZM13.315 20.4803V14.8203H18.975V16.8203H16.735L19.685 19.7703L18.275 21.1803L15.315 18.2303V20.4703H13.315V20.4803Z" fill="#2A2A2A" />
                </svg>
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <p>Accepted into the Early Admit program, I&apos;m pursuing a B.A. in Information Science with a minor in Game Design (December 2023), followed by a Masters in Information Sciences (May 2024).</p>
          <p>Enrolling in a student-run Digital Product Design course in college was a transformative experience that solidified my passion for creating ubiquitous applications and curating unforgettable experiences.
            Building upon my fine arts background, I aspire to merge emotive elements of visual design with user research, crafting solutions that address user needs and empower communities through easily accessible products that resonate with users on a holistic level.</p>
        </div>
      </div>

      <div className={styles.pics}>
        <p>Life at a glance</p>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.99241 14.9957C8.18828 14.9957 8.47456 14.845 8.70809 14.6943C12.9193 11.9823 15.6163 8.80315 15.6163 5.58636C15.6163 2.8065 13.6953 0.87793 11.2921 0.87793C9.79292 0.87793 8.67043 1.70661 7.99241 2.9421C7.32947 1.70661 6.19945 0.87793 4.70028 0.87793C2.28957 0.87793 0.36853 2.8065 0.36853 5.58636C0.36853 8.80315 3.07305 11.9823 7.27673 14.6943C7.51027 14.845 7.79654 14.9957 7.99241 14.9957Z" fill="#D37C2E" />
        </svg>
        <div className={styles.headers}>
          <span>8px grid</span>
          <span>skincare</span>
          <span>cafe hopping</span>
          <span>color schemes</span>
          <span>studio ghibli</span>
          <span>sunsets</span>
        </div>
        <div className={styles.picGrid}>
          <div className={styles.row1}>
            <img src={a}></img>
            <img src={b}></img>
            <img src={c}></img>
            <img src={d}></img>
          </div>
          <div className={styles.row2}>
            <img src={e}></img>
            <img src={f}></img>
            <img src={g}></img>
            <img src={h}></img>
          </div>
          <div className={styles.row3}>
            <img src={i}></img>
            <img src={j}></img>
            <img src={k}></img>
            <img src={l}></img>
          </div>
          <div className={styles.row4}>
            <img src={m}></img>
            <img src={n}></img>
            <img src={o}></img>
            <img src={p}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;