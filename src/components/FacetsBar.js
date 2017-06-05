import React, { Component } from 'react';
import Datepickers from './Datepickers'


const facetsbar = {
    backgroundColor: "#eceeee",
    borderTop: "1px solid #d2d2d2",
    borderBottom: "1px solid #d2d2d2",
    boxShadow: "inset 0 6px 2px -2px #e5e5e5",
    boxSizing: "border-box",
    height: "3.2em",
    minWidth: "890"
}

const dividerStyle = {
    display: "inline-block",
    borderRight:"1px solid #d2d2d2",
    marginLeft: "0.5em",
    height: "1.5em"
}

const FacetsBar = () =>
  (
      <div style={facetsbar} className="facets-bar">
          <Datepickers time={4} units={'months'} />
          <span style={dividerStyle}></span>
      </div>
  );

  export default FacetsBar;
