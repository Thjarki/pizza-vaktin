import React, { Component } from "react";
import Card from "./PizzaCard/Card";

// TODO: gera styling, bæta við að geta valið hvort þú villt heimsennt eða ekki
class RandomPizza extends Component {
  state = {
    pizzas: [],
    buttonClicked: false,
    rPizzaName: null,
    rPizzaTopping: null,
    rPizzaMidPrice: null,
    rPizzaSmallPrice: null,
    rPizzaBigPrice: null,
    rPizzaXlPrice: null,
    rPizzaCompany: null,
    location: "ekki valið"
  };

  componentDidMount = () => {
    fetch("https://www.eybbus.com/api/Pizza")
      .then(res => res.json())
      .then(response => {
        this.setState({ pizzas: response.data });
      })
      .catch(console.log);
  };

  getRandom = () => {
    const { pizzas } = this.state;
    var rand = Math.floor(Math.random() * pizzas.length);

    while (pizzas[rand].company.region !== this.state.location) {
      rand = Math.floor(Math.random() * pizzas.length);
      if (this.state.location === "ekki valið") {
        break;
      }
    }

    let tempToppings = pizzas[rand].toppings.map(el => el.name);
    tempToppings = tempToppings.join(", ");

    this.setState({
      rPizzaName: pizzas[rand].name,
      buttonClicked: true,
      rPizzaTopping: tempToppings,
      rPizzaSmallPrice: pizzas[rand].prices.size_s || undefined,
      rPizzaMidPrice: pizzas[rand].prices.size_m || undefined,
      rPizzaBigPrice: pizzas[rand].prices.size_l || undefined,
      rPizzaXlPrice: pizzas[rand].prices.size_xl || undefined,
      rPizzaCompany: pizzas[rand].company.name
    });
  };

  checkNorth = () => {
    if (document.getElementById("N").checked) {
      document.getElementById("S").checked = false;
      this.setState({
        location: "norðurland"
      });
    } else {
      this.setState({
        location: "ekki valið"
      });
    }
  };

  checkSouth = () => {
    if (document.getElementById("S").checked) {
      document.getElementById("N").checked = false;
      this.setState({
        location: "höfuðborgarsvæðið"
      });
    } else {
      this.setState({
        location: "ekki valið"
      });
    }
  };

  render() {
    const {
      rPizzaName,
      buttonClicked,
      rPizzaTopping,
      rPizzaMidPrice,
      rPizzaSmallPrice,
      rPizzaBigPrice,
      rPizzaXlPrice,
      rPizzaCompany
    } = this.state;

    return (
      <div>
        <h1>Smelltu á takkann til að fá handahófskennda pizzu</h1>
        <div>
          <h1>Hvaðan viltu panta pizzu?</h1>
          <div>
            <input
              type="checkbox"
              key="N"
              id="N"
              value="norðuland"
              onChange={this.checkNorth}
            />{" "}
            Akureyri
            <input
              type="checkbox"
              key="S"
              id="S"
              value="höfuðborgarsvæðið"
              onChange={this.checkSouth}
            />{" "}
            Höfuðborgarsvæðið
          </div>
        </div>
        <button onClick={this.getRandom}>Finna Pizzu</button>
        <div className="pizzaCardContainer">
          {buttonClicked ? (
            <Card
              name={rPizzaName}
              companyName={rPizzaCompany}
              topping={rPizzaTopping}
              smallPrice={rPizzaSmallPrice}
              midPrice={rPizzaMidPrice}
              bigPrice={rPizzaBigPrice}
              xlPrice={rPizzaXlPrice}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default RandomPizza;
