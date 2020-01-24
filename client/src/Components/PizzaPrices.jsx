import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'

function PizzaPrices(){
    const toppings = useSelector(state => state.toppings);
    return(
        <div>
            <h1>{toppings}</h1>
        </div>  
    )
}
export default PizzaPrices

