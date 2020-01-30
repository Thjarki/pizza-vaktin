import React, { Component } from "react";
import Card from "./PizzaCard/Card";

// TODO: gera styling, bæta við að geta valið hvort þú villt heimsennt eða ekki, geta valið Akureyri eða Reykjavík
class RandomPizza extends Component {
  state = {
    pizzas: [],
    buttonClicked: false,
    rPizza: null,
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
      .then(data => {
        this.setState({ pizzas: data });
      })
      .catch(console.log);
  };
  getRandom = () => {
    var rand = Math.floor(Math.random() * this.state.pizzas.data.length);

    while (
      this.state.pizzas.data[rand].company.region !== this.state.location
    ) {
      rand = Math.floor(Math.random() * this.state.pizzas.data.length);
      if (this.state.location === "ekki valið") {
        break;
      }
    }
    var tempToppings = "";
    for (var i = 0; i < this.state.pizzas.data[rand].toppings.length; i++) {
      if (i === this.state.pizzas.data[rand].toppings.length - 1) {
        tempToppings += this.state.pizzas.data[rand].toppings[i].name;
      } else {
        tempToppings += this.state.pizzas.data[rand].toppings[i].name + ", ";
      }
    }

    var tempSizeM = this.state.pizzas.data[rand].prices.size_m;
    var tempSizeS = this.state.pizzas.data[rand].prices.size_s;
    var tempSizeL = this.state.pizzas.data[rand].prices.size_l;
    var tempSizeXl = this.state.pizzas.data[rand].prices.size_xl;

    if (tempSizeM === null) {
      tempSizeM = "Ekki í Boði";
    }
    if (tempSizeS === null) {
      tempSizeS = "Ekki í Boði";
    }
    if (tempSizeL === null) {
      tempSizeL = "Ekki í Boði";
    }
    if (tempSizeXl === null) {
      tempSizeXl = "Ekki í Boði";
    }

    this.setState({
      rPizza: this.state.pizzas.data[rand],
      rPizzaName: this.state.pizzas.data[rand].name,
      buttonClicked: true,
      rPizzaTopping: tempToppings,
      rPizzaMidPrice: tempSizeM,
      rPizzaSmallPrice: tempSizeS,
      rPizzaBigPrice: tempSizeL,
      rPizzaXlPrice: tempSizeXl,
      rPizzaCompany: this.state.pizzas.data[rand].company.name
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
    var items = [
      {
        name: rPizzaName,
        companyName: rPizzaCompany,
        topping: rPizzaTopping,
        smallPrice: rPizzaSmallPrice,
        midPrice: rPizzaMidPrice,
        bigPrice: rPizzaBigPrice,
        xlPrice: rPizzaXlPrice
      }
    ];
    var cards;
    if (buttonClicked) {
      cards = items.map(emp => {
        return (
          <Card
            key={emp.name}
            name={emp.name}
            companyName={emp.companyName}
            topping={emp.topping}
            smallPrice={emp.smallPrice}
            midPrice={emp.midPrice}
            bigPrice={emp.bigPrice}
            xlPrice={emp.xlPrice}
          />
        );
      });
    }
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
        <a href="#" onClick={this.getRandom}>
          Finna pizzu!
        </a>
        <div className="pizzaCardContainer">
          {buttonClicked ? <h2>{cards}</h2> : ""}
        </div>
      </div>
    );
  }
}
export default RandomPizza;
