import React, { Component } from 'react'
import { Link } from 'react-router-dom';


// TODO: gera styling, bæta við að sjá hvaða staður er með pizzuna, bæta við að geta valið hvort þú villt heimsennt eða ekki, geta valið Akureyri eða Reykjavík
class RandomPizza extends Component{

    state = {
        pizzas: [],
        buttonClicked: false,
        rPizza: null,
        rPizzaTopping : null
    }
    componentDidMount = () => {
        fetch('http://206.189.19.13:5000/api/Pizza')
        .then(res => res.json())
        .then((data) => {
            this.setState({ pizzas : data })
        })
        .catch(console.log)
    }
    getRandom = () => {
        console.log(this.state.pizzas.data[1].name)
        var rand = Math.floor(Math.random() * this.state.pizzas.data.length);
        var tempToppings = '';
        console.log(this.state.pizzas.data[rand].toppings)
        for(var i = 0; i < this.state.pizzas.data[rand].toppings.length; i++){
            if(i == this.state.pizzas.data[rand].toppings.length - 1){
                tempToppings += this.state.pizzas.data[rand].toppings[i].name;
            }
            else{
                tempToppings += this.state.pizzas.data[rand].toppings[i].name + ", ";
            }
        }
        this.setState({
            rPizza: this.state.pizzas.data[rand],
            buttonClicked: true,
            rPizzaTopping : tempToppings
         });
    }
    render (){
        const { rPizza, buttonClicked, rPizzaTopping } = this.state
        return(
        <div>
            <h1>Smelltu á takkann til að fá handahófskennda pizzu</h1>
            <Link onClick={this.getRandom}>Finna pizzu!</Link>
            {buttonClicked ? <h2>{rPizza.name}</h2> : ''}
            {buttonClicked ? <h2>{rPizzaTopping}</h2> : ''}
            
        </div>  
    )
    }
}
export default RandomPizza

