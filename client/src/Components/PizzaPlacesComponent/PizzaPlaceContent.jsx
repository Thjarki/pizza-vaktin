import React from "react";
import styles from "./PizzaPlaceContent.module.scss";
import PropTypes from "prop-types";
const PizzaPlaceContent = ({ name, logo, link, text, slideLeft }) => {
  console.log(slideLeft);
  if (slideLeft) {
    return (
      <section className={styles.pizzaPlaceContainer}>
        <h2>{name}</h2>
        <a href={link}>
          <img
            className={styles.logo}
            src={logo}
            alt="pizzastadur"
            draggable="false"
          />
        </a>
        <p className={styles.textSlideLeft}>{text}</p>
      </section>
    );
  } else {
    return (
      <section className={styles.pizzaPlaceContainer}>
        <h2>{name}</h2>
        <p className={styles.textSlideRight}>{text}</p>
        <a href={link}>
          <img
            className={styles.logo}
            src={logo}
            alt="pizzastadur"
            draggable="false"
          />
        </a>
      </section>
    );
  }
};
PizzaPlaceContent.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string.isRequired,
  slideLeft: PropTypes.bool
};

PizzaPlaceContent.defaultProps = {
  slideLeft: true
};

export default PizzaPlaceContent;
