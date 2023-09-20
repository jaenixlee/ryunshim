import styles from './Work.module.css';

const Work = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.opening1}>I’m Ryun — a designer </span>
        <span className={styles.opening2}>striving to<br />craft with intentionality &<br />sincerity in every pixel & flow</span>
      </div>

      <div className={styles.caseStudies}>
        <p className={styles.heading}>01. CASE STUDIES</p>
        <div className={styles.caseStudiesContainer}>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, Prototyping</p>
            <p className={styles.title}>Placeholder Text</p>
          </div>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, Prototyping</p>
            <p className={styles.title}>Placeholder Text</p>
          </div>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, Prototyping</p>
            <p className={styles.title}>Placeholder Text</p>
          </div>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, Prototyping</p>
            <p className={styles.title}>Placeholder Text</p>
          </div>
        </div>
      </div>

      <div className={styles.sideProjects}>
        <p className={styles.heading}>02. SIDE PROJECTS</p>
      </div>
    </div>
  )
}

export default Work;