import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import Qualification from './Qualification';
import RangeFacet from './RangeFacet';
import SelectFacet from './SelectFacet';


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
    position: 'absolute',
    bottom: '1em',
    right: '1em'
}

const buttonStyle = {
    padding:"0.75em",
    borderRadius:"4px",
    cursor: "pointer",
    border:"none",
    margin:"0.25em"
}

const leftColumn = {
    width: "18em",
    minHeight: "99%",
    float:"left",
    margin: "0 1em",
}

const rightColumn = {
    width: "18em",
    height: "100%",
    float:"right",
    margin: "0 1em",
}

const column = {
    width: "33%",
    height: "99%",
    float:"left",
    margin: "0 1em",
}

const modalStyle = {
    overlay:{
        top: 246,
        left: '15%',
        right: '15%'
    },
    content:{
        textAlign: 'center',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        borderTop: 'none'
    }
}

    class MoreFilters extends Component {
        constructor(props){
            super(props);
            this.state = {
                modalIsOpen: false,
                count: "0"
            }
        }

    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        });
    }

    getCount = ()=>{
        //Placeholder data. This should go away when global state is implemented.
        const data = {
            ACCOUNTNO: 'R05552'
        }

        axios.post('http://localhost:3000/query', data)//data is a function that returns the state of the search facets
        .then(res =>{
            this.setState({
                count: res.data
            });
            console.dir(res.data)
        })
    }

      render() {
        return (
          <div style={filterStyles} onClick={this.toggleModal}>
              {this.props.message}<span style={arrowSpanStyles}>&#9660;</span>
              <Modal
                  style={modalStyle}
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.toggleModal}
                  shouldCloseOnOverlayClick={true}
                  contentLabel="MCModal"
              >
                  <div style={column} className="leftColumn">
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
                          step='0.1'
                      />
                  </div>

                  <div style={column} className="centerColumn">
                      <SelectFacet
                          title='Major Area'
                          options={[]}
                      />
                  </div>

                  <div style={column} className="rightColumn">
                      <div style={buttonGroupStyle} className='buttonGroup'>
                          <button style={buttonStyle} onClick={this.getCount}>View {this.state.count} records</button>
                          <button style={buttonStyle} onClick={this.toggleModal}>Cancel</button>
                      </div>
                  </div>


              </Modal>
          </div>
        );
      }
    }


export default MoreFilters;
