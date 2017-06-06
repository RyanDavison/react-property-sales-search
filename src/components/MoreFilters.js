import React from 'react';

const filterStyles = {
    display: 'inline-block',
    position:'absolute',
    marginTop: '1.35em',
    cursor:'pointer',
    paddingLeft: '1em',
    fontWeight: 'bold',
    fontSize: '0.8em'
}

const showFilters = ()=>{
    alert(`Filters overlay will go here`)
}

const MoreFilters = (props) =>
  (
      <div style={filterStyles} onClick={showFilters}>
          {props.message}<span style={{"marginLeft":"1em", "float":"right"}}>&#9660;</span>
      </div>
  );


export default MoreFilters;
