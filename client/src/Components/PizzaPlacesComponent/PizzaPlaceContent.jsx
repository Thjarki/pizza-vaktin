import React from "react";
import styles from "./PizzaPlaceContent.module.scss";
import PropTypes from 'prop-types';
const PizzaPlaceContent = ({ logo, link, text, slideLeft}) => {
    console.log(slideLeft);
    if (slideLeft) {
        return ( 
            <div>
                <div className={styles.pizzaPlaceContainer}>
                    <a href={link}>
                        <img className={styles.birgjarlogo} src={logo} alt="pizzastadur" draggable="false" />
                    </a>
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
                    <a href={link}>
                        <img className={styles.birgjarlogo} src={logo} alt="pizzastadur" draggable="false"/>
                    </a>
                </div>
            </div> 
        );
    }

    
}
PizzaPlaceContent.propTypes = {
    logo: PropTypes.string,
    link: PropTypes.string,
    text: PropTypes.string.isRequired,
    slideLeft: PropTypes.bool,
}

PizzaPlaceContent.defaultProps = {
    slideLeft: true,
}
 
export default PizzaPlaceContent