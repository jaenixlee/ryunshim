import styles from './Art.module.css';
import a from '../../assets/Art/1.gif';
import b from '../../assets/Art/2.png';
import c from '../../assets/Art/3.png';
import d from '../../assets/Art/4.png';
import e from '../../assets/Art/5.png';
import f from '../../assets/Art/6.png';
import g from '../../assets/Art/7.png';
import h from '../../assets/Art/8.png';
import i from '../../assets/Art/9.png';
import j from '../../assets/Art/10.png';
import k from '../../assets/Art/12.png';
import l from '../../assets/Art/13.png';
import m from '../../assets/Art/14.png';
import n from '../../assets/Art/15.png';
import o from '../../assets/Art/16.png';
import p from '../../assets/Art/17.png';
import q from '../../assets/Art/18.jpg';
import r from '../../assets/Art/19.jpg';
import s from '../../assets/Art/20.jpg';
import t from '../../assets/Art/21.jpg';


const Art = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.heading}>Art</span>
      </div>
      <div className={styles.artContainer}>
        <div className={styles.section1}>
          <img src='https://media3.giphy.com/media/V3Z76ctCO3jG0/giphy.gif?cid=ecf05e47g1cxaseaeyldhk5do5am9krnuawwg17y1j4up5a1&ep=v1_gifs_search&rid=giphy.gif&ct=g'></img>
          <p>El Wires, Adapters, Sequencer, Inverter // 40&quot;x60&quot;</p>
        </div>

        <div className={styles.section2}>
          <img src={b}></img>
          <img src={c}></img>
        </div>

        <div className={styles.section3}>
          <div className={styles.left}>
            <img src={d}></img>
            <p>Mixed Media (Paper Base, String, Clay) // 12&quot;x6&quot;x6&quot;</p>
          </div>
          <div>
            <img src={e} style={{ paddingTop: "10rem" }}></img>
          </div>
        </div>

        <div className={styles.section4}>
          <p>Sumi Ink, Hand made Accordion Book // 60&quot;x6&quot;</p>
          <img src={f}></img>
        </div>

        <div className={styles.section5}>
          <div className={styles.left}>
            <img src={g}></img>
            <p>Acrylic on canvas fabric // 37&quot;x57&quot;</p>
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <img src={h}></img>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.rightBottomDiv}>
                <img src={i}></img>
                <p>Acrylic on Bristol paper // 6&quot;x6&quot;</p>
              </div>
              <div className={styles.rightBottomDiv}>
                <img src={j}></img>
                <p>Acrylic on Plaster Mold // 7&quot;x5&quot;x2&quot;</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section6}>
          <img src={k}></img>
          <p>Pastel // 12&quot;x18&quot;</p>
        </div>

        <div className={styles.section7}>
          <div className={styles.left}>
            <img src={l}></img>
            <p>Pen and Ink // 15&quot;x19&quot;</p>
          </div>
          <div className={styles.right}>
            <img src={m}></img>
            <p>Charcoal & Newsprint on Textured Paper // 14&quot;x18&quot;</p>
          </div>
        </div>

        <div className={styles.section8}>
          <div className={styles.section8Top}>
            <img src={n}></img>
            <img src={o}></img>
          </div>
          <p>Plaster // 12&quot;x6&quot;X6&quot;</p>
        </div>

        <div className={styles.section9}>
          <img src={p}></img>
          <p>Acrylic, pen and ink // 18&quot;x24&quot;</p>
        </div>

        <div className={styles.section10}>
          <div className={styles.section10Single}>
            <p>Pen and Ink & Acrylic on Canvas // 24&quot;x18&quot;</p>
            <img src={q}></img>
          </div>
          <div className={styles.section10Single}>
            <p>Acrylic and Pastel on Canvas // 24&quot;x18&quot;</p>
            <img src={r}></img>
          </div>
          <div className={styles.section10Single}>
            <p>Mixed Media on Bristol Paper // 19&quot;x24&quot;</p>
            <img src={s}></img>
          </div>
          <div className={styles.section10Single}>
            <p>Graphite, Pen and Ink // 18&quot;x11&quot;</p>
            <img src={t}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Art;