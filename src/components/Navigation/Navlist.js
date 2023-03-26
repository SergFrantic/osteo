import { Link } from "react-router-dom";
import styles from "./style.module.css";

function Navlist({ linkHandler, activeNav }) {
  return (
    <>
      <Link to="/" onClick={() => linkHandler("home")}>
        <span className={activeNav === "home" ? styles.active_nav : null}>
          ГЛАВНАЯ
        </span>
      </Link>

      <Link to="/price" onClick={() => linkHandler("price")}>
        <span className={activeNav === "price" ? styles.active_nav : null}>
          ПРАЙС
        </span>
      </Link>

      <Link to="/about" onClick={() => linkHandler("about")}>
        <span className={activeNav === "about" ? styles.active_nav : null}>
          ОБО МНЕ
        </span>
      </Link>

      <Link to="/feedbacks" onClick={() => linkHandler("feedbacks")}>
        <span className={activeNav === "feedbacks" ? styles.active_nav : null}>
          ОТЗЫВЫ
        </span>
      </Link>
      {/* <Link to="/test" onClick={() => linkHandler("test")}>
        <span className={activeNav === "test" ? styles.active_nav : null}>
          Test
        </span>
      </Link> */}
    </>
  );
}
export default Navlist;
