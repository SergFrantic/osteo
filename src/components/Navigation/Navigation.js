import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./style.module.css";
import logo from "./logo.png";
import Navlist from "./Navlist";

function Navigation({ activeNav, setActiveNav }) {
  const [navList, setNavList] = useState(false);

  function linkHandler(nameLink) {
    setActiveNav(nameLink);

    setNavList(false);
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" onClick={() => setActiveNav("home")}>
          <img src={logo} alt="..." />
        </Link>

        <div className={styles.drop}>
          <div className={styles.nav_btn_container}>
            <button
              className={`${styles.nav_btn} ${
                navList && styles.nav_btn_active
              }`}
              onClick={() => setNavList((prev) => !prev)}
            >
              &#9776;
            </button>
          </div>
          <div className={styles.nav_list}>
            <Navlist linkHandler={linkHandler} activeNav={activeNav} />
          </div>
          <div className={`${styles.nav_list_min} ${navList && styles.open}`}>
            <Navlist linkHandler={linkHandler} activeNav={activeNav} />
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Navigation;
