import styles from './Work.module.css';

const Work = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.opening1}>I’m Ryun — a designer </span>
        <span className={styles.opening2}>striving to<br />craft with intentionality &<br />sincerity in every pixel & flow</span>
      </div>
      <div className={styles.caseStudies}>
        <span className={styles.title}>01. CASE STUDIES</span>
        <div className={styles.caseStudiesContainer}></div>
      </div>
    </div>
  )
}

export default Work;