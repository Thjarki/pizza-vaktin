import React from "react";
import styles from "./PizzaPlaceContent.module.scss";
import PropTypes from 'prop-types';
const PizzaPlaceContent = ({ name, text, slideLeft}) => {
    console.log(slideLeft);
    if (slideLeft) {
        return ( 
            <div>
                <div className={styles.pizzaPlaceContainer}>
                    <h2 className={styles.samstarfsnafn}>{name}</h2>
                    <p className={styles.pizzaPlacetexti1}>
                        {text}
                    </p>
    
                </div>
            </div> 
        );
    } else {
        return ( 
            <div>
                <div className={styles.pizzaPlaceContainer}>
                    <p className={styles.pizzaPlacetexti2}>
                        {text}
                    </p>
                    <h2 className={styles.pizzaPlacenafn}>{name}</h2>
                </div>
            </div> 
        );
    }

    
}
PizzaPlaceContent.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    slideLeft: PropTypes.bool,
}

PizzaPlaceContent.defaultProps = {
    slideLeft: true,
}
 
export default PizzaPlaceContent