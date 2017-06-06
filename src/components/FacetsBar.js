import React from 'react';
import Datepickers from './Datepickers';
import Dropdown from './Dropdown';
import MoreFilters from './MoreFilters';


const facetsbar = {
    backgroundColor: "#eceeee",
    borderTop: "1px solid #d2d2d2",
    borderBottom: "1px solid #d2d2d2",
    boxShadow: "inset 0 6px 2px -2px #e5e5e5",
    boxSizing: "border-box",
    height: "3.2em",
    marginLeft: "-10em",
    minWidth: "890px"
}

const dividerStyle = {
    display: "inline-block",
    borderRight:"1px solid #d2d2d2",
    marginLeft: "0.5em",
    height: "1.5em"
}

// const dropdownContent = [
//   {
//    type: 'group', name: 'Improved Sales', items: [
//      { value: 'Agricultural', label: 'Agricultural' },
//      { value: 'Commercial/Industrial', label: 'Commercial/Industrial' },
//      { value: 'Condo', label: 'Condo' },
//      { value: 'Duplex/Triplex', label: 'Duplex/Triplex' },
//      { value: 'Exempt', label: 'Exempt' },
//      { value: 'Manufactured Home', label: 'Manufactured Home' },
//      { value: 'Multi Family 4 TO 8', label: 'Multi Family 4 TO 8' },
//      { value: 'Multi Family 9 AND UP', label: 'Multi Family 9 AND UP' },
//      { value: 'Single Family', label: 'Single Family' },
//      { value: 'Townhouse', label: 'Townhouse' }
//    ]
//   },
//   {
//    type: 'group', name: 'Vacant Sales', items: [
//      { value: 'Agricultural Vacant', label: 'Agricultural Vacant' },
//      { value: 'Commercial/Industrial Vacant', label: 'Commercial/Industrial Vacant' },
//      { value: 'Exempt Vacant', label: 'Exempt Vacant' },
//      { value: 'Residential Vacant', label: 'Residential Vacant' },
//    ]
//   }
// ]

const FacetsBar = () =>
  (
      <div style={facetsbar} className="facets-bar">
          <Datepickers time={4} units={'months'} />
          <span style={dividerStyle}></span>
          <Dropdown placeholder='Select Property Type' value={'Select Property Type'}/>
          <span style={dividerStyle}></span>
          <MoreFilters message={'More Filters'} />
      </div>
  );

  export default FacetsBar;
