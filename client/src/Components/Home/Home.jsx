import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import {useSelector, useDispatch} from 'react-redux'
import {addToppings, deleteToppings} from '../Actions'

function Home(){
    const dispatch = useDispatch();
    var checkToppings = () => {
        for(var i = 1; i < 4; i++){
            if (document.getElementById(i).checked){
               dispatch(addToppings(document.getElementById(i).value));
            }else{
                dispatch(deleteToppings(document.getElementById(i).value))
                //delete not checked topping
            }
        }
        
    }
    return(
        <div className={styles.navContainer}>
        <h1> Hvað má bjóða þér á pizzuna þína? </h1>
        <div className={styles.navContainer}> 
        <input type="checkbox" id="1" name="alegg1" value="Ostur" onChange={checkToppings} />Ostur
        <input type="checkbox" id="2" name="alegg2" value="Sosa" onChange={checkToppings} />Sósa
        <input type="checkbox" id="3" name="alegg3" value="Skinka" onChange={checkToppings} />Skinka
        </div>
        <div className={styles.navContainer}>
            <Link className={styles.navbuttons} to="/pizzaverd" >Finna Pizzu</Link>
        </div>
    </div>
    )
}
export default Home;
