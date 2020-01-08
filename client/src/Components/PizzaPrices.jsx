import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class PizzaPrices extends Component {
    getToppings = () => {
        var kukur = this.props.location.state;
        alert(kukur);
    }
    render() {
        return (
            <div>
                <Link  onClick={this.getToppings}>Finna Pizzu</Link>
                <h1>{this.getToppings}</h1>
            </div>
        )
    }
}

export default PizzaPrices
