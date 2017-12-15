import React, { Component } from 'react';
import Products from './Products';
import Header from './Header';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
