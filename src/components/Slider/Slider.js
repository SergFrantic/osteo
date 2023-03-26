import { CSSTransition } from "react-transition-group";

import styles from "./style.module.css";

function Slider({ info, increment, numberSlider, decrement, setNumberSlider }) {
  return (
    <div className={styles.left_border_container}>
      <div className={styles.body_slider_container}>
        <div
          className={styles.slider_container}
          style={{
            backgroundImage: `url(${require(`../../data/photo/${info[numberSlider].img}`)})`,
          }}
        >
          <button className={styles.prev} onClick={() => decrement()}>
            &#10094;
          </button>

          <div className={styles.title_number_container}>
            <div className={styles.title_slider_container}>
              {info[numberSlider].name}
            </div>
            <div className={styles.number_slider_container}>
              {info[numberSlider].id} / 3
            </div>
          </div>
        </div>
        <div className={styles.text_container}>
          <button className={styles.next} onClick={() => increment()}>
            &#10095;
          </button>

          <div className={styles.fade_in_container}>
            <p className={styles.fade_in}>{info[numberSlider].text}</p>
          </div>
        </div>
      </div>
      <div className={styles.dot_container}>
        <span
          className={`${styles.dot} ${
            numberSlider === 0 ? styles.active : null
          }`}
          onClick={() => setNumberSlider(0)}
        ></span>
        <span
          className={`${styles.dot} ${
            numberSlider === 1 ? styles.active : null
          }`}
          onClick={() => setNumberSlider(1)}
        ></span>
        <span
          className={`${styles.dot} ${
            numberSlider === 2 ? styles.active : null
          }`}
          onClick={() => setNumberSlider(2)}
        ></span>
      </div>
    </div>
  );
}
export default Slider;
