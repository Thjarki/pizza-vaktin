import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch, connect} from 'react-redux'


function PizzaPrices () {

     const toppings = useSelector(state => state.toppings);
    
     let [pizzas, setpizza] = useState( {
         data : []
     } )
     var pizza = { 
         data : []
     }

     var link = 'http://206.189.19.13:5000/api/Pizza?';
     for(var i = 0; i < toppings.length; i++){
         if(i === toppings.length-1){
            link += "filter-topping=" + toppings[i];
         }else {
            link += "filter-topping=" + toppings[i] + "&";
         }
     }

    useEffect(() => {
        fetch(link)
        .then(res => res.json())
        .then((data) => {
            console.log(link)
            console.log(data)
            setpizza(data)
            console.log(pizza)
        })
        .catch(console.log)
    },[])
    const items = []
    for(var i = 0; i < pizzas.data.length; i++){
        var tempTopping = '';   
        for(var k = 0; k < pizzas.data[i].toppings.length; k++){
            if(k === pizzas.data[i].toppings.length - 1){
                tempTopping += pizzas.data[i].toppings[k].name
            }else {
                tempTopping += pizzas.data[i].toppings[k].name + ", "
            }
            
        }
        var tempName = pizzas.data[i].name;
        var tempMidPrice = pizzas.data[i].prices.size_m;
        var tempLargePrice = pizzas.data[i].prices.size_l;
        var tempSmallPrice = pizzas.data[i].prices.size_s;
        var tempXLPrice = pizzas.data[i].prices.size_xl;
        items.push( <h1> {tempName} </h1>);
    items.push( <p> Álegg : {tempTopping}</p>)
        if(tempSmallPrice != null){
            items.push(<p>verð á lítili pizzu : {tempSmallPrice}</p>)
        }
        if(tempMidPrice != null){
            items.push(<p>verð á miðlungs pizzu : {tempMidPrice}</p>)
        }
        if(tempLargePrice != null){
            items.push(<p>verð á stórri pizzu : {tempLargePrice}</p>)
        }
        if(tempXLPrice != null){
            items.push(<p>verð á extra stórri pizzu : {tempXLPrice}</p>)
        }
    }
        return(
            <div>
                {items}
            </div>  
        )
}
export default PizzaPrices

