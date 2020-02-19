import React from "react";
import styles from "./Card.module.scss";
import PropTypes from "prop-types";

const Card = ({
  name,
  companyName,
  topping,
  smallPrice,
  midPrice,
  bigPrice,
  xlPrice,
  animateDuration
}) => {
  return (
    <div
      style={{ animateDuration: `${animateDuration}s` }}
      className={styles.cardContainer}
    >
      <div className={styles.logo}> logo </div>
      <div className={styles.textContainer}>
        <h2>{name}</h2>
        <p> {companyName} </p>
        <p> {topping} </p>
        <p> Lítil verð : {smallPrice} </p>
        <p> Miðstærð verð : {midPrice} </p>
        <p> Stór verð : {bigPrice} </p>
        <p> Risastór verð : {xlPrice} </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  topping: PropTypes.string.isRequired,
  smallPrice: PropTypes.string,
  midPrice: PropTypes.string,
  bigPrice: PropTypes.string,
  xlPrice: PropTypes.string,
  animateDuration: PropTypes.number
};

Card.defaultProps = {
  smallPrice: "Ekki í Boði",
  midPrice: "Ekki í Boði",
  bigPrice: "Ekki í Boði",
  xlPrice: "Ekki í Boði",
  animationDuration: 0
};
export default Card;
