import { useEffect } from "react";
import styles from "./style.module.css";

function Price() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.price_container}>
      <div className={styles.price_border_container}>
        <div className={styles.osteo_container}>
          <h2>Остеопатический приём</h2>
          <table>
            <thead>
                <tr>
                  <th>Категория</th>
                  <th>Продолжительность</th>
                  <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Взрослые</td>
                  <td>60 минут</td>
                  <td>4000 руб.</td>
                </tr>
                <tr>
                  <td>Дети до 10 лет</td>
                  <td>30-50 минут</td>
                  <td>3000 руб.</td>
                </tr>
                <tr>
                  <td>Новорождённые</td>
                  <td>Индивидуально</td>
                  <td>Индивидуально</td>
                </tr>
            </tbody>
          </table>
          <p>
            Многодетным и другим льготным категориям предоставляется скидка от
            1000 руб. Раз в месяц по четвергам я принимаю за донейшен (любая
            удобная для вас сумма).
          </p>
        </div>
        <div className={styles.massage_container}>
          <h2>Массаж</h2>
          <table>
            <thead>
                <tr>
                  <th>Вид массажа</th>
                  <th>Продолжительность</th>
                  <th>Цена</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Общий</td>
                  <td>60 минут</td>
                  <td>2500 руб.</td>
                </tr>
                <tr>
                  <td>Для беременных</td>
                  <td>60 минут</td>
                  <td>3000 руб.</td>
                </tr>
            </tbody>
          </table>
          <p>
            Стоимость выезда на дом зависит от разных факторов: сколько человек
            надо принять, как далеко вы находитесь и есть ли у меня свободное
            время.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Price;
