import React, { Component } from 'react';
import PropTypes from 'prop-types';

const selectFacetStyle = {
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
const selectFacetLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const inputStyle = {
    width: "100%"
}

  class SelectFacet extends Component {
      constructor(props){
          super(props)
          this.state = {
              selected: "Any"
          }
      }

      handleChange = (event) =>{
        //   let x = [].map()
          console.log(`selected ${event.target.selected}`)
          this.setState({
              selected: ({selected: event.target.value})
          });
      }

    render() {
      return (
          <div style={selectFacetStyle}>
              <label style={selectFacetLabelStyle}>{this.props.title}</label>
              <select style={inputStyle} value={this.state.selected} onChange={this.handleChange} multiple='multiple'>
                  <option value="Any" selected>Any</option>
                  <option value="GrandJunction">Grand Junction</option>
                  <option value="Palisade">Palisade</option>
                  <option value="FruitaLoma">Fruita/Loma</option>
                  <option value="OutlyingAreas">Outlying Areas</option>
                  <option value="Unknown">Unknown</option>
              </select>
          </div>
      );
    }
  }

  SelectFacet.propTypes = {
      title: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
  }

  // SelectFacet.defaultProps = {
  //     minLabel: 'Min',
  //     maxLabel: 'Max',
  //     step: '1'
  // }


export default SelectFacet;
