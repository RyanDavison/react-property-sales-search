import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import PropTypes from 'prop-types';
import Qualification from './Qualification';
import RangeFacet from './RangeFacet';
import SelectFacet from './SelectFacet';
import BufferFacet from './BufferFacet/BufferFacet';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as salesLookupActions from '../actions/salesLookupActions';


const filterStyles = {
    display: 'inline-block',
    position:'absolute',
    marginTop: '1.35em',
    cursor:'pointer',
    fontWeight: 'bold',
    fontSize: '0.8em'
}

const arrowSpanStyles = {
    marginLeft:"1em",
    float:"right",
    fontSize:"0.8em",
    marginTop: "0.1em"
}

const buttonGroupStyle = {
    textAlign:'right'
}

const buttonStyle = {
    padding:"0.75em",
    borderRadius:"4px",
    cursor: "pointer",
    border:"none",
    margin:"0.25em"
}

const leftColumn = {
    verticalAlign: 'top',
    marginTop:'1.4em'
}

const rightColumn = {
    verticalAlign: 'top',
    marginTop:'0.5em'
}

const column = {
    display:'inline-block',
    width: '18em'
}

const modalStyle = {
    overlay:{
        top: 246,
        left: '0',
        right: '0'
    },
    content:{
        textAlign: 'center',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        padding:'none',
        borderTop: 'none'
    }
}

const majorAreaStyle = {
    component:{
        // 'float':'left',
        display:'inline-block',
        marginRight:'0.8em',
        'paddingTop':'1em',
        'paddingLeft':'1.1em',
        'width':'38%'
    },
    select: {}
}

const detailedUseStyle = {
    component:{
        'display':'inline-block',
        'padding':'1em 0 0 0',
        'width':'47.3%'
    }
}

const buildingTypeStyle = {
    select: {
        'height':'13.5em'
    },
    component:{
        'display':'inline-block'
    }
}

const neighborhoodStyle = {
    select: {
        'height':'13.5em'
    }
}

const economicArea = [
    {value: "Any", label: "Any"},
    {value: "Clifton / D 1/2 Rd Area", label: "Clifton / D 1/2 Rd Area"},
    {value: "Commercial", label: "Commercial"},
    {value: "Downtown", label: "Downtown"},
    {value: "East Of 28 Rd / NE Grand Jct", label: "East Of 28 Rd / NE Grand Jct"},
    {value: "Fruita / East 18 to 22 Rd", label: "Fruita / East 18 to 22 Rd"},
    {value: "Fruitvale Area", label: "Fruitvale Area"},
    {value: "GJ North Area", label: "GJ North Area"},
    {value: "N/A", label: "N/A"},
    {value: "Orchard Mesa", label: "Orchard Mesa"},
    {value: "Outlying", label: "Outlying"},
    {value: "Palisade/East Orchard Mesa", label: "Palisade/East Orchard Mesa"},
    {value: "Redlands", label: "Redlands"}
]

const majorArea = [
    {value: "Any", label: "Any"},
    {value: "GrandJunction", label: "Grand Junction"},
    {value: "Palisade", label: "Palisade"},
    {value: "FruitaLoma", label: "Fruita/Loma"},
    {value: "OutlyingAreas", label: "Outlying Areas"},
    {value: "Unknown", label: "Unknown"}
]

const detailedUse = [
    {value: "Any", label: "Any"},
    {value: "4000", label: "Agricultural"},
    {value: "2000", label: "Commercial"},
    {value: "1004", label: "Condo"},
    {value: "1001", label: "Duplex/Triplex"},
    {value: "1000", label: "Residential"},
    {value: "1003", label: "Townhouse"},
    {value: "1002", label: "Multi-Fam 4-8"},
    {value: "1005", label: "Multi 9 - up"},
    {value: "3000", label: "Industrial"},
    {value: "9000", label: "Exempt"},
    {value: "7000", label: "Oil & Gas"}
]

    class MoreFilters extends Component {
        constructor(props){
            super(props);
            this.state = {
                // modalIsOpen: false,
                count: "0",
                hoods: undefined,
                archType: undefined
            }
        }

    componentWillMount = () => {
        const fetchData = (method, stateKey, field) =>{
            axios.post(`http://localhost:3000/${method}`).then(res => {
            this.setState({
                [stateKey]: [{value: "Any", label: "Any"}].concat(res.data.map(opt => {
                    return {value: opt[field], label: opt[field]}
                }))
            })
            return
        })
    };
    fetchData('query/retrieve/neighborhood', 'hoods', 'NBHD_DESC');
    fetchData('query/retrieve/building', 'archType', 'type');
    }

    toggleModal = () => {
        this.props.actions.toggleModal(!this.props.modalIsOpen)
    }

    getCount = ()=>{
        //Placeholder data. This should go away when global state is implemented.
        const data = {
            ACCOUNTNO: 'R05552'
        }

        axios.post('http://localhost:3000/query/count', data)//data is a function that returns the state of the search facets
        .then(res =>{
            this.props.actions.updateRecordCountButton(res.data)
        })
    }

      render() {
        return (
          <div style={filterStyles} onClick={this.toggleModal}>
              {this.props.message}<span style={arrowSpanStyles}>&#9660;</span>
              <Modal
                  style={modalStyle}
                  isOpen={this.props.modalIsOpen}
                  onRequestClose={this.toggleModal}
                  shouldCloseOnOverlayClick={true}
                  contentLabel="MCModal"
              >


                  <div style={{...column, ...leftColumn}} className="leftColumn">
                      <Qualification />

                      <RangeFacet
                          title='Sale Amount'
                          minLabel='Min Sale Amount'
                          maxLabel='Max Sale Amount'
                          minValue='0'
                          maxValue='10000000'
                          step='10000'
                      />

                      <RangeFacet
                          title='Acreage'
                          minLabel='Min Acreage'
                          maxLabel='Max Acreage'
                          minValue='0'
                          maxValue='500'
                          step='0.1'
                      />

                      <RangeFacet
                          title='Total heated Square Feet'
                          minLabel='Min Square Feet'
                          maxLabel='Max Square Feet'
                          minValue='0'
                          maxValue='100000'
                          step='100'
                      />
                  </div>


                  <div style={column} className="centerColumn">
                      <SelectFacet
                          title='Major Area'
                          options={majorArea}
                          customStyles={majorAreaStyle}
                      />

                      <SelectFacet
                          title='Property Use'
                          options={detailedUse}
                          customStyles={detailedUseStyle}
                      />

                      <SelectFacet
                          title='Economic Area'
                          options={economicArea}
                      />

                      <SelectFacet
                          title='Neighborhood/Subdivision'
                          options={this.state.hoods}
                          customStyles={neighborhoodStyle}
                      />

                  </div>



                  <div style={{...column, ...rightColumn}} className="rightColumn">

                      <SelectFacet
                          title='Building Architectual Type'
                          options={this.state.archType}
                          customStyles={buildingTypeStyle}
                      />

                      <BufferFacet />


                      <div style={buttonGroupStyle} className='buttonGroup'>
                          <button style={buttonStyle} onClick={this.getCount}>View {this.props.recordCount} records</button>
                          <button style={buttonStyle} onClick={this.toggleModal}>Cancel</button>
                      </div>
                  </div>

              </Modal>
          </div>
        );
      }
    }

    MoreFilters.propTypes = {
        modalIsOpen: PropTypes.bool.isRequired,
        recordCount: PropTypes.string.isRequired,
        actions: PropTypes.object.isRequired
    }


    const mapStateToProps = (state, ownProps)=>{
        return {
            modalIsOpen: state.modalDisplay.modalIsOpen,
            recordCount: state.recordCount.count
        }
    }

    const mapDispatchToProps = (dispatch)=>{
        return {
            actions: bindActionCreators(salesLookupActions, dispatch)
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(MoreFilters);
