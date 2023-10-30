import styles from './Pili.module.css';
import a from '../../assets/Pili/1.png';
import b from '../../assets/Pili/class.png';
import c from '../../assets/Pili/3.png';

const Pili = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.titleCard}>
          <div className={styles.left}>
            <h5>CASE STUDY</h5>
            <h2>Pili</h2>
            <p className={styles.desc}>Bridging the Gap in STEM Education</p>
          </div>
          <img className={styles.img1} src={a}></img>
        </div>
      </div>

      <div className={styles.section2}>
        <div className={styles.left}>
          <h2><mark>Pili — a digital</mark></h2>
          <h2><mark>solution to foster</mark></h2>
          <h2><mark>diversity and inclusion</mark></h2>
          <h2><mark>beyond STEM lectures.</mark></h2>
        </div>
        <div className={styles.right}>
          <h3>Product Designer</h3>
          <p>UX/UI, User Testing, Ideating, Prototyping</p>
          <hr />
          <p>February 2023 - May 2023</p>
          <hr />
          <p>Supported by 3 UX Researchers</p>
        </div>
      </div>


      <div className={styles.section3}>
        <div className={styles.classContainer}>
          <img src={b}></img>
          <div className={styles.overlay}></div>
          <h3>A RIGID STRUCTURE</h3>
          <p>STEM lectures impede students from forging the crucial bonds that foster academic success and personal growth.</p>
        </div>
      </div>


    <div className={styles.section4}>
      <div className={styles.left}>
        <h1>PILI — </h1>
        <p>Aimed at alleviating students&apos; pervasive feelings of isolation and anonymity amidst overwhelming class sizes and the impersonal nature of large STEM lectures</p>
      </div>
      <div>
        <img src={c}></img>
      </div>
    </div>

    </div>
  )
}

export default Pili;