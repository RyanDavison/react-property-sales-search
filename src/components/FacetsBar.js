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

const dropdownContent = [
     {type: 'heading', value: 'Improved Sales', label: 'Improved Sales'},
     {type: 'item', value: 'Agricultural', label: 'Agricultural' },
     {type: 'item', value: 'Commercial/Industrial', label: 'Commercial/Industrial' },
     {type: 'item', value: 'Condo', label: 'Condo' },
     {type: 'item', value: 'Duplex/Triplex', label: 'Duplex/Triplex' },
     {type: 'item', value: 'Exempt', label: 'Exempt' },
     {type: 'item', value: 'Manufactured Home', label: 'Manufactured Home' },
     {type: 'item', value: 'Multi Family 4 TO 8', label: 'Multi Family 4 TO 8' },
     {type: 'item', value: 'Multi Family 9 AND UP', label: 'Multi Family 9 AND UP' },
     {type: 'item', value: 'Single Family', label: 'Single Family' },
     {type: 'item', value: 'Townhouse', label: 'Townhouse' },
     {type: 'heading', value: 'Vacant Sales', label: 'Vacant Sales'},
     {type: 'item', value: 'Agricultural Vacant', label: 'Agricultural Vacant' },
     {type: 'item', value: 'Commercial/Industrial Vacant', label: 'Commercial/Industrial Vacant' },
     {type: 'item', value: 'Exempt Vacant', label: 'Exempt Vacant' },
     {type: 'item', value: 'Residential Vacant', label: 'Residential Vacant' }
]

const FacetsBar = () =>
  (
      <div style={facetsbar} className="facets-bar">
          <Datepickers time={4} units={'months'} />
          <span style={dividerStyle}></span>
          <Dropdown option={dropdownContent} placeholder='Select Property Type' value={'Select Property Type'}/>
          <span style={dividerStyle}></span>
          <MoreFilters message={'More Filters'} />
      </div>
  );

  export default FacetsBar;
