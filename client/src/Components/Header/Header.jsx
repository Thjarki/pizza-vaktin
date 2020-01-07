 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
class Header extends Component {
  render() {
      return (                 
            <header>
              <ul className={styles.navContainer}>
                  <Link className={styles.navbuttons} to="">Heim</Link>
                  <Link className={styles.navbuttons} to="/verkefni">Pizza staðir</Link>
                  <Link className={styles.navbuttons} to="/starfsmenn">Tjekklisti</Link>
                  <Link className={styles.navbuttons} to="/samstarfsadilar">Um okkur</Link>
                  <Link className={styles.navbuttons} to="/birgjar">Innskráning</Link>
              </ul>
          </header>
                )
            }
          }
export default Header;