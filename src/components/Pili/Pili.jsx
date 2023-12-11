import styles from './Pili.module.css';
import a from '../../assets/Pili/1.png';
import b from '../../assets/Pili/Class.png';
import c from '../../assets/Pili/3.png';
import d from '../../assets/Pili/Screenshot 2023-08-27 at 12.29 1.png';
import charts from '../../assets/Pili/Charts.png';
import e from '../../assets/Pili/4.png';
import f from '../../assets/Pili/5.png';
import g from '../../assets/Pili/6.png';
import h from '../../assets/Pili/7.png';
import i from '../../assets/Pili/8.gif';
import j from '../../assets/Pili/9.gif';
import k from '../../assets/Pili/10.gif';
import l from '../../assets/Pili/11.gif';
import m from '../../assets/Pili/12.gif';
import n from '../../assets/Pili/13.png';
import o from '../../assets/Pili/14.png';


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
          <p>These statistics unveil the systemic challenges related to diversity and representation in STEM, which have the <mark style={{ fontStyle: "italic", fontWeight: "500", lineHeight: "2", display: "inline", padding: "0.5rem 0" }}>potential to directly contribute to the feelings of disconnection.</mark></p>
          <p className={styles.specialSubHeading}>Identifying the Gaps</p>
          <p style={{ marginTop: "0" }}>To inform our design and development process, we analyzed existing solutions addressing community-building in education. GroupMe and EdStem both fall short in fostering holistic student interactions, highlighting shortcomings in their ability to cater to the multifaceted needs of STEM students.</p>
        </div>
      </div>

      <div className={styles.section6}>
        <div className={styles.edstem}>
          <img style={{ width: "25%", height: "auto" }} src={e}></img>
          <div className={styles.right}>
            <h4>Edstem</h4>
            <p>Question and answer forum for students, targeting professors and staff for communication.</p>
            <ul>
              <li>👍 Academic Focus</li>
              <li>👍 Clear Communication</li>
              <li>👍 Resource Sharing</li>
              <li>👎 Limited Real-Time Interaction</li>
              <li>👎 Narrow Scope/Interaction</li>
              <li>👎 Teacher-Centric</li>
            </ul>
          </div>
        </div>

        <div className={styles.groupme}>
          <div className={styles.left}>
            <h4>GroupMe</h4>
            <p>A popular group messaging platform, often utilized amongst students</p>
            <ul>
              <li>👍 Easy group creation</li>
              <li>👍 Shift to community focused through groups</li>
              <li>👍 Limited Visibility- Degree of privacy</li>
              <li>👎 Unorganized Interaction</li>
              <li>👎 Shallow Engagement</li>
              <li>👎 Narrow Scope/Interaction</li>
            </ul>
          </div>
          <img style={{ width: "30%", height: "auto" }} src={f}></img>
        </div>
      </div>

      <div className={styles.section7}>
        <p>We uncovered a striking trend — <mark style={{ fontStyle: "italic", fontWeight: "500", lineHeight: "2", display: "inline", padding: "0.5rem 0" }}>educational institutions predominantly rely on generic communication and collaboration platforms for students.</mark>
          &nbsp; This approach has resulted in the absence of a centralized, community-based platform specifically engineered to support connections,
          leaving a noticeable gap in the educational technology landscape.</p>

        <div className={styles.drillingDeeper}>
          <h3>DRILLING DEEPER</h3>
          <p className={styles.subheading}>Structured Interviews</p>
          <p>We aimed to discover how these systemic challenges and limitations translated into real-life experiences through an hour-long structured interview with 8 Cornell minority undergraduate STEM students.</p>
        </div>

        <div className={styles.sampleQuestions}>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>Sample Questions</p>
          <ol type="1" style={{ margin: "0" }}>
            <li>So you&apos;ve successfully completed your first three weeks of the Fall semester. Could you walk me through your initial feelings when attending lectures, specifically lectures with 100+ students?</li>
            <li>Describe a time when you are nervous about attending a large lecture. What aspects of the class make you feel uncomfortable?</li>
            <li>How important is diversity and representation in your academic and social interactions with STEM courses?</li>
            <li>What are some factors that go into deciding where or with whom you decide to sit next to when attending a new class?</li>
            <li>What challenges do you face when trying to build relationships with your peers in large STEM courses?</li>
          </ol>
        </div>
      </div>

      <div className={styles.section8}>
        <div className={styles.right}>
          <div className={styles.rightSection}>
            <h2>🐟 Small Fish in a Big Pond</h2>
            <p>In large STEM lectures, the challenge of initiating connections can be particularly daunting because the sheer size of the class often means that students don&apos;t even know the names or faces of their classmates.</p>
          </div>

          <div className={styles.rightSection}>
            <h2>🌈 Varied Expectations</h2>
            <p>Some emphasized their desire for study partners who can help them excel academically, while others expressed the need for a social support network to navigate the challenges of STEM coursework.</p>
          </div>

          <div className={styles.rightSection}>
            <h2>👯 Importance of Diversity</h2>
            <p>Students stressed the vital importance of diversity, drawing from their experiences in team and project based STEM courses.</p>
          </div>

          <div className={styles.rightSection}>
            <h2>😰 Anxiousness</h2>
            <p>Large lectures often result in initial awkwardness and superficial conversations, coupled with the challenge of finding like-minded peers and initiating meaningful dialogues.</p>
          </div>
        </div>
        <img src={g}></img>
      </div>

      <div className={styles.section9}>
        <p>Structured interviews with Cornell minority STEM students provided firsthand accounts and humanized our understanding, revealing the need for a versatile platform that nurtures both academic and social connections.</p>
      </div>

      <div className={styles.section10}>
        <p style={{ fontStyle: "italic", fontSize: "1.5rem", color: "#FBFBFB", fontWeight: "400", marginBottom: "0.5rem" }}>Painpoints</p>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>Desire for Connection</h3>
            <p>Students may struggle to find like-minded peers or study partners, which could impact their engagement and academic success.</p>
          </div>

          <div className={styles.column}>
            <h3>Diverse Objective</h3>
            <p>Different student relationship goals (such as seeking lifelong friends or study partners) can result in interactions that don&apos;t align, leading to a less than optimal experience.</p>
          </div>

          <div className={styles.column}>
            <h3>Sense of Isolation</h3>
            <p>Similar to their peers, minority students frequently feel lonely or nervous in large classroom settings. A lack of diversity intensifies this, contributing to detachment and isolation.</p>
          </div>
        </div>
      </div>

      <div className={styles.section11}>
        <div className={styles.first}>
          <h3>WIDENING THE SCOPE</h3>
          <p style={{ fontSize: "2rem", fontWeight: "400", marginTop: "0.5rem" }}>Contrary to a centralized STEM-oriented solution, our interviews <b>revealed the need for a broader scope</b>, including students from various majors and interests, reflecting the diverse nature of STEM courses.</p>
        </div>

        <p style={{ fontSize: "2.25rem", textAlign: "center", fontWeight: "300" }}>How might we facilitate meaningful connections  and alleviate emotional challenges commonly experienced in disconnected, large STEM lectures?</p>
      </div>

      <div className={styles.section12}>
        <p style={{ color: "#FBFBFB", fontWeight: "400", fontSize: "2.25rem" }}><b>Pili</b> enables students to fostering diverse bonds and provides a space for collaboration beyond the classroom, ultimately enhancing the sense of belonging and reducing feelings of isolation in STEM education.</p>
      </div>

      <div className={styles.section13}>
        <div className={styles.bigSection}>
          <h5>Flow Chart</h5>
          <img style={{ width: "90%", height: "auto", padding: "0 4rem" }} src={h}></img>
        </div>

        <div className={styles.bigSection}>
          <h5>Features</h5>
          <div className={styles.innerSection}>
            <img src={i}></img>
            <div className={styles.sectionText}>
              <p style={{ fontSize: "1.25rem", margin: "0"}}>Sign Up/Log In</p>
              <p>Seamlessly importing course schedules from the college&apos;s registration systems, Pili simplifies the process. Its ability to connect students with diverse backgrounds and interests sparks the journey of meaningful academic relationships.</p>
            </div>
          </div>

          <div className={styles.innerSection}>
            <div style={{ paddingLeft: "8rem" }} className={styles.sectionText}>
              <p style={{ fontSize: "1.25rem", margin: "0" }}>Dashboard</p>
              <p>Upcoming courses, study sessions, study buddies, networking events, and chatrooms - the dashboard is the compass navigating students&apos; academic journeys. It transcends conventional course management, embracing workshops and networking opportunities.</p>
            </div>
            <img src={j}></img>
          </div>

          <div className={styles.innerSection}>
            <img src={k}></img>
            <div className={styles.sectionText}>
              <p style={{ fontSize: "1.25rem", margin: "0"}}>Create Chatrooms</p>
              <p>Breaking free from conventional group formation, Pili&apos;s chatroom feature groups students based on classes, interests, and preferences. This not only fosters diverse study groups but eliminates the hassle of offline group creation.</p>
            </div>
          </div>

          <div  style={{ marginBottom: "0" }} className={styles.innerSection}>
            <div style={{ paddingLeft: "8rem" }} className={styles.sectionText}>
              <p style={{ fontSize: "1.25rem", margin: "0" }}>Foster Connections</p>
              <p>Shared interests and courses bridge gaps, igniting conversations and eradicating initial barriers. By doing so, it fosters diverse bonds, collaboration beyond the classroom, enhances a sense of belonging, and reduces feelings of isolation in STEM education.</p>
            </div>
            <img src={l}></img>
          </div>
        </div>

        <div className={styles.bigSection}>
          <h5>Pili Video Demo</h5>
          <img style={{ width: "32%", height: "auto", padding: "0 25rem" }} src={m}></img>
        </div>

        <div className={styles.bigSection}>
          <h5>Design System</h5>
          <img style={{ width: "90%", height: "auto" }} src={n}></img>
        </div>
      </div>

      <div className={styles.section14}></div>
    </div>
  )
}

export default Pili;