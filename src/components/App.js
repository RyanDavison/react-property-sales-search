import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Title from './Title';
import FacetsBar from './FacetsBar';
import StartMessage from './StartMessage';
// import Modal from './MCModal';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Title />
          <FacetsBar />
          <StartMessage />
          {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
