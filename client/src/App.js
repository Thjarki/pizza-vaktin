import React from 'react';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home'
import './App.scss';
import PizzaPrices from './Components/PizzaPrices';
import AboutPizzaPlaces from './Components/AboutPizzaPlaces';
import RandomPizza from './Components/RandomPizza';
function App() {
  return (
    <Router>
      <main>
        <Header/>
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="pizzaPrices" exact path="/pizzaverd" component={PizzaPrices} />
        <Route name="pizzaStadir" exact path="/pizzaStadir" component={AboutPizzaPlaces} />
        <Route name="randomPizza" exact path="/randomPizza" component={RandomPizza} />
      </main>
    </Router>
  );
}

export default App;
