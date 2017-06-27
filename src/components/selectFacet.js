import React, { Component } from 'react';
import PropTypes from 'prop-types';


const selectFacetStyle = {
    'display': 'block',
    'padding': '0.5em 0 2em 1.5em',
    'marginBottom':'1em',
    'top': '0',
    'height': '2.8em',
    'width': '16em'
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
    'width': '100%',
    'fontSize': '0.7em'
}

  class SelectFacet extends Component {
      constructor(props){
          super(props)
        //   console.log(this.props.title, this.props.options)
          this.state = {
              selected: ["Any"]
          }
      }

      handleChange = (select) =>{
          let result = [];
          [].forEach.call(select.target.options, (option)=>{
              if(option.selected){
                  result.push(option.value)
              }
          });
          this.setState({selected: result});
          return
      }


    render() {
      return (
          <div style={{...selectFacetStyle, ...this.props.customStyles.component}}>
              <label style={selectFacetLabelStyle}>{this.props.title}</label>
              <select style={{...inputStyle, ...this.props.customStyles.select}} value={this.state.selected} onChange={this.handleChange} multiple>
                  {this.props.options.map(item =>{
                          return <option key={item.value} value={item.value} >{item.label}</option>
                  })}
              </select>
          </div>
      );
    }
  }

  SelectFacet.propTypes = {
      title: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
  }

  SelectFacet.defaultProps = {
      customStyles: {component:{},select:{}}
  }

export default SelectFacet;























//
//
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Select from 'react-select';
// import 'react-select/dist/react-select.css';
//
// const selectFacetStyle = {
//     display: 'block',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     padding: '0.5em 0 2em 1.5em',
//     marginBottom:'1em',
//     top: '0',
//     height: '2.8em',
//     width: '16em',
//     boxShadow: '1px 1px 5px #888888'
// }
// const selectFacetLabelStyle = {
//     display: 'block',
//     fontSize: '0.8em',
//     fontWeight: 'bold',
//     color: '#C4C4C4',
//     margin: '0 0 0.4em 0',
//     textAlign:'left',
//     borderBottom: '1px solid #ccc'
// }
//
// const inputStyle = {
//     marginRight: "1em",
//     fontSize: "0.8em"
// }
//
// const major = [
//   { value: 'Any', label: 'Any' },
//   { value: 'GrandJunction', label: 'Grand Junction' },
//   { value: 'Palisade', label: 'Palisade' },
//   { value: 'FruitaLoma', label: 'Fruita/Loma' },
//   { value: 'OutlyingAreas', label: 'Outlying Areas' },
//   { value: 'Unknown', label: 'Unknown' }
// ];
//
//   class SelectFacet extends Component {
//       constructor(props){
//           super(props)
//           this.state = {
//               value: ["Any"],
//               options: major
//           }
//       }
//
//       handleChange = (val) =>{
//           console.log(val)
//           this.setState({
//               value: val
//           });
//       }
//
//     render() {
//       return (
//           <div style={selectFacetStyle}>
//               <label style={selectFacetLabelStyle}>{this.props.title}</label>
//               <Select
//                   style={inputStyle}
//                   name="major-area"
//                   value={this.state.value}
//                   options={this.state.options}
//                   onChange={this.handleChange}
//                   multi={true}
//                   simpleValue
//               />
//           </div>
//       );
//     }
//   }
//
//   SelectFacet.propTypes = {
//       title: PropTypes.string.isRequired,
//       options: PropTypes.array.isRequired,
//   }
//
//   // SelectFacet.defaultProps = {
//   //     minLabel: 'Min',
//   //     maxLabel: 'Max',
//   //     step: '1'
//   // }
//
//
// export default SelectFacet;
