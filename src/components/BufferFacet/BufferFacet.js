import React, { Component } from 'react';
import axios from 'axios';
import RangeFacetLabel from '../RangeFacetLabel';
import Autocomplete from '../Autocomplete';
import './style/bufferFacet.css';

const bufferFacetStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em 0 1em 0.5em',
    marginLeft: '1.75em',
    marginBottom:'1em',
    marginTop: '1em',
    height: '5em',
    width: '85%',
    boxShadow: '1px 1px 5px #888888'
}

  class BufferFacet extends Component {
      constructor(props){
          super(props)
      }

      distanceChanged = i =>{
          //if the address box is empty, show error popup to customer
          if(this.props.address === ""){
             alert(`Please enter a parcel number or address above before trying to buffer.`);
         }else{
             this.props.updateDistance(i.target.value)
         }
      }

      clearList = () =>{
          this.props.updateAddress("");
          this.props.updateDistance(0)
          this.setState({
              addressList:[],
              visible: {visibility: 'hidden'},
          });
          return
      }

    render() {
      return (
          <div style={bufferFacetStyle}>
              <RangeFacetLabel
                  value="Buffer"
              />
              <div>
                  <Autocomplete
                      title="Enter Address or Parcel No."
                      url='http://localhost:3000/query/retrieve/address'
                      completedItem={this.props.address}
                      updateStore={this.props.updateAddress}
                  />

                  <button onClick={this.clearList} style={{"float":"left", "marginLeft":"1em", "marginTop":"-0.1em"}} title='Clear the list'>Clear</button>

                  <div style={{"fontSize":"0.7em"}} id='bufferdiv'>
                      <label style={{"float":"left", "fontSize":"0.9em", "marginTop":"0.5em"}} for='buffer'>Buffer above entry</label>

                      <input style={{"fontSize":"0.9em", "width":"4em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}
                          value={this.props.distance} type='number' min='0' step='.25' name='buffer' className='facet milesBuffer'
                          onChange={this.distanceChanged}/>

                      <span style={{"marginTop":"0.5em", "float":"left", "marginLeft":"1em", "marginTop":"0.3em"}}>miles</span>
                  </div>
              </div>
                  </div>
      );
    }
  }

export default BufferFacet;
