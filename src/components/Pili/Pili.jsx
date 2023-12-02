import styles from './Pili.module.css';
import a from '../../assets/Pili/1.png';
import b from '../../assets/Pili/Class.png';
import c from '../../assets/Pili/3.png';
import d from '../../assets/Pili/Screenshot 2023-08-27 at 12.29 1.png';
import charts from '../../assets/Pili/Charts.png';


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

      <div className={styles.section5}>
        <div className={styles.designProcess}>
          <h3>DESIGN PROCESS OVERVIEW</h3>
          <p>In the fast-evolving landscape of STEM education, the need for meaningful connections and inclusivity has never been greater.
            Pili is designed to empower students by connecting them based on demographics, majors, interests, and enrolled courses.</p>
          <img style={{ height: "auto", width: "100%" }} src={d}></img>
        </div>

        <div className={styles.userResearch}>
          <h3>USER RESEARCH</h3>
          <p className={styles.subheading}>From Inspiration to Exploration</p>
          <p style={{ margin: "0" }}>As minority undergraduate STEM students, we often found ourselves feeling disconnected, not knowing our peers, and even intimidated by the academic environment in large STEM lecture halls.
            This sense of isolation made us wonder if others also yearned for a more meaningful connection.</p>

          <p className={styles.specialSubHeading}>Uncovering Systemic Obstacles</p>
          <p style={{ marginTop: "0" }}>Exploratory research, including extensive secondary research and literature reviews, laid the groundwork by identifying systemic challenges that underrepresented STEM students face in academic settings.</p>
          <img style={{ position: "relative", left: "-12%", height: "auto", width: "125%" }} src={charts}></img>
          <p>These statistics unveil the systemic challenges related to diversity and representation in STEM, which have the <mark style={{ fontStyle: "italic", fontWeight: "500", lineHeight: "2" }}>potential to directly contribute to the feelings of disconnection.</mark></p>
          <p className={styles.specialSubHeading}>Identifying the Gaps</p>
          <p style={{ marginTop: "0" }}>To inform our design and development process, we analyzed existing solutions addressing community-building in education. GroupMe and EdStem both fall short in fostering holistic student interactions, highlighting shortcomings in their ability to cater to the multifaceted needs of STEM students.</p>
        </div>
      </div>

    </div>
  )
}

export default Pili;