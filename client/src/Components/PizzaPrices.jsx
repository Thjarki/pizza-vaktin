import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./PizzaCard/Card";

function PizzaPrices() {
  const toppings = useSelector(state => state.toppings);
  const location = useSelector(state => state.location);
  const specificTopping = useSelector(state => state.specifictoppings);
  let [pizzas, setpizza] = useState({
    data: []
  });

  var link = "https://www.eybbus.com/api/Pizza?";
  for (var o = 0; o < toppings.length; o++) {
    if (o === toppings.length - 1) {
      link += "filter-topping=" + toppings[o];
    } else {
      link += "filter-topping=" + toppings[o] + "&";
    }
  }

  useEffect(() => {
    fetch(link)
      .then(res => res.json())
      .then(data => {
        setpizza(data);
      })
      .catch(console.log);
  }, []);

  const items = [];
  var pushItems = {};
  for (var i = 0; i < pizzas.data.length; i++) {
    if (
      pizzas.data[i].company.region === location[0] ||
      location.length === 0 || 
      pizzas.data[i].company.name === "Dominos"
    ) {
      var tempTopping = "";
      for (var k = 0; k < pizzas.data[i].toppings.length; k++) {
        if (k === pizzas.data[i].toppings.length - 1) {
          tempTopping += pizzas.data[i].toppings[k].name;
        } else {
          tempTopping += pizzas.data[i].toppings[k].name + ", ";
        }
      }
      var tempName = pizzas.data[i].name;
      var tempCompany = pizzas.data[i].company.name;
      var tempMidPrice = pizzas.data[i].prices.size_m;
      var tempLargePrice = pizzas.data[i].prices.size_l;
      var tempSmallPrice = pizzas.data[i].prices.size_s;
      var tempXLPrice = pizzas.data[i].prices.size_xl;

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
      if (!specificTopping) {
        items.push(pushItems);
      } else if (
        specificTopping &&
        pizzas.data[i].toppings.length === toppings.length
      ) {
        items.push(pushItems);
      }
    }
  }
  var isEmpty = false;
  if(items.length == 0)
  {
    isEmpty = true;
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
  if(isEmpty){
    return <div><h1> Engar pizzur fundust með þessum leitarskilyrðum. </h1></div>
  }else{  
    return <div className="pizzaCardContainer">{cards}</div>;
  }
}
export default PizzaPrices;
