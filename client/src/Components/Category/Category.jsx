import React from "react";
import styles from "./Category.module.scss";
import Checkbox from "../Checkbox/Checkbox";
import { connect } from "react-redux";
import { deleteToppings, addToppings } from "../Actions";

const Category = props => {
  const checkToppings = event => {
    if (event.target.checked) {
      props.addTopping(event.target.name);
    } else {
      props.removeTopping(event.target.name);
    }
  };

  const boxes = props.list.map(el => (
    <li>
      <Checkbox value={el.name} onChange={e => checkToppings(e)} />
    </li>
  ));
  return (
    <div className={styles.wrapper}>
      <h2>{props.name}</h2>
      <ul className={styles.listContainer}>{boxes}</ul>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTopping: topping => dispatch(addToppings(topping)),
    removeTopping: topping => dispatch(deleteToppings(topping))
  };
};

export default connect(null, mapDispatchToProps)(Category);
