import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
export default class Home extends Component {
    checkToppings = () => {
        var arr = []
        for(var i = 1; i < 4; i++){
            if (document.getElementById(i).checked){
                arr.push(document.getElementById(i).value);
            }
        }
        //þetta virkar ekki fyrir neðan.
        this.props.history.push("/pizzaverd", arr);

    }
    render() {
        return (
            <div className={styles.navContainer}>
                <h1> Hvað má bjóða þér á pizzuna þína? </h1>
                <div className={styles.navContainer}> 
                <input type="checkbox" id="1" name="alegg1" value="Ostur" />Ostur
                <input type="checkbox" id="2" name="alegg2" value="sosa" />Sósa
                <input type="checkbox" id="3" name="alegg3" value="Skinka" />Skinka
                </div>
                <div className={styles.navContainer}>
                    <Link className={styles.navbuttons}  onClick={this.checkToppings}>Finna Pizzu</Link>
                </div>
            </div>
        )
    }
}