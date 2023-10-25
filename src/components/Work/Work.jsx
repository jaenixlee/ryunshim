import styles from './Work.module.css';

const Work = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.opening1}>Hey there! I’m Ryun — </p>
        <p className={styles.opening2}>An artist turned product designer driven by interdisciplinary collaboration. Currently @Cornell University.</p>
      </div>

      <div className={styles.caseStudies}>
        <p className={styles.heading}>01. CASE STUDIES</p>
        <div className={styles.caseStudiesContainer}>
          <div className={styles.caseStudiesBox} style={{ background: '#DCC8DF' }}>
            <p className={styles.category}>Product Design, User Testing</p>
            <p className={styles.title}>Bridging the Gap in STEM Education</p>
          </div>
          <div className={styles.caseStudiesBox} style={{ background: '#DAE9C7' }}>
            <p className={styles.category}>User Interface, Visual Design</p>
            <p className={styles.title}>Fostering Continuous Birding Exploration</p>
          </div>
        </div>
      </div>


      <div className={styles.research}>
        <p className={styles.heading}>02. RESEARCH</p>
        <div className={styles.researchContainer}>
          <div className={styles.researchLeft}>
            <div className={styles.researchBox} style={{ background: '#D5F4F9' }}>
              <p className={styles.category}>Co-Design, Future Technologies</p>
              <p className={styles.title}>Mindfulness Enriched Through Creative Collaboration</p>
            </div>
          </div>
          <div className={styles.researchRight}>
            <div className={styles.researchBox} style={{ background: '#D1DAFC' }}>
              <p className={styles.category}>LLM-Chain Technologies</p>
              <p className={styles.title}>The Social Media Playwright: Chatbot</p>
            </div>
            <div className={styles.researchBox} style={{ background: '#FF8181' }}>
              <p className={styles.category}>Co-Design, Large Language Models</p>
              <p className={styles.title}>Co-Designing LLM Prompts with Experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;