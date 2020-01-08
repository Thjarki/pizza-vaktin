import React from 'react';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Components/Home/Home'
import logo from './logo.svg';
import './App.scss';
import PizzaPrices from './Components/PizzaPrices';

function App() {
  return (
    <Router>
      <main>
        <Header/>
        <Route name="home" exact path="/" component={HomePage} />
        <Route name="pizzaPrices" exact path="/pizzaverd" component={PizzaPrices} />
      </main>
    </Router>
  );
}

export default App;
