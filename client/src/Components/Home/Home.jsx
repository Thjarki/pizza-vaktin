import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Home.module.scss'
import {useSelector, useDispatch, connect} from 'react-redux'
import {addToppings, deleteToppings} from '../Actions'


class Home extends Component {
    state = {
        toppings:  {
            data: []
        }  
     }
    checkToppings = () => {
        for(var i = 1; i < this.state.toppings.data.length; i++){
            if (document.getElementById(i).checked){
               this.props.dispatch(addToppings(document.getElementById(i).value));
            }else{
                this.props.dispatch(deleteToppings(document.getElementById(i).value))
                //delete not checked topping
            }
        }
        
    }
    componentDidMount = () => {
        fetch('http://206.189.19.13:5000/api/Toppings')
        .then(res => res.json())
        .then((data) => {
            this.setState({ toppings : data })
        })
        .catch(console.log)
    }


    render() {
        
        const items = [];
        console.log(this.state.toppings.data.length);
        for(var i = 0; i < this.state.toppings.data.length; i++){   
            var temp = this.state.toppings.data[i].name;
            items.push(<div> <input type="checkbox" key={i} id={i} value={this.state.toppings.data[i].name} onChange={this.checkToppings}/> {temp} </div>);
        }
        return(
            <div className={styles.navContainer}>
            <h1> Hvað má bjóða þér á pizzuna þína? </h1>
            <div className={styles.navContainer}> 
                {items}
            </div>
            <div className={styles.navContainer}>
                <Link className={styles.navbuttons} to="/pizzaverd" >Finna Pizzu</Link>
            </div>
        </div>
        )
    }
    
}
export default connect()(Home);
