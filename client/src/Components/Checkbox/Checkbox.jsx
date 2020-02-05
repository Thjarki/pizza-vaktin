import React from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.scss";
const Checkbox = ({ value, onChange }) => {
  if (value === "") {
    value = "empty";
  }
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={value}
        id={value}
        onChange={e => onChange(e)}
      />
      <label htmlFor={value}>{value}</label>
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};

export default Checkbox;
