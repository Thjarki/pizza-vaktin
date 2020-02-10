import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";
import { connect } from "react-redux";
import {
  addLocation,
  deleteLocation,
  emptyToppingArray,
  setSpecificTopping
} from "../Actions";

import Checkbox from "../Checkbox/Checkbox";
import Category from "../Category/Category";

class Home extends Component {
  state = {
    toppings: {
      data: []
    }
  };

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

  componentDidMount = () => {
    this.props.dispatch(emptyToppingArray(" "));
    fetch("https://www.eybbus.com/api/Toppings")
      .then(res => res.json())
      .then(data => {
        this.setState({ toppings: data });
      })
      .catch(console.log);
  };

  render() {
    const { data } = this.state.toppings;
    const filters = ["sósur og krydd", "ostur", "kjöt", "grænt", "ýmislegt", null];
    const gat = [];
    var i,
      toppingsarray,
      categoryname;
    for(i = 0; i < filters.length; i++){
      toppingsarray = data.filter(el => el.type === filters[i])
      categoryname = filters[i]
      if(filters[i] === null){
        categoryname = "Óflokkað"
      }
      console.log(i);
      
      gat.push(
        <Category
          key={i}
          onClick
          name={categoryname + ": "}
          list={toppingsarray}
        />
      );
    }

    return (
      <div className={styles.navContainer}>
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
          <Link className={styles.navbuttons} to="/pizzaverd">
            Finna Pizzu
          </Link>
        </div>
      </div>
    );
  }
}
export default connect()(Home);
