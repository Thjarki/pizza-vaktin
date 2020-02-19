import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { connect } from "react-redux";
import Card from "../PizzaCard/Card";
import { useSelector } from "react-redux";
import {
  addLocation,
  deleteLocation,
  emptyToppingArray,
  setSpecificTopping
} from "../Actions";

import Checkbox from "../Checkbox/Checkbox";
import Category from "../Category/Category";

class Home extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.state = {
      toppings: {
        data: []
      },
      pizzas: {
        data: []
      },
      buttonClicked: false,
      isEmpty: false
    };
  }

  radioChange = event => {
    if (event.target.id === "N") {
      this.checkNorth();
    } else {
      this.checkSouth();
    }
  };

  checkNorth = () => {
    if (document.getElementById("N").checked) {
      document.getElementById("S").checked = false;
      this.props.dispatch(deleteLocation(document.getElementById("S").value));
      //setja inn í redux
      this.props.dispatch(addLocation(document.getElementById("N").value));
    } else {
      //eyða frá redux
      this.props.dispatch(deleteLocation(document.getElementById("N").value));
    }
  };
  checkSouth = () => {
    if (document.getElementById("S").checked) {
      document.getElementById("N").checked = false;
      this.props.dispatch(deleteLocation(document.getElementById("N").value));
      //setja inn í redux
      this.props.dispatch(addLocation(document.getElementById("S").value));
    } else {
      //eyða frá redux
      this.props.dispatch(deleteLocation(document.getElementById("S").value));
    }
  };

  exact = event => {
    this.props.dispatch(setSpecificTopping(event.target.checked));
  };

  getPizzas = () => {
    var link = "https://www.eybbus.com/api/Pizza?";
    for (var o = 0; o < this.props.chosenToppings.length; o++) {
      if (o === this.props.chosenToppings.length - 1) {
        link += "filter-topping=" + this.props.chosenToppings[o];
      } else {
        link += "filter-topping=" + this.props.chosenToppings[o] + "&";
      }
    }
    fetch(link)
      .then(res => res.json())
      .then(data => {
        this.setState({ pizzas: data });
        this.setState({ buttonClicked: true });
      })
      .catch(console.log);
  };

  fillCard = () => {
    console.log(this.state.pizzas.data);
    const items = [];
    var pushItems = {};
    for (var i = 0; i < this.state.pizzas.data.length; i++) {
      if (
        this.state.pizzas.data[i].company.region === this.props.location[0] ||
        this.props.location.length === 0 ||
        this.state.pizzas.data[i].company.name === "Dominos"
      ) {
        var tempTopping = "";
        for (var k = 0; k < this.state.pizzas.data[i].toppings.length; k++) {
          if (k === this.state.pizzas.data[i].toppings.length - 1) {
            tempTopping += this.state.pizzas.data[i].toppings[k].name;
          } else {
            tempTopping += this.state.pizzas.data[i].toppings[k].name + ", ";
          }
        }
        var tempName = this.state.pizzas.data[i].name;
        var tempCompany = this.state.pizzas.data[i].company.name;
        var tempMidPrice = this.state.pizzas.data[i].prices.size_m;
        var tempLargePrice = this.state.pizzas.data[i].prices.size_l;
        var tempSmallPrice = this.state.pizzas.data[i].prices.size_s;
        var tempXLPrice = this.state.pizzas.data[i].prices.size_xl;

        if (tempSmallPrice === null) {
          tempSmallPrice = "Ekki í boði";
        }
        if (tempMidPrice === null) {
          tempMidPrice = "Ekki í boði";
        }
        if (tempLargePrice === null) {
          tempLargePrice = "Ekki í boði";
        }
        if (tempXLPrice === null) {
          tempXLPrice = "Ekki í boði";
        }
        pushItems = {
          name: tempName,
          companyName: tempCompany,
          topping: tempTopping,
          smallPrice: tempSmallPrice,
          midPrice: tempMidPrice,
          bigPrice: tempLargePrice,
          xlPrice: tempXLPrice
        };
        if (!this.props.specificTopping) {
          items.push(pushItems);
        } else if (
          this.props.specificTopping &&
          this.state.pizzas.data[i].toppings.length ===
            this.state.toppings.length
        ) {
          items.push(pushItems);
        }
      }
    }
    console.log(items);
    if (items.length == 0) {
      this.state.isEmpty = true;
    } else {
      this.state.isEmpty = false;
    }
    let duration = 0.2;
    const cards = items.map(emp => {
      duration += 0.3;
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
          animateDuration={duration}
        />
      );
    });

    if (this.state.isEmpty) {
      setTimeout(this.scrollToMyRef, 250);
      return <h1>Engar pizzur fundust með þessum leitarskylirðum.</h1>;
    } else {
      setTimeout(this.scrollToMyRef, 250);
      return cards;
    }
  };
  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);
  componentDidMount = () => {
    this.props.dispatch(emptyToppingArray(" "));
    fetch("https://www.eybbus.com/api/Toppings")
      .then(res => res.json())
      .then(data => {
        this.setState({ toppings: data });
      })
      .catch(console.log);

    /*var link = "https://www.eybbus.com/api/Pizza?";
    for (var o = 0; o < this.props.chosenToppings.length; o++) {
      if (o === this.props.chosenToppings.length - 1) {
        link += "filter-topping=" + this.props.chosenToppings[o];
      } else {
        link += "filter-topping=" + this.props.chosenToppings[o] + "&";
      }
    }
    console.log(link)
    fetch(link)
      .then(res => res.json())
      .then(data => {
        this.setState({ pizzas: data });
      })
      .catch(console.log);*/
  };

  render() {
    console.log(this.state.buttonClicked);
    const { data } = this.state.toppings;
    const filters = [
      "sósur og krydd",
      "ostur",
      "kjöt",
      "grænt",
      "ýmislegt",
      null
    ];
    const gat = [];
    var toppingsarray, categoryname;
    for (let i = 0; i < filters.length; i++) {
      toppingsarray = data.filter(el => el.type === filters[i]);
      categoryname = filters[i];
      if (filters[i] === null) {
        categoryname = "Óflokkað";
      }

      gat.push(
        <Category key={i} onClick name={categoryname} list={toppingsarray} />
      );
    }

    return (
      <div className={styles.navContainer}>
        <h1>Pizza leit</h1>
        <div>
          <h1>Hvaðan viltu panta pizzu?</h1>
          <div onChange={e => this.radioChange(e)}>
            {/* Should be radio button */}
            <input type="radio" key="N" id="N" value="norðurland" /> Akureyri
            <input type="radio" key="S" id="S" value="höfuðborgarsvæðið" />{" "}
            Höfuðborgarsvæðið
          </div>
        </div>
        <div>
          <Checkbox value={"Nákvæm leit"} onChange={this.exact} />
        </div>
        <h1> Hvað má bjóða þér á pizzuna þína? </h1>
        <div className={styles.categoryContainer}>{gat}</div>

        <div className={styles.navContainer}>
          <Link className={styles.navbuttons} onClick={this.getPizzas}>
            Finna Pizzu
          </Link>
          <div ref={this.myRef}>
            {this.state.buttonClicked ? this.fillCard() : ""}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    chosenToppings: state.toppings,
    location: state.location,
    specificTopping: state.specificTopping
  };
}
export default connect(mapStateToProps)(Home);
