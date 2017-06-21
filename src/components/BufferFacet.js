import React, { Component } from 'react';

const bufferFacetStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em 0 2em 1.5em',
    marginBottom:'1em',
    top: '0',
    height: '2.8em',
    width: '16em',
    boxShadow: '1px 1px 5px #888888'
}
const bufferFacetLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const inputStyle = {
    width: "8em"
}

  class BufferFacet extends Component {
      constructor(props){
          super(props)
          this.state = {

          }
      }

    render() {
      return (
          <div style={bufferFacetStyle}>
              <label style={bufferFacetLabelStyle}>Buffer</label>
              <div>
                  <span>Enter Address or Parcel No.</span><input title='Enter Parcel Number or Address' type='text' id='bufferString' />
                  <button id='clear' title='Clear the list'>Clear</button>
                  <div id='bufferdiv'>
                      <label for='buffer'>Buffer above entry</label>
                      <input type='number' min='0' step='.25' name='buffer' id='buffer' />
                      <span>miles</span>
                          </div>
                      </div>
                  </div>
      );
    }
  }

export default BufferFacet;
