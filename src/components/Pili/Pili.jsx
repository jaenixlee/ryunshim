import styles from './Pili.module.css';

const Pili = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.titleCard}>
        <h5>CASE STUDY</h5>
        <h2>Pili</h2>
        <p className={styles.desc}>Bridging the Gap in STEM Education</p>
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
    </div>
  )
}

export default Pili;