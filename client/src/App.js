import React from 'react';
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <Router>
      <main>
        <Header/>
      </main>
    </Router>
  );
}

export default App;
