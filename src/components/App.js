import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Title from './Title';
import FacetsBar from './FacetsBar'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Title />
          <FacetsBar />
      </div>
    );
  }
}

export default App;
