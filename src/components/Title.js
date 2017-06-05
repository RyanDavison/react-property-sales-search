import React, { Component } from 'react';

const ResetPage = {
      display: "none"
}


  class Title extends Component {
    render() {
      return (
          <div className="title" style={{"textAlign": "center", "fontSize":"0.65em"}}>
              <h1>Mesa County Assessor - Property Sales Search</h1>
              <h2>Ken Brownlee, Assessor</h2>
              <div style={ResetPage} id="resetPage">Reset Search</div>
          </div>
      );
    }
  }


export default Title;
