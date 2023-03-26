import styles from "./style.module.css";
import photo from "../../data/photo/about.jpg";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.about_container}>
      <div className={styles.border_container}>
        <div
          className={styles.photo_container}
          style={{ backgroundImage: `url(${photo})` }}
        ></div>
        <div className={styles.text_container}>
          <h3>Здравствуйте, меня зовут Алексей.</h3>
          <h4>Здравствуйте, меня зовут Алексей.</h4>
          <div className={styles.body_text_container}>
            <p>
              Я родился 19 февраля 1980 года в городе Орёл. Свой многолетний
              путь в мануальной деятельности я начал с массажа. Закончил курсы
              лечебного массажа и ЛФК при медицинском колледже г. Орла.
              Продолжил своё обучение в Москве, закончил курсы антицеллюлитного
              и классического массажа. Краниосакральной терапии в остеопатии
              учился в институте Апленджера в России.
            </p>
            <ul>
              <p>Закончил курс:</p>
              <li>Краниосакральной терапии КСТ - 1 ( CS-1)</li>
              <li>Краниосакральной терапии КСТ -2 ( CS-2)</li>
              <li>Соматоэмоциональное освобождение СЭО - 1 ( SER-1)</li>
              <li>Соматоэмоциональное освобождение СЭО - 2 ( SER-2)</li>
              <li>Краниосакральная Биодинамика -2 ( BCS-2)</li>
            </ul>
          </div>
          <p className={styles.final_text}>
            Продолжаю обучаться, повышать свою квалификацию, приобретать новые
            навыки и компетенции и в настоящее время.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
