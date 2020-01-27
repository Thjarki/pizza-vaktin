import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function RandomPizza(){
    var buttonClicked = false;
    var pizzas = [];

    var componentDidMount = () => {
        fetch('http://206.189.19.13:5000/api/Pizza', {mode: 'no-cors'})
        .then(res => res.json())
        .then((data) => {
            this.setState({pizzas : data})
        })
        .catch(console.log)
    }
    var getRandom = () => {
        componentDidMount();
        buttonClicked = true;
        return pizzas;
    }
    return(
        <div>
            <h1>Smelltu á takkann til að fá handahófskennda pizzu</h1>
            <Link onClick={getRandom}>Finna pizzu!</Link>
            {buttonClicked ? <h2>{getRandom} pungur</h2> : <h2>rassgat</h2>}
        </div>  
    )
}
export default RandomPizza

