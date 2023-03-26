import { useEffect, useState, useRef } from "react";

import styles from "./style.module.css";
import data from "../../data/info_osteo.json";
import Slider from "../../components/Slider/Slider";

function Home() {
  const info = data.info;
  const [numberSlider, setNumberSlider] = useState(0);

  const ServicesRef = useRef(null);

  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop -60,
      behavior: "smooth",
      // Для прокрутки нужно утановить модуль
      // npm install --save styled-components
      // You can also assign value "auto"
      // to the behavior parameter.
    });
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function increment() {
    if (numberSlider === 2) {
      setNumberSlider((prev) => (prev = 0));
    } else {
      setNumberSlider((prev) => (prev += 1));
    }
  }
  function decrement() {
    if (numberSlider === 0) {
      setNumberSlider((prev) => (prev = 2));
    } else {
      setNumberSlider((prev) => (prev -= 1));
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      increment();
    }, 10000);

    return () => clearInterval(timer);
  }, [numberSlider]);

  return (
    <div className={styles.index_container}>
      <div className={styles.first_level_container}>
        <div className={styles.greeting_container}>
          <h2>
            Обращайтесь.
            <br />
            Буду рад Вам помочь!
          </h2>
        </div>
        <div className={styles.button_container} onClick={gotoServices}>
          <div className={styles.arrow_8} ></div>
        </div>
      </div>

      <div className={styles.second_level_container} ref={ServicesRef}>
        <div className={styles.title_second_level_container}>
          <h1>Остеопатия</h1>
        </div>
        <div className={styles.body_second_level_container}>
          <div className={styles.left_container}>
            {/* <div className={styles.left_border_container}>
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
                  <p className={styles.fade_in}>{info[numberSlider].text}</p>
                </div>
              </div>
              <div className={styles.dot_container}>
                <span
                  className={numberSlider === 0 ? styles.active : styles.dot}
                  onClick={() => setNumberSlider(0)}
                ></span>
                <span
                  className={numberSlider === 1 ? styles.active : styles.dot}
                  onClick={() => setNumberSlider(1)}
                ></span>
                <span
                  className={numberSlider === 2 ? styles.active : styles.dot}
                  onClick={() => setNumberSlider(2)}
                ></span>
              </div>
            </div> */}
            <Slider
              info={info}
              increment={increment}
              decrement={decrement}
              setNumberSlider={setNumberSlider}
              numberSlider={numberSlider}
            />
          </div>

          <div className={styles.right_container}>
            <h4>Что такое остеопатия.</h4>
            <p>
              Это мягкий, безболезненный метод диагностики и лечения организма,
              где единственные инструменты специалисты, его знания, опыт и руки.
              В остеопатии применяется тотальное слушание тела, тканей и
              органов. Очень важно их дыхание и движение. Бывает, что какая то
              эмоция зашкаливает и мозг не справляется, импульс переходит в тело
              и тогда возникает психосоматика. Суть остеопатии - снять
              напряжение не только в каждом органе, но в нашей голове, и вернуть
              здоровье каждой клеточке нашего организма.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
