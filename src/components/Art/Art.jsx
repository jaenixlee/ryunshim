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
import l from '../../assets/Art/12.png';
import m from '../../assets/Art/13.png';
import n from '../../assets/Art/14.png';
import o from '../../assets/Art/15.png';
import p from '../../assets/Art/16.png';
import q from '../../assets/Art/17.png';
import r from '../../assets/Art/18.png';
import s from '../../assets/Art/19.png';
import t from '../../assets/Art/20.png';
import u from '../../assets/Art/21.png';


const Art = () => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span className={styles.heading}>Art</span>
      </div>
        <div className={styles.artContainer}>
          <div className={styles.section1}>
          <img src={a}></img>
          <p>EL WIRES, ADAPTERS, SEQUENCER, INVERTER // 40&quot;x60&quot;</p>
          </div>
        </div>
    </div>
  )
}

export default Art;