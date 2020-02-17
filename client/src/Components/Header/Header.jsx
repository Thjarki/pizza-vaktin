import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
class Header extends Component {
  render() {
    return (
      <header>
        <nav className={styles.navContainer}>
          <Link className={styles.navbuttons} to="">
            Leitin
          </Link>
          <Link className={styles.navbuttons} to="/pizzaStadir">
            Pizza staðir
          </Link>
          <Link className={styles.navbuttons} to="/randomPizza">
            Random Pizza
          </Link>
          <Link className={styles.navbuttons} to="/samstarfsadilar">
            Um okkur
          </Link>
        </nav>
      </header>
    );
  }
}
export default Header;
