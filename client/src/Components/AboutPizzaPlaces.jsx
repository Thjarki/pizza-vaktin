import React, { Component } from 'react';
import { pizzaPlaceInfo } from "../Assets/content.js";
import PizzaPlaceContent from "./PizzaPlacesComponent/PizzaPlaceContent";

class AboutPizzaPlaces extends Component {
    render() {
        console.log(pizzaPlaceInfo);
        let left = true
        const pizzaPlaceContent = pizzaPlaceInfo.map(place => {
            left = !left;
            return (
                <PizzaPlaceContent
                    key={place.name}
                    name={place.name}
                    text={place.text}
                    slideLeft={left}
                    />
            )
        });
        return(
            <div>
                <h1 className="placeHeader">Pizza Staðir</h1>
                <div>
                    {pizzaPlaceContent}
                </div>
            </div>
        )
        
    }
}
export default AboutPizzaPlaces;