import React, { Component } from 'react';

const bufferFacetStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em 0 2em 0.5em',
    marginLeft: '1.4em',
    marginBottom:'1em',
    'marginTop': '1em',
    top: '0',
    height: '5em',
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
              address: "",
              distance: 0
          }
      }

      componentDidMount(){
          Array.from(document.querySelectorAll('.facet')).forEach(el =>{
              el.addEventListener("click", ()=>{
                  setTimeout(()=>{
                      console.log(this.state.distance)
                  })
              })
          })
      }

      componentWillUnmount(){
          Array.from(document.querySelectorAll('.facet')).forEach(el =>{
              el.removeEventListener("click", ()=>{
                  console.log(this.state.distance)
              })
          })
      }

    render() {
      return (
          <div style={bufferFacetStyle}>
              <label style={bufferFacetLabelStyle}>Buffer</label>
              <div>
                  <span style={{"fontSize":"0.8em", "float":"left"}}>Enter Address or Parcel No.</span><input style={{"fontSize":"0.8em", "width":"14em", "float":"left"}} title='Enter Parcel Number or Address' type='text'/>
                  <button style={{"float":"left", "marginLeft":"1em", "marginTop":"-0.1em"}} title='Clear the list'>Clear</button>
                  <div id='bufferdiv'>
                      <label style={{"float":"left", "fontSize":"0.9em", "marginTop":"0.5em"}} for='buffer'>Buffer above entry</label>
                      <input style={{"width":"4em", "marginRight":"1em", "marginTop":"0.5em"}}
                          type='number' min='0' step='.25' name='buffer' className='facet'
                          onClick={i=>{this.setState({distance:i.target.value});return}}/>
                      <span style={{"marginTop":"0.5em"}}>miles</span>
                          </div>
                      </div>
                  </div>
      );
    }
  }

export default BufferFacet;
