import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Title />
      </div>
    );
  }
}

export default App;
