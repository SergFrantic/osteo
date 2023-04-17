import { Link } from "react-router-dom";

import styles from "./style.module.css";

function Footer({ setActiveNav }) {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.left_container_footer}>
          <p>Структура сайта</p>
          <div className={styles.nav_footer}>
            <Link to="/" onClick={() => setActiveNav("home")}>
              <span>Главная</span>
            </Link>
            <Link to="/price" onClick={() => setActiveNav("price")}>
              <span>Прайс</span>
            </Link>
            <Link to="/about" onClick={() => setActiveNav("about")}>
              <span>Обо мне</span>
            </Link>
            <Link to="/feedbacks" onClick={() => setActiveNav("feedbacks")}>
              <span>Отзывы</span>
            </Link>
          </div>
        </div>
        <div className={styles.middle_container_footer}>
          <p>Ссылки на соцсети</p>
          <div className={styles.links_container}>
            <a
              target="_blank"
              href=" https://wa.me/79150398314?text=Здравствуйте,%20я%20хочу%20записаться%20на%20приём

          "
              rel="noreferrer"
            >
              <img
                src={require("./images/whatsapp.png")}
                style={{ width: "3em" }}
                alt="whatsapp"
              />
            </a>

            <a
              target="_blank"
              href="https://instagram.com/osteopat_alex?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
            >
              <img
                src={require("./images/instagram.png")}
                style={{ width: "4.05em" }}
                alt="instagram"
              />
            </a>

            <a
              target="_blank"
              href="https://t.me/osteopatalex80"
              rel="noreferrer"
            >
              <img
                src={require("./images/tg.png")}
                style={{ width: "2.7em" }}
                alt="telegram"
              />
            </a>
          </div>
        </div>
        <div className={styles.right_container_footer}>
          <p>Контакты</p>
          <div className={styles.contact_footer}>
            <div className={styles.phone_container}>
              <span>Алексей:</span>
              <a href="tel:+79629767267">+7 (962) 976-7267</a>
            </div>
            <div className={styles.phone_container}>
              <span>Мария:</span>
              <a href="tel:+79150398314">+7 (915) 039-8314</a>
            </div>
            <div className={styles.email_container}>
              <span>e-mail:</span>
              <a href="mailto:ivan1977@bk.ru">ivan1977@bk.ru</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
