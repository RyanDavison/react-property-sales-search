import React, { Component } from 'react';
import Dropdown from './Dropdown';

const qualificationContent = [
     {type: 'item', value: 'Qualified', label: 'Qualified' },
     {type: 'item', value: 'Unqualified', label: 'Unqualified' },
     {type: 'item', value: 'Qualified and Unqualified', label: 'Qualified and Unqualified' },
]

const qualificationStyle = {
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5em',
    top: '0',
    height: '2.8em',
    width: '12em',
    boxShadow: '1px 1px 5px #888888'
}
const qualificationLabelStyle = {
    display: 'block',
    fontSize: '0.8em',
    fontWeight: 'bold',
    color: '#C4C4C4',
    margin: '0 0 0.4em 0',
    textAlign:'left',
    borderBottom: '1px solid #ccc'
}

const customStyles = {
    dropNav: {
        "width":"15.5em",
        "marginLeft":"-0.7em",
        "marginTop":"0.9em"
    },
    ulContainer: {
        "width":"14.5em",
        "paddingLeft":"0 !important"
    }
}

  class Qualification extends Component {
    render() {
      return (
          <div style={qualificationStyle} className="qualification">
              <label style={qualificationLabelStyle}>Sales Qualification Type</label>
              <Dropdown
                  baseclass='qualification'
                  customStyles={customStyles}
                  option={qualificationContent}
                  placeholder='Qualified and Unqualified'
                  value={'Qualified and Unqualified'}
              />
          </div>
      );
    }
  }


export default Qualification;
