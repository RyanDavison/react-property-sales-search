import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Title from './Title';
import Datepickers from './Datepickers'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Title />
          <Datepickers months={4} units={'months'} />
      </div>
    );
  }
}

export default App;
